---
order: 7
title: "recall@k and precision@k"
---
<code class="formula">recall@k     =  | relevant &cap; top-k |  /  | relevant |
precision@k  =  | relevant &cap; top-k |  /  k</code>
<p>For a ranked shortlist of length <span class="mono">k</span>: recall@k is the share of the things that <em>should</em> have been found that appear in the top&nbsp;k; precision@k is the share of the top&nbsp;k that are actually relevant. Raising <span class="mono">k</span> trades precision for recall.</p>
<p class="ref-line"><strong>References:</strong> Manning, Raghavan &amp; Sch&uuml;tze, <em>Introduction to Information Retrieval</em> (Cambridge, 2008), ch.&nbsp;8 &mdash; <a href="https://nlp.stanford.edu/IR-book/" target="_blank" rel="noopener">nlp.stanford.edu/IR-book</a>.</p>
