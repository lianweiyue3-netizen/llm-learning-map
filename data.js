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
    level: "Current daily tracker",
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
    id: "data-lake",
    title: "Data Lake",
    shortTitle: "Data Lake",
    level: "Easy systems thesis",
    summary: "Study how organizations store raw and processed data for analytics. The CS angle is file formats, metadata, partitioning, query performance, and data quality.",
    concepts: ["object storage", "Parquet", "schema evolution", "partitioning", "metadata catalog", "lakehouse"],
    path: [
      "Learn the difference between database, data warehouse, and data lake.",
      "Read what columnar files like Parquet are used for.",
      "Study partitioning: why folder layout affects query speed.",
      "Compare table formats such as Delta Lake and Apache Iceberg.",
      "Pick one small dataset and design two storage layouts.",
      "Measure query time, file count, or storage size.",
      "Write limitations: data volume, local machine, and tool versions."
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
    level: "Easy distributed systems thesis",
    summary: "Study how distributed nodes agree on one shared history even when messages are delayed or some nodes fail. The CS angle is safety, liveness, fault models, and performance tradeoffs.",
    concepts: ["blocks", "forks", "safety", "liveness", "PoW", "PoS", "BFT"],
    path: [
      "Start with why distributed systems need consensus.",
      "Learn blocks, forks, confirmations, and finality.",
      "Compare Proof of Work and Proof of Stake at a high level.",
      "Read the basic idea of Byzantine fault tolerance.",
      "Simulate a small voting or leader-based consensus process.",
      "Measure latency, number of messages, or failure tolerance.",
      "Write tradeoffs: energy, decentralization, throughput, and security."
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

const tracks = {
  llm: {
    lessons,
    studyMaterials,
    quizzes
  },
  "data-lake": {
    lessons: dataLakeLessons,
    studyMaterials: dataLakeStudyMaterials,
    quizzes: dataLakeQuizzes
  },
  "blockchain-consensus": {
    lessons: blockchainConsensusLessons,
    studyMaterials: blockchainConsensusStudyMaterials,
    quizzes: blockchainConsensusQuizzes
  }
};

