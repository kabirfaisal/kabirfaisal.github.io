---
order: 3
title: "LSTM networks"
---
<p>A recurrent network reads a sequence one step at a time, carrying a hidden state forward. Plain RNNs forget quickly because gradients shrink over many steps. An <em>LSTM</em> adds a separate cell state and three gates (input, forget, output) that learn what to keep, overwrite, or expose. That makes it good at the timing and trends in vital-sign streams, which is why it appears in both my imputation and assistant-system work.</p>
<p class="ref-line"><strong>References:</strong> Hochreiter &amp; Schmidhuber, &ldquo;Long short-term memory,&rdquo; <em>Neural Computation</em> 9(8), 1997 &mdash; <a href="https://doi.org/10.1162/neco.1997.9.8.1735" target="_blank" rel="noopener">doi:10.1162/neco.1997.9.8.1735</a>.</p>
