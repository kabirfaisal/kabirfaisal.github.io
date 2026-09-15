---
order: 107
title: "RMSE, MAE &amp; MAPE"
---
<code class="formula">RMSE  =  &radic;( (1/N) &Sigma; (y_i &minus; &#375;_i)&sup2; )
MAE   =  (1/n) &Sigma; | y_i &minus; &#375;_i |
MAPE  =  (100%/n) &Sigma; | y_i &minus; &#375;_i | / y_i</code>
<p>Three ways to score rating-prediction error. RMSE squares errors first, so large misses cost more; MAE weighs every error equally; MAPE expresses the error as a percentage of the true value, which makes it comparable across differently-scaled datasets.</p>
<p class="ref-line"><strong>References:</strong> Jadon, A., &amp; Patil, A. (2024). A comprehensive survey of evaluation techniques for recommendation systems. <a href="https://arxiv.org/abs/2312.16015" target="_blank" rel="noopener">arXiv:2312.16015</a>.</p>
