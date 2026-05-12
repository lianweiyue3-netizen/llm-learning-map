const lessons = [
  {
    id: 1,
    week: "Week 1: Ground zero",
    title: "What an LLM actually is",
    focus: "An LLM is a neural network trained on huge text collections to predict and generate language. It is powerful, but it is not a database and not a human mind.",
    learn: "Read one beginner explanation of NLP versus LLMs.",
    practice: "Ask: what does the model receive, and what does it output?",
    thesis: "Write one sentence that separates 'predicting text' from 'knowing truth'.",
    resource: "Hugging Face LLM Course",
    url: "https://huggingface.co/learn/llm-course/en/chapter1/1"
  },
  {
    id: 2,
    week: "Week 1: Ground zero",
    title: "NLP before LLMs",
    focus: "LLMs belong to NLP, the field of making computers process human language. Before LLMs, many systems were trained for one task at a time.",
    learn: "Skim the idea of NLP tasks: classification, translation, summarization, question answering.",
    practice: "List three language tasks you use in real life.",
    thesis: "Pick one task that could become a small research topic.",
    resource: "Stanford CS224N",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  },
  {
    id: 3,
    week: "Week 1: Ground zero",
    title: "Tokens",
    focus: "LLMs do not read whole words exactly like people. They split text into tokens, which can be words, word pieces, punctuation, or characters.",
    learn: "Read about tokenization in the Hugging Face course.",
    practice: "Take a sentence and guess where it might be split into tokens.",
    thesis: "Write why tokenization might matter for Japanese-English text.",
    resource: "Hugging Face Tokenizers",
    url: "https://huggingface.co/learn/llm-course/en/chapter6/1"
  },
  {
    id: 4,
    week: "Week 1: Ground zero",
    title: "Next-token prediction",
    focus: "The basic training game is simple: given previous tokens, predict the next token. Complicated abilities grow from doing this at huge scale.",
    learn: "Read the GPT-3 abstract and focus on 'autoregressive'.",
    practice: "Finish the phrase 'The capital of Japan is...' and notice you predicted a next phrase.",
    thesis: "Write one limitation of next-token prediction as a research question.",
    resource: "Language Models are Few-Shot Learners",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    id: 5,
    week: "Week 1: Ground zero",
    title: "Embeddings",
    focus: "Embeddings turn tokens or sentences into vectors. Similar meanings often land near each other in vector space.",
    learn: "Read a short section on embeddings or vector representations.",
    practice: "Compare 'student', 'teacher', and 'banana': which two should be closer?",
    thesis: "Write how embeddings could help search through school documents.",
    resource: "Stanford CS224N schedule",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  },
  {
    id: 6,
    week: "Week 1: Ground zero",
    title: "Neural network intuition",
    focus: "A model is a large collection of learned numbers. Training changes those numbers so the model predicts better.",
    learn: "Read one simple explanation of parameters and training.",
    practice: "Describe parameters as 'learned knobs' in your own words.",
    thesis: "Write what kind of evidence would convince you a model improved.",
    resource: "A Survey of Large Language Models",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    id: 7,
    week: "Week 1: Ground zero",
    title: "Weekly checkpoint",
    focus: "You now have the minimum vocabulary: NLP, LLM, token, embedding, parameter, training, prediction.",
    learn: "Review your notes from days 1-6.",
    practice: "Explain an LLM to a friend in three sentences.",
    thesis: "Write your first rough thesis interest: education, language, safety, reasoning, or applications.",
    resource: "Harvard LLM thesis",
    url: "https://dash.harvard.edu/entities/publication/dd81fabb-0835-4d94-9916-7177cc93d0f1"
  },
  {
    id: 8,
    week: "Week 2: How transformers work",
    title: "The transformer idea",
    focus: "Modern LLMs mostly use transformer architecture. The key move is attention: each token can look at useful parts of the context.",
    learn: "Read the abstract of Attention Is All You Need.",
    practice: "In a long sentence, circle which words depend on each other.",
    thesis: "Write why attention could help summarize a long paragraph.",
    resource: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762"
  },
  {
    id: 9,
    week: "Week 2: How transformers work",
    title: "Attention",
    focus: "Attention gives the model a way to weigh which previous tokens matter most for the current token.",
    learn: "Read a beginner explanation of queries, keys, and values.",
    practice: "For 'The student forgot her book', identify what 'her' points back to.",
    thesis: "Write one example where attention might fail.",
    resource: "Hugging Face Transformers",
    url: "https://huggingface.co/learn/llm-course/en/chapter1/4"
  },
  {
    id: 10,
    week: "Week 2: How transformers work",
    title: "Decoder-only models",
    focus: "Chat-style LLMs usually generate left to right, predicting the next token from the previous context.",
    learn: "Compare encoder, decoder, and encoder-decoder transformer types.",
    practice: "Write one sentence and reveal it one word at a time.",
    thesis: "Write why generation differs from classification.",
    resource: "Hugging Face architectures",
    url: "https://huggingface.co/learn/llm-course/en/chapter1/6"
  },
  {
    id: 11,
    week: "Week 2: How transformers work",
    title: "Pretraining data",
    focus: "Pretraining uses massive text data. Data quality, duplication, language balance, and copyright become research issues.",
    learn: "Read about pretraining in an LLM survey.",
    practice: "List three sources that might appear in training data.",
    thesis: "Write a question about data quality or fairness.",
    resource: "A Survey of Large Language Models",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    id: 12,
    week: "Week 2: How transformers work",
    title: "Loss and evaluation",
    focus: "During training, models minimize prediction error. During use, humans also care about helpfulness, truthfulness, safety, and style.",
    learn: "Read about why benchmark scores are not the whole story.",
    practice: "Think of an answer that is fluent but wrong.",
    thesis: "Write one metric you could use in a small experiment.",
    resource: "Stanford CS224N benchmarking",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  },
  {
    id: 13,
    week: "Week 2: How transformers work",
    title: "Scaling",
    focus: "Larger models and more data often improve performance, but they cost more and can still fail in surprising ways.",
    learn: "Read the GPT-3 abstract again and note the parameter count.",
    practice: "Write one benefit and one risk of making models larger.",
    thesis: "Write a small thesis angle about small models versus large models.",
    resource: "GPT-3 paper",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    id: 14,
    week: "Week 2: How transformers work",
    title: "Weekly checkpoint",
    focus: "You can now explain the pipeline: tokens become vectors, transformers use attention, and training rewards better next-token prediction.",
    learn: "Review days 8-13.",
    practice: "Draw the pipeline from text input to text output.",
    thesis: "Write one paragraph explaining LLMs for your future thesis introduction.",
    resource: "Harvard LLM thesis",
    url: "https://dash.harvard.edu/entities/publication/dd81fabb-0835-4d94-9916-7177cc93d0f1"
  },
  {
    id: 15,
    week: "Week 3: Making models useful",
    title: "Fine-tuning",
    focus: "Fine-tuning adapts a pretrained model to a narrower task or style using additional training examples.",
    learn: "Read a Hugging Face section on fine-tuning.",
    practice: "Name a task where general knowledge is not enough.",
    thesis: "Write a possible dataset you could fine-tune or evaluate on.",
    resource: "Hugging Face fine-tuning",
    url: "https://huggingface.co/learn/llm-course/en/chapter3/1"
  },
  {
    id: 16,
    week: "Week 3: Making models useful",
    title: "Instruction tuning",
    focus: "Instruction tuning teaches a model to follow user requests, not only continue text.",
    learn: "Read the InstructGPT abstract.",
    practice: "Compare 'continue this text' with 'answer this question'.",
    thesis: "Write why instruction-following matters for student use.",
    resource: "InstructGPT paper",
    url: "https://arxiv.org/abs/2203.02155"
  },
  {
    id: 17,
    week: "Week 3: Making models useful",
    title: "RLHF",
    focus: "Reinforcement learning from human feedback uses human preferences to push models toward answers people prefer.",
    learn: "Read the human-feedback part of InstructGPT.",
    practice: "Rank two chatbot answers: helpful, honest, harmless.",
    thesis: "Write one problem with using human preference as a signal.",
    resource: "OpenAI instruction-following article",
    url: "https://openai.com/index/instruction-following/"
  },
  {
    id: 18,
    week: "Week 3: Making models useful",
    title: "Prompting",
    focus: "Prompts are instructions and context. Better prompts can improve output, but they do not guarantee truth.",
    learn: "Read about few-shot prompting in GPT-3.",
    practice: "Ask the same question with no example, then with one example.",
    thesis: "Write a prompt-comparison experiment idea.",
    resource: "GPT-3 paper",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    id: 19,
    week: "Week 3: Making models useful",
    title: "Hallucination",
    focus: "Hallucination means the model produces confident text that is unsupported or false.",
    learn: "Read about RAG as one response to knowledge limitations.",
    practice: "Ask what evidence an answer would need.",
    thesis: "Write a question about reducing hallucination in one domain.",
    resource: "RAG paper",
    url: "https://arxiv.org/abs/2005.11401"
  },
  {
    id: 20,
    week: "Week 3: Making models useful",
    title: "Bias and limitations",
    focus: "LLMs can reflect bias from data, design choices, and evaluation gaps. This is a strong thesis area because it can be studied with small tests.",
    learn: "Read a limitations section from a course or paper.",
    practice: "Write two prompts that might reveal unfair assumptions.",
    thesis: "Write a possible bias-evaluation topic.",
    resource: "Hugging Face bias and limitations",
    url: "https://huggingface.co/learn/llm-course/en/chapter1/8"
  },
  {
    id: 21,
    week: "Week 3: Making models useful",
    title: "Weekly checkpoint",
    focus: "You now understand why raw pretrained models are different from chat assistants.",
    learn: "Review fine-tuning, instruction tuning, RLHF, prompting, hallucination, and bias.",
    practice: "Create a glossary with six terms.",
    thesis: "Choose your top two thesis directions so far.",
    resource: "A Survey of Large Language Models",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    id: 22,
    week: "Week 4: LLM applications",
    title: "Retrieval-augmented generation",
    focus: "RAG gives a model relevant documents at answer time. It helps with current or private information and can show sources.",
    learn: "Read the RAG abstract.",
    practice: "Think of three documents a student support bot should retrieve.",
    thesis: "Write a RAG versus no-RAG experiment question.",
    resource: "RAG paper",
    url: "https://arxiv.org/abs/2005.11401"
  },
  {
    id: 23,
    week: "Week 4: LLM applications",
    title: "Vector search",
    focus: "RAG often uses embeddings to find chunks of text that are semantically close to the query.",
    learn: "Read about embeddings again, now for search.",
    practice: "Split one page into chunks and invent search queries.",
    thesis: "Write how chunk size could affect answer quality.",
    resource: "Hugging Face datasets and embeddings",
    url: "https://huggingface.co/learn/llm-course/en/chapter5/1"
  },
  {
    id: 24,
    week: "Week 4: LLM applications",
    title: "Tools and agents",
    focus: "Some systems let LLMs call tools, search, write code, or take steps. This makes evaluation more complex.",
    learn: "Look at a course topic on agents or tool use.",
    practice: "List what tool a chatbot needs for math, search, and calendar tasks.",
    thesis: "Write a safe, small tool-use thesis question.",
    resource: "Stanford CS224N agents and RAG",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  },
  {
    id: 25,
    week: "Week 4: LLM applications",
    title: "Evaluation design",
    focus: "A small thesis needs a clear evaluation: accuracy, helpfulness, citation support, time saved, user preference, or error type.",
    learn: "Read about benchmarking and evaluation in a syllabus or survey.",
    practice: "Pick two metrics for one chatbot task.",
    thesis: "Draft a table: question, method, metric, expected challenge.",
    resource: "Stanford CS224N benchmarking",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  },
  {
    id: 26,
    week: "Week 4: LLM applications",
    title: "Multilingual LLMs",
    focus: "LLMs often perform unevenly across languages. Tokenization, data availability, and evaluation language all matter.",
    learn: "Read a thesis abstract on multilingual LLMs.",
    practice: "Compare the same prompt in English and Japanese.",
    thesis: "Write a bilingual thesis idea.",
    resource: "UW multilingual LLM thesis",
    url: "https://digital.lib.washington.edu/researchworks/items/11c5bf8a-ee97-40fb-898f-fe97f2aa6530"
  },
  {
    id: 27,
    week: "Week 4: LLM applications",
    title: "Open and closed models",
    focus: "Open-weight models can be studied locally, while closed models may be easier to use but harder to inspect.",
    learn: "Compare one open model and one commercial chatbot.",
    practice: "Write what you can and cannot measure for each.",
    thesis: "Choose whether your thesis should be tool-based, survey-based, or experiment-based.",
    resource: "Hugging Face Hub",
    url: "https://huggingface.co/models"
  },
  {
    id: 28,
    week: "Week 4: LLM applications",
    title: "Weekly checkpoint",
    focus: "You now know the main application patterns: prompting, RAG, tools, evaluation, and multilingual use.",
    learn: "Review days 22-27.",
    practice: "Explain RAG in four sentences.",
    thesis: "Pick one application area you actually care about.",
    resource: "RAG paper",
    url: "https://arxiv.org/abs/2005.11401"
  },
  {
    id: 29,
    week: "Week 5: Thesis foundation",
    title: "Read a beginner thesis",
    focus: "A thesis can be explanatory, not only highly technical. Study how an existing thesis introduces LLMs for readers.",
    learn: "Skim the table of contents or abstract of the Harvard bachelor thesis.",
    practice: "Notice chapter structure, not details.",
    thesis: "Write three headings your thesis might need.",
    resource: "Large Language Models and How We Train Them",
    url: "https://dash.harvard.edu/entities/publication/dd81fabb-0835-4d94-9916-7177cc93d0f1"
  },
  {
    id: 30,
    week: "Week 5: Thesis foundation",
    title: "Read a survey",
    focus: "Survey papers help you build a literature review. They are dense, so use them as maps instead of reading every line.",
    learn: "Read the abstract and section headings of the LLM survey.",
    practice: "Write down five keywords you do not know yet.",
    thesis: "Turn one keyword into a possible subsection.",
    resource: "A Survey of Large Language Models",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    id: 31,
    week: "Week 5: Thesis foundation",
    title: "Study an applied thesis",
    focus: "Applied theses usually test one task in one domain. This is the safest shape for a manageable thesis.",
    learn: "Read the abstract of an LLM thesis in education, math, or networking.",
    practice: "Identify task, method, data, and result.",
    thesis: "Write your own task-method-data-result sentence.",
    resource: "LLMs for Education thesis",
    url: "https://amslaurea.unibo.it/id/eprint/29693/"
  },
  {
    id: 32,
    week: "Week 5: Thesis foundation",
    title: "Research question",
    focus: "A good thesis question is narrow enough to answer with your time and tools.",
    learn: "Read three thesis titles in the library tab.",
    practice: "Convert broad topics into questions: 'LLMs in education' becomes 'Can LLMs improve quiz feedback?'",
    thesis: "Write three possible research questions.",
    resource: "Library tab",
    url: "#library"
  },
  {
    id: 33,
    week: "Week 5: Thesis foundation",
    title: "Method choice",
    focus: "Beginner-friendly LLM thesis methods include literature review, prompt experiment, small benchmark, survey, interview, and case study.",
    learn: "Read one method section from an existing thesis.",
    practice: "Pick one method you can realistically finish.",
    thesis: "Write your method in one sentence: 'I will compare X and Y on Z using metric M.'",
    resource: "CTU numerical queries thesis",
    url: "https://dspace.cvut.cz/handle/10467/115466"
  },
  {
    id: 34,
    week: "Week 5: Thesis foundation",
    title: "Data and metrics",
    focus: "Small data is okay if the question is honest. A thesis can use 20-100 carefully chosen examples if the evaluation is clear.",
    learn: "Find what data one thesis used.",
    practice: "Draft a tiny dataset plan.",
    thesis: "Choose two metrics and one limitation.",
    resource: "ETH router configuration thesis",
    url: "https://www.research-collection.ethz.ch/handle/20.500.11850/661089"
  },
  {
    id: 35,
    week: "Week 5: Thesis foundation",
    title: "Ethics and limitations",
    focus: "LLM theses should discuss privacy, bias, misuse, reliability, and environmental or cost concerns when relevant.",
    learn: "Read a limitations paragraph from a paper.",
    practice: "Name two risks in your favorite topic.",
    thesis: "Write a limitation statement you could include later.",
    resource: "InstructGPT paper",
    url: "https://arxiv.org/abs/2203.02155"
  },
  {
    id: 36,
    week: "Week 6: Start writing",
    title: "Thesis outline",
    focus: "A simple thesis can be: introduction, background, related work, method, results, discussion, conclusion.",
    learn: "Look at the structure of two theses.",
    practice: "Create a seven-heading outline.",
    thesis: "Write one bullet under each heading.",
    resource: "Harvard LLM thesis",
    url: "https://dash.harvard.edu/entities/publication/dd81fabb-0835-4d94-9916-7177cc93d0f1"
  },
  {
    id: 37,
    week: "Week 6: Start writing",
    title: "Annotated bibliography",
    focus: "For each source, write what it is, why it matters, and how you might use it.",
    learn: "Pick three sources from the library.",
    practice: "Write one annotation in 3 sentences.",
    thesis: "Add one source to your bibliography notes.",
    resource: "Library tab",
    url: "#library"
  },
  {
    id: 38,
    week: "Week 6: Start writing",
    title: "Experiment plan",
    focus: "Before testing, write the exact prompts, examples, metrics, and expected failure modes.",
    learn: "Read an applied thesis abstract and infer its experiment.",
    practice: "Draft a 10-example pilot test.",
    thesis: "Write the first version of your experiment protocol.",
    resource: "CTU numerical queries thesis",
    url: "https://dspace.cvut.cz/handle/10467/115466"
  },
  {
    id: 39,
    week: "Week 6: Start writing",
    title: "Draft the introduction",
    focus: "Your introduction should explain the problem, why it matters, what you study, and what the reader will learn.",
    learn: "Read one thesis introduction opening.",
    practice: "Write a rough 100-word introduction.",
    thesis: "Do not polish. Just make it exist.",
    resource: "Large Language Models for Education",
    url: "https://amslaurea.unibo.it/id/eprint/29693/"
  },
  {
    id: 40,
    week: "Week 6: Start writing",
    title: "Draft related work",
    focus: "Related work is not a list. It groups sources by idea and shows what gap your thesis addresses.",
    learn: "Group five sources into two categories.",
    practice: "Write category names, such as 'RAG for factuality' or 'LLMs in education'.",
    thesis: "Write one paragraph connecting two sources.",
    resource: "A Survey of Large Language Models",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    id: 41,
    week: "Week 6: Start writing",
    title: "Draft method",
    focus: "The method section should be so clear that someone else could repeat your work.",
    learn: "Read one method section heading list.",
    practice: "Write your model, prompts, data, and metrics.",
    thesis: "Write a repeatable method paragraph.",
    resource: "ETH router configuration thesis",
    url: "https://www.research-collection.ethz.ch/handle/20.500.11850/661089"
  },
  {
    id: 42,
    week: "Week 6: Start writing",
    title: "Mini proposal",
    focus: "By now you should have enough for a small thesis proposal: title, research question, background, method, expected contribution, risks.",
    learn: "Review every note you saved.",
    practice: "Choose one final theme for now.",
    thesis: "Write a 250-word proposal. This is your foundation document.",
    resource: "Your saved notes",
    url: "#notes"
  }
];

const studyMaterials = {
  1: {
    text: [
      "An LLM is a model that takes text as input and predicts useful text as output. Under the hood, it repeatedly predicts the next token, then uses that new token as part of the next prediction.",
      "This means an LLM can sound fluent without truly checking facts. For a thesis, that difference is important: you can study when the model is correct, when it only sounds correct, and what algorithmic changes help."
    ],
    terms: ["LLM", "token", "prediction", "context"],
    cs: "Think of an LLM as a function that maps a sequence of tokens to a probability distribution over the next token."
  },
  2: {
    text: [
      "Natural language processing, or NLP, is the computer science area that studies language tasks: classification, translation, summarization, search, question answering, and dialogue.",
      "Before modern LLMs, many NLP systems were trained for one narrow task. LLMs are different because one model can often handle many tasks through instructions and examples."
    ],
    terms: ["NLP", "task", "classification", "summarization"],
    cs: "A beginner thesis can compare one NLP task across two approaches: a small task-specific model and a prompted LLM."
  },
  3: {
    text: [
      "Models do not read text exactly as words. They split text into tokens, such as word pieces, punctuation, characters, or common word chunks.",
      "Tokenization matters because the same sentence can become different token counts in different languages. This affects context length, cost, and sometimes quality."
    ],
    terms: ["tokenizer", "subword", "vocabulary", "token count"],
    cs: "You can measure tokenization like an algorithm: input string, output token list, then compare length and segmentation."
  },
  4: {
    text: [
      "Next-token prediction is the training game behind many language models. Given previous tokens, the model learns to assign high probability to the token that actually comes next.",
      "After training at huge scale, this simple objective can support surprising behavior: answering, explaining, translating, and writing code."
    ],
    terms: ["next token", "probability", "autoregressive", "training objective"],
    cs: "A language model is like a very large probabilistic autocomplete system, but trained with deep neural networks."
  },
  5: {
    text: [
      "An embedding is a vector representation of text. Words, sentences, or documents with related meaning should land near each other in vector space.",
      "Embeddings are important for semantic search and RAG because they let a system retrieve relevant text even when the exact keywords are different."
    ],
    terms: ["embedding", "vector", "similarity", "semantic search"],
    cs: "The algorithmic idea is nearest-neighbor search: convert query and documents to vectors, then retrieve the closest vectors."
  },
  6: {
    text: [
      "A neural network contains learned numbers called parameters. During training, the model updates these numbers to reduce prediction error.",
      "You do not need to understand every matrix yet. For now, remember that training is optimization: change parameters, measure error, repeat many times."
    ],
    terms: ["parameter", "loss", "optimization", "gradient"],
    cs: "Training is an optimization loop that tries to minimize a loss function over many examples."
  },
  7: {
    text: [
      "This checkpoint is about vocabulary. If you can explain NLP, token, embedding, parameter, training, and prediction, you already have the skeleton of LLM understanding.",
      "Your first thesis idea should not be huge. Pick a small behavior you can measure, such as retrieval quality, prompt quality, or code-answer correctness."
    ],
    terms: ["glossary", "metric", "research question", "scope"],
    cs: "Good CS theses often become simple comparisons: algorithm A vs algorithm B on dataset C with metric D."
  },
  8: {
    text: [
      "The Transformer is the architecture behind most modern LLMs. Its key idea is attention, which lets each token use information from other tokens in the context.",
      "Older sequence models processed text more step-by-step. Transformers made it easier to train large models efficiently and capture long-range relationships."
    ],
    terms: ["Transformer", "attention", "architecture", "sequence"],
    cs: "Architecture means the design of the computation graph: what operations happen and how information flows."
  },
  9: {
    text: [
      "Attention is a mechanism for weighting context. When predicting or representing one token, the model can give more weight to tokens that are more relevant.",
      "For example, in a sentence with a pronoun, attention can help connect the pronoun to the noun it refers to."
    ],
    terms: ["attention weight", "query", "key", "value"],
    cs: "At a high level, attention computes similarity scores, normalizes them, then uses them to mix information from tokens."
  },
  10: {
    text: [
      "Many chat LLMs are decoder-only models. They generate one token at a time from left to right, using the prompt and all tokens generated so far.",
      "This is why the wording of earlier context matters: every generated token becomes part of the input for the next token."
    ],
    terms: ["decoder-only", "generation", "prompt", "context window"],
    cs: "Generation is an iterative loop: predict a token, append it to context, predict again."
  },
  11: {
    text: [
      "Pretraining data is the huge text collection used before a model becomes task-specific. The model learns patterns from this data, including useful language structure and unwanted bias.",
      "Data quality, duplicates, language balance, and domain coverage can all change model behavior."
    ],
    terms: ["pretraining", "dataset", "data quality", "bias"],
    cs: "A dataset is part of the algorithmic system. Bad or unbalanced input data can produce bad learned behavior."
  },
  12: {
    text: [
      "Training loss measures prediction error, but users care about more than prediction. They care whether the answer is true, useful, safe, and supported by evidence.",
      "That is why LLM evaluation often combines automatic metrics, human judgment, and error analysis."
    ],
    terms: ["loss", "benchmark", "metric", "error analysis"],
    cs: "Evaluation design is a core CS skill: choose a task, define metrics, run controlled tests, and inspect failures."
  },
  13: {
    text: [
      "Scaling means increasing model size, data size, or compute. Many capabilities improve with scale, but cost, latency, and reliability risks also grow.",
      "A small thesis does not need huge models. Comparing small models, prompts, or retrieval settings can still be meaningful."
    ],
    terms: ["scaling", "parameters", "compute", "latency"],
    cs: "Efficiency trade-offs are thesis-friendly: compare quality versus runtime, cost, or memory."
  },
  14: {
    text: [
      "The basic pipeline is: text becomes tokens, tokens become vectors, the Transformer processes those vectors, and the model outputs probabilities for the next token.",
      "This pipeline is enough to explain most beginner LLM topics, including prompting, RAG, and fine-tuning."
    ],
    terms: ["pipeline", "vector", "Transformer", "output distribution"],
    cs: "Draw the system as modules. Modular thinking helps when you later compare retrieval, prompting, or model choices."
  },
  15: {
    text: [
      "Fine-tuning means taking a pretrained model and training it further on a narrower dataset. The goal is to adapt behavior to a task, domain, or style.",
      "Fine-tuning can improve performance, but it needs data, compute, and careful evaluation. Prompting is often easier to start with."
    ],
    terms: ["fine-tuning", "domain adaptation", "training data", "overfitting"],
    cs: "A simple experiment can compare prompt-only classification with a fine-tuned small classifier."
  },
  16: {
    text: [
      "Instruction tuning trains models on examples written as user instructions and desired answers. This teaches the model to follow tasks instead of merely continuing text.",
      "This is one reason chatbots feel different from raw autocomplete models."
    ],
    terms: ["instruction tuning", "supervised fine-tuning", "task format", "assistant behavior"],
    cs: "The data format changes the learned behavior. Input-output pairs become a training interface."
  },
  17: {
    text: [
      "RLHF means reinforcement learning from human feedback. Humans compare answers, and the model is optimized toward answers that people prefer.",
      "This can improve helpfulness, but it can also hide uncertainty or reward answers that sound good rather than answers that are fully correct."
    ],
    terms: ["RLHF", "preference", "reward model", "alignment"],
    cs: "Human preference becomes a signal in the optimization system, but that signal can be noisy."
  },
  18: {
    text: [
      "A prompt is the instruction and context you give the model. Prompt engineering means designing that input so the model performs the task more reliably.",
      "Examples, constraints, output format, and role instructions can all affect results."
    ],
    terms: ["prompt", "zero-shot", "few-shot", "template"],
    cs: "Prompting can be studied experimentally by controlling one variable at a time and measuring output quality."
  },
  19: {
    text: [
      "Hallucination happens when the model generates unsupported or false information. The answer may sound confident because fluency is not the same as evidence.",
      "RAG is one common method to reduce hallucination by giving the model documents to use as grounding."
    ],
    terms: ["hallucination", "grounding", "source", "evidence"],
    cs: "You can label each generated claim as supported, unsupported, or contradicted by the source."
  },
  20: {
    text: [
      "Bias can appear when training data, task design, or evaluation misses certain groups or languages. LLMs can reproduce unfair patterns from data.",
      "For a CS thesis, bias can be studied as output differences under controlled prompt changes."
    ],
    terms: ["bias", "fairness", "controlled prompt", "dataset shift"],
    cs: "Paired testing is useful: change one variable in the prompt and compare model outputs."
  },
  21: {
    text: [
      "Raw pretrained models, instruction-tuned models, and chat assistants are not the same product. Each stage changes behavior.",
      "When comparing models in a thesis, always write which model version, interface, settings, and prompts you used."
    ],
    terms: ["model version", "settings", "reproducibility", "baseline"],
    cs: "Reproducibility means another person can repeat your experiment and understand your setup."
  },
  22: {
    text: [
      "RAG stands for retrieval-augmented generation. The system first retrieves relevant documents, then gives those documents to the LLM as context for the answer.",
      "RAG is thesis-friendly because you can change one part of the pipeline: chunking, embedding model, top-k, reranking, or prompt template."
    ],
    terms: ["RAG", "retriever", "chunk", "top-k"],
    cs: "RAG is a pipeline algorithm: query, retrieve, assemble context, generate answer, evaluate."
  },
  23: {
    text: [
      "Vector search retrieves text by semantic similarity. A query and each document chunk are embedded into vectors, then the closest vectors are selected.",
      "This helps when exact keywords differ, but it can also retrieve text that feels related but does not answer the question."
    ],
    terms: ["vector search", "cosine similarity", "nearest neighbor", "recall@k"],
    cs: "You can compare retrieval algorithms using recall@k: did the correct chunk appear in the top k results?"
  },
  24: {
    text: [
      "Tool-using LLM systems let the model call search, calculators, code runners, or APIs. The model becomes part of a larger agentic system.",
      "This adds power but also new failure points: bad plan, wrong tool, wrong arguments, or wrong interpretation of tool output."
    ],
    terms: ["tool use", "agent", "API call", "planning"],
    cs: "Evaluate each step separately: tool selection, tool input, tool result, final answer."
  },
  25: {
    text: [
      "Evaluation is where a thesis becomes real. You need a task, dataset, baseline, metric, and error analysis.",
      "For easy LLM work, use small datasets and transparent labels. The goal is not huge scale; the goal is a clean comparison."
    ],
    terms: ["baseline", "accuracy", "F1", "precision", "recall"],
    cs: "A strong small thesis often has one table of results and one careful table of error types."
  },
  26: {
    text: [
      "Multilingual LLM behavior can vary by language because training data and tokenization differ. Japanese-English mixed prompts are a good small research area.",
      "You can measure token count, answer quality, and error types across languages."
    ],
    terms: ["multilingual", "low-resource", "token count", "language coverage"],
    cs: "Keep the task the same and change only the language. That gives a controlled comparison."
  },
  27: {
    text: [
      "Open-weight models can sometimes be downloaded, inspected, or run locally. Closed models may be stronger or easier to use, but less transparent.",
      "Your thesis can compare open and closed models, but you must be clear about limitations and reproducibility."
    ],
    terms: ["open-weight", "closed model", "API", "reproducibility"],
    cs: "Document model name, version, parameters if known, settings, prompts, and date tested."
  },
  28: {
    text: [
      "RAG combines information retrieval with generation. The quality of the answer depends heavily on the quality of retrieved context.",
      "If retrieval fails, the generator may answer from weak or irrelevant evidence."
    ],
    terms: ["retrieval quality", "context", "citation", "faithfulness"],
    cs: "Separate retrieval evaluation from answer evaluation so you know where the system fails."
  },
  29: {
    text: [
      "When reading an existing thesis, first look for structure: research question, related work, method, experiment, results, and limitations.",
      "You are not copying the thesis. You are learning the shape of an academic CS project."
    ],
    terms: ["research question", "method", "result", "limitation"],
    cs: "Map every thesis to this template: problem, algorithm/system, data, metric, finding."
  },
  30: {
    text: [
      "Survey papers are maps. They tell you the main categories, important terms, and classic papers in a field.",
      "Use surveys to build your background chapter and to find which algorithm family your thesis belongs to."
    ],
    terms: ["survey", "taxonomy", "related work", "citation"],
    cs: "A survey helps you decide whether your topic is retrieval, prompting, fine-tuning, evaluation, or model architecture."
  },
  31: {
    text: [
      "Applied CS theses usually evaluate one system on one task. They do not need to invent a new model from scratch.",
      "Look for the task, data, algorithm choices, baseline, metric, and conclusion."
    ],
    terms: ["applied thesis", "system", "baseline", "benchmark"],
    cs: "Your easiest path is implementing or comparing a small pipeline, not training a frontier model."
  },
  32: {
    text: [
      "A research question should be narrow and measurable. 'LLMs are useful' is too broad; 'Does chunk size affect RAG answer accuracy?' is measurable.",
      "Good questions usually include a method, dataset, and metric."
    ],
    terms: ["scope", "measurable", "variable", "metric"],
    cs: "Frame the question as: how does changing X affect Y on task Z?"
  },
  33: {
    text: [
      "Your method is the recipe for your study. It should say what data you use, which models or algorithms you compare, what prompts/settings you use, and how you score results.",
      "A simple method can still be rigorous if it is repeatable."
    ],
    terms: ["protocol", "dataset", "model setting", "repeatability"],
    cs: "Write your method like pseudocode: inputs, steps, outputs, metrics."
  },
  34: {
    text: [
      "Small data is acceptable for a beginner thesis if you are honest about limitations. A dataset of 30-100 examples can support a pilot study or error analysis.",
      "Quality matters: clear labels and transparent criteria beat a bigger messy dataset."
    ],
    terms: ["dataset", "annotation", "pilot study", "sample size"],
    cs: "Create a small CSV with columns like question, expected answer, retrieved chunk, model answer, score."
  },
  35: {
    text: [
      "Limitations are not weakness; they show that you understand what your study can and cannot prove.",
      "For LLM work, common limitations include small dataset size, model updates, prompt sensitivity, privacy, and evaluator subjectivity."
    ],
    terms: ["limitation", "ethics", "privacy", "validity"],
    cs: "Add a threats-to-validity section: internal, external, construct, and conclusion validity."
  },
  36: {
    text: [
      "A basic CS thesis outline is: introduction, background, related work, method, results, discussion, conclusion.",
      "The method and results sections are the center. They show what you actually built or measured."
    ],
    terms: ["outline", "background", "method", "discussion"],
    cs: "Each section should answer one job: why, what exists, what you did, what happened, what it means."
  },
  37: {
    text: [
      "An annotated bibliography is a list of sources with your own notes. For each source, write what it studies, how it studies it, and how it helps your thesis.",
      "This saves time later when writing related work."
    ],
    terms: ["bibliography", "annotation", "source", "related work"],
    cs: "Use a table: source, algorithm/model, dataset, metric, key finding, useful for my thesis."
  },
  38: {
    text: [
      "An experiment plan prevents random testing. Before running models, decide prompts, examples, settings, metrics, and what counts as success.",
      "This makes your work repeatable and protects you from changing the rules after seeing results."
    ],
    terms: ["experiment plan", "control", "variable", "success criteria"],
    cs: "Keep one variable changing at a time: chunk size, prompt type, model, embedding model, or temperature."
  },
  39: {
    text: [
      "The introduction should explain the problem, why it matters, your research question, and your contribution.",
      "For an LLM thesis, avoid hype. Be specific about the task and the measurable problem."
    ],
    terms: ["problem statement", "motivation", "contribution", "roadmap"],
    cs: "A good intro can say: this thesis compares algorithm X and Y for task Z using metric M."
  },
  40: {
    text: [
      "Related work groups papers by idea, not one paragraph per paper. For example: RAG methods, embedding retrieval, reranking, and LLM evaluation.",
      "End related work by showing the small gap your project addresses."
    ],
    terms: ["related work", "gap", "category", "comparison"],
    cs: "Group sources by algorithm family, then explain how your experiment fits."
  },
  41: {
    text: [
      "A method section should be detailed enough for another student to repeat. Include model names, prompts, datasets, preprocessing, settings, and scoring rules.",
      "If your thesis has code, describe the pipeline and link or include important implementation details."
    ],
    terms: ["method section", "implementation", "preprocessing", "scoring"],
    cs: "Treat the method like documentation for a reproducible experiment."
  },
  42: {
    text: [
      "A mini proposal is your thesis seed. It should include title, research question, background, method, expected contribution, and risks.",
      "Do not wait for perfection. A rough proposal lets a teacher or supervisor help you narrow the project."
    ],
    terms: ["proposal", "contribution", "risk", "feasibility"],
    cs: "Your best easy CS thesis is probably a controlled comparison of one model/prompt/retrieval setting against another."
  }
};

const quizzes = {
  1: {
    question: "What is the basic job of an LLM?",
    choices: ["Predict and generate likely text from context.", "Store every fact exactly like a database.", "Only translate text between languages."],
    answer: 0,
    explanation: "LLMs generate text by predicting likely next tokens from context. They can contain useful knowledge, but they are not exact databases."
  },
  2: {
    question: "LLMs are part of which larger field?",
    choices: ["Natural language processing.", "Computer graphics.", "Database indexing only."],
    answer: 0,
    explanation: "LLMs are a modern family of NLP systems, built for language tasks like summarization, translation, and question answering."
  },
  3: {
    question: "What are tokens?",
    choices: ["Pieces of text the model processes.", "Only complete English words.", "The model's final answers."],
    answer: 0,
    explanation: "Tokens can be words, word pieces, punctuation, or characters depending on the tokenizer."
  },
  4: {
    question: "What does next-token prediction train the model to do?",
    choices: ["Guess the next piece of text from previous context.", "Memorize one official answer for every question.", "Read images without text."],
    answer: 0,
    explanation: "The training objective is usually to predict the next token, repeated across huge text collections."
  },
  5: {
    question: "What is an embedding?",
    choices: ["A vector representation of meaning or text.", "A list of website links.", "A password for model access."],
    answer: 0,
    explanation: "Embeddings represent text as numbers, making similarity search and semantic comparison possible."
  },
  6: {
    question: "What changes during model training?",
    choices: ["Learned parameters inside the model.", "The user's keyboard.", "Only the color of the interface."],
    answer: 0,
    explanation: "Training adjusts parameters so the model becomes better at the prediction task."
  },
  7: {
    question: "Which term means splitting text into model-readable pieces?",
    choices: ["Tokenization.", "Citation.", "Deployment."],
    answer: 0,
    explanation: "Tokenization is the process of splitting text into tokens before the model handles it."
  },
  8: {
    question: "What key idea made transformers powerful for language?",
    choices: ["Attention between tokens.", "Alphabetical sorting.", "Manual grammar rules only."],
    answer: 0,
    explanation: "Attention lets tokens use information from other relevant tokens in the context."
  },
  9: {
    question: "In attention, what is the model trying to decide?",
    choices: ["Which parts of the context matter most.", "Which font to display.", "Which file extension to use."],
    answer: 0,
    explanation: "Attention weights help the model focus on the context that is useful for the current token."
  },
  10: {
    question: "A decoder-only language model usually generates text how?",
    choices: ["Left to right, one token at a time.", "By reading the future answer first.", "Only by copying the prompt."],
    answer: 0,
    explanation: "Decoder-only models generate the next token from the previous context, then repeat."
  },
  11: {
    question: "Why does pretraining data matter?",
    choices: ["It shapes what patterns, languages, and biases the model learns.", "It only changes the website design.", "It is deleted before training starts."],
    answer: 0,
    explanation: "The quality and distribution of training data strongly affect behavior, fairness, and reliability."
  },
  12: {
    question: "Why is loss not enough to judge an LLM?",
    choices: ["Humans also care about truth, helpfulness, safety, and style.", "Loss measures screen brightness.", "Loss only applies to images."],
    answer: 0,
    explanation: "A model can have strong prediction scores while still producing unsafe, biased, or unsupported answers."
  },
  13: {
    question: "What is one common trade-off of scaling models larger?",
    choices: ["Better capability but higher cost and remaining failures.", "No need for data anymore.", "Guaranteed perfect truth."],
    answer: 0,
    explanation: "Scaling often helps, but it does not remove reliability, cost, or safety issues."
  },
  14: {
    question: "Which pipeline is closest to how an LLM handles text?",
    choices: ["Text to tokens to vectors to transformer to generated tokens.", "Text to printer to paper to answer.", "Prompt to spreadsheet only."],
    answer: 0,
    explanation: "The simplified flow is tokenization, numeric representation, transformer processing, and generated output."
  },
  15: {
    question: "What is fine-tuning?",
    choices: ["Additional training to adapt a model to a task or domain.", "Deleting all previous training.", "Changing only the model name."],
    answer: 0,
    explanation: "Fine-tuning starts from a pretrained model and trains further on more specific examples."
  },
  16: {
    question: "What does instruction tuning teach a model?",
    choices: ["To follow user requests more directly.", "To ignore prompts.", "To only predict dictionary definitions."],
    answer: 0,
    explanation: "Instruction tuning changes behavior from raw continuation toward following tasks and requests."
  },
  17: {
    question: "What signal does RLHF use?",
    choices: ["Human preference feedback.", "Random website colors.", "The user's battery level."],
    answer: 0,
    explanation: "RLHF uses human judgments or preferences to reward answers people prefer."
  },
  18: {
    question: "What is a prompt?",
    choices: ["The instruction and context given to the model.", "The model's hidden training data.", "A fixed database table."],
    answer: 0,
    explanation: "Prompts guide the model with instructions, examples, constraints, and context."
  },
  19: {
    question: "What is hallucination in an LLM answer?",
    choices: ["Confident text that is false or unsupported.", "A slow internet connection.", "A correct citation list."],
    answer: 0,
    explanation: "Hallucinations sound plausible but are not grounded in reliable evidence."
  },
  20: {
    question: "Why can LLMs show bias?",
    choices: ["They learn patterns from data and design choices.", "They are always politically neutral by design.", "Bias only exists in images."],
    answer: 0,
    explanation: "Bias can enter through data, labels, model objectives, evaluation gaps, and deployment context."
  },
  21: {
    question: "Why are chat assistants different from raw pretrained models?",
    choices: ["They are adapted to follow instructions and preferences.", "They have no language model inside.", "They cannot generate text."],
    answer: 0,
    explanation: "Chat assistants typically combine pretraining with instruction tuning, alignment, and product rules."
  },
  22: {
    question: "What does RAG add to an LLM system?",
    choices: ["Retrieved documents as extra context.", "A larger monitor.", "Manual typing by a hidden person."],
    answer: 0,
    explanation: "RAG retrieves relevant sources and gives them to the model before generation."
  },
  23: {
    question: "Why is vector search useful in RAG?",
    choices: ["It finds semantically related text chunks.", "It makes the browser faster.", "It replaces all evaluation."],
    answer: 0,
    explanation: "Embeddings let the system search by meaning, not only exact keywords."
  },
  24: {
    question: "What makes tool-using LLM systems harder to evaluate?",
    choices: ["They can take multi-step actions beyond text generation.", "They never produce errors.", "They do not need prompts."],
    answer: 0,
    explanation: "When models call tools, errors can happen in planning, tool choice, inputs, outputs, and final answers."
  },
  25: {
    question: "What should a small LLM thesis evaluation include?",
    choices: ["A clear task, data, metric, and error analysis.", "Only a favorite screenshot.", "No criteria at all."],
    answer: 0,
    explanation: "A manageable evaluation needs a narrow task and transparent scoring."
  },
  26: {
    question: "Why study multilingual LLM behavior?",
    choices: ["Performance can vary across languages and mixed-language prompts.", "All languages use identical tokens.", "Only English text exists online."],
    answer: 0,
    explanation: "Language balance, tokenizer behavior, and training data can affect quality across languages."
  },
  27: {
    question: "What is one advantage of open-weight models for research?",
    choices: ["They can be inspected or run in more controlled ways.", "They are always larger than closed models.", "They remove the need for citations."],
    answer: 0,
    explanation: "Open models often make experiments more reproducible and inspectable, depending on resources."
  },
  28: {
    question: "In simple words, what is RAG best for?",
    choices: ["Grounding answers in external sources.", "Making every answer shorter.", "Avoiding documents completely."],
    answer: 0,
    explanation: "RAG is useful when the model needs specific, current, or private information from documents."
  },
  29: {
    question: "When reading a thesis for foundation, what should you notice first?",
    choices: ["Structure, research question, method, and evidence.", "Only the page count.", "Only the author's font choice."],
    answer: 0,
    explanation: "Studying structure helps you understand how to shape your own thesis."
  },
  30: {
    question: "How should you use a survey paper as a beginner?",
    choices: ["As a map of topics and keywords.", "As something to memorize line by line.", "As a replacement for your research question."],
    answer: 0,
    explanation: "Surveys help you locate concepts, categories, and sources without reading every detail immediately."
  },
  31: {
    question: "What four parts are useful when studying an applied thesis?",
    choices: ["Task, method, data, and result.", "Color, font, margin, and logo.", "Only title and page number."],
    answer: 0,
    explanation: "Applied theses usually become clear when you identify the task, method, data, and result."
  },
  32: {
    question: "What makes a thesis question manageable?",
    choices: ["It is narrow enough to answer with available time and data.", "It tries to solve every AI problem.", "It avoids methods and evidence."],
    answer: 0,
    explanation: "A smaller question is usually stronger because you can answer it clearly."
  },
  33: {
    question: "Which method sentence is strongest?",
    choices: ["I will compare X and Y on Z using metric M.", "I will study everything about AI.", "I will read some stuff maybe."],
    answer: 0,
    explanation: "A concrete comparison with a metric gives your thesis a repeatable shape."
  },
  34: {
    question: "Is a small dataset always bad for a thesis?",
    choices: ["No, if the question and evaluation are honest.", "Yes, all theses require millions of examples.", "No data should ever be described."],
    answer: 0,
    explanation: "Small datasets can work well for pilot studies, qualitative analysis, and focused evaluations."
  },
  35: {
    question: "Why include limitations and ethics?",
    choices: ["They show reliability, risks, and responsible use.", "They make the thesis less honest.", "They are only needed for medical papers."],
    answer: 0,
    explanation: "LLM work often touches privacy, bias, misuse, and factual reliability, so limitations matter."
  },
  36: {
    question: "Which outline fits a simple thesis?",
    choices: ["Introduction, background, related work, method, results, discussion, conclusion.", "Only title and conclusion.", "Appendix before question."],
    answer: 0,
    explanation: "That structure gives readers the problem, context, method, evidence, and takeaway."
  },
  37: {
    question: "What belongs in an annotated bibliography entry?",
    choices: ["What the source is, why it matters, and how you may use it.", "Only the URL.", "A copied abstract with no comment."],
    answer: 0,
    explanation: "Annotations turn sources into usable thesis notes instead of a pile of links."
  },
  38: {
    question: "Why write an experiment plan before testing?",
    choices: ["It keeps prompts, examples, metrics, and failure checks consistent.", "It guarantees perfect results.", "It replaces the need to run anything."],
    answer: 0,
    explanation: "A plan reduces confusion and makes the experiment easier to repeat."
  },
  39: {
    question: "What should a thesis introduction explain?",
    choices: ["Problem, importance, study focus, and reader roadmap.", "Only personal opinions.", "Only equations."],
    answer: 0,
    explanation: "The introduction tells readers why the work matters and what the thesis will do."
  },
  40: {
    question: "What is good related work writing?",
    choices: ["Grouping sources by ideas and showing the gap.", "Listing papers with no connection.", "Avoiding all citations."],
    answer: 0,
    explanation: "Related work should organize existing research and make space for your question."
  },
  41: {
    question: "What makes a method section strong?",
    choices: ["Someone else could repeat the study from it.", "It hides the exact prompts and data.", "It only says the model was interesting."],
    answer: 0,
    explanation: "Repeatability is the heart of a clear method section."
  },
  42: {
    question: "What should your mini thesis proposal contain?",
    choices: ["Title, question, background, method, contribution, and risks.", "Only a dramatic title.", "Only a list of model names."],
    answer: 0,
    explanation: "Those pieces are enough to discuss your thesis direction with a teacher or supervisor."
  }
};

const themes = [
  {
    title: "RAG chunk size comparison for Q&A accuracy",
    tags: ["beginner", "rag", "evaluation"],
    level: "easy",
    question: "Does smaller or larger text chunking make a RAG system answer questions more accurately?",
    method: "Use one small document set, create 30 questions, compare 200-token, 500-token, and 1000-token chunks using answer accuracy and citation support."
  },
  {
    title: "BM25 vs embedding retrieval for LLM answers",
    tags: ["beginner", "rag", "models", "evaluation"],
    level: "easy",
    question: "Which retrieval algorithm gives better context to an LLM: keyword search or embedding search?",
    method: "Build a tiny RAG prototype over course notes, compare retrieved passages using recall@k and final answer correctness."
  },
  {
    title: "Zero-shot vs few-shot prompting on simple CS questions",
    tags: ["beginner", "prompting", "evaluation"],
    level: "easy",
    question: "Do examples inside the prompt improve answers for beginner programming or algorithm questions?",
    method: "Create 40 short CS questions, test zero-shot and few-shot prompts, then score correctness and explanation clarity."
  },
  {
    title: "Chain-of-thought style prompting for algorithm tracing",
    tags: ["beginner", "prompting", "code", "evaluation"],
    level: "easy",
    question: "Does asking for step-by-step reasoning improve answers on sorting, recursion, and Big-O tracing tasks?",
    method: "Use 30 hand-made algorithm questions, compare direct answers with step-by-step prompts, and record accuracy plus common error types."
  },
  {
    title: "Small open model vs larger chatbot for code explanation",
    tags: ["beginner", "models", "code", "evaluation"],
    level: "medium",
    question: "Can a small open model explain beginner code almost as well as a stronger hosted model?",
    method: "Collect 25 short Python/JavaScript snippets, ask both models for explanations, and score correctness, missing details, and readability."
  },
  {
    title: "LLM-generated unit tests for beginner programming tasks",
    tags: ["beginner", "code", "evaluation"],
    level: "easy",
    question: "How good are LLMs at generating useful unit tests for simple programming assignments?",
    method: "Use 20 small functions, generate tests, run them, and measure branch coverage, bug catching, and invalid test cases."
  },
  {
    title: "Fine-tuning vs prompting for text classification",
    tags: ["models", "evaluation"],
    level: "medium",
    question: "For a small classification task, is prompt-only use enough or does a fine-tuned small model win?",
    method: "Use a public sentiment or topic dataset, compare prompt-based LLM classification with a fine-tuned BERT-style model using F1 score."
  },
  {
    title: "LoRA adapter size vs classification performance",
    tags: ["models", "evaluation"],
    level: "medium",
    question: "How much does LoRA rank affect accuracy and training cost on a small NLP task?",
    method: "Fine-tune a small open model with two or three LoRA ranks, track F1 score, training time, and trainable parameter count."
  },
  {
    title: "Japanese-English prompt length and tokenizer behavior",
    tags: ["beginner", "japanese", "models", "evaluation"],
    level: "easy",
    question: "Do Japanese, English, and mixed prompts produce different token counts and answer quality?",
    method: "Compare 30 paired prompts, measure token count, cost proxy, answer completeness, and common failure types."
  },
  {
    title: "Citation faithfulness in a tiny RAG system",
    tags: ["rag", "evaluation"],
    level: "medium",
    question: "When an answer cites a document, did the model really use that document correctly?",
    method: "Create 25 document-grounded questions, generate cited answers, then label each citation as supported, weak, or unsupported."
  },
  {
    title: "Prompt template robustness for API security analysis",
    tags: ["prompting", "code", "evaluation"],
    level: "medium",
    question: "How much does prompt wording change vulnerability detection results?",
    method: "Use a small OpenAPI dataset or handmade API examples, compare three prompt templates, and measure precision and recall."
  },
  {
    title: "Temperature setting and answer stability",
    tags: ["beginner", "models", "evaluation"],
    level: "easy",
    question: "Does model temperature change consistency on simple factual and coding questions?",
    method: "Ask the same 30 questions at different temperature settings, then measure answer variation and correctness."
  },
  {
    title: "Embedding model comparison for semantic search",
    tags: ["beginner", "rag", "models", "evaluation"],
    level: "easy",
    question: "Do different embedding models retrieve different documents for the same query?",
    method: "Use a small notes dataset, compare two embedding models with recall@3 and inspect failure cases."
  },
  {
    title: "Hallucination patterns in code explanation",
    tags: ["beginner", "code", "evaluation"],
    level: "easy",
    question: "What kinds of false claims do LLMs make when explaining short code snippets?",
    method: "Use 30 snippets, ask for explanations, and classify errors as wrong output, wrong variable role, missing edge case, or invented behavior."
  },
  {
    title: "Simple reranking for better RAG retrieval",
    tags: ["rag", "models", "evaluation"],
    level: "medium",
    question: "Does reranking the top retrieved chunks improve answer quality?",
    method: "Compare embedding-only retrieval with embedding plus reranking on 30 questions, measuring recall and answer support."
  },
  {
    title: "BERT-style classifier vs LLM prompt classifier",
    tags: ["beginner", "models", "evaluation"],
    level: "easy",
    question: "For a narrow classification task, which is more reliable: a small trained classifier or an LLM prompt?",
    method: "Use a public dataset, compare accuracy/F1, runtime, and error examples."
  }
];

const library = [
  {
    title: "Large Language Models and How We Train Them",
    type: "Bachelor thesis",
    source: "Harvard University, 2025",
    use: "Best beginner thesis foundation: theory, training, RLHF, and intuitive explanations.",
    url: "https://dash.harvard.edu/entities/publication/dd81fabb-0835-4d94-9916-7177cc93d0f1"
  },
  {
    title: "Benchmarking the Programming Capabilities of Large Language Models",
    type: "Master thesis",
    source: "University of Twente, 2025",
    use: "Very CS-friendly example: compares LLMs on programming tasks using accuracy, maintainability, code quality, and complexity metrics.",
    url: "https://essay.utwente.nl/essays/107146"
  },
  {
    title: "Large Language Models for Numerical Queries",
    type: "Bachelor thesis",
    source: "Czech Technical University, 2024",
    use: "Good example of a small applied experiment with math word problems and code generation.",
    url: "https://dspace.cvut.cz/handle/10467/115466"
  },
  {
    title: "Large Language Model's Ability to Reason about Router Configurations",
    type: "Bachelor thesis",
    source: "ETH Zurich, 2024",
    use: "Useful model for a domain-specific evaluation thesis: one domain, one task, clear reliability question.",
    url: "https://www.research-collection.ethz.ch/handle/20.500.11850/661089"
  },
  {
    title: "Rainbow RAG: An LLM-Powered RAG System for Contract Review",
    type: "Master thesis",
    source: "TU Delft, 2024",
    use: "Good RAG/algorithm reference: chunking, query expansion, reranking, knowledge graphs, and architecture comparison.",
    url: "https://repository.tudelft.nl/record/uuid:d94a45d4-fcb2-4c0e-ad48-7092849fbbff"
  },
  {
    title: "Towards Contextually Aware LLMs for Software Requirements Engineering",
    type: "Master thesis",
    source: "Malardalen University, 2024",
    use: "Applied RAG thesis in software engineering; useful for learning how to evaluate design choices in a system.",
    url: "https://mdu.diva-portal.org/smash/record.jsf?pid=diva2:1901162"
  },
  {
    title: "Detecting BOLA Vulnerabilities with Large Language Models",
    type: "Bachelor thesis",
    source: "University of Twente, 2025",
    use: "Good security/programming evaluation example: prompt engineering, REST APIs, precision, recall, and false positives.",
    url: "https://essay.utwente.nl/essays/107423"
  },
  {
    title: "Evaluating Language Models for Low-Resource NLP",
    type: "Bachelor thesis",
    source: "University of Twente, 2025",
    use: "Good model-comparison thesis: RoBERT-style model versus larger multilingual LLM, evaluated with F1 score.",
    url: "https://essay.utwente.nl/essays/107333"
  },
  {
    title: "A Survey of Large Language Models",
    type: "Survey paper",
    source: "arXiv, 2023",
    use: "Use as a map for background chapters: pretraining, adaptation, use, and evaluation.",
    url: "https://arxiv.org/abs/2303.18223"
  },
  {
    title: "Attention Is All You Need",
    type: "Core paper",
    source: "arXiv, 2017",
    use: "The original Transformer paper. Read the abstract first; do not worry if the math feels heavy.",
    url: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "Language Models are Few-Shot Learners",
    type: "Core paper",
    source: "arXiv, 2020",
    use: "The GPT-3 paper. Good for understanding scale and prompting.",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    type: "Core paper",
    source: "arXiv, 2018",
    use: "Useful if your thesis compares classic encoder models with modern LLM prompting on classification tasks.",
    url: "https://arxiv.org/abs/1810.04805"
  },
  {
    title: "Chain-of-Thought Prompting Elicits Reasoning in LLMs",
    type: "Core paper",
    source: "arXiv, 2022",
    use: "Foundation for prompt-strategy theses about reasoning, algorithm tracing, or step-by-step problem solving.",
    url: "https://arxiv.org/abs/2201.11903"
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    type: "Core paper",
    source: "arXiv, 2021",
    use: "Foundation for easy fine-tuning theses that compare adapter size, trainable parameters, and task performance.",
    url: "https://arxiv.org/abs/2106.09685"
  },
  {
    title: "Training Language Models to Follow Instructions with Human Feedback",
    type: "Core paper",
    source: "arXiv, 2022",
    use: "Foundation for instruction tuning and RLHF.",
    url: "https://arxiv.org/abs/2203.02155"
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    type: "Core paper",
    source: "arXiv, 2020",
    use: "Foundation for RAG, a very thesis-friendly application area.",
    url: "https://arxiv.org/abs/2005.11401"
  },
  {
    title: "Evaluating Large Language Models Trained on Code",
    type: "Core paper",
    source: "arXiv, 2021",
    use: "Foundation for code-generation evaluation and HumanEval-style thesis ideas.",
    url: "https://arxiv.org/abs/2107.03374"
  },
  {
    title: "Hugging Face LLM Course",
    type: "Free course",
    source: "Hugging Face",
    use: "Best practical course path once you want hands-on code.",
    url: "https://huggingface.co/learn/llm-course/en/chapter1/1"
  },
  {
    title: "CS224N: Natural Language Processing with Deep Learning",
    type: "Course",
    source: "Stanford University",
    use: "Use the syllabus to find topics, readings, and project-style ideas.",
    url: "https://web.stanford.edu/class/cs224n/index.html"
  }
];

