---
order: 6
title: "ROC curve and AUC"
---
<code class="formula">AUC  =  P( score(x&#8314;) &gt; score(x&#8315;) )</code>
<p>Sweep the decision threshold and plot true-positive rate against false-positive rate &mdash; that is the ROC curve. The area under it (AUC) has a clean reading: the probability that the model gives a randomly chosen positive case a higher score than a randomly chosen negative one. 0.5 is chance, 1.0 is perfect. <em>Macro</em> AUC averages this over classes equally; <em>weighted</em> AUC weights by class size.</p>
<p class="ref-line"><strong>References:</strong> Hanley &amp; McNeil, &ldquo;The meaning and use of the area under a ROC curve,&rdquo; <em>Radiology</em> 143(1), 1982; Fawcett, &ldquo;An introduction to ROC analysis,&rdquo; <em>Pattern Recognition Letters</em> 27(8), 2006.</p>
