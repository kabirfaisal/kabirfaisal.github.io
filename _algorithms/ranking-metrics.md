---
order: 8
title: "Ranking metrics (recall@k, coverage)"
---
<p>When a model returns a ranked shortlist rather than one label, accuracy is the wrong lens. <em>recall@k</em> asks whether the correct item is in the top&nbsp;k. <em>coverage</em> asks whether, across a case, every action that should have been suggested was suggested somewhere in the lists. Together they measure both &ldquo;is the answer near the top&rdquo; and &ldquo;did we miss anything&rdquo;.</p>
<p class="ref-line"><strong>References:</strong> Manning, Raghavan &amp; Sch&uuml;tze, <em>Introduction to Information Retrieval</em> (Cambridge, 2008), ch.&nbsp;8 &mdash; <a href="https://nlp.stanford.edu/IR-book/" target="_blank" rel="noopener">nlp.stanford.edu/IR-book</a>. Coverage as used here is defined in my TeleNotArzt paper &mdash; <a href="https://doi.org/10.5220/0014481000004052" target="_blank" rel="noopener">doi:10.5220/0014481000004052</a>.</p>
