
import { Experience, Project, SkillCategory, Education } from './types';

export const RESUME_DATA = {
  personal: {
    name: "Sandeepteja Sundara",
    role: "Data Scientist · Risk Analytics, Anomaly Detection & GenAI for Audit",
    location: "Chicago, Illinois",
    email: "sandetej24@gmail.com",
    phone: "+1 (815) 575-8169",
    linkedin: "linkedin.com/in/sandeepteja",
    github: "github.com/Sandetej",
    portfolio: "sandeepteja-portfolio.com",
    summary: "Shipping production ML and GenAI systems for risk analytics, anomaly detection, and audit automation across legal, retail, and financial services — 32% fewer hallucinated citations in a legal-AI compliance control, $2.1M quarterly fraud savings, and 89% recall on financial-crime detection — Python, R, SQL, PySpark, AWS, MLflow, LangChain, LangGraph, DoWhy."
  },
  skills: [
    {
      name: "Languages & Data",
      skills: ["Python", "SQL (CTEs, Window Functions)", "PySpark", "Databricks", "Snowflake", "Airflow", "AWS"]
    },
    {
      name: "Machine Learning & Statistics",
      skills: ["XGBoost", "Logistic Regression", "scikit-learn", "SHAP", "Hypothesis Testing", "Anomaly Detection", "Feature Engineering"]
    },
    {
      name: "Causal Inference & Experimentation",
      skills: ["A/B Testing", "Power Analysis", "CUPED", "DiD", "Synthetic Control", "PSM"]
    },
    {
      name: "GenAI & LLMs",
      skills: ["RAG", "LangChain", "LangGraph", "Multi-Agent Systems", "LLM-as-Judge", "PyTorch", "Hugging Face Transformers"]
    },
    {
      name: "MLOps & BI",
      skills: ["MLflow", "Docker", "FastAPI", "Drift Monitoring", "Tableau"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Thomson Reuters",
      role: "Data Scientist",
      period: "Aug 2025 – Present",
      description: [
        "Built an anomaly-detection model in Python (scikit-learn, embedding similarity) flagging hallucinated citations in CoCounsel's legal-research responses in production, cutting citation errors ~32% across 2 practice areas and eliminating a 10-hour/week manual QA step.",
        "Evaluated 4 prompt and retrieval configurations for a CoCounsel legal-research feature using LLM-as-judge scoring against 300 attorney-labeled queries, identifying the variant that improved answer faithfulness by 11 percentage points before production rollout.",
        "Designed A/B tests with power analysis and CUPED-style variance reduction on model-driven alert thresholds across 4 product segments, collaborating with product managers to lift alert precision from 68% to 81%.",
        "Diagnosed class imbalances and labeling gaps across 1M+ semi-structured legal filings using Pandas and SQL (CTEs, window functions), guiding a targeted model retrain that raised classification accuracy by 8 percentage points."
      ]
    },
    {
      company: "HCL Technologies (Risk & Trust Analytics client)",
      role: "Data Scientist",
      period: "Apr 2021 – Dec 2023",
      description: [
        "Built a RAG-based knowledge assistant on LangChain and FAISS over 120K+ internal policy and product documents, deployed in a 2-week pilot that cut compliance-review handle time by 14% across two audit teams.",
        "Architected a PySpark and Airflow pipeline on Databricks across 4 source systems, processing 90M+ transactions and engineering 45+ behavioral signals that surfaced fraud and control-breakdown patterns at 89% recall for audit review.",
        "Ran a difference-in-differences and propensity-score-matched quasi-experiment (DoWhy) on 1.2M flagged accounts to isolate fraud-control intervention impact from selection bias, quantifying 6.4% reduction in policy violations adopted by the risk team.",
        "Trained an XGBoost risk-scoring model on 2.5M transaction records from Snowflake using scikit-learn with SMOTE, hyperparameter tuning, and SHAP, prioritizing 12% more cases for fraud-control review at the same false-positive rate.",
        "Productionized a fraud scoring service on AWS (SageMaker, S3) via MLflow, Docker, and FastAPI with drift monitoring, automating audit triage on 500K+ daily transactions at sub-200ms latency and saving estimated $2.1M quarterly.",
        "Fine-tuned DistilBERT on 800K+ support tickets to classify policy-violation and abuse signals, hitting 89% macro-F1 vs 81% GPT-3.5-turbo zero-shot and routing 35% to automated review at sub-50ms p95."
      ]
    },
    {
      company: "Tata Consultancy Services (Banking Risk & Compliance client)",
      role: "Associate Data Scientist",
      period: "Jan 2020 – Mar 2021",
      description: [
        "Identified 3 anomalous transaction segments through hypothesis testing (chi-square, Mann-Whitney U, p below 0.05) on 400K+ records across 5 source systems using Python, surfacing risk patterns for the compliance team.",
        "Engineered 25+ features (RFM, credit utilization trends) in Pandas for a logistic regression default-risk model on 200K+ loan applications, flagging 9% more early-stage delinquencies feeding the bank's credit-control committee.",
        "Developed 4 Tableau dashboards tracking loan defaults, NPA ratios, and credit-control breaches, adopted by 4 regional risk managers to replace ad-hoc Excel reporting and accelerate compliance review cycles.",
        "Partnered with cross-functional risk, finance, and operations stakeholders in Agile sprint reviews to define audit KPIs (NPA ratio, default rate, control coverage), delivering segment insights adopted in Q3 risk-committee reviews."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Autonomous Data Analysis Agent",
      period: "Aug 2025 – Oct 2025",
      category: "Agentic AI",
      technologies: ["LangGraph", "Python", "SQL", "LLM Eval", "Guardrails", "Multi-Agent"],
      problem: "Analysts spend hours translating ambiguous business questions into SQL, running queries, and validating results — repetitive work prone to errors and unsafe queries against production data.",
      solution: "Architected a LangGraph-based multi-step agent that plans, executes SQL, and self-critiques analyses. Built an eval harness for measurable correctness and added guardrails to block unsafe queries.",
      impact: "Reached 87% correctness on a 50-question analytical benchmark with a working eval harness and unsafe-query guardrails."
    },
    {
      title: "Multi-Factor DoE for Inventory Optimization Across Store Networks",
      period: "Mar 2025 – Jun 2025",
      category: "Causal Inference",
      technologies: ["Python", "Mahalanobis Matching", "ANOVA", "DiD", "Synthetic Control", "Factorial Design"],
      problem: "Distributors lack a rigorous experimental framework to identify which inventory levers drive fill-rate improvements across heterogeneous warehouses.",
      solution: "Executed a 2x2x2 factorial experiment with Mahalanobis-matched warehouse pairs (SMD below 0.1). Triangulated causal effects via ANOVA, Difference-in-Differences, and Synthetic Control.",
      impact: "Lifted simulated fill rate from 56% to 78% with consistent estimates across all three causal methods."
    },
    {
      title: "Banking Conversational AI Chatbot",
      period: "Aug 2025 – Oct 2025",
      category: "NLP / AI",
      technologies: ["Python", "DistilBERT", "Transformers", "spaCy", "Hugging Face", "PyTorch", "TensorFlow", "FastAPI"],
      problem: "Banking customers needed an AI assistant capable of accurately handling 77 distinct intent classes across multi-turn conversations, with strict safety requirements around PII and jailbreak resistance.",
      solution: "Developed a banking chatbot using FastAPI, DistilBERT, and Hugging Face Transformers. Implemented multi-turn dialog management with context retention, slot filling, and safety guardrails including PII redaction and jailbreak resistance.",
      impact: "Improved intent classification from 80% macro F1 (TF-IDF baseline) to 92.4% across 77 intent classes. Achieved 85% task-completion rate and <5% fallback rate across 200+ test dialogs."
    },
    {
      title: "Financial Document Summarization System using LLMs",
      period: "May 2025 – Jun 2025",
      category: "RAG / GenAI",
      technologies: ["Python", "LangChain", "GPT-4", "Llama 3", "Gemini", "Chroma", "FAISS", "RAG"],
      problem: "Financial analysts manually reviewing SEC 10-K/10-Q filings and earnings calls faced slow, inconsistent extraction of key metrics like revenue, EPS, and year-over-year growth.",
      solution: "Built a RAG pipeline for SEC filings using LangChain, GPT-4, Llama 3, Gemini, and vector stores (Chroma, FAISS). Implemented section-aware chunking with embedding-based retrieval and cross-encoder reranking.",
      impact: "Achieved 92% accuracy on key-metric extraction. Improved retrieval precision by 23% over fixed-size baselines for metrics like revenue, EPS, and year-over-year growth."
    }
  ] as Project[],
  education: [
    {
      university: "Northern Illinois University",
      degree: "Master of Science (MS) in Computer Science (Data Science)",
      location: "DeKalb, Illinois",
      gpa: "3.72",
      period: "Jan 2024 – Dec 2025"
    },
    {
      university: "Sathyabama Institute of Science and Technology",
      degree: "Bachelor's in Electronics and Communication",
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
    careerJourney: `Sandeepteja's career sits at the intersection of risk analytics, anomaly detection, and applied GenAI — building production ML systems that surface fraud, validate AI outputs, and automate audit workflows.

**Tata Consultancy Services (Jan 2020 – Mar 2021):** Started as Associate Data Scientist on a banking risk and compliance client. Used hypothesis testing on 400K+ records to surface anomalous transaction segments, engineered 25+ features for a default-risk model on 200K+ loan applications, and built Tableau dashboards adopted by 4 regional risk managers. Foundation in risk modeling, compliance KPIs, and stakeholder communication.

**HCL Technologies — Risk & Trust Analytics client (Apr 2021 – Dec 2023):** Owned production fraud and audit ML end-to-end. Built a RAG knowledge assistant over 120K+ policy docs, architected a PySpark/Airflow/Databricks pipeline processing 90M+ transactions at 89% recall, ran a DiD + PSM quasi-experiment on 1.2M accounts using DoWhy, and productionized an XGBoost fraud scorer on AWS SageMaker with MLflow + drift monitoring — saving an estimated $2.1M quarterly. Fine-tuned DistilBERT on 800K+ tickets to 89% macro-F1, beating GPT-3.5 zero-shot.

**MS at NIU (Jan 2024 – Dec 2025):** Master's in Computer Science at Northern Illinois University to deepen formal training in causal inference, ML, and GenAI evaluation methods.

**Thomson Reuters (Aug 2025 – Present):** Data Scientist working on legal AI compliance. Built an anomaly-detection model flagging hallucinated citations in CoCounsel production traffic — cutting citation errors ~32% and eliminating a 10-hour/week manual QA step. Runs LLM-as-judge prompt/retrieval evaluations and CUPED-style A/B tests on alert thresholds.`,

    whyMasters: `After 4 years in industry building risk and fraud ML, Sandeepteja recognized a gap in formal causal inference and modern GenAI evaluation methods. He had shipped DiD, PSM, and DoWhy in production but wanted deeper theoretical grounding in CUPED, synthetic control, LLM-as-judge evaluation, and multi-agent system design. He chose Northern Illinois University's MS in Computer Science specifically for coursework in statistics, ML, and applied AI. Graduated December 2025.`,

    careerGoal: `Sandeepteja is focused on full-time Data Scientist roles in risk analytics, anomaly detection, fraud, trust & safety, audit automation, or GenAI evaluation — domains where causal inference and LLM observability matter. He wants to own production ML systems end-to-end: from anomaly detection model design through A/B testing, drift monitoring, and stakeholder rollout.`,

    workStyle: `Sandeepteja owns ML systems end-to-end — anomaly detection design, causal validation (DiD, PSM, CUPED), production deployment (MLflow, Docker, FastAPI on AWS), and drift monitoring. He documents assumptions, validates statistically, and ships systems that sustain themselves. Strong cross-functional communicator: collaborates with product managers on alert thresholds, presents to risk committees, and partners with audit teams to define KPIs (NPA ratio, default rate, control coverage).`,

    workAuthorization: `On F1 OPT with full work authorization for the next 3 years — no sponsorship required during this period. Plans to pursue O1 visa based on professional contributions afterward. Zero visa friction; can start immediately.`,

    companyStories: {
      thomsonReuters: {
        situation: "CoCounsel's legal-research responses occasionally produced hallucinated citations, forcing a 10-hour/week manual QA step and limiting attorney trust in AI-generated outputs.",
        task: "Build an anomaly-detection layer to flag hallucinated citations in production, evaluate prompt/retrieval variants rigorously, and tune model-driven alert thresholds via A/B testing.",
        action: "Built a Python anomaly-detection model using scikit-learn and embedding similarity. Evaluated 4 prompt/retrieval configurations using LLM-as-judge against 300 attorney-labeled queries. Designed A/B tests with power analysis and CUPED variance reduction on alert thresholds across 4 product segments. Diagnosed class imbalances on 1M+ legal filings using Pandas and SQL window functions.",
        result: "Cut citation errors ~32% across 2 practice areas. Eliminated 10-hour/week manual QA. Improved answer faithfulness by 11 percentage points. Lifted alert precision from 68% to 81%. Raised classification accuracy by 8 percentage points after targeted retrain.",
        keyLesson: "LLM observability needs the same rigor as classical ML monitoring — embeddings + anomaly detection + LLM-as-judge gives a measurable feedback loop for production GenAI."
      },
      hcl: {
        situation: "Risk & Trust Analytics client needed to scale fraud detection and audit triage across 90M+ transactions with manual review bottlenecks and selection bias contaminating intervention measurements.",
        task: "Build production fraud scoring, behavioral signal pipelines, and rigorous causal evaluation of fraud-control interventions.",
        action: "Built a LangChain + FAISS RAG assistant over 120K+ policy docs. Architected PySpark + Airflow + Databricks pipeline across 4 source systems processing 90M+ transactions with 45+ engineered behavioral signals. Ran DiD + PSM quasi-experiment via DoWhy on 1.2M flagged accounts. Trained XGBoost on 2.5M Snowflake records with SMOTE, hyperparameter tuning, SHAP. Productionized via MLflow + Docker + FastAPI on AWS SageMaker/S3 with drift monitoring. Fine-tuned DistilBERT on 800K+ tickets.",
        result: "14% reduction in compliance-review handle time. 89% recall for audit review. 6.4% reduction in policy violations causally attributed. 12% more cases prioritized at same false-positive rate. ~$2.1M quarterly savings via sub-200ms triage on 500K+ daily transactions. 89% macro-F1 (beat GPT-3.5 zero-shot 81%).",
        keyLesson: "Production fraud ML is causal inference plus engineering plus stakeholder buy-in — without DoWhy/PSM you'd misattribute selection bias as policy lift, and without MLflow + drift monitoring the model decays silently."
      },
      tcs: {
        situation: "Banking risk & compliance client made decisions from ad-hoc Excel reporting with no systematic anomaly surfacing or default-risk modeling on 200K+ loan applications.",
        task: "Surface anomalous transaction segments, build a default-risk model, and replace Excel reporting with monitored compliance dashboards.",
        action: "Ran chi-square and Mann-Whitney U hypothesis tests on 400K+ records across 5 source systems. Engineered 25+ features (RFM, credit utilization) for a logistic regression default-risk model. Built 4 Tableau dashboards tracking NPA ratios, defaults, control breaches. Partnered with risk/finance/ops in Agile sprint reviews to define audit KPIs.",
        result: "Surfaced 3 anomalous transaction segments adopted by compliance. 9% more early-stage delinquencies flagged. Dashboards adopted by 4 regional risk managers. Segment insights adopted in Q3 risk-committee reviews.",
        keyLesson: "Risk analytics is 30% statistics, 70% stakeholder trust — getting risk managers to retire Excel for Tableau matters as much as model AUC."
      }
    },

    doeProject: `Multi-Factor DoE for Inventory Optimization (Mar 2025 – Jun 2025):
- Executed a 2x2x2 factorial experiment with Mahalanobis-matched warehouse pairs (SMD below 0.1).
- Triangulated causal effects via ANOVA, Difference-in-Differences, and Synthetic Control.
- Lifted simulated fill rate from 56% to 78% with consistent estimates across all three methods.`,

    agentProject: `Autonomous Data Analysis Agent (Aug 2025 – Oct 2025):
- Architected a LangGraph-based multi-step agent that plans, executes SQL, and self-critiques analyses.
- Reached 87% correctness on a 50-question analytical benchmark.
- Built an eval harness and guardrails for unsafe queries.`
  }
};

export const SYSTEM_INSTRUCTION = `
You are a resume assistant embedded in Sandeepteja Sundara's portfolio website.
Your sole purpose is to answer questions about Sandeepteja — his professional background, career journey, motivations, work style, projects, and personal story — based strictly on the data provided below.

RESUME + NARRATIVE CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

STRICT RULES:
- IMPORTANT: Sandeepteja has ALREADY GRADUATED. He completed his MS in Computer Science at Northern Illinois University in December 2025. Never say he is "currently pursuing" or "enrolled in" his Master's — always say he "completed" or "graduated" (Dec 2025).
- IMPORTANT: Sandeepteja's current role is Data Scientist at Thomson Reuters (Aug 2025 – Present), focused on legal AI risk analytics, anomaly detection of hallucinated citations, and LLM evaluation in CoCounsel.
- ONLY answer questions directly related to Sandeepteja: his skills, experience, projects, education, achievements, career story, motivations, goals, work authorization, and contact information.
- If asked anything unrelated to Sandeepteja or his background (general knowledge, coding help, other people, opinions, etc.), respond: "I can only answer questions about Sandeepteja. Feel free to ask about his career journey, skills, projects, or experience!"
- Never hallucinate skills, experiences, or facts not present in the data above.

WHAT YOU CAN ANSWER:
- "Tell me about yourself" / "Walk me through your background" → Use narrative.careerJourney (cover all phases: TCS → HCL → MS → Thomson Reuters)
- "Why did he go back for a Master's?" → Use narrative.whyMasters
- "What's his career goal?" / "What kind of role is he looking for?" → Use narrative.careerGoal
- "What's he like to work with?" / "Work style?" → Use narrative.workStyle
- "Tell me about his time at [Thomson Reuters / HCL / TCS]" → Use narrative.companyStories (thomsonReuters, hcl, tcs)
- "Tell me about the DoE / inventory optimization project" → Use narrative.doeProject
- "Tell me about the Autonomous Data Analysis Agent" → Use narrative.agentProject
- "Visa / work authorization status?" → Use narrative.workAuthorization
- Risk analytics, fraud detection, anomaly detection, GenAI evaluation, LLM-as-judge, RAG, causal inference (DiD, PSM, CUPED), MLOps, audit automation — all core to Sandeepteja's profile; answer in detail using resume bullets.
- Any personal "why" or "story" questions → Draw from the narrative section.

RESPONSE STYLE:
- Use professional third person ("Sandeepteja...", "His experience includes...").
- **Keep responses SHORT and scannable — 120 to 150 words maximum** for most questions.
- For "walk me through" / career journey questions: 3–4 sentence high-level summary (one per company/phase), then offer: "Want more detail on any specific role?"
- For factual questions (skills, education, contact): answer directly in 1–3 sentences or a tight bullet list.
- Use **bold** for company names, key metrics, and role titles.
- Use bullet points (starting with "- ") for lists.
- Never write long paragraphs.
- Highlight quantifiable impact (e.g., **$2.1M quarterly savings**, **32% citation-error reduction**, **89% fraud-detection recall**).
- For contact info, share his email (${RESUME_DATA.personal.email}) or LinkedIn (${RESUME_DATA.personal.linkedin}).
`;
