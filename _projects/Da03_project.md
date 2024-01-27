---
layout: page
title: SWF Detection
description: Short-wave Fadeout Monitoring Tool
img: assets/img/SWF_monitoring.png
importance: 3
tags: swf ml analytics
category: Data Analytics
---

The X-ray, Extreme Ultra Violate (EUV) radiation released during a solar X-ray flare induces electron density enhancement in the dayside D-region ionosphere. This increased electron density has the capacity to elevate absorption in the high frequency (HF:3-30 MHz) range, specifically between 1 and 30 MHz. The consequence is a reduction in signal strength, affecting shortwave radio transmissions, commonly known as shortwave fadeout, [SWF](../R01_project.md). 

This project introduces an operational facet of Short-Wave Fadeout ([SWF](../R01_project.md)) event monitoring, leveraging a subnetwork within the extensive North American SuperDARN HF radar network. The implemented monitoring tool serves as a valuable resource, offering a concise overview of the effects of solar flares on SuperDARN HF radar observations in the North American sector, with a particular focus on [SWF](../R01_project.md).

The monitoring tool functions as a comprehensive solution, generating summary reports of flare-driven [SWF](../R01_project.md) events. These reports encapsulate key insights into the impact of solar flares on HF propagation conditions, providing an in-depth understanding of the dynamics during the [SWF](../R01_project.md) events. Additionally, the tool incorporates modeled HF absorption maps, offering a visual representation of HF conditions precisely during the zenith of the flare.

By emphasizing [SWF](../R01_project.md) and its implications on HF radar observations, this operational tool becomes an indispensable asset for researchers and professionals in the space weather domain. It not only facilitates real-time monitoring but also aids in the post-event analysis, contributing significantly to our comprehension of space weather phenomena and their effects on HF communication. The combination of summary reports and modeled absorption maps elevates the tool's utility, enabling a nuanced exploration of SWF events and their consequences within the North American SuperDARN HF radar network.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SWF_monitoring.png" title="Monitoring" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A time series of X-ray irradiance from the GOES satellite. Flare start, peak, and end times are identified by F<sub>s</sub>, F<sub>p</sub>, and F<sub>e</sub> respectively. Flare class and solar active region (flare source) is also mentioned in top left corner.

    The bottom panel of the report features a time series of SuperDARN ground scatter, providing a real-time depiction of ground scatter observations during the solar flare from BKS/FHE/FHW radars. Onset, blackout start, end and recovery times are identified by O, B<sub>s</sub>, B<sub>e</sub>, and R respectively. For reference figure provide US/Central local time.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SWF_monitoring_model.png" title="Monitoring" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visual representation showcase the output from the DRAP (D-Region Absorption Prediction) model and Fiori et al.'s model, respectively, during the peak of a solar flare event on 21:55 UT, 31 December 2023.
</div>