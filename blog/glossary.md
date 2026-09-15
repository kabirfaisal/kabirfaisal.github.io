---
title: "Glossary | Md Faisal Kabir"
description: "A glossary of machine-learning and data-quality terms used across Md Faisal Kabir's research notes."
permalink: /blog/glossary.html
h1: "Glossary"
hero_bio: "Quick definitions for terms used across the papers and notes."
---
<section class="section" id="glossary">
<div class="container">
<div class="section-head" data-reveal>
<h2>Glossary</h2>
<p class="muted">Quick definitions for terms used above and in the papers.</p>
</div>
<div class="card" data-reveal>
<dl class="glossary">
<dt>MCAR / MAR / MNAR</dt>
<dd>Missing Completely At Random (the gap is unrelated to anything), Missing At Random (related only to observed values), Missing Not At Random (related to the missing value itself). The emergency dataset is largely MCAR, which makes imputation harder to exploit but fairer to evaluate.</dd>
<dt>Class imbalance</dt>
<dd>Some labels appear far more often than others. A model can score high overall while being useless on the rare classes &mdash; hence macro-averaged metrics.</dd>
<dt>Fidelity (synthetic data)</dt>
<dd>How well synthetic data reproduces the real data&rsquo;s distributions and the relationships between columns.</dd>
<dt>Membership-inference / privacy risk</dt>
<dd>Whether an attacker can tell that a specific real record was in the training set &mdash; the main privacy test for a generative model.</dd>
<dt>Embedding</dt>
<dd>A learned vector representation of something discrete (a word, a category) so that similar items sit near each other.</dd>
<dt>Latent space</dt>
<dd>The compressed internal representation a model works in &mdash; e.g. an autoencoder&rsquo;s bottleneck, or a GAN&rsquo;s noise input.</dd>
<dt>Epoch / batch</dt>
<dd>One epoch is a full pass over the training data; a batch is the small chunk processed before each weight update.</dd>
<dt>Overfitting / regularisation</dt>
<dd>Overfitting is learning the training set&rsquo;s noise instead of its signal; regularisation (dropout, weight decay, early stopping) is any technique that discourages it.</dd>
<dt>Mode collapse</dt>
<dd>A GAN failure where the generator produces only a narrow slice of the real variety.</dd>
<dt>Coverage ratio</dt>
<dd>In this work, the fraction of the actions that should have been recommended for a case that actually appear somewhere in the model&rsquo;s ranked lists.</dd>
</dl>
<p class="ref-line"><strong>References:</strong>
missing-data taxonomy &mdash; Rubin, &ldquo;Inference and missing data,&rdquo; <em>Biometrika</em> 63(3), 1976;
membership inference &mdash; Shokri et al., IEEE S&amp;P 2017, <a href="https://arxiv.org/abs/1610.05820" target="_blank" rel="noopener">arXiv:1610.05820</a>;
mode collapse &mdash; Salimans et al., NeurIPS 2016, <a href="https://arxiv.org/abs/1606.03498" target="_blank" rel="noopener">arXiv:1606.03498</a>;
embedding / latent space / epoch / regularisation &mdash; Goodfellow, Bengio &amp; Courville, <em>Deep Learning</em> (2016);
coverage ratio &mdash; my TeleNotArzt paper, <a href="https://doi.org/10.5220/0014481000004052" target="_blank" rel="noopener">doi:10.5220/0014481000004052</a>.
</p>
</div>
</div>
</section>
