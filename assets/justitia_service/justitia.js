async function run() {
    // load face detection and face expression recognition models
    // await changeFaceDetector(TINY_FACE_DETECTOR)
    const MODEL_URL = 'js/weights/';
    await Promise.all([
        faceapi.loadSsdMobilenetv1Model(MODEL_URL),
        faceapi.loadFaceLandmarkModel(MODEL_URL),
        faceapi.loadFaceRecognitionModel(MODEL_URL)
    ])

    const videoEl = document.querySelector("#videoElement");
    let embeddings = [];
    const handlePlay = async () => {
        console.log('Run justitia')
        let fullFaceDescription = await faceapi.detectAllFaces(videoEl).withFaceLandmarks().withFaceDescriptors();
        fullFaceDescription.forEach(fd => {
            embeddings.push(fd.descriptor)
        });

        if (embeddings.length >= 10) {
            videoEl.srcObject.getTracks().forEach(function (track) {
                track.stop();
            });
            const lshs = generateLSHS(embeddings);
            const dlsh_resp = denoisedLSH(lshs);
            const {mask, dlsh} = dlsh_resp;
            const data = {ok: true, lshs, den_lsh: dlsh, lsh_mask: mask, emb: embeddings[3]};
            console.log('Justitia complete', data)
            window.parent.postMessage(data);
        } else {
            await handlePlay();
        }
    };
    videoEl.addEventListener('loadedmetadata', handlePlay);
    // try to access users webcam and stream the images
    // to the video element

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                videoEl.srcObject = stream;
            })
            .catch(function (err) {
                console.log("Something went wrong!", err);
                window.parent.postMessage({ok: false, msg: `Something went wrong!${err.message}`}, origin)
            });
    }
}

// window.addEventListener('load', run)
window.addEventListener('message', async ({data}) => {

    if (data && data.run) {
        console.log('Received data', data)
        await run();
    }
});

function resize() {
    const videoEl = document.querySelector("#videoElement");
    // videoEl.style.height = `${document.body.offsetHeight}px`;
    videoEl.style.width = `${document.body.offsetWidth}px`;
}

window.addEventListener('resize', resize)
window.addEventListener('load', resize)
