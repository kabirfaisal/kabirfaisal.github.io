---
title: "Algorithms, explained | Md Faisal Kabir"
description: "Plain-language explainers for the algorithms behind Md Faisal Kabir's research: decision trees and boosting, MLPs, LSTMs, autoencoders, GANs, attention, and multimodal fusion."
permalink: /blog/algorithms.html
h1: "Algorithms, explained"
hero_bio: "The building blocks used across my work, each in a paragraph or two."
---
<section class="section" id="algorithms">
<div class="container">
<div class="section-head" data-reveal>
<h2>Algorithms, explained</h2>
<p class="muted">The building blocks used across my work, each in a paragraph or two &mdash; enough to follow the papers, not a textbook.</p>
</div>

<div class="grid cols-2">
{% assign items = site.algorithms | sort: "order" %}
{% for item in items %}
<article class="card card-hover" data-reveal>
<h3>{{ item.title }}</h3>
{{ item.content }}
</article>
{% endfor %}
</div>
</div>
</section>
