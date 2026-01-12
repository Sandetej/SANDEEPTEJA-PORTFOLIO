
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
    summary: "Data Scientist with 4+ years of experience delivering end-to-end ML and GenAI solutions in fintech and analytics. Expert in Python, SQL, and MLOps, with a proven track record of driving $1.2M+ in revenue impact and improving model accuracy by 6%. Proficient in deploying scalable pipelines using AWS, Docker, and Kubernetes. Passionate about leveraging LLMs, RAG pipelines, and Agentic AI to solve complex business problems. Seeking full-time opportunities to build reliable, high-impact data products."
  },
  skills: [
    {
      name: "Programming & Databases",
      skills: ["Python", "SQL", "PySpark"]
    },
    {
      name: "Machine Learning & Deep Learning",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "CNN/RNN/LSTMs", "Transformers", "Ensemble Models", "Hypothesis Testing", "Model Evaluation"]
    },
    {
      name: "Generative AI & NLP",
      skills: ["LLMs", "RAG Pipelines", "LangChain", "Hugging Face", "BERT/DistilBERT", "OpenAI API", "Agentic AI", "Prompt Engineering", "Vector DBs (Chroma, FAISS)"]
    },
    {
      name: "MLOps & Cloud Infrastructure",
      skills: ["AWS SageMaker", "AWS (S3, EC2, RDS, Lambda)", "Docker", "Kubernetes", "FastAPI", "CI/CD", "ML Governance", "Evidently"]
    },
    {
      name: "Data Visualization",
      skills: ["Power BI", "Plotly", "Matplotlib", "Seaborn"]
    },
    {
      name: "Big Data & Engineering",
      skills: ["Snowflake", "Redshift", "BigQuery", "MongoDB", "ETL/ELT Pipelines"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Northern Illinois University",
      role: "Graduate Research Assistant",
      period: "Aug 2024 – Dec  2025",
      description: [
        "Developed NLP pipeline for text classification and NER on 100K+ scientific articles using TensorFlow and Hugging Face Transformers, fine-tuning BERT/RoBERTa with LoRA to achieve 89% F1-score on held-out test set.",
        "Architected scalable data ingestion system using Python (Pandas, NumPy) and SQL, reducing manual curation time by 60% and enabling reproducible model training across 3 concurrent research projects.",
        "Engineered statistical evaluation framework (hypothesis testing, confidence intervals) adopted lab-wide in Fall 2024, cutting model validation cycles by 40% and standardizing comparison across 5+ experimental conditions.",
        "Launched Streamlit dashboard for real-time research visualization used by 8 faculty/researchers; presented findings at 4 departmental seminars and contributed analysis that secured $50K grant renewal."
      ]
    },
    {
      company: "Sports Car Club of America",
      role: "Data Scientist Intern",
      period: "Jan 2025 – Dec  2025",
      description: [
        "Owned time-series attendance forecasting (Prophet, LightGBM) with walk-forward validation, reducing staffing over-allocation by 40% and projecting $70K annualized savings based on historical staffing cost model.",
        "Executed personalization experiments and causal inference analysis (propensity score matching, diff-in-diff) for 3 marketing campaigns, isolating 12% retention lift and redirecting $80K budget toward highest-ROI segments.",
        "Designed Power BI and Tableau dashboards tracking 150+ events for executive stakeholders, translating business requirements into real-time alerts that lifted member retention from 78% to 85% in 4 months.",
        "Reduced membership processing time from 4 days to 1 day (+22% satisfaction) by engineering workflow with AWS Lambda and LLM orchestration for document parsing and validation."
      ]
    },
    {
      company: "ADF Data Science Pvt Ltd",
      role: "Data Scientist II",
      period: "May 2021 – Nov 2023",
      description: [
        "Owned fraud detection and credit risk modeling (PD, LGD, EAD) using Scikit-learn, XGBoost, and AWS SageMaker with time-based holdout validation, delivering 6% accuracy lift across 2.8M+ daily transactions while maintaining 80ms latency.",
        "Implemented SHAP-based model explainability for fraud and credit models, enabling regulatory compliance and stakeholder trust in model-driven decisioning.",
        "Architected PySpark data pipelines with dbt transformations orchestrated via Apache Airflow, processing 15TB+ monthly data into Snowflake (S3 staging) and reducing data-to-model latency by 50%.",
        "Deployed BERT-based sentiment models (91% accuracy) to production with Weights & Biases experiment tracking; integrated outputs into retention decisioning, driving $1.2M+ revenue impact and 23% engagement lift within 6 months.",
        "Led cross-functional MLOps transformation with Engineering and DevOps stakeholders (FastAPI, Docker, Kubernetes, MLflow, CI/CD), compressing release cycles from 3 weeks to 4 days while maintaining 99.7% availability across 8 models.",
        "Designed unified Feast feature store with 200+ engineered features serving real-time SageMaker APIs and batch jobs, adopted by 3 ML teams, reducing new model development time by 35%.",
        "Established ML governance program with Risk and Compliance using Evidently, WhyLabs, and Great Expectations, reducing production incidents by 45% through scheduled drift alerts and retraining triggers."
      ]
    },
    {
      company: "Capgemini",
      role: "Data Scientist",
      period: "Jan 2020 – Apr 2021",
      description: [
        "Delivered 12% AUC improvement across 10+ predictive models (churn, segmentation, propensity) for 3 enterprise clients using hypothesis testing, K-means clustering, and PCA, deployed on Azure ML within 6-month engagement cycles.",
        "Architected modular ETL pipelines processing 1M+ records from MySQL/MongoDB sources with programmatic data validation, eliminating 30% data quality issues and cutting downstream reporting prep time by 40%.",
        "Managed Power BI dashboard suite (8+ dashboards) for cross-functional stakeholders, directly influencing customer conversion and churn reduction KPIs across 3 business units.",
        ]
    }
  ] as Experience[],
  projects: [
    {
      title: "E-Commerce Analytics Medallion with GenAI Recommendation Engine",
      period: "Nov 2025 – Dec 2025",
      category: "GenAI",
      technologies: ["Databricks", "PySpark", "Delta Lake", "Spark SQL", "MLlib (ALS)", "MLflow", "Unity Catalog", "Claude API"],
      problem: "E-commerce companies struggle to unify scattered transaction data and deliver personalized recommendations at scale.",
      solution: "Built Databricks medallion lakehouse (Bronze/Silver/Gold) processing 5M+ transactions with Delta Lake CDC and SCD Type 2 tracking. Trained ALS recommendation model and integrated Claude LLM API for AI-powered product descriptions.",
      impact: "Achieved RMSE 0.82 on 100K customers, reduced query latency by 70% via Z-ordering, and enabled real-time personalized recommendations with governance compliance."
    },
    {
      title: "Banking Conversational AI Chatbot",
      period: "Aug 2025 – Oct 2025",
      category: "GenAI",
      technologies: ["Python", "DistilBERT", "FastAPI", "spaCy", "Hugging Face"],
      problem: "Need for automated banking assistant to handle customer intents efficiently and securely.",
      solution: "Built multi-agent conversational AI with intent classification, entity extraction, and response generation using PyTorch and DistilBERT. Deployed on GCP Vertex AI with observability monitoring.",
      impact: "Achieved 92.4% F1-score across 77 intents, 85% successful dialogs at sub-50ms latency, and zero data leaks across 200+ red-team tests."
    },
    {
      title: "Financial Document Summarization System",
      period: "May 2025 – Jun 2025",
      category: "RAG",
      technologies: ["LangChain", "GPT-4", "RAG", "ChromaDB", "OpenAI Embeddings"],
      problem: "Time-consuming manual review of SEC 10-K/10-Q filings and earnings calls by analysts.",
      solution: "Created a RAG-based summarizer using LangChain and Vector DBs. Architected section-aware chunking with cross-encoder reranking.",
      impact: "Achieved 92% metric extraction accuracy, cut analyst review time by 75%, and improved retrieval precision by 23%."
    },
    {
      title: "Time-Series Attendance Forecasting",
      period: "Jan 2025 – Present",
      category: "Forecasting",
      technologies: ["Python", "SQL", "Time-Series Analysis"],
      problem: "Inefficient venue and staffing allocation due to unpredictable event attendance.",
      solution: "Developed forecasting models on historical event data to predict attendance trends.",
      impact: "Reduced staffing over-allocation by 40% and projected $70K annualized savings."
    },
    {
      title: "Automated Membership Agent",
      period: "Jan 2025 – Present",
      category: "Agentic AI",
      technologies: ["AWS", "Agentic AI", "Python"],
      problem: "Slow manual membership processing leading to lower satisfaction.",
      solution: "Automated membership workflows on AWS using Agentic AI handling 1,465+ transactions/year.",
      impact: "Cut processing time by 75% (4 days to 1 day) and increased satisfaction scores by 22%."
    },
    {
      title: "Credit Risk & Fraud Detection System",
      period: "May 2021 – Nov 2023",
      category: "Fintech",
      technologies: ["AWS SageMaker", "Python", "Scikit-learn"],
      problem: "Need for accurate, real-time credit risk assessment (PD, LGD, EAD).",
      solution: "Trained and deployed predictive models on SageMaker with low-latency inference endpoints.",
      impact: "Increased approval accuracy by 6% with <80ms latency, supporting real-time decisions."
    },
    {
      title: "Sentiment Analysis & Personalization",
      period: "May 2021 – Nov 2023",
      category: "NLP",
      technologies: ["BERT", "Spark", "Kubernetes", "AWS"],
      problem: "Lack of insight into customer sentiment and personalized product offerings.",
      solution: "Deployed BERT-based sentiment models and personalization pipelines on Spark/K8s.",
      impact: "Drove $1.2M+ revenue impact, improved engagement by 23%, and achieved 91% model accuracy."
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
    "Best Employee of the Quarter (ADF Data Science Pvt Ltd): Awarded for exceptional contributions in improving machine learning workflows.",
    "Zolve Emerging Scholar Award – Spring 2024 | Zolve: Received a $1,000 scholarship to support Master's studies at Northern Illinois University, recognizing vision, goals, and achievements.",
    "Graduate Teaching Assistant (Northern Illinois University): Mentored 130+ students in Python programming and applied machine learning coursework."
  ]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Sandeepteja Sundara's professional portfolio website.
Your goal is to answer visitor questions about Sandeepteja's professional background, skills, and projects accurately based strictly on his resume data.

RESUME CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

GUIDELINES:
- Answer in the first person ("I") as if you are Sandeepteja's digital persona, OR in professional third person ("Sandeepteja"). Let's prefer professional third person.
- Be concise, professional, and engaging.
- Highlight metrics and quantifiables (e.g., "Improved accuracy by 6%", "Saved $250k").
- If asked about contact info, provide the email or LinkedIn link.
- If asked about something not in the resume, politely say you don't have that information but suggest contacting him directly.
- Do not hallucinate skills or experiences not listed.
`;
