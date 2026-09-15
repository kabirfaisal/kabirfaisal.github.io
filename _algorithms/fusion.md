---
order: 7
title: "Multimodal fusion"
---
<p>When inputs come in different forms &mdash; signals, tables, text &mdash; you can combine them <em>early</em> (concatenate raw features), <em>late</em> (train one model per modality and merge predictions), or <em>jointly</em> (encode each modality, then fuse the encodings and train end to end). The TeleNotArzt model uses joint fusion so that a weak or missing modality is down-weighted rather than breaking the pipeline.</p>
<p class="ref-line"><strong>References:</strong> Baltru&scaron;aitis, Ahuja &amp; Morency, &ldquo;Multimodal machine learning: a survey and taxonomy,&rdquo; <em>IEEE TPAMI</em> 41(2), 2019 &mdash; <a href="https://arxiv.org/abs/1705.09406" target="_blank" rel="noopener">arXiv:1705.09406</a>.</p>
