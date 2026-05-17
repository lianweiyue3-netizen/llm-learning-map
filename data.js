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

const categoryTracks = [
  {
    id: "llm",
    title: "Large Language Model",
    shortTitle: "LLM",
    level: "42 days | medium",
    summary: "Study how language models tokenize text, use transformers, retrieve documents, and get evaluated. This is the main 42-day path already built into the app.",
    concepts: ["tokens", "embeddings", "transformer", "prompting", "RAG", "evaluation"],
    path: [
      "Finish the Today and Roadmap lessons in order.",
      "Use the mini quiz after each lesson to check understanding.",
      "Write 2-3 daily notes that can become your literature review.",
      "Move one strong idea into the Thesis Builder."
    ],
    thesisIdeas: [
      "Compare BM25 and embedding retrieval for a small course Q&A bot.",
      "Test whether few-shot prompts improve answers to beginner CS questions.",
      "Measure how tokenization changes Japanese-English prompt length and answer quality."
    ],
    sources: [
      {
        label: "Hugging Face LLM Course",
        url: "https://huggingface.co/learn/llm-course/en/chapter1/1"
      },
      {
        label: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762"
      },
      {
        label: "RAG paper",
        url: "https://arxiv.org/abs/2005.11401"
      }
    ],
    actionLabel: "Open LLM daily tracker",
    actionView: "today"
  },
  {
    id: "data-ingestion",
    title: "Data Ingestion",
    shortTitle: "Ingestion",
    level: "35 days | coding-focused",
    summary: "Study how data enters a system from files, APIs, databases, and event streams. This track is coding-focused and research-oriented: parsing, validation, idempotency, schema drift, orchestration, streaming, profiling, and discovery.",
    concepts: ["ETL", "ELT", "schema drift", "idempotency", "CDC", "streaming", "profiling"],
    path: [
      "Start with files, records, schemas, and simple Python ingestion.",
      "Build small batch pipelines with validation, logging, retries, and deduplication.",
      "Learn API, database, scheduling, and CDC ingestion patterns.",
      "Study streaming concepts such as offsets, delivery guarantees, late data, and dead-letter queues.",
      "Connect ingestion to research ideas from data discovery: profiles, signatures, similarity, sampling, and incremental maintenance."
    ],
    thesisIdeas: [
      "Compare full reload, incremental timestamp-based ingestion, and CDC-style ingestion on correctness and runtime.",
      "Build a small ingestion profiler that detects schema drift, duplicates, missing values, and candidate join keys.",
      "Evaluate sampling-based change detection for deciding when an ingested dataset needs re-profiling."
    ],
    sources: [
      {
        label: "Apache Airflow ETL/ELT",
        url: "https://airflow.apache.org/use-cases/etl_analytics/"
      },
      {
        label: "Apache Beam Programming Guide",
        url: "https://beam.apache.org/documentation/programming-guide/"
      },
      {
        label: "Aurum data discovery",
        url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18"
      }
    ],
    actionLabel: "Open Thesis Builder",
    actionView: "builder"
  },
  {
    id: "data-lake",
    title: "Data Lake",
    shortTitle: "Data Lake",
    level: "28 days | easier",
    summary: "Study how organizations store raw and processed data for analytics. This track is shorter than LLM because the beginner thesis scope can stay practical: file formats, metadata, partitioning, query performance, and data quality.",
    concepts: ["object storage", "Parquet", "schema evolution", "partitioning", "metadata catalog", "lakehouse"],
    path: [
      "Learn the difference between database, data warehouse, and data lake.",
      "Read what columnar files like Parquet are used for.",
      "Study partitioning: why folder layout affects query speed.",
      "Compare table formats such as Delta Lake and Apache Iceberg.",
      "Pick one small dataset and design two storage layouts.",
      "Measure query time, file count, or storage size.",
      "Build toward a small 28-day thesis plan with one dataset, one design variable, and one metric."
    ],
    thesisIdeas: [
      "Partition strategy comparison for student activity logs stored as Parquet.",
      "Delta Lake vs Apache Iceberg feature comparison for small analytical datasets.",
      "Data quality rules for a simple data lake ingestion pipeline."
    ],
    sources: [
      {
        label: "Delta Lake documentation",
        url: "https://docs.delta.io/latest/index.html"
      },
      {
        label: "Apache Iceberg documentation",
        url: "https://iceberg.apache.org/docs/latest/"
      },
      {
        label: "HDFS architecture guide",
        url: "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"
      }
    ],
    actionLabel: "Open Thesis Builder",
    actionView: "builder"
  },
  {
    id: "blockchain-consensus",
    title: "Blockchain Consensus",
    shortTitle: "Consensus",
    level: "35 days | harder",
    summary: "Study how distributed nodes agree on one shared history even when messages are delayed or some nodes fail. This track is longer than Data Lake because safety, liveness, BFT, finality, and simulation need slower buildup.",
    concepts: ["blocks", "forks", "safety", "liveness", "PoW", "PoS", "BFT"],
    path: [
      "Start with why distributed systems need consensus.",
      "Learn blocks, forks, confirmations, and finality.",
      "Compare Proof of Work and Proof of Stake at a high level.",
      "Read the basic idea of Byzantine fault tolerance.",
      "Simulate a small voting or leader-based consensus process.",
      "Measure latency, number of messages, or failure tolerance.",
      "Build toward a 35-day simulation or comparison thesis with clear assumptions and measurable tradeoffs."
    ],
    thesisIdeas: [
      "Beginner simulation of PoW difficulty versus block confirmation time.",
      "PBFT-style voting explained and tested with a small message-count simulator.",
      "Comparison of finality and fork behavior in PoW and BFT-style consensus."
    ],
    sources: [
      {
        label: "Bitcoin whitepaper",
        url: "https://bitcoin.org/bitcoin.pdf"
      },
      {
        label: "Practical Byzantine Fault Tolerance",
        url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
      },
      {
        label: "Tendermint consensus paper",
        url: "https://arxiv.org/abs/1807.04938"
      }
    ],
    actionLabel: "Open Thesis Builder",
    actionView: "builder"
  }
];

const dataLakeLessons = [
  {
    id: 1,
    week: "Week 1: Data lake basics",
    title: "What a data lake is",
    focus: "A data lake stores raw and processed data in files so different tools can analyze it later. The hard part is keeping the lake organized enough to trust.",
    learn: "Learn why teams use data lakes instead of only relational databases.",
    practice: "List three kinds of data a university or shop might put in a lake.",
    thesis: "Write one question about organizing raw data for analysis.",
    resource: "HDFS architecture guide",
    url: "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"
  },
  {
    id: 2,
    week: "Week 1: Data lake basics",
    title: "Warehouse vs lake",
    focus: "A warehouse usually stores cleaned, structured tables for analytics. A lake can store raw files first and decide structure later.",
    learn: "Compare schema-on-write and schema-on-read.",
    practice: "Put CSV logs, images, and sales tables into warehouse or lake buckets.",
    thesis: "Write when a data lake is useful and when it becomes messy.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 3,
    week: "Week 1: Data lake basics",
    title: "Files and object storage",
    focus: "Modern data lakes often use cloud object storage or distributed file systems. The basic unit is still files, not database rows.",
    learn: "Study files, folders, buckets, and object keys.",
    practice: "Design folder names for one month of event logs.",
    thesis: "Write how file layout could affect query performance.",
    resource: "HDFS architecture guide",
    url: "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"
  },
  {
    id: 4,
    week: "Week 1: Data lake basics",
    title: "Columnar files and Parquet",
    focus: "Columnar file formats store values by column, which helps analytical queries read only the columns they need.",
    learn: "Read what a columnar format is used for.",
    practice: "Imagine a table with 20 columns; choose only 3 needed for a query.",
    thesis: "Write why columnar storage might be faster for analytics.",
    resource: "Apache Parquet documentation",
    url: "https://parquet.apache.org/docs/"
  },
  {
    id: 5,
    week: "Week 1: Data lake basics",
    title: "Schema and schema evolution",
    focus: "A schema describes fields and types. Real datasets change, so a lake needs rules for adding, removing, or renaming fields safely.",
    learn: "Study what happens when a new column appears.",
    practice: "Add a new field to a user event record and note what could break.",
    thesis: "Write a small schema evolution experiment idea.",
    resource: "Apache Iceberg schema evolution",
    url: "https://iceberg.apache.org/docs/latest/evolution/"
  },
  {
    id: 6,
    week: "Week 1: Data lake basics",
    title: "Partitioning",
    focus: "Partitioning splits files by values such as date or country. Good partitioning can reduce how much data a query scans.",
    learn: "Learn why partitioning by date is common.",
    practice: "Choose partitions for click logs: date, user, page, or country.",
    thesis: "Write how you could compare two partition strategies.",
    resource: "Apache Iceberg partitioning",
    url: "https://iceberg.apache.org/docs/latest/partitioning/"
  },
  {
    id: 7,
    week: "Week 1: Data lake basics",
    title: "Weekly checkpoint",
    focus: "You can now explain the lake idea: files, formats, schemas, and partitions turn raw storage into analyzable data.",
    learn: "Review days 1-6.",
    practice: "Draw a pipeline from raw logs to analytical table.",
    thesis: "Pick one Data Lake thesis direction: layout, schema, quality, or performance.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 8,
    week: "Week 2: Lakehouse systems",
    title: "Metadata catalogs",
    focus: "A catalog records what datasets exist, where files are stored, and what schemas they use. Without metadata, a data lake becomes hard to search.",
    learn: "Study why file lists and schemas need a catalog.",
    practice: "Write metadata fields for a dataset: owner, path, schema, update time.",
    thesis: "Write how metadata improves reproducibility.",
    resource: "Apache Iceberg catalog docs",
    url: "https://iceberg.apache.org/docs/latest/configuration/"
  },
  {
    id: 9,
    week: "Week 2: Lakehouse systems",
    title: "ETL and ELT",
    focus: "ETL transforms data before loading. ELT loads first and transforms later. Data lakes often support both patterns.",
    learn: "Compare ETL and ELT at a high level.",
    practice: "Classify cleaning duplicate rows as ETL or ELT.",
    thesis: "Write one pipeline step you could test with a small dataset.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 10,
    week: "Week 2: Lakehouse systems",
    title: "Data quality rules",
    focus: "Data quality means checking expectations such as not-null fields, valid ranges, unique IDs, and consistent timestamps.",
    learn: "Read about data quality checks conceptually.",
    practice: "Write three rules for a student attendance dataset.",
    thesis: "Write a thesis question about detecting bad records before analysis.",
    resource: "Delta Lake constraints",
    url: "https://docs.delta.io/latest/delta-constraints.html"
  },
  {
    id: 11,
    week: "Week 2: Lakehouse systems",
    title: "Transaction logs",
    focus: "Table formats such as Delta Lake track changes in a transaction log so readers know which files belong to the current table version.",
    learn: "Study why a transaction log helps reliability.",
    practice: "Describe what happens when a file is added, removed, or replaced.",
    thesis: "Write how version history could support reproducible analysis.",
    resource: "Delta Lake transaction log",
    url: "https://docs.delta.io/latest/delta-transaction-log.html"
  },
  {
    id: 12,
    week: "Week 2: Lakehouse systems",
    title: "Snapshots and time travel",
    focus: "Some lakehouse table formats let users query an older version of a table. This helps debugging and reproducibility.",
    learn: "Read about snapshots or time travel.",
    practice: "Imagine a wrong update and how you would inspect the previous version.",
    thesis: "Write a small experiment comparing current vs old table versions.",
    resource: "Apache Iceberg reliability",
    url: "https://iceberg.apache.org/docs/latest/reliability/"
  },
  {
    id: 13,
    week: "Week 2: Lakehouse systems",
    title: "Query performance experiment",
    focus: "A beginner Data Lake thesis can compare file layout, partitioning, and format choices using query time, scanned data, or file count.",
    learn: "Study one metric for query performance.",
    practice: "Design a two-version dataset layout to compare.",
    thesis: "Write method: I will compare X and Y using metric M.",
    resource: "Apache Iceberg performance",
    url: "https://iceberg.apache.org/docs/latest/performance/"
  },
  {
    id: 14,
    week: "Week 2: Lakehouse systems",
    title: "Data Lake thesis checkpoint",
    focus: "A strong beginner thesis is usually a small comparison: partition strategy, data quality rule set, table format feature, or query layout.",
    learn: "Review your Data Lake notes.",
    practice: "Choose one dataset and one measurable metric.",
    thesis: "Draft a 5-line Data Lake proposal.",
    resource: "Apache Iceberg documentation",
    url: "https://iceberg.apache.org/docs/latest/"
  }
];

const blockchainConsensusLessons = [
  {
    id: 1,
    week: "Week 1: Consensus basics",
    title: "Why consensus is needed",
    focus: "Consensus lets many computers agree on one shared state even when they do not all receive messages at the same time.",
    learn: "Learn the distributed systems problem: agreement without one trusted machine.",
    practice: "Imagine three servers deciding one account balance.",
    thesis: "Write one problem that happens if nodes disagree.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 2,
    week: "Week 1: Consensus basics",
    title: "Failures and assumptions",
    focus: "Consensus algorithms make assumptions about crashes, malicious nodes, message delay, and clocks. The assumptions decide what the algorithm can guarantee.",
    learn: "Compare crash failure and Byzantine failure.",
    practice: "Classify a slow node, offline node, and lying node.",
    thesis: "Write why assumptions must be clear in a consensus thesis.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 3,
    week: "Week 1: Consensus basics",
    title: "Blocks and hash links",
    focus: "A blockchain groups transactions into blocks. Each block points to a previous block, creating a tamper-evident chain.",
    learn: "Study block, hash, previous hash, and transaction list.",
    practice: "Draw three blocks connected by previous hash.",
    thesis: "Write how hash links help detect changes.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 4,
    week: "Week 1: Consensus basics",
    title: "Forks and confirmations",
    focus: "A fork happens when nodes temporarily see different valid histories. Confirmation depth reduces the chance that a transaction is reversed.",
    learn: "Read the basic idea of longest-chain selection.",
    practice: "Draw two branches and choose the longer chain.",
    thesis: "Write how fork frequency could become a metric.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 5,
    week: "Week 1: Consensus basics",
    title: "Proof of Work",
    focus: "Proof of Work makes block creation costly by requiring computational effort. This helps secure the chain but uses energy and limits throughput.",
    learn: "Study mining difficulty and nonce at a high level.",
    practice: "Explain why higher difficulty slows block creation.",
    thesis: "Write a simple PoW simulation topic.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 6,
    week: "Week 1: Consensus basics",
    title: "Proof of Stake",
    focus: "Proof of Stake chooses validators based on stake and protocol rules instead of raw computation. It changes energy cost and security assumptions.",
    learn: "Compare PoW miners and PoS validators.",
    practice: "List one benefit and one risk of stake-based voting.",
    thesis: "Write a comparison question about PoW and PoS.",
    resource: "Ethereum proof of stake",
    url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
  },
  {
    id: 7,
    week: "Week 1: Consensus basics",
    title: "Weekly checkpoint",
    focus: "You can now explain blocks, forks, confirmations, PoW, PoS, and why distributed agreement is difficult.",
    learn: "Review days 1-6.",
    practice: "Explain consensus in four sentences.",
    thesis: "Pick one consensus direction: simulation, comparison, or security assumptions.",
    resource: "The Latest Gossip on BFT Consensus",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 8,
    week: "Week 2: BFT and experiments",
    title: "Byzantine Fault Tolerance",
    focus: "BFT algorithms try to keep agreement even if some participants behave incorrectly or maliciously.",
    learn: "Read the PBFT abstract or introduction.",
    practice: "For 4 nodes, mark one node as faulty and ask if 3 honest nodes can agree.",
    thesis: "Write why BFT is useful for permissioned blockchains.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 9,
    week: "Week 2: BFT and experiments",
    title: "PBFT voting phases",
    focus: "PBFT-style consensus uses multiple communication phases so honest nodes can confirm they saw the same proposal.",
    learn: "Learn pre-prepare, prepare, and commit at a high level.",
    practice: "Count messages for 4 nodes sending votes to each other.",
    thesis: "Write a message-complexity experiment idea.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 10,
    week: "Week 2: BFT and experiments",
    title: "Finality",
    focus: "Finality means a decision should not be reversed. Some systems have probabilistic finality; BFT-style systems can offer faster deterministic finality under assumptions.",
    learn: "Compare probabilistic and deterministic finality.",
    practice: "Classify Bitcoin confirmations and PBFT commit as finality styles.",
    thesis: "Write how finality affects user experience.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 11,
    week: "Week 2: BFT and experiments",
    title: "Safety and liveness",
    focus: "Safety means bad things do not happen, such as two conflicting decisions. Liveness means good things eventually happen, such as new blocks being committed.",
    learn: "Study safety vs liveness with simple examples.",
    practice: "Classify a fork as safety issue or a stalled chain as liveness issue.",
    thesis: "Write a metric for safety or liveness in a simulation.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 12,
    week: "Week 2: BFT and experiments",
    title: "Latency and throughput",
    focus: "Consensus protocols trade off speed, number of messages, validator count, and fault tolerance. More communication can improve agreement but reduce throughput.",
    learn: "Learn latency and throughput as performance metrics.",
    practice: "Predict what happens to message count when validators increase from 4 to 10.",
    thesis: "Write a performance comparison question.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 13,
    week: "Week 2: BFT and experiments",
    title: "Simulation design",
    focus: "A beginner thesis can simulate consensus instead of building a real blockchain. You can model nodes, messages, delays, and failures.",
    learn: "Design variables: node count, faulty nodes, delay, and timeout.",
    practice: "Create a table with input variables and output metrics.",
    thesis: "Write method: I will simulate X while changing Y and measuring Z.",
    resource: "The Latest Gossip on BFT Consensus",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 14,
    week: "Week 2: BFT and experiments",
    title: "Consensus thesis checkpoint",
    focus: "A strong beginner consensus thesis usually compares clear tradeoffs: finality, messages, latency, fault tolerance, or fork behavior.",
    learn: "Review your consensus notes.",
    practice: "Choose one algorithm pair or one simulation variable.",
    thesis: "Draft a 5-line Blockchain Consensus proposal.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  }
];

const dataLakeStudyMaterials = {
  1: {
    text: [
      "A data lake is a storage architecture for keeping many kinds of data: logs, CSV files, JSON, images, tables, and processed datasets. Unlike a normal database, the lake does not require every dataset to be perfectly modeled before it is stored.",
      "The danger is that a lake can become a data swamp. The CS problem is designing file layout, metadata, validation, and query patterns so data stays usable."
    ],
    terms: ["raw data", "processed data", "data swamp"],
    cs: "Think of a data lake as a file-based system problem: storage layout plus metadata decides whether analysis is reliable."
  },
  2: {
    text: [
      "A data warehouse usually stores cleaned tables with a planned schema. A data lake can store raw data first, then let different tools interpret it later.",
      "Schema-on-write means data is shaped before storage. Schema-on-read means data is interpreted when it is queried."
    ],
    terms: ["warehouse", "schema-on-write", "schema-on-read"],
    cs: "This is a design tradeoff: stricter structure improves reliability, while flexible storage supports more data types."
  },
  3: {
    text: [
      "Data lakes usually store files in object storage or distributed file systems. Paths and file names become part of the system design.",
      "A query engine may need to list many files before reading data, so too many tiny files or a poor folder layout can slow analysis."
    ],
    terms: ["object storage", "bucket", "file layout"],
    cs: "Storage organization affects algorithmic cost: listing files, pruning files, and reading bytes."
  },
  4: {
    text: [
      "Columnar formats store values by column instead of by row. Analytics often asks for a few columns across many rows, so columnar storage can avoid reading unnecessary fields.",
      "Parquet is a common open columnar format in data lakes."
    ],
    terms: ["columnar format", "Parquet", "scan"],
    cs: "You can measure the benefit by comparing query time or bytes scanned for row-like CSV versus columnar Parquet."
  },
  5: {
    text: [
      "A schema defines fields and their types. Real data changes over time: new columns appear, old fields disappear, and types sometimes change.",
      "Schema evolution is the controlled process of changing a dataset while keeping old data and queries understandable."
    ],
    terms: ["schema", "type", "schema evolution"],
    cs: "Schema evolution is a compatibility problem: can old readers and new writers safely use the same dataset?"
  },
  6: {
    text: [
      "Partitioning splits data into groups, often by date or region. A query that filters by partition value can skip many files.",
      "Bad partitioning creates too many small files or does not match real query patterns."
    ],
    terms: ["partition", "pruning", "query pattern"],
    cs: "This is a good thesis variable: change partition strategy and measure query performance."
  },
  7: {
    text: [
      "The first week gives you enough vocabulary to discuss data lakes as systems: files, formats, schemas, partitions, and metadata.",
      "A manageable thesis should compare one design choice with one metric, not try to build a full company-scale platform."
    ],
    terms: ["layout", "metric", "tradeoff"],
    cs: "Keep the experiment small: one dataset, two layouts, one query workload, and one or two metrics."
  },
  8: {
    text: [
      "A metadata catalog helps users find datasets and understand their structure. It records names, schemas, locations, owners, and update times.",
      "Without a catalog, people must guess which files are current and what each field means."
    ],
    terms: ["catalog", "metadata", "dataset owner"],
    cs: "Metadata is indexing for human and machine discovery; better metadata reduces search and interpretation cost."
  },
  9: {
    text: [
      "ETL means extract, transform, load. ELT means extract, load, transform. In data lakes, raw data is often loaded first and transformed later.",
      "The right choice depends on data quality, cost, and how quickly raw data must be available."
    ],
    terms: ["ETL", "ELT", "pipeline"],
    cs: "A pipeline can be modeled as steps with inputs, outputs, validation rules, and failure points."
  },
  10: {
    text: [
      "Data quality rules check whether data is usable. Common checks include required fields, valid ranges, unique IDs, and timestamp consistency.",
      "Quality checks make analytics more trustworthy and give your thesis clear measurable outcomes."
    ],
    terms: ["not-null", "valid range", "duplicate"],
    cs: "A rule-based validator is simple to implement and easy to evaluate with precision, recall, or number of detected errors."
  },
  11: {
    text: [
      "A transaction log records table changes. Instead of guessing which files are active, a reader can follow the log to find the current version.",
      "This helps with reliability because updates become explicit operations."
    ],
    terms: ["transaction log", "commit", "table version"],
    cs: "The log acts like system state. A thesis can study how version tracking improves reproducibility."
  },
  12: {
    text: [
      "Snapshots capture a table at a point in time. Time travel lets a user query an older snapshot to debug or reproduce an analysis.",
      "This is useful when data changes but research results need to be explainable later."
    ],
    terms: ["snapshot", "time travel", "reproducibility"],
    cs: "Versioned data turns data management into a state history problem."
  },
  13: {
    text: [
      "A performance experiment needs a workload and metrics. Example metrics are query time, number of scanned files, bytes read, and storage size.",
      "The strongest beginner setup compares two simple designs under the same queries."
    ],
    terms: ["workload", "query time", "bytes scanned"],
    cs: "Control variables carefully: same data, same machine, same queries, only one design choice changed."
  },
  14: {
    text: [
      "Your Data Lake thesis can be small and still valid if it has a clear question, method, metric, and limitation.",
      "Good beginner directions include partitioning, quality rules, schema evolution examples, and table format comparison."
    ],
    terms: ["research question", "method", "limitation"],
    cs: "A thesis proposal should explain what changes, what is measured, and why the result matters."
  }
};

const blockchainConsensusStudyMaterials = {
  1: {
    text: [
      "Consensus is the problem of getting distributed nodes to agree. In blockchain, they must agree on which transactions happened and in what order.",
      "Without consensus, two users could see different histories and the system would not be reliable."
    ],
    terms: ["node", "agreement", "shared state"],
    cs: "Consensus is a distributed algorithm problem, not only a cryptocurrency topic."
  },
  2: {
    text: [
      "A crash failure means a node stops. A Byzantine failure means a node may act incorrectly, lie, or send conflicting messages.",
      "Consensus algorithms are only meaningful when their failure model is clear."
    ],
    terms: ["crash failure", "Byzantine failure", "assumption"],
    cs: "Your thesis must state the fault model before comparing algorithms."
  },
  3: {
    text: [
      "A block contains data and points to the previous block with a hash. Changing an old block changes its hash, which breaks later links.",
      "This does not solve consensus alone, but it makes history tamper-evident."
    ],
    terms: ["block", "hash", "previous hash"],
    cs: "Hash links are a data structure technique for detecting changes."
  },
  4: {
    text: [
      "Forks happen when nodes temporarily build on different blocks. Longest-chain style systems resolve forks by choosing the branch with more accumulated work or weight.",
      "Confirmations reduce risk because older blocks become harder to replace."
    ],
    terms: ["fork", "branch", "confirmation"],
    cs: "Fork behavior can be simulated by changing network delay and block interval."
  },
  5: {
    text: [
      "Proof of Work requires miners to solve a costly puzzle. The puzzle makes it expensive to rewrite history.",
      "The tradeoff is energy cost and limited throughput."
    ],
    terms: ["miner", "nonce", "difficulty"],
    cs: "PoW is easy to simulate at toy scale by changing difficulty and measuring attempts."
  },
  6: {
    text: [
      "Proof of Stake chooses validators using stake and protocol rules. It avoids mining work but depends on different incentives and penalties.",
      "The design question is how to choose validators and punish bad behavior."
    ],
    terms: ["validator", "stake", "slashing"],
    cs: "Compare consensus mechanisms by assumptions, cost, finality, and attack model."
  },
  7: {
    text: [
      "You now have the vocabulary for blockchain consensus: nodes, blocks, forks, PoW, PoS, and failures.",
      "A beginner thesis can focus on simulation and metrics instead of production blockchain engineering."
    ],
    terms: ["simulation", "metric", "tradeoff"],
    cs: "Keep scope small: one simplified algorithm, one variable, one output metric."
  },
  8: {
    text: [
      "Byzantine Fault Tolerance means the system can still agree when some nodes behave badly.",
      "Classic BFT protocols often need enough honest nodes to outvote faulty behavior."
    ],
    terms: ["BFT", "faulty node", "honest node"],
    cs: "BFT is useful for permissioned systems where validators are known."
  },
  9: {
    text: [
      "PBFT-style algorithms use phases of voting. Nodes first hear a proposal, then exchange votes to prove they saw the same proposal.",
      "The cost is many messages between validators."
    ],
    terms: ["pre-prepare", "prepare", "commit"],
    cs: "Message count is a measurable algorithmic cost."
  },
  10: {
    text: [
      "Finality describes when a decision should no longer be reversed. PoW systems often use probabilistic finality; BFT systems can commit final decisions under assumptions.",
      "Different finality styles affect speed and user confidence."
    ],
    terms: ["finality", "probabilistic", "deterministic"],
    cs: "Finality can be compared as confirmation depth, commit time, or reversal probability."
  },
  11: {
    text: [
      "Safety means two conflicting decisions should not both be accepted. Liveness means the system should keep making progress.",
      "Some network problems can protect safety while hurting liveness."
    ],
    terms: ["safety", "liveness", "stall"],
    cs: "These are correctness properties; use them to organize your literature review."
  },
  12: {
    text: [
      "Latency is how long a decision takes. Throughput is how many transactions or blocks the system handles per time unit.",
      "More validators can improve decentralization but may increase message cost."
    ],
    terms: ["latency", "throughput", "validator count"],
    cs: "Performance evaluation needs fixed assumptions and repeated runs."
  },
  13: {
    text: [
      "A consensus simulation can model nodes, messages, delays, leader choice, and faulty behavior.",
      "You do not need a full blockchain to study one consensus tradeoff."
    ],
    terms: ["model", "variable", "output metric"],
    cs: "A small simulator is acceptable if the assumptions and limits are explicit."
  },
  14: {
    text: [
      "Your consensus thesis should be narrow: compare one or two algorithms, or test one variable in a simulation.",
      "Good metrics include message count, commit latency, fork frequency, or tolerance to faulty nodes."
    ],
    terms: ["comparison", "message count", "commit latency"],
    cs: "The proposal should connect algorithm behavior to a metric you can actually measure."
  }
};

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
  },
  {
    title: "Schema drift detection for CSV ingestion",
    tags: ["beginner", "ingestion", "evaluation"],
    level: "easy",
    question: "Can a small validation script detect useful schema changes before bad data enters a pipeline?",
    method: "Create several CSV versions with missing columns, added columns, and type changes, then measure detection precision and false alarms."
  },
  {
    title: "Full reload vs incremental ingestion",
    tags: ["beginner", "ingestion", "systems", "evaluation"],
    level: "easy",
    question: "When is incremental ingestion faster than full reload, and what correctness risks does it introduce?",
    method: "Build two Python ingestion scripts over timestamped records, compare runtime, missing-record rate, duplicate rate, and recovery after failure."
  },
  {
    title: "Ingestion-time profiling for data discovery",
    tags: ["ingestion", "systems", "evaluation"],
    level: "medium",
    question: "Does producing column profiles during ingestion make it easier to find related datasets later?",
    method: "During ingestion, store schema, null rate, unique count, and sample values, then use simple similarity scoring to find candidate joins."
  },
  {
    title: "Sampling-based re-profiling after data changes",
    tags: ["ingestion", "systems", "evaluation"],
    level: "medium",
    question: "Can sampling decide when a dataset needs full re-profiling without rereading everything?",
    method: "Simulate changed columns, compare old/new samples, and measure whether a threshold correctly triggers profile recomputation."
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

const dataLakeQuizzes = {
  1: {
    question: "What is the main purpose of a data lake?",
    choices: ["Store many kinds of raw and processed data for later analysis.", "Only store one perfectly designed table.", "Replace every file with a chatbot."],
    answer: 0,
    explanation: "A data lake stores flexible datasets, but still needs organization and metadata."
  },
  2: {
    question: "What does schema-on-read mean?",
    choices: ["Data is interpreted when it is queried.", "Data has no structure forever.", "Data is deleted before storage."],
    answer: 0,
    explanation: "Schema-on-read delays interpretation until analysis time."
  },
  3: {
    question: "Why does file layout matter in a data lake?",
    choices: ["It affects file discovery, pruning, and query cost.", "It only changes icon colors.", "It prevents all data errors automatically."],
    answer: 0,
    explanation: "Query engines often need to list and scan files, so layout affects performance."
  },
  4: {
    question: "Why are columnar formats useful for analytics?",
    choices: ["Queries can read only needed columns.", "They force every query to read every row as text.", "They remove the need for schemas."],
    answer: 0,
    explanation: "Columnar storage helps analytical queries skip unused columns."
  },
  5: {
    question: "What is schema evolution?",
    choices: ["Changing a dataset schema in a controlled way over time.", "Never allowing new columns.", "Randomly renaming files."],
    answer: 0,
    explanation: "Schema evolution handles real data changes while protecting compatibility."
  },
  6: {
    question: "What is a common reason to partition data by date?",
    choices: ["Many queries filter by time, so old partitions can be skipped.", "Dates make files look nicer.", "Partitioning by date encrypts the data."],
    answer: 0,
    explanation: "Partition pruning can reduce the amount of data scanned."
  },
  7: {
    question: "What is a manageable Data Lake thesis shape?",
    choices: ["Compare one design choice with one or two metrics.", "Build an entire cloud platform alone.", "Avoid all measurements."],
    answer: 0,
    explanation: "Small, controlled comparisons are realistic for beginner CS research."
  },
  8: {
    question: "What does a metadata catalog help with?",
    choices: ["Finding datasets and understanding schemas and locations.", "Training an LLM by itself.", "Making bad data correct automatically."],
    answer: 0,
    explanation: "Catalog metadata makes datasets discoverable and understandable."
  },
  9: {
    question: "In ELT, when does transformation usually happen?",
    choices: ["After data is loaded.", "Before extraction.", "Never."],
    answer: 0,
    explanation: "ELT loads first, then transforms inside or near the analytical system."
  },
  10: {
    question: "Which is an example of a data quality rule?",
    choices: ["Student ID must not be empty.", "All files must be blue.", "Queries must be written at night."],
    answer: 0,
    explanation: "Not-null checks are common data quality rules."
  },
  11: {
    question: "What does a transaction log help a lakehouse table know?",
    choices: ["Which files belong to the current table version.", "The user's favorite color.", "The weather forecast."],
    answer: 0,
    explanation: "Transaction logs make table changes explicit and reliable."
  },
  12: {
    question: "Why is time travel useful in data tables?",
    choices: ["It helps inspect older versions for debugging and reproducibility.", "It changes the real date.", "It removes the need for backups in all cases."],
    answer: 0,
    explanation: "Older snapshots can explain or reproduce previous results."
  },
  13: {
    question: "Which metric fits a Data Lake performance experiment?",
    choices: ["Query time or bytes scanned.", "Keyboard color.", "Number of presentation slides only."],
    answer: 0,
    explanation: "Query time and bytes scanned directly measure performance effects."
  },
  14: {
    question: "What should your Data Lake proposal clearly state?",
    choices: ["Question, method, metric, and limitation.", "Only a broad topic name.", "Only tool logos."],
    answer: 0,
    explanation: "A clear proposal must be narrow and measurable."
  }
};

const blockchainConsensusQuizzes = {
  1: {
    question: "What is consensus in distributed systems?",
    choices: ["Nodes agreeing on one shared state or decision.", "One computer ignoring all others.", "A password storage format."],
    answer: 0,
    explanation: "Consensus is about agreement among distributed nodes."
  },
  2: {
    question: "What is a Byzantine failure?",
    choices: ["A node may behave incorrectly or maliciously.", "A node only stops quietly.", "A node becomes faster."],
    answer: 0,
    explanation: "Byzantine faults include arbitrary or dishonest behavior."
  },
  3: {
    question: "Why do blocks include the previous block hash?",
    choices: ["To link history and make tampering visible.", "To make images load faster.", "To remove all network delay."],
    answer: 0,
    explanation: "Changing old data changes hashes and breaks later links."
  },
  4: {
    question: "What is a blockchain fork?",
    choices: ["Different nodes temporarily seeing different valid branches.", "A database backup file.", "A type of encryption key only."],
    answer: 0,
    explanation: "Forks are competing histories that the protocol must resolve."
  },
  5: {
    question: "What does Proof of Work make expensive?",
    choices: ["Creating or rewriting blocks.", "Reading the website.", "Writing a thesis title."],
    answer: 0,
    explanation: "PoW uses computational cost to protect the chain."
  },
  6: {
    question: "In Proof of Stake, what role do validators play?",
    choices: ["They help propose or vote on blocks based on protocol rules.", "They compress images.", "They remove all failures."],
    answer: 0,
    explanation: "Validators participate in consensus using stake-based rules."
  },
  7: {
    question: "What is a good beginner consensus thesis method?",
    choices: ["A small simulation with clear variables and metrics.", "A full global blockchain launch.", "Only opinions with no experiment."],
    answer: 0,
    explanation: "Simulation is realistic and measurable for a student project."
  },
  8: {
    question: "What does BFT try to tolerate?",
    choices: ["Some faulty or malicious nodes.", "Only perfect networks.", "Only empty blocks."],
    answer: 0,
    explanation: "BFT protocols aim to maintain agreement despite faulty behavior."
  },
  9: {
    question: "Why can PBFT-style protocols become expensive as validators increase?",
    choices: ["Many validators exchange many messages.", "They require no communication.", "They store no data."],
    answer: 0,
    explanation: "Message complexity is a key cost in BFT-style consensus."
  },
  10: {
    question: "What does finality mean?",
    choices: ["A decision should not be reversed after it is final.", "A node has the largest screen.", "A transaction has no data."],
    answer: 0,
    explanation: "Finality is about confidence that accepted history will not change."
  },
  11: {
    question: "Which statement describes liveness?",
    choices: ["The system eventually keeps making progress.", "The system accepts two conflicting blocks.", "The system deletes all messages."],
    answer: 0,
    explanation: "Liveness means good events eventually happen."
  },
  12: {
    question: "What is throughput?",
    choices: ["How much work the system processes per time unit.", "How old a block is.", "How many colors the UI has."],
    answer: 0,
    explanation: "Throughput measures processing rate."
  },
  13: {
    question: "What can a consensus simulator vary?",
    choices: ["Node count, delay, faulty nodes, or timeout.", "Only font size.", "Only the project folder name."],
    answer: 0,
    explanation: "These variables directly affect consensus behavior."
  },
  14: {
    question: "Which metric fits a consensus thesis?",
    choices: ["Message count, commit latency, or fork frequency.", "Number of CSS files only.", "Color saturation."],
    answer: 0,
    explanation: "These metrics connect to consensus performance and correctness."
  }
};

dataLakeLessons.push(
  {
    id: 15,
    week: "Week 3: Query and optimization",
    title: "SQL over files",
    focus: "Query engines can read lake files and expose them like tables. The engine relies on metadata, schema, and file format to avoid scanning everything.",
    learn: "Learn why a query engine needs table metadata.",
    practice: "Write one SQL question over a folder of event logs.",
    thesis: "Write how SQL over files differs from SQL over a database table.",
    resource: "Apache Iceberg documentation",
    url: "https://iceberg.apache.org/docs/latest/"
  },
  {
    id: 16,
    week: "Week 3: Query and optimization",
    title: "Predicate pushdown",
    focus: "Predicate pushdown means filters are applied as early as possible so the system reads less data.",
    learn: "Study how a where clause can reduce scanned files or row groups.",
    practice: "Pick a query filter and decide what data can be skipped.",
    thesis: "Write a question about whether file format affects filter performance.",
    resource: "Apache Parquet documentation",
    url: "https://parquet.apache.org/docs/"
  },
  {
    id: 17,
    week: "Week 3: Query and optimization",
    title: "The small files problem",
    focus: "Many tiny files can make queries slow because the engine pays overhead for listing, opening, and planning each file.",
    learn: "Learn why file count matters, not only total data size.",
    practice: "Compare 10 large files with 1000 tiny files for the same data.",
    thesis: "Write a thesis idea about file size and query time.",
    resource: "Delta Lake optimization",
    url: "https://docs.delta.io/latest/optimizations-oss.html"
  },
  {
    id: 18,
    week: "Week 3: Query and optimization",
    title: "Compaction",
    focus: "Compaction rewrites many small files into fewer larger files. It can improve query performance but costs time and compute.",
    learn: "Study why compaction is a maintenance operation.",
    practice: "Write when you would compact a dataset.",
    thesis: "Write a variable: compacted vs not compacted.",
    resource: "Delta Lake optimization",
    url: "https://docs.delta.io/latest/optimizations-oss.html"
  },
  {
    id: 19,
    week: "Week 3: Query and optimization",
    title: "Statistics and pruning",
    focus: "Table formats can store statistics such as min and max values. Query engines use these statistics to skip files that cannot match a filter.",
    learn: "Learn min/max statistics at a high level.",
    practice: "For ages 18-22 in a file, decide if a query age > 50 should scan it.",
    thesis: "Write how metadata statistics can improve query planning.",
    resource: "Apache Iceberg performance",
    url: "https://iceberg.apache.org/docs/latest/performance/"
  },
  {
    id: 20,
    week: "Week 3: Query and optimization",
    title: "Cost and reproducibility",
    focus: "A data lake experiment should track tool version, local machine, dataset size, and repeated runs. Otherwise query timing results are hard to trust.",
    learn: "Study why reproducible performance testing needs controlled conditions.",
    practice: "Write a small experiment log template.",
    thesis: "Write two threats to validity for a performance thesis.",
    resource: "Apache Iceberg performance",
    url: "https://iceberg.apache.org/docs/latest/performance/"
  },
  {
    id: 21,
    week: "Week 3: Query and optimization",
    title: "Optimization checkpoint",
    focus: "You now know the main performance variables: file format, partitioning, file count, compaction, statistics, and query workload.",
    learn: "Review days 15-20.",
    practice: "Pick two optimization variables and reject one as too large for your thesis.",
    thesis: "Choose one Data Lake experiment variable.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 22,
    week: "Week 4: Data Lake thesis plan",
    title: "Choose a small dataset",
    focus: "A practical Data Lake thesis can use a small public dataset or a generated dataset. The key is having repeatable data and meaningful queries.",
    learn: "Learn what makes a dataset thesis-friendly.",
    practice: "Pick one dataset shape: logs, transactions, sensor readings, or student records.",
    thesis: "Write dataset, columns, size, and source.",
    resource: "Apache Parquet documentation",
    url: "https://parquet.apache.org/docs/"
  },
  {
    id: 23,
    week: "Week 4: Data Lake thesis plan",
    title: "Build a baseline",
    focus: "A baseline is the simple version you compare against. For Data Lake, it might be CSV, unpartitioned Parquet, or no quality checks.",
    learn: "Study why experiments need a baseline.",
    practice: "Write baseline vs improved design for your dataset.",
    thesis: "Write: I compare baseline X against improved Y.",
    resource: "Apache Iceberg documentation",
    url: "https://iceberg.apache.org/docs/latest/"
  },
  {
    id: 24,
    week: "Week 4: Data Lake thesis plan",
    title: "Choose metrics",
    focus: "Good Data Lake metrics are concrete: query time, bytes scanned, number of files, storage size, failed quality checks, or reproducibility steps.",
    learn: "Choose one speed metric and one reliability metric.",
    practice: "Create a two-column metric table.",
    thesis: "Write why each metric answers your question.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 25,
    week: "Week 4: Data Lake thesis plan",
    title: "Error analysis for data quality",
    focus: "If your thesis studies data quality, error analysis means classifying bad records and explaining which rules caught or missed them.",
    learn: "Study false positive and false negative at a high level.",
    practice: "Invent five bad records and decide which rule catches each.",
    thesis: "Write an error category list.",
    resource: "Delta Lake constraints",
    url: "https://docs.delta.io/latest/delta-constraints.html"
  },
  {
    id: 26,
    week: "Week 4: Data Lake thesis plan",
    title: "Compare table formats carefully",
    focus: "Comparing Delta Lake and Iceberg is possible, but a beginner thesis should compare a few features or one workflow, not every internal detail.",
    learn: "Pick one comparison area: schema evolution, snapshots, or performance.",
    practice: "Write which features are in scope and out of scope.",
    thesis: "Write a narrow table-format comparison question.",
    resource: "Apache Iceberg documentation",
    url: "https://iceberg.apache.org/docs/latest/"
  },
  {
    id: 27,
    week: "Week 4: Data Lake thesis plan",
    title: "Limitations and validity",
    focus: "A small Data Lake experiment has limits: local machine, small dataset, synthetic workload, cache effects, and tool version differences.",
    learn: "Read your own plan and find weak assumptions.",
    practice: "Write three limitations honestly.",
    thesis: "Write how you will reduce one limitation.",
    resource: "Delta Lake documentation",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    id: 28,
    week: "Week 4: Data Lake thesis plan",
    title: "Data Lake proposal",
    focus: "You now have enough for a Data Lake mini proposal: question, dataset, baseline, method, metrics, expected result, and limitations.",
    learn: "Review days 22-27.",
    practice: "Fill the Builder tab with a Data Lake topic.",
    thesis: "Draft your Data Lake thesis proposal in 6-8 sentences.",
    resource: "Builder tab",
    url: "#builder"
  }
);

Object.assign(dataLakeStudyMaterials, {
  15: {
    text: ["Query engines can treat files as tables when they know schema, location, and format. This is why metadata is central to a useful data lake.", "The beginner idea is simple: the less unnecessary data a query reads, the better the design usually is."],
    terms: ["query engine", "table metadata", "SQL"],
    cs: "SQL over files connects storage layout to query planning."
  },
  16: {
    text: ["Predicate pushdown applies filters early. If a query asks for date = 2026-05-01, the engine should avoid files from other dates.", "Formats and metadata decide how much skipping is possible."],
    terms: ["predicate", "pushdown", "filter"],
    cs: "This is an optimization problem: reduce work while preserving correct results."
  },
  17: {
    text: ["Small files create overhead even if total data size is not large. The engine must list, open, and plan around many files.", "This is a common practical data lake problem and a good thesis topic because it is measurable."],
    terms: ["small files", "planning overhead", "file count"],
    cs: "Measure file count against query time while keeping total rows constant."
  },
  18: {
    text: ["Compaction rewrites small files into larger files. It can improve query speed, but it is not free because rewriting data costs compute.", "A good experiment compares before and after compaction under the same queries."],
    terms: ["compaction", "rewrite", "maintenance"],
    cs: "This is a tradeoff between maintenance cost and query performance."
  },
  19: {
    text: ["Statistics such as min and max values let a query engine skip irrelevant files. For example, if a file only contains ages 18-22, it cannot answer age > 50.", "These statistics make metadata useful for performance, not only documentation."],
    terms: ["statistics", "min/max", "pruning"],
    cs: "Metadata can act like a lightweight index."
  },
  20: {
    text: ["Performance tests are noisy. Caches, background processes, data size, and tool versions can change results.", "A thesis should record conditions and repeat tests enough to make results believable."],
    terms: ["reproducibility", "cache", "tool version"],
    cs: "Experimental control matters as much as code implementation."
  },
  21: {
    text: ["You now have a practical optimization map: file format, partitioning, small files, compaction, metadata statistics, and reproducibility.", "A good thesis chooses one variable and studies it carefully."],
    terms: ["optimization", "variable", "workload"],
    cs: "A narrow experiment is stronger than a broad tool survey."
  },
  22: {
    text: ["A thesis-friendly dataset has clear columns, repeatable source, and queries that make sense. It does not need to be huge.", "For a beginner thesis, a small dataset with honest limits is acceptable."],
    terms: ["dataset", "columns", "workload"],
    cs: "Data selection defines what your experiment can and cannot claim."
  },
  23: {
    text: ["A baseline is the simple design you improve on. Without a baseline, your result has no comparison point.", "Examples include CSV vs Parquet or unpartitioned vs partitioned layout."],
    terms: ["baseline", "comparison", "control"],
    cs: "Controlled comparison is the core of an experimental thesis."
  },
  24: {
    text: ["Metrics turn a broad question into an answerable experiment. Use direct measurements such as query time, files scanned, storage size, or quality errors found.", "Use at most a few metrics so analysis stays clear."],
    terms: ["metric", "query time", "storage size"],
    cs: "Metrics should match the research question, not just be easy to collect."
  },
  25: {
    text: ["Data quality experiments need error categories. A rule may catch real errors, miss errors, or flag good records incorrectly.", "This makes false positives and false negatives useful even outside machine learning."],
    terms: ["false positive", "false negative", "error category"],
    cs: "Rule evaluation can be measured with simple classification counts."
  },
  26: {
    text: ["Table format comparison can become too broad. Keep it narrow by comparing one feature area, such as snapshots or schema evolution.", "A useful thesis explains scope clearly."],
    terms: ["Delta Lake", "Iceberg", "scope"],
    cs: "Feature comparison should still include a method, not only a description."
  },
  27: {
    text: ["Limitations protect your thesis from overclaiming. Small local experiments cannot prove cloud-scale performance.", "Good limitations make the work more credible, not weaker."],
    terms: ["validity", "limitation", "assumption"],
    cs: "Every systems experiment depends on environment assumptions."
  },
  28: {
    text: ["A Data Lake proposal can now be practical and focused. It should name the dataset, design variable, baseline, metrics, and expected tradeoff.", "This is enough to discuss the topic with a teacher."],
    terms: ["proposal", "baseline", "tradeoff"],
    cs: "The proposal is a testable plan, not just an interest area."
  }
});

Object.assign(dataLakeQuizzes, {
  15: { question: "What lets a query engine treat files like tables?", choices: ["Schema, location, format, and metadata.", "Only the file icon.", "A hidden manual worker."], answer: 0, explanation: "Metadata tells the engine how to read files as tables." },
  16: { question: "What is predicate pushdown?", choices: ["Applying filters early to read less data.", "Moving files to the desktop.", "Turning SQL into images."], answer: 0, explanation: "Early filtering reduces unnecessary scanning." },
  17: { question: "Why can many small files hurt performance?", choices: ["They increase listing, opening, and planning overhead.", "They make data more accurate automatically.", "They remove schemas."], answer: 0, explanation: "Small files add overhead even when total data size is unchanged." },
  18: { question: "What does compaction do?", choices: ["Rewrites many small files into fewer larger files.", "Deletes all metadata.", "Changes SQL into Python."], answer: 0, explanation: "Compaction is a maintenance step for file layout." },
  19: { question: "How can min/max statistics help queries?", choices: ["They help skip files that cannot match a filter.", "They translate text.", "They make every query exact by default."], answer: 0, explanation: "Statistics support pruning." },
  20: { question: "Why record tool versions in a performance experiment?", choices: ["Version changes can affect results.", "It improves monitor brightness.", "It replaces metrics."], answer: 0, explanation: "Reproducibility requires environment details." },
  21: { question: "What is the strongest beginner optimization thesis scope?", choices: ["One variable, one workload, clear metrics.", "Every feature of every tool.", "No measurement."], answer: 0, explanation: "Narrow controlled experiments are more reliable." },
  22: { question: "What makes a dataset thesis-friendly?", choices: ["Clear columns, repeatable source, and meaningful queries.", "Only a large file name.", "No documentation."], answer: 0, explanation: "The dataset must support the research question." },
  23: { question: "What is a baseline?", choices: ["The simple design used for comparison.", "The final paragraph only.", "A random chart color."], answer: 0, explanation: "A baseline gives results context." },
  24: { question: "Which metric fits Data Lake performance?", choices: ["Query time.", "Wallpaper color.", "Number of tabs open."], answer: 0, explanation: "Query time directly measures performance." },
  25: { question: "What is a false positive in data quality checking?", choices: ["A good record incorrectly flagged as bad.", "A broken monitor.", "A schema that never changes."], answer: 0, explanation: "False positives are incorrect alerts." },
  26: { question: "How should a beginner compare Delta Lake and Iceberg?", choices: ["Compare one focused feature or workflow.", "Compare every internal detail.", "Avoid any method."], answer: 0, explanation: "Narrow scope keeps the thesis manageable." },
  27: { question: "Why include limitations?", choices: ["They prevent overclaiming and clarify assumptions.", "They make all results invalid.", "They replace experiments."], answer: 0, explanation: "Limitations make claims more precise." },
  28: { question: "What belongs in a Data Lake proposal?", choices: ["Dataset, variable, baseline, metrics, and limitations.", "Only a tool logo.", "Only a broad title."], answer: 0, explanation: "A proposal must describe a testable plan." }
});

blockchainConsensusLessons.push(
  {
    id: 15,
    week: "Week 3: Consensus mechanisms",
    title: "Difficulty and block interval",
    focus: "In PoW systems, difficulty controls how hard it is to find a block. Block interval affects confirmation speed and fork probability.",
    learn: "Study why difficulty adjustment exists.",
    practice: "Predict what happens when blocks are found too quickly.",
    thesis: "Write a simulation variable for PoW difficulty.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 16,
    week: "Week 3: Consensus mechanisms",
    title: "Network delay",
    focus: "Messages take time to reach nodes. Higher delay can increase forks, slow finality, or cause timeouts.",
    learn: "Learn why network assumptions matter.",
    practice: "Draw two miners finding blocks before hearing about each other.",
    thesis: "Write how delay could affect fork frequency.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 17,
    week: "Week 3: Consensus mechanisms",
    title: "Validator selection",
    focus: "PoS systems need a way to choose who proposes and validates blocks. Selection rules affect fairness, security, and performance.",
    learn: "Study validator selection at a high level.",
    practice: "Compare random selection with stake-weighted selection.",
    thesis: "Write one fairness question about validator selection.",
    resource: "Ethereum proof of stake",
    url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
  },
  {
    id: 18,
    week: "Week 3: Consensus mechanisms",
    title: "Incentives and penalties",
    focus: "Consensus mechanisms use rewards and penalties to shape participant behavior. In PoS, penalties can discourage validators from acting incorrectly.",
    learn: "Learn why incentives are part of protocol design.",
    practice: "List one behavior to reward and one behavior to punish.",
    thesis: "Write how incentives differ from correctness guarantees.",
    resource: "Ethereum proof of stake",
    url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
  },
  {
    id: 19,
    week: "Week 3: Consensus mechanisms",
    title: "Leader-based consensus",
    focus: "Many protocols choose a leader or proposer for each round. If the leader is slow or faulty, the protocol needs a recovery plan.",
    learn: "Study the idea of proposer or leader.",
    practice: "Draw one leader sending a proposed block to validators.",
    thesis: "Write how faulty leaders affect liveness.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 20,
    week: "Week 3: Consensus mechanisms",
    title: "Reorganization",
    focus: "A chain reorganization happens when the accepted branch changes. Reorg risk is important for users waiting for transaction confidence.",
    learn: "Review forks and confirmations.",
    practice: "Draw a short chain that gets replaced by a longer branch.",
    thesis: "Write a metric for reorg frequency or depth.",
    resource: "Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    id: 21,
    week: "Week 3: Consensus mechanisms",
    title: "Mechanisms checkpoint",
    focus: "You now understand consensus variables: difficulty, delay, validator selection, incentives, leaders, and reorgs.",
    learn: "Review days 15-20.",
    practice: "Pick one variable that can be simulated simply.",
    thesis: "Choose one consensus mechanism question.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 22,
    week: "Week 4: BFT tradeoffs",
    title: "Quorums",
    focus: "A quorum is the number of votes needed to accept a decision. BFT protocols use quorum rules so conflicting decisions cannot both get enough support.",
    learn: "Study why majority alone may not be enough with Byzantine faults.",
    practice: "For 4 validators, count how many votes 3 represents.",
    thesis: "Write how quorum size affects safety.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 23,
    week: "Week 4: BFT tradeoffs",
    title: "The 3f + 1 idea",
    focus: "Many BFT systems need at least 3f + 1 nodes to tolerate f Byzantine faults. This gives enough honest overlap between quorums.",
    learn: "Understand the formula with f = 1.",
    practice: "Calculate nodes needed for f = 1 and f = 2.",
    thesis: "Write why more fault tolerance requires more nodes.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 24,
    week: "Week 4: BFT tradeoffs",
    title: "View change",
    focus: "If a leader fails, BFT protocols need view change or leader replacement so the system can continue.",
    learn: "Study leader failure recovery at a high level.",
    practice: "Draw leader 1 failing and leader 2 taking over.",
    thesis: "Write how view change affects latency.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 25,
    week: "Week 4: BFT tradeoffs",
    title: "Tendermint voting",
    focus: "Tendermint-style consensus uses rounds with proposals, prevotes, and precommits to reach finality under assumptions.",
    learn: "Learn proposal, prevote, and precommit conceptually.",
    practice: "Write the three steps in order.",
    thesis: "Write a small Tendermint message-flow explanation.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 26,
    week: "Week 4: BFT tradeoffs",
    title: "Message complexity",
    focus: "Message complexity counts how many messages nodes exchange. BFT protocols can become expensive as validator count grows.",
    learn: "Compare all-to-all voting with a smaller committee.",
    practice: "Estimate messages if 5 validators each send to 4 others.",
    thesis: "Write a message-count comparison question.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 27,
    week: "Week 4: BFT tradeoffs",
    title: "Timeouts",
    focus: "Timeouts decide how long nodes wait before assuming something is wrong. Short timeouts can cause unnecessary retries; long timeouts can slow progress.",
    learn: "Study timeout as a protocol parameter.",
    practice: "Predict what happens with timeout too short or too long.",
    thesis: "Write how timeout affects liveness and latency.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 28,
    week: "Week 4: BFT tradeoffs",
    title: "BFT checkpoint",
    focus: "You can now discuss BFT with useful terms: quorum, 3f + 1, view change, voting phases, message complexity, and timeouts.",
    learn: "Review days 22-27.",
    practice: "Choose one BFT tradeoff to simulate or explain.",
    thesis: "Pick your consensus thesis direction.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 29,
    week: "Week 5: Consensus thesis plan",
    title: "Build a toy simulator",
    focus: "A toy simulator can model nodes, messages, delay, failures, and decisions. It does not need real cryptography to teach consensus tradeoffs.",
    learn: "List simulator components.",
    practice: "Draw node, message queue, and decision state.",
    thesis: "Write the simulator scope in one paragraph.",
    resource: "The Latest Gossip on BFT Consensus",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 30,
    week: "Week 5: Consensus thesis plan",
    title: "Choose variables",
    focus: "Good variables include node count, network delay, faulty node count, timeout, difficulty, or block interval.",
    learn: "Pick one independent variable.",
    practice: "Write three values to test.",
    thesis: "Write: I will change X and measure Y.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 31,
    week: "Week 5: Consensus thesis plan",
    title: "Choose metrics",
    focus: "Consensus metrics should match the protocol property: commit latency, message count, fork frequency, stale blocks, or failed rounds.",
    learn: "Connect each metric to safety, liveness, or performance.",
    practice: "Choose two metrics for your simulator.",
    thesis: "Write why each metric matters.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 32,
    week: "Week 5: Consensus thesis plan",
    title: "Run repeated trials",
    focus: "Distributed simulations can vary because delays or leader choices may be random. Repeated trials make results more stable.",
    learn: "Study why averages and ranges are useful.",
    practice: "Plan 5 repeated runs for one setting.",
    thesis: "Write how many trials you can realistically run.",
    resource: "The Latest Gossip on BFT Consensus",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 33,
    week: "Week 5: Consensus thesis plan",
    title: "Analyze failure cases",
    focus: "Failure analysis explains when the protocol stalls, forks, or uses many messages. These cases are often more interesting than the average result.",
    learn: "Define two failure categories.",
    practice: "Write what a stalled round looks like in logs.",
    thesis: "Write one failure analysis table header.",
    resource: "Tendermint consensus paper",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    id: 34,
    week: "Week 5: Consensus thesis plan",
    title: "Limits and assumptions",
    focus: "A toy simulator simplifies reality. You must state assumptions about cryptography, network model, honest nodes, and adversary behavior.",
    learn: "Write what your simulator ignores.",
    practice: "List three assumptions.",
    thesis: "Write the limitations paragraph.",
    resource: "Practical Byzantine Fault Tolerance",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    id: 35,
    week: "Week 5: Consensus thesis plan",
    title: "Consensus proposal",
    focus: "You now have enough for a consensus mini proposal: problem, assumptions, protocol, variables, metrics, expected tradeoff, and limitations.",
    learn: "Review days 29-34.",
    practice: "Fill the Builder tab with a consensus topic.",
    thesis: "Draft your Blockchain Consensus thesis proposal in 6-8 sentences.",
    resource: "Builder tab",
    url: "#builder"
  }
);

Object.assign(blockchainConsensusStudyMaterials, {
  15: { text: ["Difficulty changes how hard it is to produce a PoW block. If blocks arrive too fast, forks can become more common.", "A simple simulation can vary difficulty and observe block interval or fork behavior."], terms: ["difficulty", "block interval", "fork risk"], cs: "Difficulty is a protocol parameter that affects performance and security." },
  16: { text: ["Network delay means nodes do not learn about blocks instantly. Delay can cause honest nodes to work on different branches.", "This is one reason consensus research must state network assumptions clearly."], terms: ["delay", "propagation", "network model"], cs: "Distributed algorithms depend on message timing." },
  17: { text: ["Validator selection decides who gets to propose or vote. Randomness, stake, and fairness all matter.", "A thesis can compare simple selection rules without building a real PoS chain."], terms: ["validator", "selection", "fairness"], cs: "Selection algorithms affect both security and workload distribution." },
  18: { text: ["Incentives encourage participants to follow protocol rules. Penalties discourage behavior that threatens consensus.", "Incentives are not the same as correctness proofs, but they matter in open networks."], terms: ["reward", "penalty", "incentive"], cs: "Consensus combines algorithms with game-like participant behavior." },
  19: { text: ["Leader-based protocols rely on a proposer for each round. A faulty leader can slow the system unless the protocol replaces it.", "Leader failure is a good way to study liveness."], terms: ["leader", "proposer", "liveness"], cs: "Leader replacement is a recovery mechanism." },
  20: { text: ["A reorganization replaces part of the accepted chain with another branch. Users wait for confirmations to reduce this risk.", "Reorg depth and frequency can be measured in a simulation."], terms: ["reorg", "depth", "confirmation"], cs: "Reorgs connect network timing to user-facing reliability." },
  21: { text: ["Mechanism variables give you thesis options: difficulty, delay, validator selection, incentives, leaders, and reorgs.", "Pick one because combining too many makes results hard to explain."], terms: ["mechanism", "variable", "scope"], cs: "A controlled simulation needs limited variables." },
  22: { text: ["A quorum is enough votes to decide. BFT quorum rules are designed so two conflicting decisions cannot both succeed.", "Quorum design is central to safety."], terms: ["quorum", "vote", "safety"], cs: "Quorum overlap prevents conflicting commits." },
  23: { text: ["The 3f + 1 rule means tolerating f Byzantine faults often needs at least 3f + 1 nodes.", "For f = 1, this gives 4 nodes; for f = 2, this gives 7 nodes."], terms: ["3f + 1", "fault tolerance", "overlap"], cs: "Fault tolerance has a concrete resource cost." },
  24: { text: ["View change replaces a faulty or slow leader. It protects liveness but adds extra messages and latency.", "This is a good example of a safety-liveness-performance tradeoff."], terms: ["view change", "leader failure", "latency"], cs: "Recovery paths should be included in protocol evaluation." },
  25: { text: ["Tendermint-style voting uses proposal, prevote, and precommit steps. These phases help validators converge on one block.", "The exact protocol is detailed, but the beginner model is a staged vote."], terms: ["proposal", "prevote", "precommit"], cs: "Voting phases structure distributed agreement." },
  26: { text: ["Message complexity grows as validators exchange votes. If every validator sends to every other validator, the cost grows quickly.", "Counting messages is a simple but useful thesis metric."], terms: ["message complexity", "validator count", "all-to-all"], cs: "Algorithmic complexity appears as network traffic." },
  27: { text: ["Timeouts control when nodes give up waiting and try another round. Bad timeout choices can cause stalls or slow commits.", "A simulator can vary timeout and measure commit latency."], terms: ["timeout", "round", "commit latency"], cs: "Timeout tuning is a parameter-sensitivity problem." },
  28: { text: ["You now have enough BFT vocabulary for a beginner thesis. Good topics compare message cost, timeout behavior, or finality under delay.", "Stay focused on one tradeoff."], terms: ["tradeoff", "BFT", "finality"], cs: "A clear tradeoff is easier to defend than a broad blockchain overview." },
  29: { text: ["A toy simulator models only the parts needed for your question. It can ignore cryptography if your topic is message count or latency.", "The model must be honest about what it simplifies."], terms: ["simulator", "model", "state"], cs: "Simulation is a valid CS method when assumptions are explicit." },
  30: { text: ["An independent variable is what you change. A dependent metric is what you measure.", "Consensus experiments often change node count, delay, timeout, or faulty nodes."], terms: ["independent variable", "dependent metric", "parameter"], cs: "Good experiments separate inputs from outputs." },
  31: { text: ["Metrics should connect to protocol goals. Message count measures cost, commit latency measures speed, and fork frequency measures consistency risk.", "Do not collect metrics you cannot explain."], terms: ["commit latency", "fork frequency", "failed round"], cs: "Metrics translate protocol behavior into evidence." },
  32: { text: ["Repeated trials reduce the risk that one random run misleads you. Report averages and ranges when results vary.", "Even a small thesis can run several trials per setting."], terms: ["trial", "average", "range"], cs: "Randomized simulations need repeated measurement." },
  33: { text: ["Failure cases explain why the system behaves badly. Logs can reveal faulty leaders, delayed messages, or timeout cascades.", "Error analysis makes results more useful than a single chart."], terms: ["failure case", "log", "stall"], cs: "Qualitative failure categories support quantitative metrics." },
  34: { text: ["Assumptions define what your result means. A toy simulator may assume simple delays, no cryptographic cost, or fixed validators.", "State these assumptions directly."], terms: ["assumption", "network model", "adversary"], cs: "Correctness claims depend on model boundaries." },
  35: { text: ["A consensus proposal should name the protocol idea, assumptions, changed variable, measured metrics, and limitations.", "This gives a teacher enough detail to judge feasibility."], terms: ["proposal", "protocol", "metric"], cs: "A consensus thesis is strongest when it is a small, testable distributed-systems study." }
});

Object.assign(blockchainConsensusQuizzes, {
  15: { question: "What does PoW difficulty affect?", choices: ["How hard it is to find a block.", "The color of a block.", "Whether SQL works."], answer: 0, explanation: "Difficulty controls expected block-finding effort." },
  16: { question: "Why can network delay increase forks?", choices: ["Nodes may mine or vote before hearing about another block.", "Delay deletes all blocks.", "Delay guarantees instant finality."], answer: 0, explanation: "Slow propagation can create competing views." },
  17: { question: "What does validator selection decide?", choices: ["Who proposes or votes in consensus.", "Which CSS file loads.", "Which thesis font is used."], answer: 0, explanation: "Selection rules affect fairness and security." },
  18: { question: "Why do protocols use penalties?", choices: ["To discourage harmful validator behavior.", "To increase image resolution.", "To remove all network messages."], answer: 0, explanation: "Penalties shape incentives." },
  19: { question: "What problem does leader replacement address?", choices: ["A slow or faulty leader hurting liveness.", "Too many file formats.", "A missing README."], answer: 0, explanation: "Leader replacement helps the protocol continue." },
  20: { question: "What is a chain reorganization?", choices: ["Replacing part of the accepted branch with another branch.", "Compressing CSS.", "Sorting a spreadsheet only."], answer: 0, explanation: "Reorgs change the accepted chain branch." },
  21: { question: "Why choose one simulation variable?", choices: ["It makes cause and effect easier to explain.", "It prevents all bugs.", "It removes the need for metrics."], answer: 0, explanation: "Controlled scope makes results interpretable." },
  22: { question: "What is a quorum?", choices: ["Enough votes to accept a decision.", "A file format.", "A token counter."], answer: 0, explanation: "Quorum rules decide when agreement is reached." },
  23: { question: "How many nodes does 3f + 1 require for f = 2?", choices: ["7", "3", "12"], answer: 0, explanation: "3 * 2 + 1 = 7." },
  24: { question: "What is view change for?", choices: ["Replacing a failed or slow leader.", "Changing the page theme.", "Deleting old data."], answer: 0, explanation: "View change supports liveness after leader failure." },
  25: { question: "Which is a Tendermint-style voting step?", choices: ["Prevote.", "Parquet.", "Tokenization."], answer: 0, explanation: "Tendermint-style rounds include prevote and precommit." },
  26: { question: "What does message complexity count?", choices: ["How many messages nodes exchange.", "How many images are in the app.", "How many words are in a title."], answer: 0, explanation: "It measures communication cost." },
  27: { question: "What can happen if timeout is too short?", choices: ["Unnecessary retries or failed rounds.", "Guaranteed faster finality always.", "No messages are sent."], answer: 0, explanation: "Too-short timeouts can harm progress." },
  28: { question: "Which is a good BFT thesis tradeoff?", choices: ["Message cost vs validator count.", "Button color vs font family.", "Image size vs README length."], answer: 0, explanation: "Message cost is directly tied to validator count." },
  29: { question: "What can a toy consensus simulator ignore if not relevant?", choices: ["Real cryptographic cost.", "All assumptions.", "All metrics."], answer: 0, explanation: "A toy model can simplify cryptography if the scope is clear." },
  30: { question: "What is an independent variable?", choices: ["The thing you change in the experiment.", "The final conclusion.", "A random screenshot."], answer: 0, explanation: "Independent variables are experiment inputs." },
  31: { question: "Which metric measures consensus speed?", choices: ["Commit latency.", "CSS line count.", "Image brightness."], answer: 0, explanation: "Commit latency measures time to decision." },
  32: { question: "Why run repeated trials?", choices: ["To reduce misleading random variation.", "To avoid writing methods.", "To remove all assumptions."], answer: 0, explanation: "Repeated runs make simulation results more stable." },
  33: { question: "What does failure analysis explain?", choices: ["When and why the protocol stalls or behaves badly.", "Only the title page.", "How to draw icons."], answer: 0, explanation: "Failure analysis makes results interpretable." },
  34: { question: "Why state assumptions?", choices: ["They define what the result actually means.", "They make metrics unnecessary.", "They replace sources."], answer: 0, explanation: "Claims depend on model assumptions." },
  35: { question: "What belongs in a consensus proposal?", choices: ["Protocol, assumptions, variables, metrics, and limitations.", "Only a coin name.", "Only a diagram."], answer: 0, explanation: "A testable proposal needs method and measurement." }
});

const dataIngestionLessons = [
  {
    id: 1,
    week: "Week 1: Ingestion from zero",
    title: "What data ingestion means",
    focus: "Data ingestion is the process of bringing data from sources such as files, APIs, databases, and event streams into a target system where it can be stored, checked, and used.",
    learn: "Learn source, pipeline, destination, and record.",
    practice: "Write a tiny Python script that reads three hard-coded records and prints them.",
    thesis: "Write one research question about reliable data arrival.",
    resource: "pandas IO tools",
    url: "https://pandas.pydata.org/docs/user_guide/io.html",
    study: ["Data ingestion starts before analytics. The first problem is getting data into a controlled place without losing records, duplicating records, or breaking the expected shape.", "From a coding view, ingestion is a program that reads from a source, parses records, validates them, and writes them somewhere else."],
    terms: ["source", "record", "destination", "pipeline"],
    cs: "Think of ingestion as input handling plus reliability guarantees.",
    quiz: { question: "What is data ingestion?", choices: ["Moving data from sources into a controlled target system.", "Only drawing charts.", "Only training an AI model."], answer: 0, explanation: "Ingestion is the entry stage of a data pipeline." }
  },
  {
    id: 2,
    week: "Week 1: Ingestion from zero",
    title: "Records and schemas",
    focus: "A record is one unit of data. A schema describes fields, types, and expectations. Ingestion code often fails when the schema changes unexpectedly.",
    learn: "Learn fields, types, required values, and optional values.",
    practice: "Create a list of dictionaries with id, name, timestamp, and amount.",
    thesis: "Write how schema errors could affect downstream analysis.",
    resource: "Great Expectations validation",
    url: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/",
    study: ["A schema is a contract between the source and the pipeline. If a field disappears or changes type, the pipeline may load wrong data or crash.", "For beginner coding, represent records as Python dictionaries and schemas as simple validation checks."],
    terms: ["record", "schema", "field", "type"],
    cs: "Schema checking is defensive programming for data pipelines.",
    quiz: { question: "Why does schema matter in ingestion?", choices: ["It defines the expected fields and types.", "It makes the UI blue.", "It deletes duplicates automatically."], answer: 0, explanation: "Schema helps ingestion code parse and validate records." }
  },
  {
    id: 3,
    week: "Week 1: Ingestion from zero",
    title: "CSV ingestion",
    focus: "CSV is a common first ingestion format. It is simple, but real CSV files can have missing values, bad delimiters, extra columns, and type problems.",
    learn: "Read a CSV file with Python or pandas.",
    practice: "Load a small CSV and count rows, columns, and missing values.",
    thesis: "Write one failure mode of CSV ingestion.",
    resource: "pandas read_csv",
    url: "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html",
    study: ["CSV looks easy because it is text, but it has many edge cases. Ingestion code should check row count, expected columns, and parse errors.", "A research topic can compare how validation rules detect common CSV problems."],
    terms: ["CSV", "delimiter", "missing value", "parse error"],
    cs: "Parsing is the first correctness challenge in many data systems.",
    quiz: { question: "Which is a common CSV ingestion problem?", choices: ["Missing values or unexpected columns.", "Consensus finality.", "Prompt temperature."], answer: 0, explanation: "CSV files often break assumptions about columns and values." }
  },
  {
    id: 4,
    week: "Week 1: Ingestion from zero",
    title: "JSON ingestion",
    focus: "JSON is common for APIs and logs. It supports nested data, which makes parsing more flexible but also more complex.",
    learn: "Read a JSON file and flatten one nested field.",
    practice: "Parse three JSON records and extract id and timestamp.",
    thesis: "Write how nested data complicates ingestion.",
    resource: "pandas read_json",
    url: "https://pandas.pydata.org/docs/reference/api/pandas.read_json.html",
    study: ["JSON records may not all have the same shape. One event may include a nested object while another omits it.", "Ingestion code must decide whether to flatten nested data, keep it raw, or reject records that do not match expectations."],
    terms: ["JSON", "nested field", "flattening", "event"],
    cs: "Nested structures make schema validation more complex than flat CSV tables.",
    quiz: { question: "Why can JSON be harder than CSV?", choices: ["It can contain nested and inconsistent structures.", "It cannot store text.", "It only works with images."], answer: 0, explanation: "Nested and optional fields complicate parsing." }
  },
  {
    id: 5,
    week: "Week 1: Ingestion from zero",
    title: "Data types and timestamps",
    focus: "Ingestion code must convert strings into useful types such as integers, floats, booleans, and timestamps. Time zones and invalid dates are common problems.",
    learn: "Parse a timestamp string into a datetime object.",
    practice: "Write code that rejects rows with invalid dates.",
    thesis: "Write why timestamp parsing affects data correctness.",
    resource: "pandas time series",
    url: "https://pandas.pydata.org/docs/user_guide/timeseries.html",
    study: ["Many sources send everything as text. The ingestion layer turns text into typed data.", "Timestamps are especially important because late or misparsed time values can damage incremental ingestion and streaming analysis."],
    terms: ["type conversion", "timestamp", "timezone", "invalid value"],
    cs: "Type conversion turns raw bytes into structured program state.",
    quiz: { question: "Why are timestamps important in ingestion?", choices: ["They are often used for ordering and incremental loads.", "They make files smaller automatically.", "They replace validation."], answer: 0, explanation: "Timestamps often drive pipeline logic." }
  },
  {
    id: 6,
    week: "Week 1: Ingestion from zero",
    title: "Basic validation",
    focus: "Validation checks whether data satisfies rules before it is accepted. Rules can check required fields, ranges, uniqueness, and allowed values.",
    learn: "Learn not-null, range, and uniqueness checks.",
    practice: "Write three if-statements that validate a record.",
    thesis: "Write how validation reduces downstream debugging.",
    resource: "Great Expectations validation",
    url: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/",
    study: ["Validation catches problems close to the source. This is cheaper than discovering bad data after dashboards, models, or reports have already used it.", "A beginner implementation can be simple Python rules before using larger validation frameworks."],
    terms: ["validation", "not-null", "range check", "allowed values"],
    cs: "Validation is a gatekeeping algorithm for incoming records.",
    quiz: { question: "What does validation do?", choices: ["Checks whether incoming data satisfies rules.", "Only stores images.", "Makes all data private."], answer: 0, explanation: "Validation accepts, rejects, or flags records based on rules." }
  },
  {
    id: 7,
    week: "Week 1: Ingestion from zero",
    title: "Weekly checkpoint",
    focus: "You can now explain ingestion as reading records, parsing formats, checking schemas, converting types, and validating data before storage.",
    learn: "Review days 1-6.",
    practice: "Build a 20-line script that reads CSV and prints validation errors.",
    thesis: "Pick one ingestion problem: parsing, schema, validation, or timestamps.",
    resource: "pandas IO tools",
    url: "https://pandas.pydata.org/docs/user_guide/io.html",
    study: ["This week is enough to build the smallest ingestion program: read, parse, validate, and report errors.", "For research, the important move is turning a practical bug into a measurable question."],
    terms: ["parser", "schema", "validation", "error report"],
    cs: "A small script can become a research prototype if it measures a clear problem.",
    quiz: { question: "Which sequence describes basic ingestion?", choices: ["Read, parse, validate, write.", "Train, hallucinate, deploy.", "Mine, fork, finalize."], answer: 0, explanation: "Basic ingestion moves data through controlled processing steps." }
  },
  {
    id: 8,
    week: "Week 2: Batch pipeline coding",
    title: "Batch ingestion",
    focus: "Batch ingestion processes data in chunks or scheduled runs. It is easier to start with than streaming because the input has a clear beginning and end.",
    learn: "Learn batch job, input folder, output folder, and run ID.",
    practice: "Write a script that processes every CSV file in a folder.",
    thesis: "Write when batch ingestion is enough for a system.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["Batch ingestion is common for daily reports, nightly syncs, and historical backfills.", "The coding challenge is making the job repeatable: the same input should produce the same output without surprise side effects."],
    terms: ["batch job", "run ID", "input folder", "output folder"],
    cs: "Batch processing is easier to debug because each run can be inspected as a unit.",
    quiz: { question: "What is batch ingestion?", choices: ["Processing data in scheduled chunks or bounded runs.", "Processing only one keyboard event.", "A blockchain voting round."], answer: 0, explanation: "Batch jobs process bounded sets of data." }
  },
  {
    id: 9,
    week: "Week 2: Batch pipeline coding",
    title: "Idempotency",
    focus: "An idempotent ingestion job can be run more than once without creating duplicate or inconsistent results. This is essential for retries.",
    learn: "Learn why retry-safe jobs matter.",
    practice: "Run the same ingestion script twice and prevent duplicate output rows.",
    thesis: "Write a research question about idempotent pipeline design.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["Pipelines fail because networks, files, and APIs fail. Retrying is normal, so duplicate prevention is not optional.", "A simple idempotency strategy is to write output by run date, replace a partition, or deduplicate by a stable key."],
    terms: ["idempotency", "retry", "duplicate", "stable key"],
    cs: "Idempotency is a correctness property for repeated program execution.",
    quiz: { question: "What does idempotent ingestion prevent?", choices: ["Duplicate or inconsistent results after reruns.", "All network traffic.", "All schema changes."], answer: 0, explanation: "Idempotent jobs are safe to retry." }
  },
  {
    id: 10,
    week: "Week 2: Batch pipeline coding",
    title: "Deduplication",
    focus: "Deduplication removes repeated records. The hard part is deciding what counts as the same record.",
    learn: "Learn exact duplicates vs key-based duplicates.",
    practice: "Drop duplicate rows by id and timestamp.",
    thesis: "Write how deduplication rules can change analytical results.",
    resource: "pandas duplicated",
    url: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html",
    study: ["Duplicate records may come from retries, source bugs, or multiple files containing overlapping data.", "Deduplication is not only a coding task; it is a semantics question about record identity."],
    terms: ["deduplication", "primary key", "event ID", "record identity"],
    cs: "Deduplication is set logic applied to messy real data.",
    quiz: { question: "What is the hardest part of deduplication?", choices: ["Defining what counts as the same record.", "Choosing a button color.", "Making timestamps disappear."], answer: 0, explanation: "Record identity determines duplicate logic." }
  },
  {
    id: 11,
    week: "Week 2: Batch pipeline coding",
    title: "Incremental ingestion",
    focus: "Incremental ingestion loads only new or changed data since the last successful run. It is faster than full reloads but needs state tracking.",
    learn: "Learn watermark, last loaded timestamp, and checkpoint.",
    practice: "Save the latest timestamp to a small checkpoint file.",
    thesis: "Compare full reload and incremental ingestion.",
    resource: "Apache Beam Programming Guide",
    url: "https://beam.apache.org/documentation/programming-guide/",
    study: ["Incremental ingestion avoids reading everything every time. It depends on knowing what has already been processed.", "A checkpoint may be a timestamp, file name, offset, or version number."],
    terms: ["incremental load", "watermark", "checkpoint", "state"],
    cs: "Incremental ingestion is stateful computation over changing input.",
    quiz: { question: "What does incremental ingestion load?", choices: ["Only new or changed data since the last successful run.", "Only deleted files.", "Only data without timestamps."], answer: 0, explanation: "Incremental jobs track what was already processed." }
  },
  {
    id: 12,
    week: "Week 2: Batch pipeline coding",
    title: "Error handling",
    focus: "Ingestion code should decide what to do with bad records: reject them, quarantine them, fix them, or load them with warnings.",
    learn: "Learn fail-fast vs partial load.",
    practice: "Write bad rows into an errors.csv file.",
    thesis: "Write a question about error handling strategy and data completeness.",
    resource: "Great Expectations validation",
    url: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/",
    study: ["A pipeline that crashes on one bad row may be too fragile. A pipeline that ignores bad rows may hide data quality problems.", "Good ingestion systems record error details so humans can inspect and fix sources."],
    terms: ["fail-fast", "quarantine", "partial load", "error log"],
    cs: "Error handling is a policy decision encoded in code.",
    quiz: { question: "What is a quarantine file for?", choices: ["Saving rejected records for inspection.", "Storing UI images.", "Increasing model size."], answer: 0, explanation: "Quarantined records are not silently lost." }
  },
  {
    id: 13,
    week: "Week 2: Batch pipeline coding",
    title: "Logging and observability",
    focus: "A pipeline should record what happened: files read, rows accepted, rows rejected, runtime, and errors. Without logs, debugging ingestion is guesswork.",
    learn: "Learn basic structured logging fields.",
    practice: "Print a run summary with row counts and error counts.",
    thesis: "Write how observability affects pipeline maintainability.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["Ingestion is operational code. It needs evidence of what happened during each run.", "Useful logs include input names, output names, counts, validation failures, runtime, and checkpoint values."],
    terms: ["logging", "metrics", "row count", "runtime"],
    cs: "Observability turns pipeline behavior into data for debugging.",
    quiz: { question: "Which belongs in an ingestion run summary?", choices: ["Rows read, rows accepted, rows rejected, and runtime.", "Only font size.", "Only thesis title."], answer: 0, explanation: "Run summaries make pipeline behavior visible." }
  },
  {
    id: 14,
    week: "Week 2: Batch pipeline coding",
    title: "Batch checkpoint",
    focus: "You can now build a basic reliable batch ingestion script: read files, validate records, deduplicate, track state, handle errors, and log results.",
    learn: "Review days 8-13.",
    practice: "Build a folder-to-clean-CSV ingestion script.",
    thesis: "Pick one batch reliability metric.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["A strong beginner project can be a small ingestion framework with validation and logging.", "For research, compare strategies: full reload vs incremental load, strict validation vs quarantine, or no dedup vs key-based dedup."],
    terms: ["batch pipeline", "reliability", "metric", "strategy"],
    cs: "A research prototype should make a pipeline behavior measurable.",
    quiz: { question: "Which metric fits batch ingestion reliability?", choices: ["Duplicate rate or rejected-row count.", "Screen brightness.", "Number of CSS classes."], answer: 0, explanation: "Reliability metrics should describe data correctness or pipeline behavior." }
  },
  {
    id: 15,
    week: "Week 3: Sources and orchestration",
    title: "API ingestion",
    focus: "APIs often return paginated JSON and enforce rate limits. Ingestion code must handle pages, errors, retries, and changing response shapes.",
    learn: "Learn pagination and rate limits.",
    practice: "Write pseudocode for fetching pages until no next page remains.",
    thesis: "Write how API limits affect ingestion completeness.",
    resource: "Apache Beam Programming Guide",
    url: "https://beam.apache.org/documentation/programming-guide/",
    study: ["API ingestion is more dynamic than file ingestion because the source can return errors, timeouts, or different payload shapes.", "A good API pipeline saves progress after each page so it can recover after failure."],
    terms: ["API", "pagination", "rate limit", "retry"],
    cs: "API ingestion is network programming plus state management.",
    quiz: { question: "Why does API pagination matter?", choices: ["The pipeline may need multiple requests to retrieve all records.", "It changes image size.", "It removes validation."], answer: 0, explanation: "Paginated APIs split results across pages." }
  },
  {
    id: 16,
    week: "Week 3: Sources and orchestration",
    title: "Database ingestion",
    focus: "Database ingestion reads tables or query results from an operational database. The pipeline must avoid overloading the source and should track what changed.",
    learn: "Learn table, query, source load, and extract.",
    practice: "Write SQL that selects rows updated after a timestamp.",
    thesis: "Write one risk of reading from production databases.",
    resource: "Debezium documentation",
    url: "https://debezium.io/documentation/reference/stable/index.html",
    study: ["Operational databases are designed for applications, not heavy analytical extraction. Ingestion must be careful about load and consistency.", "Incremental queries often use updated_at timestamps, but timestamps can be missing, wrong, or not monotonic."],
    terms: ["database extract", "updated_at", "source load", "consistency"],
    cs: "Database ingestion needs query design and operational safety.",
    quiz: { question: "Why be careful when ingesting from production databases?", choices: ["Extraction can overload or disturb the source system.", "It changes HTML layout.", "It prevents all duplicates automatically."], answer: 0, explanation: "Source impact is a real ingestion constraint." }
  },
  {
    id: 17,
    week: "Week 3: Sources and orchestration",
    title: "Change data capture",
    focus: "Change data capture captures inserts, updates, and deletes from a database log or change stream. CDC is useful when polling is too slow or unreliable.",
    learn: "Learn insert, update, delete, and change event.",
    practice: "Write example events for insert, update, and delete.",
    thesis: "Compare polling and CDC conceptually.",
    resource: "Debezium tutorial",
    url: "https://debezium.io/documentation/reference/stable/tutorial.html",
    study: ["CDC treats database changes as events. Instead of repeatedly asking what changed, the pipeline reads a change stream.", "CDC introduces ordering, replay, delete handling, and schema evolution questions."],
    terms: ["CDC", "change event", "insert", "delete"],
    cs: "CDC turns database mutation history into an event stream.",
    quiz: { question: "What does CDC capture?", choices: ["Database inserts, updates, and deletes as changes.", "Only chart colors.", "Only final thesis text."], answer: 0, explanation: "CDC reads changes rather than full tables." }
  },
  {
    id: 18,
    week: "Week 3: Sources and orchestration",
    title: "Scheduling",
    focus: "Scheduling decides when ingestion runs. A schedule can be time-based, event-based, or manually triggered.",
    learn: "Learn cron, DAG, dependency, and backfill.",
    practice: "Write a daily schedule and a dependency between extract and validate.",
    thesis: "Write how scheduling affects data freshness.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["A scheduled ingestion job must know when to run, what depends on what, and how to recover missed runs.", "Airflow represents workflows as DAGs, which are graphs of tasks and dependencies."],
    terms: ["schedule", "DAG", "dependency", "backfill"],
    cs: "Orchestration is graph execution for data workflows.",
    quiz: { question: "What is a DAG used for in orchestration?", choices: ["Representing task dependencies.", "Encrypting all data.", "Replacing schemas."], answer: 0, explanation: "A DAG models which tasks run before others." }
  },
  {
    id: 19,
    week: "Week 3: Sources and orchestration",
    title: "Backfill",
    focus: "Backfill reruns ingestion for past time periods. It is common when code changes, data is late, or a pipeline was broken.",
    learn: "Learn historical run and partition replacement.",
    practice: "Plan how to reload the last seven days safely.",
    thesis: "Write how backfill can create duplicates if not designed carefully.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["Backfill is necessary in real systems because pipelines are not perfect. But rerunning old periods can duplicate data if outputs are append-only.", "A safer design replaces a time partition or deduplicates by stable keys."],
    terms: ["backfill", "historical run", "partition replacement", "append-only"],
    cs: "Backfill tests whether an ingestion design is truly repeatable.",
    quiz: { question: "What is backfill?", choices: ["Rerunning ingestion for past time periods.", "Deleting all old logs.", "Making a diagram darker."], answer: 0, explanation: "Backfill repairs or rebuilds historical data." }
  },
  {
    id: 20,
    week: "Week 3: Sources and orchestration",
    title: "Metadata and lineage",
    focus: "Metadata describes datasets, runs, schemas, and owners. Lineage records where data came from and how it was transformed.",
    learn: "Learn dataset metadata and run metadata.",
    practice: "Create a JSON metadata file for one ingestion run.",
    thesis: "Connect ingestion metadata to the discovery problem in the PDF.",
    resource: "Aurum data discovery",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18",
    study: ["The Aurum paper frames discovery as finding relevant data across many sources. Ingestion can help discovery by producing profiles, schemas, and lineage as data arrives.", "A research direction is to make ingestion produce metadata that supports later search and joining."],
    terms: ["metadata", "lineage", "profile", "data discovery"],
    cs: "Metadata is a second data product produced by the ingestion pipeline.",
    quiz: { question: "How can ingestion help data discovery?", choices: ["By producing metadata, profiles, and lineage.", "By hiding schemas.", "By avoiding all logs."], answer: 0, explanation: "Discovery depends on searchable information about data." }
  },
  {
    id: 21,
    week: "Week 3: Sources and orchestration",
    title: "Orchestration checkpoint",
    focus: "You can now explain ingestion from files, APIs, databases, CDC, schedules, backfills, and metadata.",
    learn: "Review days 15-20.",
    practice: "Draw an ingestion DAG with extract, validate, load, and profile tasks.",
    thesis: "Pick one orchestration or metadata problem.",
    resource: "Apache Airflow ETL/ELT",
    url: "https://airflow.apache.org/use-cases/etl_analytics/",
    study: ["This week connects coding to system design. Real ingestion systems are not just scripts; they are scheduled, monitored, and connected to metadata.", "A practical thesis can evaluate whether metadata generated during ingestion improves discovery or debugging."],
    terms: ["orchestration", "DAG", "metadata", "debugging"],
    cs: "Pipelines become systems when runs, dependencies, and metadata are explicit.",
    quiz: { question: "What makes a script become an ingestion system?", choices: ["Scheduling, monitoring, state, and metadata.", "Only changing the file name.", "Only adding a logo."], answer: 0, explanation: "Operational features turn scripts into systems." }
  },
  {
    id: 22,
    week: "Week 4: Streaming ingestion",
    title: "Streaming basics",
    focus: "Streaming ingestion processes records continuously as they arrive. It is useful for logs, clicks, transactions, and sensor events.",
    learn: "Learn stream, event, producer, and consumer.",
    practice: "Write a loop that processes events one at a time from a list.",
    thesis: "Write when streaming is necessary and when batch is enough.",
    resource: "Apache Kafka design",
    url: "https://kafka.apache.org/42/design/design/",
    study: ["Streaming removes the clear boundary of a batch. The pipeline keeps running and must handle ordering, late records, and failures.", "For beginners, model a stream as a sequence of events processed one by one."],
    terms: ["stream", "event", "producer", "consumer"],
    cs: "Streaming ingestion is continuous input processing.",
    quiz: { question: "What is streaming ingestion?", choices: ["Continuously processing records as they arrive.", "Only loading one yearly CSV.", "Only writing static HTML."], answer: 0, explanation: "Streaming pipelines handle ongoing event flow." }
  },
  {
    id: 23,
    week: "Week 4: Streaming ingestion",
    title: "Offsets",
    focus: "An offset records how far a consumer has read in a stream. Offsets are checkpoints for streaming ingestion.",
    learn: "Learn offset, commit, replay, and consumer position.",
    practice: "Simulate a list of events and store the last processed index.",
    thesis: "Write how offset handling affects duplicates and data loss.",
    resource: "Apache Kafka design",
    url: "https://kafka.apache.org/42/design/design/",
    study: ["Offsets let a consumer resume after failure. If an offset is committed too early, data can be lost. If committed too late, data can be processed twice.", "This tradeoff is central to delivery guarantees."],
    terms: ["offset", "commit", "replay", "consumer"],
    cs: "Offsets are persistent state for stream processing.",
    quiz: { question: "What does an offset track?", choices: ["How far a consumer has read in a stream.", "The color of an event.", "The number of pages in a thesis."], answer: 0, explanation: "Offsets are stream checkpoints." }
  },
  {
    id: 24,
    week: "Week 4: Streaming ingestion",
    title: "Delivery guarantees",
    focus: "Delivery guarantees describe whether records may be lost, duplicated, or processed exactly once under failure.",
    learn: "Learn at-most-once, at-least-once, and exactly-once processing.",
    practice: "Classify failure examples as data loss or duplicate risk.",
    thesis: "Write why exactly-once is difficult in real ingestion.",
    resource: "Apache Kafka design",
    url: "https://kafka.apache.org/42/design/design/",
    study: ["At-most-once risks loss. At-least-once risks duplicates. Exactly-once processing needs coordination between reads, processing, writes, and state.", "Many practical systems combine at-least-once delivery with idempotent writes and deduplication."],
    terms: ["at-most-once", "at-least-once", "exactly-once", "duplicate"],
    cs: "Delivery guarantees are correctness contracts under failure.",
    quiz: { question: "What does at-least-once risk?", choices: ["Duplicate processing.", "Never receiving any records by design.", "No need for state."], answer: 0, explanation: "At-least-once retries can process a record more than once." }
  },
  {
    id: 25,
    week: "Week 4: Streaming ingestion",
    title: "Dead-letter queues",
    focus: "A dead-letter queue stores records that could not be processed successfully. It prevents one bad record from blocking the whole stream.",
    learn: "Learn poison record and DLQ.",
    practice: "Route invalid events into a separate bad_events list.",
    thesis: "Write a question about DLQ policy and data completeness.",
    resource: "Apache Beam Programming Guide",
    url: "https://beam.apache.org/documentation/programming-guide/",
    study: ["A poison record repeatedly fails processing. Without a policy, it can block progress.", "A DLQ preserves bad records for later inspection while allowing the main pipeline to continue."],
    terms: ["dead-letter queue", "poison record", "quarantine", "retry"],
    cs: "DLQs are error isolation for streaming systems.",
    quiz: { question: "Why use a dead-letter queue?", choices: ["To isolate records that fail processing.", "To make data disappear silently.", "To create a blockchain fork."], answer: 0, explanation: "DLQs preserve failures without blocking the pipeline." }
  },
  {
    id: 26,
    week: "Week 4: Streaming ingestion",
    title: "Late and out-of-order data",
    focus: "Streaming data may arrive late or out of order. Pipelines need event time, processing time, and policies for late records.",
    learn: "Learn event time and processing time.",
    practice: "Sort events by event_time and compare with arrival order.",
    thesis: "Write how late data affects correctness.",
    resource: "Apache Beam Programming Guide",
    url: "https://beam.apache.org/documentation/programming-guide/",
    study: ["Arrival order is not always event order. A click can happen at 10:00 but arrive at 10:05.", "Streaming systems must decide how long to wait for late records and whether to revise previous outputs."],
    terms: ["event time", "processing time", "late data", "out-of-order"],
    cs: "Time semantics are part of streaming correctness.",
    quiz: { question: "What is event time?", choices: ["When the event actually happened.", "When CSS loaded.", "When the user opened README."], answer: 0, explanation: "Event time belongs to the data record itself." }
  },
  {
    id: 27,
    week: "Week 4: Streaming ingestion",
    title: "Throughput and latency",
    focus: "Throughput is records per time unit. Latency is how long a record takes to be ingested and processed. Streaming systems balance both.",
    learn: "Learn throughput, latency, and backpressure.",
    practice: "Measure how long a Python loop takes to process 10,000 events.",
    thesis: "Write a metric pair for streaming ingestion performance.",
    resource: "Apache Kafka design",
    url: "https://kafka.apache.org/42/design/design/",
    study: ["A pipeline can process many records per second but still have high latency if records wait in queues.", "Backpressure happens when downstream processing cannot keep up with incoming data."],
    terms: ["throughput", "latency", "backpressure", "queue"],
    cs: "Performance evaluation needs both rate and delay metrics.",
    quiz: { question: "What does latency measure?", choices: ["How long a record takes to move through the pipeline.", "How many columns exist.", "How many categories are selected."], answer: 0, explanation: "Latency is delay per record or batch." }
  },
  {
    id: 28,
    week: "Week 4: Streaming ingestion",
    title: "Streaming checkpoint",
    focus: "You can now discuss streaming ingestion using events, offsets, delivery guarantees, DLQs, time semantics, throughput, and latency.",
    learn: "Review days 22-27.",
    practice: "Design a mini stream processor with offsets and a DLQ.",
    thesis: "Pick one streaming ingestion tradeoff.",
    resource: "Apache Kafka design",
    url: "https://kafka.apache.org/42/design/design/",
    study: ["Streaming ingestion is harder than batch because the input never really ends.", "A manageable thesis should simulate or prototype one aspect, such as offset commit timing, DLQ policy, or late-data handling."],
    terms: ["offset", "DLQ", "latency", "delivery guarantee"],
    cs: "A small stream simulator can expose reliability tradeoffs clearly.",
    quiz: { question: "Which is a manageable streaming thesis variable?", choices: ["Offset commit timing or DLQ policy.", "Every Kafka feature at once.", "Only app background color."], answer: 0, explanation: "One variable keeps the study realistic." }
  },
  {
    id: 29,
    week: "Week 5: Research from ingestion",
    title: "Data profiling",
    focus: "Data profiling computes summaries such as column names, types, unique counts, null rates, value ranges, and samples. The PDF uses profiles as building blocks for discovery.",
    learn: "Learn column profile and unique count.",
    practice: "Compute null rate and unique count for each CSV column.",
    thesis: "Write how ingestion-time profiling could help data discovery.",
    resource: "Aurum data discovery",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18",
    study: ["The Aurum paper builds profiles before relationships. This is useful for your direction because ingestion is the perfect time to create profiles while data is already being read.", "A coding project can build a lightweight profiler that stores schema, counts, examples, and quality metrics."],
    terms: ["profile", "unique count", "null rate", "sample"],
    cs: "Profiling summarizes data so later algorithms do not need to reread everything.",
    quiz: { question: "Why profile data during ingestion?", choices: ["The pipeline is already reading the data.", "It makes validation impossible.", "It replaces all storage."], answer: 0, explanation: "Ingestion-time profiling reuses the read pass." }
  },
  {
    id: 30,
    week: "Week 5: Research from ingestion",
    title: "Schema drift detection",
    focus: "Schema drift happens when incoming data changes shape over time. Detecting drift early prevents silent breakage.",
    learn: "Learn added column, missing column, and type change.",
    practice: "Compare today's schema with yesterday's schema.",
    thesis: "Write a schema drift detection experiment.",
    resource: "Great Expectations validation",
    url: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/",
    study: ["Schema drift is a natural research topic because it is common, measurable, and coding-friendly.", "You can test how different drift rules detect changes while avoiding false alarms."],
    terms: ["schema drift", "type change", "false alarm", "compatibility"],
    cs: "Schema drift detection is change detection over structured metadata.",
    quiz: { question: "What is schema drift?", choices: ["A change in incoming data structure over time.", "A graph path query.", "A consensus timeout."], answer: 0, explanation: "Drift means the expected schema has changed." }
  },
  {
    id: 31,
    week: "Week 5: Research from ingestion",
    title: "Column similarity",
    focus: "The PDF discusses schema and content similarity between columns. In ingestion research, similarity can help detect copied tables, related sources, or join candidates.",
    learn: "Learn name similarity and value overlap.",
    practice: "Compare two columns using set overlap of values.",
    thesis: "Write a topic about finding related ingested datasets.",
    resource: "Aurum data discovery",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18",
    study: ["Aurum uses relationships between columns to help users find related data. For a small thesis, you can implement simple name similarity and Jaccard overlap.", "This connects ingestion to discovery: after data arrives, the system can suggest related datasets."],
    terms: ["schema similarity", "content similarity", "Jaccard", "join candidate"],
    cs: "Column similarity is a search/indexing problem over profiles.",
    quiz: { question: "What can column similarity help find?", choices: ["Related datasets or candidate joins.", "Only UI buttons.", "Only crypto validators."], answer: 0, explanation: "Similarity relationships support discovery." }
  },
  {
    id: 32,
    week: "Week 5: Research from ingestion",
    title: "Signatures and sketches",
    focus: "A signature or sketch summarizes data compactly. The PDF uses signatures to avoid expensive all-pairs comparisons and repeated full reads.",
    learn: "Learn approximate summary and MinHash intuition.",
    practice: "Store a small set of sample values as a column signature.",
    thesis: "Write how signatures reduce ingestion metadata cost.",
    resource: "Aurum data discovery",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18",
    study: ["A sketch is a compact summary that helps estimate properties without storing every value.", "You do not need advanced math first: start by storing unique counts, value samples, and simple hashed samples."],
    terms: ["signature", "sketch", "MinHash", "approximation"],
    cs: "Sketches trade exactness for speed and memory efficiency.",
    quiz: { question: "Why use signatures or sketches?", choices: ["To summarize data compactly for faster comparison.", "To make data unreadable forever.", "To remove all validation."], answer: 0, explanation: "Signatures make comparison cheaper." }
  },
  {
    id: 33,
    week: "Week 5: Research from ingestion",
    title: "Sampling for change detection",
    focus: "The PDF's RESS idea uses samples to detect whether a column changed enough to recompute its profile. This is a strong research direction for ingestion maintenance.",
    learn: "Learn sample, threshold, and recompute decision.",
    practice: "Sample 10 values and compare with an old sample.",
    thesis: "Draft a sampling-based re-profiling question.",
    resource: "Aurum data discovery",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18",
    study: ["Re-reading all data after every change can be expensive. Sampling asks a smaller question: did the data change enough to justify recomputing metadata?", "A beginner thesis can simulate old and new columns and measure how well sampling detects meaningful change."],
    terms: ["sampling", "threshold", "recompute", "change detection"],
    cs: "Sampling-based maintenance is a cost-accuracy tradeoff.",
    quiz: { question: "What is the goal of sampling-based change detection?", choices: ["Decide whether full re-profiling is needed without rereading everything.", "Avoid all metadata.", "Guarantee no data ever changes."], answer: 0, explanation: "Sampling can reduce maintenance cost." }
  },
  {
    id: 34,
    week: "Week 5: Research from ingestion",
    title: "Evaluation design",
    focus: "A data ingestion thesis needs clear metrics: correctness, duplicate rate, rejected-row rate, runtime, latency, profile freshness, detection precision, or recall.",
    learn: "Choose one correctness metric and one cost metric.",
    practice: "Create a table with method, dataset, metric, and expected result.",
    thesis: "Write your experiment design in one paragraph.",
    resource: "Apache Beam Programming Guide",
    url: "https://beam.apache.org/documentation/programming-guide/",
    study: ["Good ingestion research is measurable. Do not only say a pipeline is better; define what better means.", "For PDF-inspired work, metrics could include discovery quality, profile update cost, or change-detection accuracy."],
    terms: ["metric", "precision", "recall", "runtime"],
    cs: "Research quality depends on matching metrics to claims.",
    quiz: { question: "Which metric fits ingestion correctness?", choices: ["Duplicate rate or missing-record rate.", "Image corner radius.", "Number of tabs only."], answer: 0, explanation: "Correctness metrics describe data quality and completeness." }
  },
  {
    id: 35,
    week: "Week 5: Research from ingestion",
    title: "Data Ingestion proposal",
    focus: "You now have enough for a coding-wise research proposal: source type, ingestion strategy, reliability problem, prototype, metrics, and limitations.",
    learn: "Review days 29-34.",
    practice: "Fill the Builder tab with a Data Ingestion thesis idea.",
    thesis: "Draft your Data Ingestion thesis proposal in 6-8 sentences.",
    resource: "Builder tab",
    url: "#builder",
    study: ["A strong Data Ingestion thesis can be small: one source type, one reliability issue, one prototype, and measurable results.", "Good beginner directions include schema drift detection, idempotent incremental loads, DLQ policy, ingestion-time profiling, or sampling-based profile maintenance."],
    terms: ["proposal", "prototype", "metric", "limitation"],
    cs: "The best thesis shape is a small system plus a clear evaluation.",
    quiz: { question: "What belongs in a Data Ingestion proposal?", choices: ["Source, strategy, reliability problem, prototype, metrics, and limitations.", "Only a broad title.", "Only a screenshot."], answer: 0, explanation: "A proposal must describe the system and how it will be evaluated." }
  }
];

const dataIngestionStudyMaterials = Object.fromEntries(
  dataIngestionLessons.map((lesson) => [lesson.id, {
    text: lesson.study,
    terms: lesson.terms,
    cs: lesson.cs
  }])
);

const dataIngestionQuizzes = Object.fromEntries(
  dataIngestionLessons.map((lesson) => [lesson.id, lesson.quiz])
);

const dataIngestionCodeTasks = {
  1: {
    title: "Create raw records",
    goal: "Start with plain records before using any framework. Change one value and rerun it.",
    code: `records = [
    {"id": 1, "name": "Aki", "amount": 1200},
    {"id": 2, "name": "Mei", "amount": 900},
    {"id": 3, "name": "Ren", "amount": 0},
]

for row in records:
    print(row["id"], row["name"], row["amount"])`
  },
  2: {
    title: "Check a tiny schema",
    goal: "Validate required fields and simple Python types.",
    code: `schema = {"id": int, "name": str, "amount": int}
row = {"id": 1, "name": "Aki", "amount": 1200}

for field, expected_type in schema.items():
    assert field in row, f"missing field: {field}"
    assert isinstance(row[field], expected_type), f"bad type: {field}"

print("row is valid")`
  },
  3: {
    title: "Read CSV data",
    goal: "Practice reading rows from CSV and counting missing values.",
    code: `import csv
from io import StringIO

raw = """id,name,amount
1,Aki,1200
2,Mei,
3,Ren,0
"""

rows = list(csv.DictReader(StringIO(raw)))
missing_amount = [row for row in rows if row["amount"] == ""]
print("rows:", len(rows))
print("missing amount:", len(missing_amount))`
  },
  4: {
    title: "Parse JSON records",
    goal: "Extract useful fields from nested JSON-like records.",
    code: `import json

raw = '{"id": 1, "user": {"name": "Aki"}, "amount": 1200}'
record = json.loads(raw)

flat = {
    "id": record["id"],
    "name": record["user"]["name"],
    "amount": record["amount"],
}

print(flat)`
  },
  5: {
    title: "Parse timestamps",
    goal: "Convert timestamp strings into real datetime values.",
    code: `from datetime import datetime, timezone

rows = [
    {"id": 1, "created_at": "2026-05-17T10:30:00+00:00"},
    {"id": 2, "created_at": "bad-date"},
]

for row in rows:
    try:
        row["created_at"] = datetime.fromisoformat(row["created_at"])
        print("ok:", row["id"], row["created_at"].astimezone(timezone.utc))
    except ValueError:
        print("invalid timestamp:", row["id"])`
  },
  6: {
    title: "Write validation rules",
    goal: "Return errors instead of crashing on bad records.",
    code: `def validate(row):
    errors = []
    if not row.get("id"):
        errors.append("missing id")
    if row.get("amount", 0) < 0:
        errors.append("negative amount")
    return errors

row = {"id": 7, "amount": -50}
print(validate(row))`
  },
  7: {
    title: "Build a tiny ingestion check",
    goal: "Separate accepted rows from rejected rows.",
    code: `rows = [
    {"id": 1, "amount": 1200},
    {"id": None, "amount": 900},
    {"id": 3, "amount": -10},
]

accepted = []
rejected = []

for row in rows:
    if row["id"] is None or row["amount"] < 0:
        rejected.append(row)
    else:
        accepted.append(row)

print("accepted:", accepted)
print("rejected:", rejected)`
  },
  8: {
    title: "Loop over input files",
    goal: "Practice the shape of a batch job over a folder.",
    code: `from pathlib import Path

input_folder = Path("raw")
for path in sorted(input_folder.glob("*.csv")):
    print("would ingest:", path.name)

# Create a raw folder later and add CSV files to make this real.`
  },
  9: {
    title: "Make reruns safe",
    goal: "Use a stable key so the same record is not loaded twice.",
    code: `incoming = [
    {"id": 1, "amount": 1200},
    {"id": 1, "amount": 1200},
    {"id": 2, "amount": 900},
]

loaded_by_id = {}
for row in incoming:
    loaded_by_id[row["id"]] = row

print(list(loaded_by_id.values()))`
  },
  10: {
    title: "Deduplicate by key",
    goal: "Keep the latest version when the same id appears twice.",
    code: `rows = [
    {"id": 1, "updated_at": "2026-05-16", "amount": 100},
    {"id": 1, "updated_at": "2026-05-17", "amount": 120},
    {"id": 2, "updated_at": "2026-05-17", "amount": 90},
]

latest = {}
for row in rows:
    old = latest.get(row["id"])
    if old is None or row["updated_at"] > old["updated_at"]:
        latest[row["id"]] = row

print(list(latest.values()))`
  },
  11: {
    title: "Track a checkpoint",
    goal: "Only ingest records newer than the last successful timestamp.",
    code: `last_loaded_at = "2026-05-16T00:00:00"
rows = [
    {"id": 1, "updated_at": "2026-05-15T12:00:00"},
    {"id": 2, "updated_at": "2026-05-17T09:00:00"},
]

new_rows = [row for row in rows if row["updated_at"] > last_loaded_at]
new_checkpoint = max(row["updated_at"] for row in new_rows)

print(new_rows)
print("new checkpoint:", new_checkpoint)`
  },
  12: {
    title: "Quarantine bad rows",
    goal: "Keep bad data visible instead of silently dropping it.",
    code: `rows = [{"id": 1, "amount": 10}, {"id": 2, "amount": -5}]
good_rows = []
error_rows = []

for row in rows:
    if row["amount"] < 0:
        error_rows.append({"row": row, "error": "negative amount"})
    else:
        good_rows.append(row)

print("good:", good_rows)
print("errors:", error_rows)`
  },
  13: {
    title: "Print a run summary",
    goal: "Record row counts so pipeline behavior is inspectable.",
    code: `run_summary = {
    "run_id": "2026-05-17-001",
    "rows_read": 100,
    "rows_loaded": 96,
    "rows_rejected": 4,
    "seconds": 2.4,
}

for key, value in run_summary.items():
    print(f"{key}: {value}")`
  },
  14: {
    title: "Wrap ingestion in a function",
    goal: "Make the batch pipeline easy to rerun and test.",
    code: `def ingest(rows):
    accepted = []
    rejected = []
    for row in rows:
        if row.get("id") and row.get("amount", 0) >= 0:
            accepted.append(row)
        else:
            rejected.append(row)
    return accepted, rejected

accepted, rejected = ingest([{"id": 1, "amount": 9}, {"id": None, "amount": 3}])
print(accepted, rejected)`
  },
  15: {
    title: "Fetch paginated API data",
    goal: "Model API ingestion as repeated page requests.",
    code: `def fake_api(page):
    pages = {
        1: {"records": [{"id": 1}], "next_page": 2},
        2: {"records": [{"id": 2}], "next_page": None},
    }
    return pages[page]

page = 1
records = []
while page is not None:
    response = fake_api(page)
    records.extend(response["records"])
    page = response["next_page"]

print(records)`
  },
  16: {
    title: "Write an incremental SQL extract",
    goal: "Use a timestamp condition to avoid full table reloads.",
    code: `last_loaded_at = "2026-05-16T00:00:00"

query = f"""
SELECT id, amount, updated_at
FROM orders
WHERE updated_at > '{last_loaded_at}'
ORDER BY updated_at
"""

print(query.strip())`
  },
  17: {
    title: "Apply CDC events",
    goal: "Turn inserts, updates, and deletes into target-table state.",
    code: `events = [
    {"op": "insert", "id": 1, "amount": 100},
    {"op": "update", "id": 1, "amount": 120},
    {"op": "delete", "id": 1},
]

table = {}
for event in events:
    if event["op"] == "delete":
        table.pop(event["id"], None)
    else:
        table[event["id"]] = event

print(table)`
  },
  18: {
    title: "Represent a small DAG",
    goal: "Write task dependencies before using an orchestration tool.",
    code: `dag = {
    "extract": [],
    "validate": ["extract"],
    "load": ["validate"],
    "profile": ["load"],
}

for task, depends_on in dag.items():
    print(task, "depends on", depends_on)`
  },
  19: {
    title: "Plan a backfill range",
    goal: "Generate daily partitions that need to be reloaded.",
    code: `from datetime import date, timedelta

start = date(2026, 5, 10)
end = date(2026, 5, 17)
current = start

while current <= end:
    print("reload partition:", current.isoformat())
    current += timedelta(days=1)`
  },
  20: {
    title: "Create run metadata",
    goal: "Store metadata that can support debugging and discovery.",
    code: `metadata = {
    "dataset": "orders",
    "source": "api/orders",
    "schema": ["id", "amount", "updated_at"],
    "rows_loaded": 96,
    "profile_created": True,
}

print(metadata)`
  },
  21: {
    title: "Combine orchestration steps",
    goal: "Sketch the ingestion system as ordered functions.",
    code: `def extract():
    return [{"id": 1, "amount": 100}]

def validate(rows):
    return [row for row in rows if row["amount"] >= 0]

def load(rows):
    print("loaded:", rows)

rows = extract()
clean_rows = validate(rows)
load(clean_rows)`
  },
  22: {
    title: "Process events one by one",
    goal: "Treat a list as a beginner stream.",
    code: `events = [
    {"id": 1, "type": "click"},
    {"id": 2, "type": "purchase"},
    {"id": 3, "type": "click"},
]

for event in events:
    print("processing event", event["id"], event["type"])`
  },
  23: {
    title: "Store an offset",
    goal: "Resume stream processing from the last completed position.",
    code: `events = ["a", "b", "c", "d"]
last_committed_offset = 1

for offset, event in enumerate(events):
    if offset <= last_committed_offset:
        continue
    print("process:", offset, event)
    last_committed_offset = offset

print("checkpoint:", last_committed_offset)`
  },
  24: {
    title: "See duplicate risk",
    goal: "Understand why at-least-once processing needs idempotent writes.",
    code: `events = [{"id": 1}, {"id": 2}, {"id": 2}]
target = {}

for event in events:
    target[event["id"]] = event

print("loaded once per id:", list(target.values()))`
  },
  25: {
    title: "Use a dead-letter list",
    goal: "Route invalid events away from the main stream.",
    code: `events = [{"id": 1, "amount": 10}, {"id": 2, "amount": "bad"}]
loaded = []
dead_letter = []

for event in events:
    if isinstance(event["amount"], int):
        loaded.append(event)
    else:
        dead_letter.append({"event": event, "reason": "amount is not int"})

print("loaded:", loaded)
print("DLQ:", dead_letter)`
  },
  26: {
    title: "Compare event time and arrival order",
    goal: "See why streaming systems need time semantics.",
    code: `events = [
    {"id": 1, "event_time": "10:05", "arrival": 1},
    {"id": 2, "event_time": "10:00", "arrival": 2},
]

print("arrival order:", [event["id"] for event in events])
by_event_time = sorted(events, key=lambda event: event["event_time"])
print("event-time order:", [event["id"] for event in by_event_time])`
  },
  27: {
    title: "Measure simple throughput",
    goal: "Compute records per second for a tiny processor.",
    code: `import time

events = list(range(10000))
start = time.perf_counter()
count = 0
for event in events:
    count += 1
seconds = time.perf_counter() - start

print("events per second:", round(count / seconds))`
  },
  28: {
    title: "Build a mini stream processor",
    goal: "Combine offsets, validation, and a dead-letter queue.",
    code: `events = [{"id": 1, "ok": True}, {"id": 2, "ok": False}]
offset = -1
loaded = []
dlq = []

for index, event in enumerate(events):
    if event["ok"]:
        loaded.append(event)
    else:
        dlq.append(event)
    offset = index

print("offset:", offset)
print("loaded:", loaded)
print("dlq:", dlq)`
  },
  29: {
    title: "Profile columns",
    goal: "Compute summaries that help quality checks and discovery.",
    code: `rows = [
    {"city": "Tokyo", "amount": 100},
    {"city": "Tokyo", "amount": None},
    {"city": "Osaka", "amount": 80},
]

cities = [row["city"] for row in rows]
amounts = [row["amount"] for row in rows]

print("unique cities:", len(set(cities)))
print("null amount rate:", amounts.count(None) / len(amounts))`
  },
  30: {
    title: "Detect schema drift",
    goal: "Compare yesterday's fields with today's fields.",
    code: `old_schema = {"id", "amount", "updated_at"}
new_schema = {"id", "amount", "updated_at", "currency"}

added = new_schema - old_schema
removed = old_schema - new_schema

print("added:", added)
print("removed:", removed)`
  },
  31: {
    title: "Calculate column overlap",
    goal: "Use Jaccard similarity to find related columns.",
    code: `orders_user_ids = {1, 2, 3, 4}
payments_user_ids = {3, 4, 5}

intersection = orders_user_ids & payments_user_ids
union = orders_user_ids | payments_user_ids
jaccard = len(intersection) / len(union)

print("similarity:", round(jaccard, 2))`
  },
  32: {
    title: "Create a small signature",
    goal: "Summarize a column with hashed sample values.",
    code: `values = ["Tokyo", "Osaka", "Tokyo", "Nagoya", "Kyoto"]

signature = sorted({hash(value) % 100 for value in values})[:3]

print("compact signature:", signature)`
  },
  33: {
    title: "Use sampling for change detection",
    goal: "Decide if re-profiling may be needed.",
    code: `old_sample = {"Tokyo", "Osaka", "Kyoto"}
new_sample = {"Tokyo", "Osaka", "Sapporo"}

changed = old_sample.symmetric_difference(new_sample)
change_rate = len(changed) / len(old_sample | new_sample)

print("change rate:", round(change_rate, 2))
print("reprofile:", change_rate > 0.25)`
  },
  34: {
    title: "Record experiment metrics",
    goal: "Make a thesis experiment measurable.",
    code: `result = {
    "method": "incremental_load",
    "runtime_seconds": 2.8,
    "duplicates": 0,
    "missing_records": 1,
    "schema_alerts": 2,
}

for metric, value in result.items():
    print(metric, value)`
  },
  35: {
    title: "Draft a coding-wise proposal",
    goal: "Turn the idea into a small system and evaluation plan.",
    code: `proposal = {
    "topic": "schema drift detection for CSV ingestion",
    "prototype": "Python ingestion script with validation",
    "baseline": "load without drift checks",
    "metric": "drift detection precision and false alarms",
    "limitation": "small synthetic dataset",
}

print(proposal)`
  }
};

const dataIngestionLibrary = [
  {
    title: "Aurum: A Data Discovery System",
    type: "Core paper",
    source: "ICDE, 2018",
    use: "The user's PDF direction: profiles, signatures, relationship discovery, approximate matching, and efficient maintenance of searchable enterprise data.",
    url: "https://dblp.org/rec/conf/icde/FernandezAKYMS18"
  },
  {
    title: "Apache Airflow ETL/ELT Use Case",
    type: "Official docs",
    source: "Apache Airflow",
    use: "Practical source for scheduled ingestion workflows, DAGs, dependencies, retries, backfills, and operational pipeline design.",
    url: "https://airflow.apache.org/use-cases/etl_analytics/"
  },
  {
    title: "Apache Beam Programming Guide",
    type: "Official docs",
    source: "Apache Beam",
    use: "Use for batch and streaming concepts, transforms, windowing, state, timers, and portable data processing patterns.",
    url: "https://beam.apache.org/documentation/programming-guide/"
  },
  {
    title: "Apache Kafka Design",
    type: "Official docs",
    source: "Apache Kafka",
    use: "Good foundation for streams, producers, consumers, offsets, logs, durability, and delivery tradeoffs.",
    url: "https://kafka.apache.org/42/design/design/"
  },
  {
    title: "Debezium Documentation",
    type: "Official docs",
    source: "Debezium",
    use: "Reference for change data capture, database change events, connectors, schema change handling, and CDC terminology.",
    url: "https://debezium.io/documentation/reference/stable/index.html"
  },
  {
    title: "Great Expectations Validation",
    type: "Official docs",
    source: "Great Expectations",
    use: "Practical source for validation, expectations, data quality checks, and writing testable ingestion rules.",
    url: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/"
  },
  {
    title: "pandas IO Tools",
    type: "Official docs",
    source: "pandas",
    use: "Beginner coding source for reading CSV, JSON, Excel, SQL, and other common ingestion inputs.",
    url: "https://pandas.pydata.org/docs/user_guide/io.html"
  },
  {
    title: "Singer Spec",
    type: "Open specification",
    source: "Meltano Hub",
    use: "Useful for understanding simple extract/load connector ideas: schemas, records, state messages, and incremental sync.",
    url: "https://hub.meltano.com/singer/spec/"
  }
];

const dataLakeLibrary = [
  {
    title: "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores",
    type: "Core paper",
    source: "VLDB, 2020",
    use: "Foundation for lakehouse table design: transaction log, ACID behavior, metadata, and cloud object storage tradeoffs.",
    url: "https://www.vldb.org/pvldb/vol13/p3411-armbrust.pdf"
  },
  {
    title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics",
    type: "Core paper",
    source: "CIDR, 2021",
    use: "Good background source for explaining why lakehouse systems combine data lake flexibility with warehouse-style management.",
    url: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
  },
  {
    title: "Apache Iceberg Documentation",
    type: "Official docs",
    source: "Apache Iceberg",
    use: "Best practical source for schema evolution, partitioning, snapshots, catalogs, and table format behavior.",
    url: "https://iceberg.apache.org/docs/latest/"
  },
  {
    title: "Delta Lake Documentation",
    type: "Official docs",
    source: "Delta Lake",
    use: "Use for ACID tables, constraints, optimization, transaction logs, and time travel concepts.",
    url: "https://docs.delta.io/latest/index.html"
  },
  {
    title: "Apache Parquet Documentation",
    type: "Official docs",
    source: "Apache Parquet",
    use: "Foundation for columnar storage, file layout, and query efficiency in analytical data lakes.",
    url: "https://parquet.apache.org/docs/"
  },
  {
    title: "The Hadoop Distributed File System",
    type: "Core paper",
    source: "MSST, 2010",
    use: "Background for distributed file storage, large files, metadata, replication, and early big-data storage design.",
    url: "https://storageconference.us/2010/Papers/MSST/Shvachko.pdf"
  },
  {
    title: "Apache Iceberg Performance",
    type: "Official docs",
    source: "Apache Iceberg",
    use: "Useful for beginner thesis ideas about pruning, metadata statistics, file planning, and query performance.",
    url: "https://iceberg.apache.org/docs/latest/performance/"
  },
  {
    title: "Delta Lake Optimizations",
    type: "Official docs",
    source: "Delta Lake",
    use: "Use for compaction, file layout, and optimization topics such as the small files problem.",
    url: "https://docs.delta.io/latest/optimizations-oss.html"
  }
];

const blockchainConsensusLibrary = [
  {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    type: "Core paper",
    source: "Satoshi Nakamoto, 2008",
    use: "Foundation for Proof of Work, blocks, longest-chain consensus, confirmations, and fork reasoning.",
    url: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    title: "Practical Byzantine Fault Tolerance",
    type: "Core paper",
    source: "OSDI, 1999",
    use: "Core BFT reference for quorums, phases, replicas, faulty nodes, and message-complexity discussion.",
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  },
  {
    title: "The Latest Gossip on BFT Consensus",
    type: "Core paper",
    source: "arXiv, 2018",
    use: "Tendermint-oriented source for BFT consensus, voting rounds, finality, and blockchain consensus assumptions.",
    url: "https://arxiv.org/abs/1807.04938"
  },
  {
    title: "Ethereum Proof-of-Stake Documentation",
    type: "Official docs",
    source: "Ethereum",
    use: "Beginner source for validators, stake, finality, incentives, and PoS concepts.",
    url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
  },
  {
    title: "Ethereum Proof-of-Work Documentation",
    type: "Official docs",
    source: "Ethereum",
    use: "Useful comparison source for PoW mining, difficulty, energy cost, and mechanism tradeoffs.",
    url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/"
  },
  {
    title: "Tendermint Consensus Documentation",
    type: "Official docs",
    source: "CometBFT",
    use: "Practical explanation of Tendermint-style proposal, prevote, precommit, rounds, and validator behavior.",
    url: "https://docs.cometbft.com/main/spec/consensus/"
  },
  {
    title: "A Survey of Blockchain Consensus Algorithms Performance Evaluation Criteria",
    type: "Survey paper",
    source: "arXiv, 2021",
    use: "Good survey-style map for metrics such as throughput, latency, scalability, and fault tolerance.",
    url: "https://arxiv.org/abs/2109.03935"
  },
  {
    title: "SoK: Consensus in the Age of Blockchains",
    type: "Survey paper",
    source: "ACM CCS, 2020",
    use: "Use as a higher-level map of blockchain consensus design choices and terminology.",
    url: "https://arxiv.org/abs/1711.03936"
  }
];

const tracks = {
  llm: {
    lessons,
    studyMaterials,
    quizzes,
    library,
    libraryTitle: "LLM thesis library",
    libraryIntro: "Already-written theses and core algorithm papers for RAG, model comparison, prompting, code generation, and fine-tuning."
  },
  "data-lake": {
    lessons: dataLakeLessons,
    studyMaterials: dataLakeStudyMaterials,
    quizzes: dataLakeQuizzes,
    library: dataLakeLibrary,
    libraryTitle: "Data Lake thesis library",
    libraryIntro: "Core papers and official sources for lakehouse design, Parquet, partitioning, metadata, compaction, query performance, and data quality."
  },
  "data-ingestion": {
    lessons: dataIngestionLessons,
    studyMaterials: dataIngestionStudyMaterials,
    quizzes: dataIngestionQuizzes,
    codeTasks: dataIngestionCodeTasks,
    library: dataIngestionLibrary,
    libraryTitle: "Data Ingestion thesis library",
    libraryIntro: "Coding and research sources for batch ingestion, streaming ingestion, CDC, validation, orchestration, profiling, data discovery, and incremental maintenance."
  },
  "blockchain-consensus": {
    lessons: blockchainConsensusLessons,
    studyMaterials: blockchainConsensusStudyMaterials,
    quizzes: blockchainConsensusQuizzes,
    library: blockchainConsensusLibrary,
    libraryTitle: "Blockchain Consensus thesis library",
    libraryIntro: "Core consensus papers and official sources for PoW, PoS, BFT, finality, validator behavior, simulations, and distributed-systems tradeoffs."
  }
};

