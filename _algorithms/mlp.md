---
order: 2
title: "Neural networks (MLP) &amp; backpropagation"
---
<p>A multilayer perceptron stacks layers of the form <span class="mono">output = activation(W&middot;input + b)</span>. The non-linear activation (ReLU, etc.) is what lets stacked layers represent complex functions. Training means measuring a loss, then using <em>backpropagation</em> &mdash; the chain rule applied layer by layer &mdash; to get the gradient of that loss with respect to every weight, and nudging the weights against it.</p>
<p class="ref-line"><strong>References:</strong> Rumelhart, Hinton &amp; Williams, &ldquo;Learning representations by back-propagating errors,&rdquo; <em>Nature</em> 323, 1986; Goodfellow, Bengio &amp; Courville, <em>Deep Learning</em> (MIT Press, 2016), ch.&nbsp;6 &mdash; <a href="https://www.deeplearningbook.org" target="_blank" rel="noopener">deeplearningbook.org</a>.</p>
