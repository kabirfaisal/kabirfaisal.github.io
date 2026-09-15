---
order: 6
title: "Attention &amp; transformers"
---
<p>Attention lets a model, for each position in a sequence, take a weighted average of all other positions, with the weights computed from how relevant each one is. Stacking multi-head attention with feed-forward layers and positional encodings gives the transformer &mdash; parallel to train, good at long-range structure, and the standard encoder for the free-text part of a multimodal clinical model.</p>
<p class="ref-line"><strong>References:</strong> Bahdanau, Cho &amp; Bengio, &ldquo;Neural machine translation by jointly learning to align and translate,&rdquo; ICLR 2015 &mdash; <a href="https://arxiv.org/abs/1409.0473" target="_blank" rel="noopener">arXiv:1409.0473</a>; Vaswani et al., &ldquo;Attention is all you need,&rdquo; NeurIPS 2017 &mdash; <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">arXiv:1706.03762</a>.</p>
