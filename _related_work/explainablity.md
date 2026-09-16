---
order: 7
slug: multi_explainable
tags: ["2024", "Explainablity"]
title: "A Review of Multimodal Explainable Artificial Intelligence: Past, Present and Future"
authors: "Shilin Sun, Wenbin An, Feng Tian, Fang Nan, Qidong Liu, Jun Liu, Nazaraf Shah, Ping Chen."
reference: "Shilin Sun, Wenbin An, Feng Tian, Fang Nan, Qidong Liu, Jun Liu, Nazaraf Shah, Ping Chen (2024). A Review of Multimodal Explainable Artificial Intelligence: Past, Present and Future. arXiv:2412.14056."
link: "https://arxiv.org/abs/2412.14056"
link_text: "arXiv:2412.14056"
---
<p># A Review of Multimodal Explainable AI (MXAI): Past, Present, and Future

Artificial Intelligence has evolved rapidly over the last two decades. We have moved from simple machine learning models that relied on hand-crafted features to powerful multimodal systems such as GPT-4V, Gemini, and LLaVA that can simultaneously understand images, text, audio, and video. While these models achieve impressive performance, they introduce a critical challenge:

**How do we understand and trust their decisions?**

This question is at the heart of **Multimodal Explainable Artificial Intelligence (MXAI)**, a research field that aims to make multimodal AI systems transparent and interpretable. The paper *"A Review of Multimodal Explainable Artificial Intelligence: Past, Present and Future"* provides a comprehensive survey of the field, tracing its evolution, current state, and future directions.

---

# Why Multimodal Explainability Matters

Traditional Explainable AI (XAI) focuses on explaining decisions made from a single modality, such as an image classifier highlighting important image regions or a tabular model identifying influential features.

Modern AI systems, however, often process multiple modalities simultaneously:

* Images
* Text
* Audio
* Video
* Sensor data

For example, a medical AI system may analyze a chest X-ray, clinical notes, and patient history before producing a diagnosis. An explanation is no longer just about highlighting image pixels—it must also explain how textual information, visual evidence, and other data sources interact to produce the final decision.

This need has given rise to **Multimodal Explainable AI (MXAI)**.

---

# The Evolution of Explainability

One of the most interesting contributions of the survey is its historical perspective. The authors divide the development of explainable AI into four major eras.

## 1. Traditional Machine Learning Era (2000–2009)

During this period, AI models were relatively simple and inherently interpretable.

Common models included:

* Decision Trees
* Random Forests
* Logistic Regression
* Support Vector Machines

Because these models were smaller and more structured, explanations often came naturally.

For example, a decision tree could directly reveal the sequence of rules that led to a prediction.

### Strengths

* High transparency
* Easy-to-understand decision processes
* Straightforward feature importance analysis

### Limitations

* Limited predictive power
* Difficulty handling complex multimodal data
* Poor scalability

---

## 2. Deep Learning Era (2010–2017)

The rise of deep learning dramatically improved performance across computer vision, speech recognition, and natural language processing.

Popular architectures included:

* Convolutional Neural Networks (CNNs)
* Recurrent Neural Networks (RNNs)
* LSTMs

However, interpretability suffered.

As networks became deeper and more complex, understanding their internal reasoning became increasingly difficult.

Researchers responded with explainability techniques such as:

* Saliency Maps
* Grad-CAM
* Activation Visualization
* Attention Mechanisms

### Strengths

* Significant performance improvements
* Better multimodal feature learning
* Automatic representation learning

### Limitations

* Black-box behavior
* Unstable explanations
* Limited understanding of internal reasoning

This period marked the birth of modern Explainable AI research.

---

## 3. Foundation Model Era (2017–2022)

The introduction of Transformers fundamentally changed AI.

Models such as:

* BERT
* Vision Transformer (ViT)
* CLIP
* BLIP

learned rich representations from enormous datasets and could align multiple modalities within a shared semantic space.

For example, CLIP learns connections between images and text by placing them into the same embedding space.

### Explainability Methods

Researchers developed techniques including:

* Cross-attention visualization
* Similarity analysis
* Token attribution
* Concept alignment

### Strengths

* Powerful multimodal understanding
* Strong transfer learning capabilities
* General-purpose representations

### Limitations

* Massive model size
* Difficult internal interpretation
* Attention does not always correspond to reasoning

This era laid the foundation for today's multimodal AI systems.

---

## 4. Large Language and Multimodal Model Era (2022–Present)

The latest generation of AI systems includes:

* GPT-4V
* Gemini
* Claude
* LLaVA
* Flamingo

These models can generate text, answer questions about images, perform reasoning tasks, and interact with users conversationally.

While impressive, they introduce a new explainability challenge.

### The Problem of Hallucinated Explanations

Large models can generate explanations that sound convincing but may not accurately reflect the actual reasoning process used internally.

For example, a model may provide a detailed explanation for a medical diagnosis while internally relying on entirely different features.

This creates a gap between:

* What the model says it did
* What the model actually did

The survey identifies this as one of the most important open problems in explainability research.

---

# Understanding the Three Levels of Explainability

The survey organizes explainability methods into three broad categories.

## 1. Data Explainability

This focuses on understanding the data itself.

Typical questions include:

* Which features are important?
* Which modality contributes most?
* What information drives predictions?

Methods include:

* Feature selection
* Dimensionality reduction
* Correlation analysis

---

## 2. Model Explainability

This focuses on understanding the internal behavior of models.

Researchers investigate:

* Hidden representations
* Attention mechanisms
* Feature interactions
* Modality fusion strategies

The goal is to understand how information flows through the model.

---

## 3. Post-hoc Explainability

Post-hoc methods generate explanations after predictions have already been made.

Popular approaches include:

* LIME
* SHAP
* Grad-CAM
* Counterfactual explanations

These methods do not change the model but attempt to explain its behavior from the outside.

---

# Datasets Commonly Used in MXAI Research

The survey reviews many datasets used to evaluate multimodal explainability systems.

## Vision-Language Datasets

* VQA
* VQA-X
* e-SNLI-VE
* Flickr30k
* MS COCO

These datasets are often used to study visual reasoning and explanation generation.

---

## Medical Datasets

* MIMIC-CXR
* ChestX-ray14

These datasets are important because explainability is essential in healthcare applications.

---

## Audio-Visual Datasets

* AudioCaps
* AVSD

These support explainability research involving both speech and visual information.

---

## Multimodal Reasoning Datasets

* ScienceQA
* MMMU

These datasets evaluate complex reasoning across multiple modalities.

---

# How Do Researchers Evaluate Explanations?

Evaluating explanations is significantly harder than evaluating predictions.

For predictions, metrics such as:

* Accuracy
* Precision
* Recall
* F1 Score
* AUC

are well established.

For explanations, researchers often use:

### Text-Based Metrics

* BLEU
* ROUGE
* METEOR
* CIDEr

### Vision-Based Metrics

* Intersection over Union (IoU)
* Pointing Game Accuracy
* Localization Accuracy

### Multimodal Metrics

* CLIP Score
* Cross-modal Similarity
* Human Evaluation

A key conclusion of the survey is that there is still **no universally accepted benchmark for evaluating explanations**.

---

# Real-World Applications of MXAI

## Healthcare

Medical applications require high levels of trust and transparency.

Examples include:

* Disease diagnosis
* Medical image analysis
* Clinical decision support

Doctors must understand why a system reaches a particular conclusion before relying on it.

---

## Autonomous Driving

Self-driving systems combine information from:

* Cameras
* LiDAR
* Radar
* GPS

Explainability is crucial for understanding driving decisions and investigating failures.

---

## Security and Surveillance

Explainable systems can help analysts understand:

* Threat detection
* Fraud identification
* Anomaly detection

---

## Education

Educational AI systems increasingly provide personalized learning experiences.

Explainability can help students and educators understand recommendations and assessments.

---

## Human-AI Collaboration

Future AI assistants will increasingly work alongside humans.

Transparent explanations can improve:

* Trust
* Usability
* Decision quality

---

# Major Challenges Facing MXAI

Despite rapid progress, several challenges remain.

## Cross-Modal Complexity

Different modalities represent information in fundamentally different ways.

Understanding how text, images, audio, and other data sources interact remains difficult.

---

## Hallucinated Explanations

Large multimodal models may generate plausible but inaccurate explanations.

Ensuring faithfulness between explanations and actual model reasoning is an active research area.

---

## Lack of Ground-Truth Explanations

In many domains, there is no single correct explanation.

This makes evaluation particularly challenging.

---

## Scalability

Modern foundation models contain billions of parameters.

Many existing interpretability techniques struggle to scale to these enormous architectures.

---

## Human-Centered Evaluation

Most current evaluation frameworks rely heavily on automated metrics.

However, explanations ultimately exist for people.

The survey highlights the need for more user studies involving:

* Domain experts
* End users
* Decision-makers

---

# Future Directions

The authors identify several promising research directions.

## Concept-Based Explainability

Rather than focusing on individual neurons, future systems may explain decisions using human-understandable concepts.

Examples include:

* "dog"
* "road sign"
* "lung opacity"

instead of abstract internal activations.

---

## Causal Explainability

Researchers increasingly want explanations that capture cause-and-effect relationships rather than simple correlations.

---

## Mechanistic Interpretability

This area aims to understand the actual computations occurring inside large neural networks.

---

## Explainable Multimodal Agents

Future AI systems will not only perceive information but also act on it.

Understanding their actions will become increasingly important.

---

## Explainable Large Multimodal Models

As models such as GPT-4V and Gemini continue to evolve, explainability methods must evolve alongside them.

---

# Final Thoughts

This survey serves as an excellent roadmap for understanding the rapidly growing field of Multimodal Explainable AI.

Rather than proposing a new algorithm, the paper organizes the entire research landscape—from interpretable machine learning models to modern large multimodal systems—and highlights the key challenges that remain unsolved.

The central message is clear:

> As AI systems become more capable and more deeply integrated into real-world decision-making, explainability will become just as important as accuracy.

For researchers entering the field, this paper provides a valuable foundation for understanding where MXAI has been, where it stands today, and where it is likely headed in the future.
</p>