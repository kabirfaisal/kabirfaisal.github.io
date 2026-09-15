---
order: 2
title: "Cross-entropy loss"
---
<code class="formula">L  =  &minus; &Sigma;_c  y_c &middot; log(&#375;_c)          (multi-class)
L  =  &minus;[ y&middot;log(p) + (1&minus;y)&middot;log(1&minus;p) ]   (binary)</code>
<p>Penalises a prediction by how much probability it put on the <em>wrong</em> answer. If the model is confident and right the loss is near 0; confident and wrong sends it toward infinity. This is the loss behind almost every classifier here.</p>
<p class="ref-line"><strong>References:</strong> Goodfellow et al., <em>Deep Learning</em> (2016), &sect;3.13 and &sect;5.5; Bishop, <em>PRML</em> (2006), &sect;4.3.4.</p>
