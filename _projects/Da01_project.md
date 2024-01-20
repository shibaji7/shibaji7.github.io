---
layout: page
title: Magnetic Storms
description: Probabilistic storm detection
img: assets/img/MagneticStorm.png
importance: 1
category: Data Analytics
---

The study delves into the intricate realm of geomagnetic activity, a critical aspect of space weather forecasting. Traditionally, space weather predictions have heavily relied on summary indices like Kp to assess the likelihood of space weather impacts. While contemporary forecast models for \[K_p\] utilize various methods, ranging from empirically-derived functions to physics-based models and neural networks, they often lack the provision of uncertainty estimates associated with the forecast. This paper introduces a groundbreaking methodology designed to address this gap, presenting a two-layered architecture to predict Kp with a 3-hour lead time, complete with uncertainty bounds. Moreover, the study distinguishes between storm (\[K_p\geq 5^-]\) and non-storm cases, enhancing the precision of predictions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2LayerModel.png" title="2 Layer Model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proposed model (μ) architecture: Classifier is deterministic in nature, and regressors are probabilistic in nature. The threshold for the classifier is Kp = 5. Here, Wq & Ws are the variable training windows for two regressors.
</div>

A noteworthy innovation within the study is the incorporation of solar X-ray flux as a key parameter. This addition aims to overcome the limitations of solar wind-driven models in predicting transient-driven activity onset. The research explores whether integrating proxies for solar activity, such as solar X-ray flux, can extend the lead time for predicting geomagnetic storm activity. By adopting this approach, the study not only enhances the predictive accuracy of geomagnetic storm onset but also introduces a probabilistic element to the forecasts, a significant advancement in the field.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2LayerOutput.png" title="2 Layer Model Output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Three-hour forecast (using  model) showing (a) probability of geomagnetic storms, (b) Kp (22nd July–31st July, 2004) and (c) an illustration of the method to extract probability of storm occurrence for one prediction marked by vertical black line in panel (b). Black dashed lines in panels (b) and (c) represent the threshold Kp = 5−, red and blue thin lines in panel (c) are observed Kp, and predicted mean respectively. Panel (b) is in the same format with Figure 7. The shaded region in panel (c) provides probability of geomagnetic storm (Pr[e] = 0.81).
</div>


The comparative analysis of various models within the study demonstrates that leveraging operational information about solar irradiance significantly improves the efficacy of predictive models. This improvement is particularly valuable in capturing the early stages of geomagnetic storms, presenting a more comprehensive and nuanced understanding of space weather dynamics. Ultimately, this research contributes not only to the refinement of space weather forecasting techniques but also paves the way for more informed and probabilistic assessments of geomagnetic storm events, thereby advancing our capabilities to anticipate and mitigate potential impacts on technological infrastructures.