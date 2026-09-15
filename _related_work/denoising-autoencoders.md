---
order: 3
slug: rw-denoising-ae
tags: ["2008", "ICML", "Representation learning"]
title: "Denoising Autoencoders"
authors: "Vincent, Larochelle, Bengio &amp; Manzagol &mdash; &ldquo;Extracting and Composing Robust Features with Denoising Autoencoders&rdquo;."
reference: "Vincent, P., Larochelle, H., Bengio, Y., &amp; Manzagol, P.-A. (2008). Extracting and composing robust features with denoising autoencoders. In <em>Proc. 25th International Conference on Machine Learning (ICML)</em>, pp.&nbsp;1096&ndash;1103."
link: "https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf"
link_text: "Read the paper"
---
<p>An ordinary autoencoder learns to copy its input through a bottleneck. A <em>denoising</em> autoencoder is trained to reconstruct the <em>clean</em> input from a deliberately corrupted copy (values zeroed, noise added). To do that it has to learn the structure of the data, not just an identity map &mdash; which makes the learned features more robust and, conveniently, makes the model a natural imputer: treat a missing value as corruption and let the network reconstruct it.</p>
<p><strong>Why it is on my list:</strong> it is the direct theoretical basis for the denoising-autoencoder and denoising-LSTM-autoencoder methods in my imputation work.</p>
