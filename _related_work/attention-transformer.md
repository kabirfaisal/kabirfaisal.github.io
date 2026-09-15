---
order: 4
slug: rw-attention
tags: ["2017", "NeurIPS", "Transformers"]
title: "Attention Is All You Need"
authors: "Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser &amp; Polosukhin."
reference: "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, &#321;., &amp; Polosukhin, I. (2017). Attention is all you need. In <em>Advances in Neural Information Processing Systems (NeurIPS)</em> 30. arXiv:1706.03762."
link: "https://arxiv.org/abs/1706.03762"
link_text: "arXiv:1706.03762"
---
<p>The paper that introduced the Transformer. It drops recurrence and convolution entirely and builds sequence models from <em>self-attention</em> alone: every position looks at every other position and takes a weighted average, with the weights learned from the content. Add multi-head attention, positional encodings (since attention has no built-in order), and feed-forward blocks, and you get a model that trains in parallel and captures long-range dependencies cheaply.</p>
<p><strong>Why it is on my list:</strong> the free-text branch of the TeleNotArzt model uses a transformer-style text encoder; understanding attention is needed to reason about how the text and signal streams are fused.</p>
