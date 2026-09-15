---
order: 4
slug: p-imputation
tags: ["2024", "ICAART", "Data quality"]
title: "Filling in missing values in emergency data"
authors: "A Deep Analysis for Medical Emergency Missing Value Imputation &mdash; Kabir &amp; Tomforde."
reference: "Kabir, M. F., &amp; Tomforde, S. (2024). A deep analysis for medical emergency missing value imputation. In <em>Proc. 16th International Conference on Agents and Artificial Intelligence &mdash; Vol.&nbsp;3: ICAART</em>, INSTICC, SciTePress, pp.&nbsp;1229&ndash;1236. DOI:&nbsp;10.5220/0012457300003636."
link: "https://doi.org/10.5220/0012457300003636"
link_text: "Read the paper"
---
<p><em>Before any model can learn from emergency data, someone has to decide what goes in the empty cells &mdash; and that choice changes the results.</em></p>
<p><strong>The problem.</strong> The TeleNotArzt dataset is missing far more values than a typical medical dataset, and the gaps are scattered essentially at random (a measurement simply was not taken in time) rather than following a pattern a model could exploit. On top of that the data is strongly imbalanced and full of outliers from genuine rare emergencies. A careless fill-in &mdash; replacing every gap with a column average, say &mdash; erases exactly the unusual signals that matter most.</p>
<p><strong>What I did.</strong> I compared a range of options for reconstructing the missing <em>numeric</em> values: standard statistical and machine-learning imputers, a denoising autoencoder, and a denoising LSTM autoencoder (which can use the order and timing of measurements, not just their values). All were tested on the real, non-public emergency dataset and judged on how closely the reconstructed values matched held-out ground truth.</p>
<p><strong>What came out.</strong> The denoising LSTM autoencoder was consistently the most accurate, because it learns the temporal shape of a patient&rsquo;s measurements rather than treating each value in isolation &mdash; and it held up better on the outlier cases.</p>
<p><strong>Why it matters.</strong> Imputation is the first step in the pipeline; every later model inherits its errors. Getting it right, especially for rare cases, is a prerequisite for a trustworthy assistant.</p>
<p><strong>In short:</strong> for time-stamped emergency measurements, a denoising LSTM autoencoder fills the gaps better than conventional imputation.</p>
