
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
      company: "Sports Car Club of America",
      role: "Data Scientist Intern",
      period: "Jan 2025 – Present",
      description: [
        "Developed time-series attendance forecasting models using Python (Prophet, ARIMA) and SQL, optimizing venue and staffing decisions by 40% and reducing annual costs by $250,000.",
        "Applied causal inference techniques (propensity score matching, difference-in-differences) to measure true impact of marketing campaigns on member retention, isolating a 12% lift attributable to targeted outreach.",
        "Designed interactive Power BI dashboards tracking member engagement across 150+ events, boosting retention from 78% to 85% in 4 months through data-driven outreach strategies.",
        "Automated membership workflows using Agentic AI on AWS Lambda, cutting processing time by 75% (4 days → 1 day) and increasing satisfaction scores by 22% for 1,465+ annual transactions."
      ]
    },
    {
      company: "ADF Data Science Pvt Ltd",
      role: "Data Scientist II",
      period: "May 2021 – Nov 2023",
      description: [
        "Trained and deployed production fraud detection and credit risk models (PD, LGD, EAD) using Scikit-learn, XGBoost, and AWS SageMaker, achieving 6% improvement in instant approval accuracy while maintaining <80ms real-time inference latency.",
        "Architected PySpark data pipelines orchestrated with Apache Airflow, processing 2.8M+ daily events and loading 15TB+ monthly datainto Snowflake to power feature engineering, model training, and performance monitoring.",
        "Deployed BERT-based sentiment analysis models (91% accuracy) with continuous monitoring for model drift and bias detection, driving $1.2M+ revenue impact and 23% improvement in customer engagement.",
        "Led MLOps transformation using FastAPI, Docker, MLflow, and CI/CD pipelines, compressing deployment cycles by 80% (3 weeks to 4 days) while maintaining 99.7% availability across 8+ production models.",
        "Engineered unified PySpark feature store serving both real-time SageMaker APIs and batch scoring jobs, reducing model developmenttime by 35% and eliminating duplicate feature engineering work.",
        "Implemented ML governance using Evidently and WhyLabs for drift detection, bias monitoring, and data quality checks, reducing model-related production incidents by 45% through automated alerts and retraining workflows."
      ]
    },
    {
      company: "Capgemini",
      role: "Associate Data Scientist",
      period: "Jan 2020 – Apr 2021",
      description: [
        "Improved model accuracy (AUC) by 12% using statistical methods including hypothesis testing, clustering (K-means), and PCA for dimensionality reduction across 10+ predictive models.",
        "Constructed ETL pipelines using Python and SQL to extract, clean, and validate 1M+ records from 5+ data sources, improving data completeness and consistency by 30%.",
        "Created 8+ interactive Power BI dashboards for non-technical stakeholders, reducing manual reporting effort by 40% and enabling faster data-driven decisions across 3+ teams.",
        "Collaborated on 5+ cross-functional projects, presenting actionable insights to data scientists, engineers, and business partners, influencing key KPIs including conversion and churn."
        ]
    }
  ] as Experience[],
  projects: [
    {
      title: "E-Commerce Analytics Medallion with GenAI Recommendation Engine",
      period: "Nov 2025 – Dec 2025",
      category: "GenAI",
      technologies: ["Databricks", "PySpark", "Delta Lake", "Spark SQL", "MLlib (ALS)", "MLflow", "Unity Catalog", "Claude API"],
      problem: "E-commerce companies struggle to process millions of raw transactions scattered across systems, lacking unified customer insights and personalized recommendations. Manual reporting delays decision-making while customers receive generic, non-personalized shopping experiences.",
      solution: "Built a Databricks medallion data lakehouse (Bronze/Silver/Gold) that ingests 5M+ transactions, calculates customer lifetime value, and trains an ALS recommendation model (RMSE: 0.82). Integrated Claude LLM API to generate personalized product descriptions for 100K+ customer profiles across 4 CLV segments.",
      impact: "Accelerated analytical query performance by 70% through Z-ordering and partitioning, enabling real-time insights via 3 production dashboards. Delivered personalized top-10 recommendations per customer with AI-powered explanations, transforming raw data into actionable business intelligence."
    },
    {
      title: "Banking Conversational AI Chatbot",
      period: "Aug 2025 – Oct 2025",
      category: "GenAI",
      technologies: ["Python", "DistilBERT", "FastAPI", "spaCy", "Hugging Face"],
      problem: "Need for an automated banking assistant to handle customer intents efficiently and securely.",
      solution: "Developed an end-to-end chatbot using FastAPI and Transformers, classifying 77 intents. Implemented multi-turn dialog management, context retention, and PII redaction.",
      impact: "Raised F1 score from 80% to 92.4%. Achieved 85% successful dialogs and <5% fallback rate across 200+ red-team tests."
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
      impact: "Optimized venue/staffing decisions by 40% and reduced annual costs by $250,000."
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
      gpa: "3.72",
      period: "Jan 2024 – Dec 2025 (Expected)"
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
