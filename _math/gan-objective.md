---
order: 4
title: "The GAN objective"
---
<code class="formula">min_G  max_D   E<sub>x&sim;p_data</sub>[ log D(x) ]  +  E<sub>z&sim;p_z</sub>[ log(1 &minus; D(G(z))) ]</code>
<p>The discriminator <span class="mono">D</span> wants to output 1 on real data and 0 on generated data; the generator <span class="mono">G</span> wants to make <span class="mono">D(G(z))</span> close to 1. At the ideal solution the generator&rsquo;s distribution matches the data and <span class="mono">D</span> can only guess.</p>
<p class="ref-line"><strong>References:</strong> Goodfellow et al., &ldquo;Generative adversarial nets,&rdquo; NeurIPS 2014 &mdash; <a href="https://arxiv.org/abs/1406.2661" target="_blank" rel="noopener">arXiv:1406.2661</a>.</p>
