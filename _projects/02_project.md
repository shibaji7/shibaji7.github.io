---
layout: page
title: GMD-Induced GEF
description: Characterization of induced underwater GEFs during various GMDs.
img: assets/img/GMD.png
importance: 2
category: Research
---

This research is focused on the characterization of induced underwater geoelectric fields (GEFs) and potential along submarine cables during various geomagnetic disturbances (GMDs). Geomagnetic disturbances, originating from diverse space weather phenomena, induce GEFs at different spatiotemporal scales within the Earth and water bodies. These GEFs, in turn, generate geomagnetically induced currents (GICs) that flow through electrical infrastructure, posing a significant risk to critical systems like submarine cables during intense space weather events. To achieve this, we utilize SCUBAS, an open-source computational model developed in Python, specifically designed to estimate induced underwater GEFs and voltage in the presence of geomagnetic perturbations recorded by ground-based magnetometers. [SCUBAS](https://scubas.readthedocs.io/en/latest/) leverages advancements in magnetotelluric (MT) studies and GIC understanding, marking a substantial advancement in analyzing and predicting the impact of space weather on submarine cable systems. This research addresses critical concerns in safeguarding submarine cable infrastructure against space weather-induced disruptions.

SCUBAS employs a generalized thin sheet analysis specifically designed for frequencies that penetrate through both the conductive and resistive layers. This analysis allows for a comprehensive understanding of the electromagnetic behavior of this layered structure (Ranganayaki and Madden, 1980).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Thinsheet-Model.jpg" title="thinsheet model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

More recently, Wang et al. (2023) demonstrated that the generalized thin sheet analysis can be effectively implemented by representing the double layer as a transmission line. This transmission line model incorporates the concept of series impedance, denoted as (Z), which takes into account the resistivity and thickness of the conductive layers. Additionally, it considers a parallel impedance, denoted as (Y), which accounts for the resistance through the resistive layers. The figure illustrates the schematic representation of the double-layer structure and its equivalent transmission line model incorporating (Z) and (Y) impedances.

