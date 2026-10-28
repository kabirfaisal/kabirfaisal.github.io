---
title: "Mathematical foundations | Md Faisal Kabir"
description: "The mathematical foundations behind Md Faisal Kabir's research: softmax, cross-entropy, gradient descent, the GAN objective, KL/JS divergence, ROC/AUC, recall@k, plus the recommendation-system evaluation metrics (cosine similarity, RMSE/MAE, nDCG, MAP, MRR, and more) from Jadon & Patil's 2024 survey."
permalink: /blog/math.html
h1: "Mathematical foundations"
hero_bio: "The handful of equations that keep coming up, with a one-line reading of each."
---
		<section class="section" id="math">
			<div class="container">
				<div class="section-head" data-reveal>
					<h2>Mathematical foundations</h2>
					<p class="muted">The handful of equations that keep coming up, with a one-line reading of each. Notation: <span class="mono">&Sigma;</span> is a sum, <span class="mono">E[&middot;]</span> an expected value, <span class="mono">log</span> the natural logarithm.</p>
				</div>

				<div class="note-stack">
{% assign foundations = site.math | where_exp: "item", "item.order < 100" | sort: "order" %}
{% for item in foundations %}
					<article class="card" data-reveal>
						<h3>{{ item.title }}</h3>
{{ item.content }}
					</article>
{% endfor %}

					<div class="section-head" data-reveal style="margin-top:1rem;">
						<h3>From: evaluation metrics for recommendation systems</h3>
						<p class="muted">All formulas below are from the survey by Jadon &amp; Patil (2024), covered in <a href="/blog/related-work.html#p-eval-survey">Related work</a>, where I map each metric family onto my own TeleNotArzt evaluation.</p>
					</div>

{% assign eval_metrics = site.math | where_exp: "item", "item.order >= 100" | sort: "order" %}
{% for item in eval_metrics %}
					<article class="card" data-reveal>
						<h3>{{ item.title }}</h3>
{{ item.content }}
					</article>
{% endfor %}
				</div>
			</div>
		</section>
