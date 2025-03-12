---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

[IEEE S&P] **COINDEF: A Comprehensive Code Injection Defense for the Electron Framework** (To appear)\
**Zheng Yang**, Simon Chung, Jizhou Chen, Runze Zhang, Brendan Saltaformaggio, Wenke Lee.\
In Proceedings of the 2025 IEEE Symposium on Security and Privacy.\
San Francisco, California, May 2025. (acceptance rate: 14.8%, 257/1740)

[IEEE S&P] **Identifying Incoherent Search Sessions: Search Click Fraud Remediation Under Real-World Constraints** (To appear)\
Runze Zhang, Ranjita Pai Sridhar, Mingxuan Yao, **Zheng Yang**, David Oygenblik, Haichuan Xu, Vacha Dave, Cormac Herley, Paul England, Brendan Saltaformaggio.\
In Proceedings of the 2025 IEEE Symposium on Security and Privacy.\
San Francisco, California, May 2025. (acceptance rate: 14.8%, 257/1740)

[USENIX Security] **WEBRR: A Forensic System for Replaying and Investigating Web-Based Attacks in The Modern Web**\
Joey Allen, **Zheng Yang**, Feng Xiao, Matthew Landen, Roberto Perdisci, Wenke Lee.\
In 33nd USENIX Security Symposium (USENIX Security 24)\
Philadelphia PA, USA, August 2024. (acceptance rate: 18.3%, 417/2276)

[USENIX Security] **TRIDENT: Towards Detecting and Mitigating Web-based Social Engineering Attacks**\
**Zheng Yang**, Joey Allen, Matthew Landen, Roberto Perdisci, Wenke Lee.\
In 32nd USENIX Security Symposium (USENIX Security 23)\
Anaheim CA, USA, August 2023. (acceptance rate: 29.2%, 422/1444)\
Resources: [PDF](https://www.usenix.org/system/files/usenixsecurity23-yang-zheng.pdf), [Slides](https://www.usenix.org/system/files/sec23_slides_yang-zheng.pdf)\
Media: [Georgia Tech News](https://www.cc.gatech.edu/news/new-tool-skewers-socially-engineered-attack-ads)

[ACM CCS] **Understanding and Mitigating Remote Code Execution Vulnerabilities in Cross-Platform Ecosystem** \
Feng Xiao, **Zheng Yang**, Joey Allen, Guangliang Yang, Grant Williams, Wenke Lee.\
In Proceedings of the 29th ACM Conference on Computer and Communications Security (CCS 2022)\
Los Angeles CA, November 2022. (acceptance rate: 22.4%, 218/971)\
Resources: [PDF](https://dl.acm.org/doi/pdf/10.1145/3548606.3559340)

[ACM CCS]  **Mnemosyne: An Effective and Efficient Postmortem Watering Hole Attack Investigation System**\
Joey Allen, **Zheng Yang**, Matthew Landen, Raghav Bhat, Harsh Grover, Andrew Chang, Yang Ji, Roberto Perdisci, Wenke Lee.\
In Proceedings of the 27th ACM Conference on Computer and Communications Security (CCS 2020)\
Orlando FL, November 2020. (acceptance rate: 16.9%, 121/715) \
Resources: [PDF](https://dl.acm.org/doi/pdf/10.1145/3372297.3423355)

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
