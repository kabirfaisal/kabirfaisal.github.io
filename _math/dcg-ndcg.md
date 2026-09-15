---
order: 111
title: "DCG &amp; nDCG@k"
---
<code class="formula">DCG_p   =  &Sigma;<sub>i=1</sub><sup>p</sup>  (2<sup>rel_i</sup> &minus; 1) / log&#8322;(i + 1)
nDCG_p  =  DCG_p / iDCG_p</code>
<p>DCG rewards relevant items more the higher they rank, using <em>graded</em> relevance (<span class="mono">rel_i</span>) rather than a binary relevant/not-relevant call. nDCG normalises by the best possible ordering (iDCG) so scores are comparable across lists of different lengths.</p>
<p class="ref-line"><strong>References:</strong> Jadon, A., &amp; Patil, A. (2024). A comprehensive survey of evaluation techniques for recommendation systems. <a href="https://arxiv.org/abs/2312.16015" target="_blank" rel="noopener">arXiv:2312.16015</a>.</p>
