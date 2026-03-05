
import { Experience, Project, SkillCategory, Education } from './types';

export const RESUME_DATA = {
  personal: {
    name: "Sandeepteja Sundara",
    role: "Data Scientist",
    location: "Chicago, IL",
    email: "sundarasandeepteja@gmail.com",
    phone: "+1 (779) 775-7725",
    linkedin: "linkedin.com/in/sundara-sandeepteja",
    github: "github.com/Sandetej",
    summary: "Data Scientist with 4+ years of experience shipping production ML and Generative AI systems that drove $5M+ in measurable business impact across legal analytics, retail supply chain, and financial services. Currently building RAG pipelines, fine-tuned transformer models, and LLM evaluation frameworks at Thomson Reuters, powering automated contract review workflows processing 35K+ legal documents daily. Proven record of designing causal inference and Bayesian experimentation frameworks, improving forecast accuracy by 14%, and reducing compliance review time by 28%. MS in Computer Science from Northern Illinois University."
  },
  skills: [
    {
      name: "Programming & Databases",
      skills: ["Python", "SQL", "Window Functions", "CTEs", "Query Optimization", "Git"]
    },
    {
      name: "Machine Learning",
      skills: ["Scikit-learn", "Regression & Classification", "Clustering", "XGBoost", "LightGBM", "Time-Series Forecasting", "ARIMA", "Prophet", "SHAP", "Model Explainability"]
    },
    {
      name: "Deep Learning & NLP",
      skills: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "LSTM", "Transformers", "BERT", "RoBERTa", "DistilBERT"]
    },
    {
      name: "LLMs & Generative AI",
      skills: ["GPT-4", "Fine-Tuning (LoRA/QLoRA)", "LLM Evaluation (DeepEval)", "LLM Guardrails", "RAG Pipelines", "Prompt Engineering", "LangChain", "LangGraph", "CrewAI", "Vector Databases (FAISS)"]
    },
    {
      name: "Data Engineering & Experimentation",
      skills: ["Databricks", "Spark", "dbt", "Airflow", "Kafka", "A/B Testing", "Causal Inference", "Bayesian Experimentation"]
    },
    {
      name: "Cloud & MLOps",
      skills: ["AWS (SageMaker, Bedrock, S3)", "GCP (Vertex AI)", "MLflow", "Docker", "Kubernetes", "CI/CD", "Drift Monitoring", "LLMOps"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Thomson Reuters",
      role: "Data Scientist II",
      period: "Aug 2025 – Present",
      description: [
        "Developed RoBERTa-based classification models using PyTorch on 600K+ annotated legal clauses, boosting AI-driven risk tagging accuracy by 15% and saving 40 hours weekly in manual enterprise compliance reviews.",
        "Engineered a scalable Retrieval-Augmented Generation (RAG) pipeline integrating FAISS, LangChain, and context engineering (adaptive chunking, metadata-enriched retrieval), reducing multinational compliance review times by 28% and irrelevant passage injection by 40%.",
        "Fine-tuned jurisdiction-specific BERT models using LoRA on regulatory datasets across 8 jurisdictions, increasing obligation clause extraction recall by 12% and expanding scalable compliance coverage to 3 new regulatory frameworks.",
        "Engineered structured prompt chains with few-shot exemplars and schema-constrained output parsing to standardize GPT-4 contract clause extraction, achieving 92% format compliance across 12 contract types and reducing downstream manual correction by 45%.",
        "Architected Dockerized inference services on Kubernetes handling 35K+ daily legal document requests, reducing procurement contract turnaround from 5 days to 2 days and enabling corporate governance teams to close quarterly audits 40% faster.",
        "Implemented algorithmic evaluation pipelines utilizing DeepEval to establish deterministic output guardrails, reducing GPT-4 hallucination rates by 35% in production contract summarization.",
        "Presented quarterly model performance reviews to legal operations leadership, translating precision-recall trade-offs into contract risk exposure terms that secured executive buy-in for a $500K+ model infrastructure investment.",
        "Deployed automated drift monitoring and CI/CD retraining pipelines via MLflow, maintaining 90% classification F1-scores during quarterly regulatory shifts and saving 15 manual engineering hours per cycle."
      ]
    },
    {
      company: "HCL Technologies",
      role: "Data Scientist",
      period: "Oct 2020 – Dec 2023",
      description: [
        "Benchmarked Prophet, LSTM, and Temporal Fusion Transformer approaches against XGBoost baselines on 1.1M+ retail transactions, improving 8-week demand forecast accuracy by 14% on high-volatility SKUs and reducing seasonal stockouts by 22%.",
        "Constructed real-time and batch feature pipelines using Kafka, Spark Streaming, and PySpark, processing 800K+ daily transactions and reducing excess inventory by 11% across 6 fulfillment centers, freeing $2.4M in working capital.",
        "Designed controlled A/B experiments with causal inference validation (difference-in-differences, synthetic controls) across 200+ SKUs, isolating 7% incremental lift in average order value and informing $1.2M+ promotional budget reallocation.",
        "Pioneered a Bayesian experimentation framework with adaptive stopping rules for pricing rollouts, reducing experiment runtime by 35% while maintaining 95% statistical power and enabling 3x more concurrent tests per quarter.",
        "Deployed LightGBM-based lifetime value scoring in production batch pipelines, driving $1.8M in promotional spend reallocation and lifting high-value customer retention by 9%.",
        "Delivered SHAP-based explainability dashboards for XGBoost pricing models, driving merchandising team model adoption from 40% to 85% and reducing stakeholder approval cycles by 20%.",
        "Mentored 3 junior data scientists on NLP model development and production deployment best practices, establishing peer code review standards that reduced model deployment defects by 30% across the team."
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Data Analyst",
      period: "Jan 2020 – Sep 2020",
      description: [
        "Segmented 450K+ banking customers into 4 behavioral cohorts using clustering, propensity modeling, and advanced SQL (CTEs, window functions), lifting premium card upgrade conversions by 12% and retention campaign response rates by 16%.",
        "Built a hybrid recommendation engine using collaborative filtering and behavioral embeddings for digital banking cross-sell, increasing click-through rates by 15% and generating $500K in incremental quarterly revenue.",
        "Trained logistic regression and gradient boosted models for early-warning credit deterioration scoring across 120K+ accounts, enabling preemptive limit adjustments that reduced 60-day delinquency transitions by 10%.",
        "Established standardized ML experiment tracking using MLflow with Airflow-orchestrated retraining schedules for a 5-person analytics team, reducing onboarding ramp-up by 30% and accelerating time-to-production for new credit models by 25%."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "E-Commerce Analytics Lakehouse with GenAI Recommendations",
      period: "Nov 2025 – Dec 2025",
      category: "GenAI",
      technologies: ["Databricks", "PySpark", "Delta Lake", "dbt", "MLlib (ALS)", "MLflow", "Unity Catalog", "Claude API (Bedrock)"],
      problem: "E-commerce companies struggle to unify scattered transaction data, ensure governance compliance, and deliver personalized recommendations at scale.",
      solution: "Established an end-to-end Databricks Medallion lakehouse processing 5M+ records with Delta Lake CDC, dbt transformations, and PII masking. Integrated Claude API via AWS Bedrock to generate GenAI-powered product descriptions.",
      impact: "Achieved 70% reduction in recommendation-to-display latency through optimized partitioning, with full governance compliance and real-time personalized recommendations."
    },
    {
      title: "Banking Intent Classifier with Agentic AI Architecture",
      period: "May 2025 – Jun 2025",
      category: "Agentic AI",
      technologies: ["PyTorch", "DistilBERT", "CrewAI", "LangGraph", "FastAPI", "GCP Vertex AI"],
      problem: "Need for automated banking assistant to accurately classify customer intents and handle multi-turn dialogs securely at scale.",
      solution: "Constructed a multi-agent AI system utilizing CrewAI and LangGraph for intent classification and response generation. Shipped fine-tuned DistilBERT via API on GCP Vertex AI with observability monitoring.",
      impact: "Achieved 98% F1-score on the Banking77 benchmark, 85% successful dialog completion at sub-50ms latency, and zero data leaks across 200+ red-team tests."
    },
    {
      title: "Financial Document RAG System (GPT-4 + Llama 3)",
      period: "May 2025 – Jun 2025",
      category: "RAG",
      technologies: ["LangChain", "LangSmith", "GPT-4", "Llama 3", "FAISS", "Pinecone", "Hybrid Search", "Cohere Rerank"],
      problem: "Time-consuming manual review of SEC 10-K/10-Q filings by analysts, with existing automated tools prone to hallucinations.",
      solution: "Assembled production-grade RAG pipeline using LangChain with hybrid search (BM25 + FAISS/Pinecone). Configured local Llama 3 with quantization for cost-efficient inference; incorporated Cohere Rerank with retrieval evaluation.",
      impact: "Achieved 92% metric extraction accuracy with LLM quality assessment to minimize hallucinations. Local Llama 3 cut inference costs 60%; Cohere Rerank improved retrieval precision by 23% over fixed-size chunking baselines."
    }
  ] as Project[],
  education: [
    {
      university: "Northern Illinois University",
      degree: "Master of Science (MS) in Computer Science (Data Science)",
      location: "DeKalb, Illinois",
      gpa: "3.73",
      period: "Jan 2024 – Dec 2025"
    },
    {
      university: "Sathyabama Institute of Science and Technology",
      degree: "Bachelor’s in Electronics and Communication",
      location: "Chennai, India",
      gpa: "7.72",
      period: "Jul 2016 – May 2020"
    }
  ] as Education[],
  achievements: [
    "Best Employee of the Quarter (HCL Technologies): Awarded for exceptional contributions in improving machine learning workflows.",
    "Zolve Emerging Scholar Award – Spring 2024 | Zolve: Received a $1,000 scholarship to support Master's studies at Northern Illinois University, recognizing vision, goals, and achievements.",
    "Graduate Teaching Assistant (Northern Illinois University): Mentored 130+ students in Python programming and applied machine learning coursework."
  ],
  narrative: {
    careerJourney: `Sandeepteja's career is a deliberate arc — from analytics foundations, to production-scale ML, to graduate research, to cutting-edge GenAI — each stage chosen intentionally to become a more complete data scientist.

Phase 1 – Tata Consultancy Services (Jan 2020 – Sep 2020): Sandeepteja started right out of undergrad at TCS, building customer segmentation and recommendation systems for banking clients. He learned to translate business questions into analytical approaches using advanced SQL, clustering, and propensity modeling. The key lesson: data is most valuable when it's actionable and personalized. This is where he built his foundation in ML and analytical thinking.

Phase 2 – HCL Technologies (Oct 2020 – Dec 2023): Sandeepteja deliberately moved into large-scale ML production work. He owned end-to-end forecasting and experimentation systems for retail supply chain, processing 800K+ daily transactions. He built Bayesian experimentation frameworks, SHAP explainability dashboards, and Kafka/Spark pipelines that freed $2.4M in working capital. The biggest lesson: the model is 20% of the problem — the other 80% is data engineering, experimentation rigor, and stakeholder adoption.

Phase 3 – MS at NIU (Jan 2024 – Dec 2025): After 3+ years in industry, Sandeepteja pursued his Master's in Computer Science at Northern Illinois University to build deeper expertise in LLMs and generative AI, graduating in December 2025 with a 3.73 GPA.

Phase 4 – Thomson Reuters (Aug 2025 – Present): Now building production RAG pipelines, fine-tuned transformer models, and LLM evaluation frameworks for automated legal contract review, processing 35K+ documents daily and driving $5M+ in measurable business impact.`,

    whyMasters: `After 3+ years of production ML experience at TCS and HCL Technologies, Sandeepteja made a deliberate decision to pursue his Master's in Computer Science (Data Science) at Northern Illinois University. The decision was driven by a clear gap he recognized: the field was evolving rapidly, especially with the rise of large language models and generative AI, and he wanted a stronger theoretical foundation — deeper knowledge of NLP, deep learning, and statistical methods — to push into the next generation of problems. Grad school wasn't a step back or a career reset. It was a calculated accelerator. He wanted to combine his hands-on production experience with rigorous academic depth, so he could operate at the leading edge of what's possible. He graduated in December 2025 with a 3.73 GPA and is now applying that depth at Thomson Reuters, building LLM systems that process 35K+ legal documents daily.`,

    careerGoal: `Sandeepteja is a Data Scientist II at Thomson Reuters, currently building production GenAI systems for automated legal contract review. He's driven to continue pushing the boundaries of LLM applications — RAG pipelines, fine-tuned transformer models, and LLM evaluation frameworks — while growing into senior or staff-level roles where he shapes not just individual models, but the data culture and ML infrastructure of an organization. He's especially excited about high-impact problems that require the full stack: from translating ambiguous business requirements into analytical approaches, through building and deploying models, to communicating results that drive multi-million dollar decisions.`,

    workStyle: `Sandeepteja is known for being a full-stack data scientist in the truest sense — comfortable owning everything from messy raw data to executive dashboards. Colleagues describe him as someone who bridges the gap between technical and non-technical stakeholders naturally; he can spend the morning fine-tuning a RoBERTa model and the afternoon presenting model performance reviews to legal operations leadership. He's a strong communicator who believes the best data science work is explainable, reproducible, and built for the people who'll use it. He thrives in fast-paced environments with high ambiguity — at Thomson Reuters he presents quarterly model performance reviews that translate precision-recall trade-offs into contract risk exposure terms, securing executive buy-in for $500K+ infrastructure investments. He documents assumptions rigorously, validates results statistically, and doesn't ship a model without thinking about monitoring, explainability, and maintenance.`,

    companyStories: {
      thomsonReuters: {
        situation: "Thomson Reuters legal operations teams manually reviewing thousands of complex contracts across multiple jurisdictions. Compliance review was slow, inconsistent, and prone to error — 5-day procurement contract turnarounds and quarterly audits taking weeks to close.",
        task: "Build production-grade AI systems to automate legal clause extraction, risk tagging, and contract summarization at scale — processing 35K+ documents daily while maintaining accuracy and reducing hallucination rates.",
        action: "Developed RoBERTa-based classification models on 600K+ annotated legal clauses. Engineered scalable RAG pipeline with FAISS, LangChain, and adaptive chunking. Fine-tuned BERT models with LoRA across 8 jurisdictions. Built structured GPT-4 prompt chains with schema-constrained output parsing. Architected Dockerized inference services on Kubernetes. Implemented DeepEval evaluation pipelines for hallucination guardrails.",
        result: "15% boost in AI-driven risk tagging accuracy. 28% reduction in compliance review times. 92% format compliance across 12 contract types. Hallucination rates down 35%. Procurement turnaround: 5 days → 2 days. Secured $500K+ model infrastructure investment."
      },
      hcl: {
        situation: "HCL retail supply chain clients managing 1.1M+ transactions with inaccurate demand forecasting, excess inventory, and no rigorous experimentation framework. Seasonal stockouts and over-allocation were costing millions in lost revenue and trapped working capital.",
        task: "Build accurate demand forecasting systems, real-time data pipelines, and a rigorous A/B and Bayesian experimentation framework to optimize inventory and marketing spend across 200+ SKUs.",
        action: "Benchmarked Prophet, LSTM, TFT against XGBoost baselines. Built Kafka + Spark Streaming pipelines processing 800K+ daily transactions. Designed controlled A/B experiments with causal inference validation. Pioneered Bayesian experimentation framework with adaptive stopping rules. Deployed LightGBM LTV scoring. Delivered SHAP explainability dashboards.",
        result: "14% improvement in 8-week forecast accuracy. 22% reduction in seasonal stockouts. $2.4M in working capital freed. $1.2M+ promotional budget reallocation. $1.8M in promotional spend optimization. Merchandising team model adoption: 40% → 85%."
      },
      tcs: {
        situation: "TCS banking clients with 450K+ customers and no systematic way to segment behavior, predict credit risk, or personalize digital banking experiences. Manual processes, intuition-based decisions, and missed cross-sell opportunities were leaving significant revenue on the table.",
        task: "Build customer segmentation models, recommendation engines, and credit risk scoring systems using advanced analytics and ML to drive measurable conversion and retention improvements.",
        action: "Segmented 450K+ customers using clustering, propensity modeling, and advanced SQL. Built hybrid recommendation engine with collaborative filtering and behavioral embeddings. Trained logistic regression and gradient boosted models for credit deterioration scoring. Established MLflow experiment tracking with Airflow retraining schedules.",
        result: "12% lift in premium card upgrade conversions. 16% improvement in retention campaign response rates. 15% increase in cross-sell click-through rates. $500K in incremental quarterly revenue. 10% reduction in 60-day delinquency transitions."
      }
    }
  }
};

export const SYSTEM_INSTRUCTION = `
You are a resume assistant embedded in Sandeepteja Sundara's portfolio website.
Your sole purpose is to answer questions about Sandeepteja — his professional background, career journey, motivations, work style, and personal story — based strictly on the data provided below.

RESUME + NARRATIVE CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

STRICT RULES:
- IMPORTANT: Sandeepteja has ALREADY GRADUATED. He completed his MS in Computer Science at Northern Illinois University in December 2025. Never say he is "currently pursuing" or "enrolled in" his Master's — always say he "completed" or "graduated" (Dec 2025).
- IMPORTANT: Sandeepteja is currently working at Thomson Reuters as a Data Scientist II (Aug 2025 – Present). Always reference this as his current role.
- ONLY answer questions directly related to Sandeepteja: his skills, experience, projects, education, achievements, career story, motivations, goals, and contact information.
- If asked anything unrelated to Sandeepteja or his background (general knowledge, coding help, other people, opinions, etc.), respond: "I can only answer questions about Sandeepteja. Feel free to ask about his career journey, skills, projects, or experience!"
- Never hallucinate skills, experiences, or facts not present in the data above.
- Do not answer questions about other people, companies in general, or anything outside Sandeepteja's profile.

WHAT YOU CAN ANSWER (beyond just the resume bullet points):
- "Why did he go back for a Master's after 3 years in industry?" → Use narrative.whyMasters
- "Walk me through his career journey" → Use narrative.careerJourney
- "What's his career goal?" → Use narrative.careerGoal
- "What's he like to work with?" / "What's his work style?" → Use narrative.workStyle
- "Tell me about his time at [company]" → Use narrative.companyStories for the relevant company (thomsonReuters, hcl, tcs)
- "Why did he go back to school?" → Use narrative.whyMasters
- Any personal "why" or "story" questions → Draw from the narrative section

RESPONSE STYLE:
- Use professional third person ("Sandeepteja...", "His experience includes...").
- **Keep responses SHORT and scannable — 120 to 150 words maximum** for most questions.
- For "walk me through" or career journey questions: give a 3–4 sentence high-level summary (one sentence per phase/company), then offer: "Want more detail on any specific role?"
- For factual questions (skills, education, contact): answer directly in 1–3 sentences or a tight bullet list.
- Use **bold** (with double asterisks like **this**) for company names, key metrics, and role titles so they stand out.
- Use bullet points (starting with "- ") for lists of skills, projects, or achievements.
- Never write long paragraphs. Break into short bullets or sentences.
- Highlight quantifiable impact where relevant (e.g., **14% forecast accuracy improvement**, **$5M+ business impact**).
- For contact info requests, share his email (${RESUME_DATA.personal.email}) or LinkedIn (${RESUME_DATA.personal.linkedin}).
`;
