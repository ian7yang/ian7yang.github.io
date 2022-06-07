// hyperplane is a 400x128 matrix
const hN=hyperplane.length

function hammingDistance(a,b){
    let d=0
    for(let i=0;i<a.length;i++)
        if(a[i]!=b[i])
            d++
    return d
}

function generateLSHS(embeddings){
    //embeddings: Nx128 array. 128-dimensional embeddings of N faces

    const N=embeddings.length;
    const M=embeddings[0].length;

    lshs=[]
    
    for(let i=0;i<N;i++){
        emb=embeddings[i]
        lshi=[]
        for(let j=0;j<hN;j++){
            let sum=0
            for(let k=0;k<M;k++){
                sum+=hyperplane[j][k]*emb[k]
            }

            lshi.push(sum<=0?0:1)
        }
        lshs.push(lshi)
    }

    return lshs
}

function denoisedLSH(lshs){
    // lshs: Nx400 binary matrix. 400-d lsh of N faces.
    // call in generate.

    const N=lshs.length
    const M=lshs[0].length
    let mask=[]
    let dlsh=[]
    const T=0.9*N// % threshold to include a bit into dlsh

    for(let j=0;j<M;j++){
        let sum=0
        for(let i=0;i<N;i++){
            sum+=lshs[i][j]
        }

        if(sum>=T || sum<=(N-T)){
            mask.push(1)
            dlsh.push(sum>=T?1:0)
        }else{
            mask.push(0)
            dlsh.push(0)
        }
    }
    
    return {mask, dlsh};
}

function denoisedLSHwitMask(lshs, mask){
    // lshs: Nx400 binary matrix. 400-d lsh of N faces.
    // call in verify.
    const N=lshs.length
    const M=lshs[0].length
    let dlsh=[]
    const T=0.9*N// % threshold to include a bit into dlsh

    for(let j=0;j<M;j++){
        if(mask[j]==0){
            dlsh.push(0)
        }else{
            let sum=0
            for(let i=0;i<N;i++){
                sum+=lshs[i][j]
            }

            if(sum>=T || sum<=(N-T)){
                dlsh.push(sum>=T?1:0)
            }else{
                dlsh.push(0)
            }
        }
    }
    
    return dlsh
}