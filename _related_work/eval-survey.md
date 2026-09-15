---
order: 6
slug: p-eval-survey
tags: ["2024", "arXiv survey", "Evaluation metrics"]
title: "A Comprehensive Survey of Evaluation Techniques for Recommendation Systems"
authors: "Jadon &amp; Patil (Juniper Networks)."
reference: "Jadon, A., &amp; Patil, A. (2024). A comprehensive survey of evaluation techniques for recommendation systems. arXiv:2312.16015."
link: "https://arxiv.org/abs/2312.16015"
link_text: "arXiv:2312.16015"
---
<p>A catalogue, not a new method: the survey groups recommender-system metrics into five families. <em>Similarity metrics</em> (cosine, Jaccard, Pearson, Manhattan, &hellip;) compare users or items to each other. <em>Candidate-generation metrics</em> (novelty, diversity, serendipity, catalog and distributional coverage) ask whether the system explores broadly rather than always returning the same popular items. <em>Predictive metrics</em> (RMSE, MAE, R&sup2;, &hellip;) score rating-prediction accuracy. <em>Ranking-based metrics</em> (Precision@k, Recall@k, F1@k, MRR, nDCG@k, MAP, ARHR@k) score how well a list is <em>ordered</em>, not just which items appear in it. <em>Business metrics</em> (CTR, conversion, revenue, retention) check whether any of the above moves a real-world outcome. The paper&rsquo;s central argument is that no single metric captures system quality &mdash; each family trades off against the others.</p>
<p><strong>Why it is on my list:</strong> the TeleNotArzt assistant is, structurally, a recommendation system &mdash; it returns ranked shortlists of diagnoses, treatments, and measurements &mdash; so the ranking-based and candidate-generation families describe exactly the evaluation problem I face, and this survey gives a vocabulary of alternatives beyond the three metrics (recall@k, macro/weighted AUC, coverage ratio) I used in that paper.</p>
<p><strong>When to use each family, for a system like mine:</strong></p>

- <strong>Precision@k vs. Recall@k</strong> &mdash; use precision@k when a noisy top-k list is the main risk (too many wrong suggestions to sift through); use recall@k when missing a correct item is the costlier failure. I chose recall@k for TeleNotArzt because in emergency care an omitted diagnosis is worse than a slightly noisy shortlist.
- <strong>F1@k</strong> &mdash; use when you need one headline number instead of two curves, i.e. for a quick comparison across model versions rather than a full precision/recall trade-off analysis.
- <strong>MRR</strong> &mdash; use when only the position of the <em>first</em> correct answer matters, e.g. how far down the list the clinician&rsquo;s eventual diagnosis sat, rather than how many correct items are in the top-k overall.
- <strong>nDCG@k</strong> &mdash; use when relevance is graded rather than binary. Some wrong suggestions are more dangerous than others (a near-miss diagnosis vs. an implausible one); nDCG can weight results by that graded relevance in a way plain AUC or recall@k cannot &mdash; a natural next metric for this work.
- <strong>MAP</strong> &mdash; use for a single ranking score averaged across many cases/patients, when you want one system-level summary rather than per-case recall@k figures.
- <strong>Catalog / distributional coverage</strong> &mdash; this is close to where my own <em>coverage ratio</em> sits, generalised from &ldquo;did this case get every relevant recommendation&rdquo; to &ldquo;across all cases, is the full range of diagnoses and treatments ever suggested, or does the model default to the common ones.&rdquo; Worth adding to check the assistant isn&rsquo;t quietly ignoring rare conditions.
- <strong>Novelty / serendipity</strong> &mdash; not something I use today, but relevant if the goal shifts toward surfacing rare-but-plausible diagnoses instead of only the statistically common ones, i.e. checking the model hasn&rsquo;t taken a majority-class shortcut.
- <strong>Business metrics (CTR, adoption, conversion)</strong> &mdash; don&rsquo;t map onto a clinical tool the way they do onto e-commerce, but the underlying instinct &mdash; pair offline ranking metrics with a real-world outcome, such as clinician acceptance rate or time-to-treatment &mdash; is exactly how this kind of assistant should eventually be validated beyond offline numbers.
{: .tick-list}

#### Use Cases

The survey&rsquo;s tables spell out, metric by metric, when to reach for each one. The first four cover the similarity, candidate-generation, predictive, and ranking families (verbatim from the paper):

<p class="muted" style="margin-bottom:.4rem;"><strong>Table 1 &mdash; Summary of Similarity Metrics</strong></p>

| Metric | Use Cases |
|---|---|
| Cosine Similarity | Use cosine similarity when evaluating the orientation, not magnitude, of user or item vectors in recommendation systems, making it ideal for text-based or attribute-rich data where the pattern of interest, rather than the absolute value, is indicative of user preferences. |
| Euclidean Distance | Use Euclidean Distance in evaluating recommendation systems when comparing profiles in a feature space with numerical attributes to gauge similarity based on the &lsquo;straight-line&rsquo; distance between points (user-item pairs). |
| Jaccard Index | Use the Jaccard Index when evaluating the similarity between users&rsquo; or items&rsquo; sets of preferences or choices, particularly when the data is binary and the size of the intersection relative to the union of datasets is of interest. |
| Hamming Distance | Use Hamming Distance in evaluating recommendation systems when comparing binary vectors of user preferences or item attributes, typically for assessing similarity or diversity in content-based filtering or collaborative filtering with binary datasets. |
| Manhattan Distance | Use Manhattan Distance in recommendation systems when dealing with high-dimensional, sparse data sets, as it can be more robust to outliers than Euclidean distance and better at capturing differences when multiple dimensions contribute to the dissimilarity. |
| Chebyshev Distance | Use Chebyshev Distance in recommendation systems when capturing the maximum disparity across dimensions is crucial, especially in high-dimensional spaces where the most significant difference between items is the most informative for recommendations. |
| Adjusted Cosine Similarity | Use Adjusted Cosine Similarity when evaluating item-based collaborative filtering systems to account for varying user ratings and reduce bias by subtracting the user&rsquo;s average rating from each of their ratings before computing similarity. |
| Pearson Correlation Coefficient | Use Pearson Correlation in evaluating recommendation systems when assessing the linear relationship between users&rsquo; ratings, especially when the scale of ratings is important and you assume a normal distribution of the underlying data. |
| Spearman Rank Order Correlation Coefficient | Use Spearman Rank Order Correlation Coefficient in recommendation systems when assessing the strength and direction of a monotonic relationship between ranked variables, particularly useful in scenarios with non-parametric, ordinal data or when evaluating the ranking quality of recommendations. |

<p class="muted" style="margin-bottom:.4rem;"><strong>Table 2 &mdash; Summary of Candidate Generation Metrics</strong></p>

| Metric | Use Cases |
|---|---|
| Novelty | Use novelty in evaluating recommendation systems when assessing the system&rsquo;s ability to suggest unexpected, lesser-known, or new items, thereby enhancing user experience by introducing diversity and reducing the filter bubble effect prevalent in personalized recommendations. |
| Diversity | Use Diversity in recommendation systems when the goal is to broaden user exposure beyond familiar items, avoid echo chambers, and enhance user engagement by presenting a varied range of options, thereby catering to a wider spectrum of user interests and preferences. |
| Serendipity | Use serendipity in evaluating recommendation systems when assessing their ability to offer novel, unexpected, yet relevant items, enhancing user experience by introducing diversity beyond typical or predictable suggestions. |
| Catalog Coverage | Use Catalog Coverage to evaluate a recommendation system when assessing its ability to suggest a wide variety of items, particularly important in scenarios where exposing users to a broader selection of the catalog is crucial for enhancing user experience and business objectives. |
| Distributional Coverage | Distributional Coverage is used when evaluating the diversity of recommendations in a system, ensuring a wide range of items are suggested, rather than repeatedly offering popular or similar items, thus enhancing user discovery and experience. |

<p class="muted" style="margin-bottom:.4rem;"><strong>Table 3 &mdash; Summary of Predictive Metrics</strong></p>

| Metric | Use Cases |
|---|---|
| Root Mean Squared Error (RMSE) | Use Root Mean Squared Error (RMSE) to measure the magnitude of prediction errors, giving more weight to larger errors, which is ideal for scenarios where large deviations from actual values are particularly undesirable. |
| Mean Absolute Error (MAE) | Use Mean Absolute Error (MAE) to measure the average magnitude of errors in predictions, prioritizing equal weighting to all deviations regardless of direction, useful for scenarios where all errors are equally important. |
| Mean Squared Error (MSE) | Use Mean Squared Error (MSE) when evaluating a recommendation system&rsquo;s predictive accuracy for continuous output, as it penalizes larger errors more severely, ensuring the model&rsquo;s robustness by emphasizing the minimization of large prediction errors. |
| Mean Absolute Percentage Error (MAPE) | Use Mean Absolute Percentage Error (MAPE) to measure forecast accuracy as a percentage, which is useful when you need to understand error magnitude relative to actual values, particularly in inventory or capacity planning where proportional errors are more meaningful. |
| R&sup2; | Use R&sup2; (coefficient of determination) in evaluating recommendation systems when assessing the proportion of variance in the observed outcomes (e.g., ratings) that can be predicted from the input variables, providing a measure of how well unseen samples are likely to be predicted. |
| Explained Variance | Use Explained Variance in evaluating recommendation systems when you aim to measure the proportion of user preference or rating variance that the model successfully captures, indicating the system&rsquo;s overall effectiveness in predicting user behavior accurately. |

<p class="muted" style="margin-bottom:.4rem;"><strong>Table 4 &mdash; Summary of Ranking Metrics</strong></p>

| Metric | Use Cases |
|---|---|
| Mean Reciprocal Rank (MRR) | Use Mean Reciprocal Rank (MRR) when evaluating the effectiveness of a recommendation system at returning the first relevant item in a ranked list of results, emphasizing the importance of the top-most recommendation. |
| ARHR@k (Average Reciprocal Hit Rank at k) | Use ARHR@k (Average Reciprocal Hit Rank at k) to measure the average quality of recommendations by considering the reciprocal of the rank at which relevant items are found in the top k positions. It&rsquo;s useful for scenarios where ranking accuracy and the order of recommendations are crucial factors. |
| Normalized Discounted Cumulative Gain (nDCG) | Use nDCG when ranking relevance matters, and you need to evaluate the quality of the recommendations in a list, considering the position of highly relevant items. |
| Precision@k | Use Precision@k in recommendation systems when evaluating the proportion of relevant items among the top-k recommendations, particularly when the cost of false positives is high and the focus is on the quality of the top few recommendations. |
| Recall@k | Use Recall@k in recommendation systems when prioritizing the model&rsquo;s ability to capture all relevant items in the top-k suggestions is more important than avoiding irrelevant ones, especially when the cost of missing a relevant recommendation is high. |
| F1@K | Use F1@K (F1 score at K) for scenarios where the focus is on the precision of the top K recommendations, such as content curation or ranking tasks, to ensure that the most relevant items are presented to users within a limited set. |
| Average Recall@K | Use Average Recall@K when you need to assess the proportion of relevant items that a recommendation system successfully retrieves within the top K recommendations, prioritizing comprehensive coverage of relevant content over precision. |
| Average Precision@K | Use Average Precision@k when evaluating the effectiveness of a recommendation system for scenarios where the order of recommended items matters, such as search engine result rankings or content playlists, as it quantifies the precision of the top k recommendations. |
| Mean Average Precision (MAP) | Use Mean Average Precision (MAP) when evaluating the quality of a ranked list of items in recommendation systems particularly when relevance varies across items, as it provides a comprehensive measure of precision at different points in the ranking, emphasizing the importance of higher-ranked items. |
