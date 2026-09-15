---
order: 112
title: "Mean Average Precision (MAP)"
---
<code class="formula">MAP  =  (1/U) &Sigma;<sub>u=1</sub><sup>U</sup>  (1/|Relevant_u|) &Sigma;<sub>k</sub> Precision@k &times; rel_u(k)</code>
<p>Averages precision at every point a relevant item is retrieved for a user, then averages that across all <span class="mono">U</span> users &mdash; a single ranking-quality score for the whole system rather than one case at a time.</p>
<p class="ref-line"><strong>References:</strong> Jadon, A., &amp; Patil, A. (2024). A comprehensive survey of evaluation techniques for recommendation systems. <a href="https://arxiv.org/abs/2312.16015" target="_blank" rel="noopener">arXiv:2312.16015</a>.</p>
