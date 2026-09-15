---
order: 2
slug: rw-gain
tags: ["2018", "ICML", "Imputation"]
title: "GAIN &mdash; Missing Data Imputation using GANs"
authors: "Yoon, Jordon &amp; van der Schaar."
reference: "Yoon, J., Jordon, J., &amp; van der Schaar, M. (2018). GAIN: missing data imputation using generative adversarial nets. In <em>Proc. 35th International Conference on Machine Learning (ICML)</em>. arXiv:1806.02920."
link: "https://arxiv.org/abs/1806.02920"
link_text: "arXiv:1806.02920"
---
<p>GAIN casts imputation as a GAN. The generator fills the missing entries of a row; the discriminator then tries to say, cell by cell, which entries were real and which were generated. A <em>hint</em> mechanism reveals part of the mask to the discriminator, which (the authors show) is what pins the generator to the true data distribution rather than any plausible-looking fill.</p>
<p><strong>Why it is on my list:</strong> it is the generative counterpoint to the autoencoder imputers in my 2024 imputation study &mdash; useful as a comparison and as a design idea for handling categorical gaps.</p>
