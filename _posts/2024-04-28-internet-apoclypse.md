---
layout: post
author: Shibaji Chakraborty
title:  Debunking Internet Apoclypse!
date:   2024-04-28 07:00:00
description: The question is not 'If' but 'When'!
tags: GMD magnetic-induction CME
categories: sample-posts
featured: true
thumbnail: assets/img/induction.png
editor: Subhasish Sarkar
---
<blockquote>
If I had written this article before 2020; the word ‘Apocalypse’ would have taken me to my childhood days. Just like any other Indian millennial kid, my toddler and teenage days were full of stories. My ‘audiobook’, my grandmother, used to read out stories from old Hindu scriptures. Many of them are depictions of apocalyptical days. I heard it in my native language, Bengali! However, the 2020–2021 ‘Black Swan’ days completely reshaped my associative memory about the word ‘Apocalypse’.
</blockquote>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SS-IA.png" title="Submarine Cables" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    ‘End of the Internet’ — is that correct? Credit: FOX Weather News
</div>

### Know the source of the term 'Internet Apoclypse'
Being a Space Weather researcher I came across this scientific paper ‘[Solar Superstorms: Planning for an Internet Apocalypse](https://ics.uci.edu/~sabdujyo/papers/sigcomm21-cme.pdf)' written by [Dr. Jyothi](https://ics.uci.edu/~sabdujyo/), a few years back while working with one of the renowned scientists in the field of space weather [Dr. Boteler](https://i.cbc.ca/1.3569967.1462549552!/fileImage/httpImage/david-boteler.jpg). Dr. Jyothi is an Assistant Professor at the Department of Computer Science at UCLA, Irvine. The scientific paper describes the impact of ‘Solar Superstorms’ on the global internet infrastructure.

> A Short Note on ‘Solar Superstorms’: There is a special category of solar storms, leading to large Coronal Mass Ejections (CMEs), which then induce larger than expected ‘magnetic storm’ at near-Earth or ‘Geospace’ environment. Scientist at NOAA and NASA call them ‘Solar Superstorms’. These Solar Superstorms are typically rare events which can create very high monetary damage and impact on the geospace and modern civilization by damaging space craft, impacting health of the astronauts, and even impacting long electrical wires on the surface of the Earth. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SolarStorm.png" title="Solar Storms" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    An artistic rendering of the solar surface during 'Solar Superstorm’. Image Credit: NASA.
</div>

> Are we going to suffocate to death by not being able to visit Instagram or not being able to post to X (formally Twitter)?
>
> Well it depends on your compulsion level about your media activity and phone addiction levels, hence can imagine the answer to this question is subjective.

Enough of these nerdy jokes, let’s come to the facts. The term ‘Internet Apocalypse’ was picked up by various media and projected as an ‘End-of-Day’ scenario and used as a click-bait to gain profit. I’ve listed a few articles below for your reference. This is not a personal rant against any media house but rather a holistic try to outlaying the information front of the general audience that I have the luxury of being a professional in the field. I guess, it is in our human psyche to discuss and fantasize about these extreme events. Besides, I have no personal grudge against any media house until they are reporting it correctly.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/induction.png" title="Power lines" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Image illustrating how space weather induce electric currents in long conductors such as power lines, pipelines, and submarine network causing power system outages or pipeline corrosion. Credit: NRCan.
</div>

> But the question remains: 
> * Is it going to happen? If ‘yes’, what do Jyothi et al. have to say about it? 
> * Are there any mitigation or disaster management plans?


Let's start from the top, Jyothi et al. mentioned the ‘Solar Superstorm’ as a Black-swan event for internet infrastructure. The long-distance internet cables, on land and under the water, that connect multiple large-data servers (eventually they are the internet, OR web2.0) are severely disrupted due to these ‘Solar Superstorms’ — induced ‘magnetic storms’. These magnetic storms created by big magnetic vortices near the Earth disrupted by the solar storm, as per the image below. The induced large magnetic vortices induce ground electric fields (referred to as geoelectric fields [GEF]), which creates ground induced currents (referred to as geomagnetically induced currents [GIC]) flowing through long-distance conductors, such as internet cables. Now, the study Jyothi et al mentioned, GICs can lead to long term irreparable damages to land-based or under water long-distance internet cables — Is that true? Short answer is ‘NO’. The explanation need a separate paragraph.

### How a Solar storm disrupts web2.0?
Michael Faraday proved moving bar-magnet induce an electric current to a nearby electrical wire. This principle is also used by turbine-dynamo in power plants to create electrical power. It’s a remarkably profound idea scientifically referred to as ‘electromagnetic induction’. These solar magnetic storms can change magnetic fields around the Earth that are hundreds of thousands of kilometers long, leading to a strong induction on long distance conducting wires around us, some of them are tens and hundreds of kilometers across. One example of this conducting wire is Internet cables.

> Don’t lose your sleep over an ‘Internet Apocalypse’

While there are a large number of media reports on this topic, there is no need to lose your sleep over it. With modern technological advancement more than 95% of internet traffic is routed via submarine internet cables (cables under the water). So, we have a huge reliance on them. The new age internet cables are fiber-optics by nature that are immune to GICs. The underwater internet cables are shielded by the water itself from the induction effects, commonly known as ‘electromagnetic shielding’ — probably a separate topic. In a single word, this shielding mechanism reduced the strength of the induction process and associated impact on the underwater cables.

> What Specialists are saying?

Having said all this, there are recorded history of submarine cable voltages getting impacted by magnetic storms. On February 10, 1958 solar storm created alternately loud squawks and faint whispers on the transatlantic communication between Clarenville, Newfoundland, to Oban, Scotland. The naturally induced voltage created constructive and destructive interference with the cable supply voltage.

As I mentioned new age cables are more robust and made of optical fibers. However, there is still a conductor through the cable to carry the power to the repeaters. During the March 1989 storm, a new transatlantic (deployed at that time, known as TAT-8 cable) did not experience any disruption. However large induced voltages were observed on the power supply cables, as recorded by the operators. Current cables will use a much more robust system, fewer repeaters, and require a much higher driving voltage as dynamic range to offset any unwanted voltage and current fluctuations. I’m currently working on a project that is testing the vulnerabilities of the current cable and assessing the risk of magnetic storms on them. I’ll update a separate blog as I progress through that.


> What do you have to worry about?

Despite what some headlines have been saying, there’s no internet apocalypse on the horizon. However, that does not mean that 95% of internet traffic carrying submarine cables is not prone to any natural disaster. There are studies have shown that Tsunamis and underwater landslides pose a much bigger threat to submarine cables. Even ship anchors are a much bigger concern for a few cables than Solar Superstorms — Not a Joke! While these natural calamities may pose a threat to global connectivity, rest assured it is not going to wipe out the global connection in a single shot.

However, if any natural calamity is causing some scenario like ‘Internet Apocalypse’ then I would rather worry more about my life over my tweeter feed — Again not a Joke! I’m clear about my priorities.

### List of a few articles on 'Internet Apoclypse'
<a href="https://economictimes.indiatimes.com/news/international/us/internet-apocalypse-what-is-a-solar-storm-and-how-can-it-impact-the-internet-on-earth/articleshow/101287452.cms?from=mdr" title=""><img src="https://img.etimg.com/thumb/msid-101287483,width-300,height-225,imgsize-67680,resizemode-75/internet-apocalypse-what-is-a-solar-storm-and-how-can-it-impact-the-internet-on-earth.jpg" width="100%" style="max-width: 850px;" alt=""></a><br>Provided by Economics Times<a href="" target="_blank"></a>

<a href="https://www.outlookindia.com/international/internet-apocalypse-solar-storm-2025-nasa-communication-news-302259" title=""><img src="https://media.assettype.com/outlookindia/import/public/uploads/articles/2017/12/15/solar_system_630_630.jpg?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" width="100%" style="max-width: 850px;" alt=""></a><br>Provided by Outlook India<a href="" target="_blank"></a>