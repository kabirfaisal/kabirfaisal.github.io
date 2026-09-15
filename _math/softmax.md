---
order: 1
title: "Softmax"
---
<code class="formula">softmax(z)_i  =  exp(z_i) / &Sigma;_j exp(z_j)</code>
<p>Turns a vector of raw scores <span class="mono">z</span> into positive numbers that sum to 1 &mdash; a probability distribution over classes. The exponential exaggerates differences, so the largest score dominates.</p>
<p class="ref-line"><strong>References:</strong> Bishop, <em>Pattern Recognition and Machine Learning</em> (Springer, 2006), &sect;4.3.4; Goodfellow et al., <em>Deep Learning</em> (2016), &sect;6.2.2.</p>
