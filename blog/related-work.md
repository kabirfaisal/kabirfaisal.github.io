---
title: "Other papers I build on | Md Faisal Kabir"
description: "Notes on external work behind Md Faisal Kabir's research: CTGAN, GAIN, denoising autoencoders, transformers, and TabDDPM."
permalink: /blog/related-work.html
h1: "Other papers I build on"
hero_bio: "Short notes on the external work my methods extend or compare against."
---
<section class="section" id="other-papers">
<div class="container">
<div class="section-head" data-reveal>
<h2>Other papers I build on</h2>
<p class="muted">Short notes on the external work that my methods extend or compare against. These are my paraphrase for quick reference &mdash; follow the link for the authoritative version.</p>
</div>

<div class="note-stack">
{% assign items = site.related_work | sort: "order" %}
{% for item in items %}
<article class="card" id="{{ item.slug }}" data-reveal>
<div class="tags" style="margin-bottom:.9rem;">{% for t in item.tags %}<span>{{ t }}</span>{% endfor %}</div>
<h3>{{ item.title }}</h3>
<p class="muted" style="margin-bottom:1rem;">{{ item.authors }}</p>
{{ item.content }}
<p class="ref-line"><strong>Reference:</strong> {{ item.reference }}</p>
<p><a class="btn btn-outline" href="{{ item.link }}" target="_blank" rel="noopener">{{ item.link_text }} &rarr;</a></p>
</article>
{% endfor %}
</div>
</div>
</section>
