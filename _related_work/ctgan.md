---
order: 1
slug: rw-ctgan
tags: ["2019", "NeurIPS", "Tabular GAN"]
title: "CTGAN &mdash; Modeling Tabular Data using Conditional GAN"
authors: "Xu, Skoularidou, Cuesta-Infante &amp; Veeramachaneni."
reference: "Xu, L., Skoularidou, M., Cuesta-Infante, A., &amp; Veeramachaneni, K. (2019). Modeling tabular data using conditional GAN. In <em>Advances in Neural Information Processing Systems (NeurIPS)</em> 32. arXiv:1907.00503."
link: "https://arxiv.org/abs/1907.00503"
link_text: "arXiv:1907.00503"
---
<p>CTGAN targets the two things that make tabular data hard for GANs: continuous columns that are multi-modal (several peaks, not one bell curve) and categorical columns that are heavily imbalanced. It applies <em>mode-specific normalisation</em> &mdash; fitting a variational Gaussian mixture to each numeric column and encoding a value as (which mode, how far into it) &mdash; and a <em>conditional generator</em> trained with <em>training-by-sampling</em>, which forces the model to see rare categories often enough to learn them.</p>
<p><strong>Why it is on my list:</strong> it is the standard baseline for the WLSTM-GAN comparison, and the mode-normalisation trick is a direct alternative to my per-type discriminators.</p>
