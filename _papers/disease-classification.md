---
order: 1
slug: p-disease-classification
tags: ["2026", "Springer LNCS", "Synthetic data"]
title: "Using synthetic data to improve disease classification"
authors: "Enhancing Disease Classification in Emergency Medical Scenarios Through Synthetic Data: A Comparative Study &mdash; Kabir, Nayem &amp; Tomforde."
reference: "Kabir, M. F., Nayem, M. M. I., &amp; Tomforde, S. (2026). Enhancing disease classification in emergency medical scenarios through synthetic data: a comparative study. In <em>Agents and Artificial Intelligence</em>, Lecture Notes in Computer Science, Springer Nature Switzerland, pp.&nbsp;286&ndash;308. DOI:&nbsp;10.1007/978-3-032-25035-3_14."
link: "https://doi.org/10.1007/978-3-032-25035-3_14"
link_text: "Read the paper"
---
<p><em>Does adding computer-generated patient records actually make a diagnosis classifier better &mdash; and by how much?</em></p>
<p><strong>The problem.</strong> A model that predicts a patient&rsquo;s condition learns from labelled examples. In emergency medicine those are hard to come by: datasets are small, cannot be shared for privacy reasons, and are dominated by a few common presentations while the conditions that most need reliable detection are rare. Trained on data like that, a classifier becomes good at the common cases and unreliable exactly where it matters.</p>
<p><strong>What I did.</strong> I took a real emergency dataset, generated additional <em>synthetic</em> patient records with several different generative models, and mixed those into the training data in controlled proportions. Then I re-trained the same classifier under each setting and compared the results &mdash; paying particular attention to the rare, under-represented conditions rather than just the overall average.</p>
<p><strong>What came out.</strong> Synthetic data can give a real improvement, especially for the minority classes, but it is not a free win: the size of the gain depends heavily on <em>which</em> generator is used and how much synthetic data is blended in. Some combinations helped little or slightly hurt. The value is in choosing the method deliberately, not in adding synthetic rows for their own sake.</p>
<p><strong>Why it matters.</strong> It is a practical way to strengthen emergency-care models without waiting years for more real cases or exposing patient data &mdash; and it shows which generation approach is worth the effort.</p>
<p><strong>In short:</strong> synthetic patients help a diagnosis classifier &mdash; if you pick the right generator.</p>
