---
order: 1
title: "Decision trees &amp; gradient boosting"
---
<p>A decision tree splits the data with a sequence of yes/no questions (&ldquo;heart rate &gt; 120?&rdquo;) until each leaf holds one prediction. Single trees are easy to read but unstable. <em>Gradient boosting</em> (XGBoost, LightGBM) builds many small trees in sequence, where each new tree is fit to the errors the current ensemble still makes. The result is one of the strongest models for tabular data and a common baseline in my classification experiments.</p>
<p class="ref-line"><strong>References:</strong> Breiman et al., <em>Classification and Regression Trees</em> (Wadsworth, 1984); Friedman, &ldquo;Greedy function approximation: a gradient boosting machine,&rdquo; <em>Annals of Statistics</em> 29(5), 2001; Chen &amp; Guestrin, &ldquo;XGBoost,&rdquo; KDD 2016 &mdash; <a href="https://arxiv.org/abs/1603.02754" target="_blank" rel="noopener">arXiv:1603.02754</a>.</p>
