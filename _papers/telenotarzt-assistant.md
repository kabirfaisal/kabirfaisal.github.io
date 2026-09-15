---
order: 2
slug: p-telenotary
tags: ["2026", "ICAART", "Core PhD work"]
title: "A diagnosis &amp; treatment assistant for TeleNotArzt care"
authors: "Diagnosis and Treatment Support as an AI-Driven Assistant System for TeleNotary Emergency Care &mdash; Kabir, Piliuk &amp; Tomforde."
reference: "Kabir, M. F., Piliuk, K., &amp; Tomforde, S. (2026). Diagnosis and treatment support as AI-driven assistant system for TeleNotary emergency care. In <em>Proc. 18th International Conference on Agents and Artificial Intelligence &mdash; Vol.&nbsp;5: ICAART</em>, INSTICC, SciTePress, pp.&nbsp;4651&ndash;4660. DOI:&nbsp;10.5220/0014481000004052."
link: "https://doi.org/10.5220/0014481000004052"
link_text: "Read the paper"
---
<p><em>The core of my PhD: turning a half-complete, real-time patient record into a ranked list of what is likely wrong and what to do next.</em></p>
<p><strong>The context.</strong> In Germany&rsquo;s TeleNotArzt system a physician joins an ambulance call remotely and supports the paramedics on scene. They have to judge the situation, decide on treatment, and say which measurements to take &mdash; often within a minute or two, from information that is still arriving and never complete.</p>
<p><strong>What I did.</strong> I built a deep model that reads three kinds of data at once: <em>time-series</em> vital signs (heart rate, blood pressure over time), <em>tabular</em> clinical fields (age, known conditions, first observations), and <em>free-text</em> notes typed during the call. Each stream is encoded in its own way and then combined, so the model can use whatever is available at that moment. It returns three ranked shortlists &mdash; the most probable <em>diagnoses</em>, the <em>treatments</em> worth considering, and the <em>measurements</em> that would most reduce the remaining uncertainty &mdash; rather than a single hard answer.</p>
<p><strong>How it is judged.</strong> Ranked suggestions need ranked metrics. I used recall@k (is the correct item in the top&nbsp;k suggestions?), macro- and weighted AUC (does it separate classes well, including the rare ones?), and a coverage ratio that checks the recommendations are <em>complete</em> &mdash; that nothing important is missing &mdash; not merely accurate. For the wider set of ranking metrics this kind of system could use, see the <a href="/blog/related-work.html#p-eval-survey">evaluation-techniques survey</a> in Related work.</p>
<p><strong>Why it matters.</strong> A shortlist a clinician can scan and accept or reject fits the reality of emergency work better than a black-box verdict, and it degrades gracefully when data is missing. This is the system the other four papers feed into.</p>
<p><strong>In short:</strong> one multimodal model, three ranked answers &mdash; likely diagnoses, candidate treatments, and what to measure next.</p>
