---
order: 3
slug: p-wlstm-gan
tags: ["2025", "ICAART", "Generative models"]
title: "WLSTM-GAN: generating realistic medical tables"
authors: "Synthetic Data Generation for Emergency Medical Systems: A Systematic Comparison of Tabular GAN Extensions &mdash; Kabir, Nayem &amp; Tomforde."
reference: "Kabir, M. F., Nayem, M. M. I., &amp; Tomforde, S. (2025). Synthetic data generation for emergency medical systems: a systematic comparison of tabular GAN extensions. In <em>Proc. 17th International Conference on Agents and Artificial Intelligence &mdash; Vol.&nbsp;3: ICAART</em>, INSTICC, SciTePress, pp.&nbsp;1199&ndash;1206. DOI:&nbsp;10.5220/0013307200003890."
link: "https://doi.org/10.5220/0013307200003890"
link_text: "Read the paper"
---
<p><em>If real patient tables cannot be shared, can we build a stand-in that behaves like the real thing without exposing anyone&rsquo;s record?</em></p>
<p><strong>The problem.</strong> Every project above needs data, and real emergency tables are both scarce and legally hard to move between institutions. A generative model can produce artificial rows &mdash; but medical tables are awkward: they mix <em>continuous</em> values (blood pressure, age) with <em>categorical</em> ones (symptom present or absent, sex, transport type), and many table generators handle that mixture badly, blurring categories or dropping rare values.</p>
<p><strong>What I did.</strong> I designed <strong>WLSTM-GAN</strong>, a GAN with a split architecture: one generator containing two specialised LSTM sub-networks, paired with two separate discriminators &mdash; one that judges the continuous columns and one that judges the categorical columns. Each data type is therefore learned and critiqued on its own terms. I then ran a systematic comparison against other tabular-GAN variants on three medical datasets, scoring each on <em>fidelity</em> (does the synthetic data reproduce the real statistics and relationships?) and on <em>privacy</em> (can a real record be recovered from the synthetic set?), both with and without an explicit privacy constraint.</p>
<p><strong>What came out.</strong> WLSTM-GAN produced data that was closer to the real distribution <em>and</em> harder to trace back to individuals than the baseline generators &mdash; the split design pays off precisely because it stops treating a medical table as one uniform block of numbers.</p>
<p><strong>Why it matters.</strong> It is the synthetic-data engine the classification and assistant-system work rely on, and a route to sharing emergency-medicine data for research without sharing patients.</p>
<p><strong>In short:</strong> give the continuous and categorical columns their own LSTM generator and discriminator, and the synthetic tables come out both more realistic and more private.</p>
