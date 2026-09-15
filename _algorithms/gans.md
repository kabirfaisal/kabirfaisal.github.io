---
order: 5
title: "Generative adversarial networks (GANs)"
---
<p>Two networks play a game. The <em>generator</em> turns random noise into fake samples; the <em>discriminator</em> tries to tell fake from real. Training the two together pushes the generator toward samples the discriminator cannot distinguish from the real distribution. GANs are powerful but delicate &mdash; unstable training and <em>mode collapse</em> (the generator producing only a few kinds of sample) are the usual failure modes, and much of tabular-GAN research is about avoiding them.</p>
<p class="ref-line"><strong>References:</strong> Goodfellow et al., &ldquo;Generative adversarial nets,&rdquo; NeurIPS 2014 &mdash; <a href="https://arxiv.org/abs/1406.2661" target="_blank" rel="noopener">arXiv:1406.2661</a>; Salimans et al., &ldquo;Improved techniques for training GANs,&rdquo; NeurIPS 2016 &mdash; <a href="https://arxiv.org/abs/1606.03498" target="_blank" rel="noopener">arXiv:1606.03498</a>.</p>
