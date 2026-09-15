---
order: 5
title: "KL and Jensen&ndash;Shannon divergence"
---
<code class="formula">D_KL(P &#8214; Q)  =  &Sigma;_x P(x) &middot; log( P(x) / Q(x) )
JSD(P &#8214; Q)   =  &frac12; D_KL(P &#8214; M)  +  &frac12; D_KL(Q &#8214; M),   M = &frac12;(P + Q)</code>
<p>Both measure how far apart two probability distributions are. KL is asymmetric and unbounded; JS is symmetric and bounded, and the original GAN objective is (up to a constant) minimising the JS divergence between the real and generated data. These are also the natural way to score how faithful synthetic data is.</p>
<p class="ref-line"><strong>References:</strong> Kullback &amp; Leibler, &ldquo;On information and sufficiency,&rdquo; <em>Annals of Mathematical Statistics</em> 22(1), 1951; Lin, &ldquo;Divergence measures based on the Shannon entropy,&rdquo; <em>IEEE Trans. Information Theory</em> 37(1), 1991.</p>
