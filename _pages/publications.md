---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

[CCS] Feng Xiao, **Zheng Yang**, Joey Allen, Guangliang Yang, Grant Williams, Wenke Lee. "Understanding and Mitigating Remote Code Execution Vulnerabilities in Cross-Platform Ecosystem" ACM Conference on Computer and Communications Security, ACM CCS 2022 (To Apprear)

[CCS] Joey Allen, **Zheng Yang**, Matthew Landen, Raghav Bhat, Harsh Grover, Andrew Chang, Yang Ji, Roberto Perdisci, Wenke Lee. "Mnemosyne: An Effective and Efficient Postmortem Watering Hole Attack Investigation System" ACM Conference on Computer and Communications Security, ACM CCS 2020 (acceptance rate: 16.9%, 127 out of 715)

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
