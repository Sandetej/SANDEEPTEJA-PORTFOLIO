
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
        "Optimized venue and staffing decisions by 40% and reduced annual costs by $250,000 by developing time-series attendance forecasting models in Python and SQL on historical event data.",
        "Boosted member retention from 78% to 85% in 4 months by building Power BI dashboards tracking engagement across 150+ events, enabling faster, data-driven decisions.",
        "Cut membership processing time by 75% (4 days → 1 day) and increased satisfaction scores by 22% by automating membership workflows on AWS with Agentic AI, handling 1,465+ transactions per year."
      ]
    },
    {
      company: "ADF Data Science Pvt Ltd",
      role: "Data Scientist II",
      period: "May 2021 – Nov 2023",
      description: [
        "Trained and deployed fraud and credit risk models (PD, LGD, EAD) on AWS SageMaker, increasing instant approval accuracy by 6% while keeping real-time decision latency under 80 ms.",
        "Built PySpark data pipelines processing 2.8M+ daily events and loading 15 TB+ monthly data into Snowflake to power model training and feature generation.",
        "Drove $1.2M+ in revenue-impacting product decisions and improved customer engagement by 23% by deploying BERT-based sentiment models (91% accuracy) and real-time personalization pipelines.",
        "Cut ML deployment cycles from 3 weeks to 4 days and kept 8+ production models running at 99.7% availability by leading MLOps adoption with FastAPI, Docker, and CI/CD.",
        "Reduced model-related production incidents by 45% by implementing ML governance, monitoring, and drift detection using Evidently."
      ]
    },
    {
      company: "Capgemini",
      role: "Data Scientist",
      period: "Jan 2020 – Apr 2021",
      description: [
        "Improved data completeness and consistency by 30% by extracting, cleaning, and validating 1M+ records from 5+ data sources using SQL and Python for downstream analysis.",
        "Increased model accuracy/AUC by 12% using statistical methods and ML techniques such as hypothesis testing, clustering, and PCA to refine 10+ predictive models.",
        "Streamlined reporting by reducing manual effort by 40% through 8+ interactive Power BI dashboards that enabled faster decisions for non-technical stakeholders across 3+ teams.",
        "Influenced key KPIs such as conversion and churn by collaborating on 5+ cross-functional projects, presenting clear, action-oriented insights to data scientists, engineers, and business partners.",
        "Decreased data and logic problems by 25% and maintained stable model performance by helping deploy and monitor 5+ production models using GitHub and structured validation trackers."
      ]
    }
  ] as Experience[],
  projects: [
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
    "Zolve Emerging Scholar Award – Spring 2024 | Zolve: Received a $1,000 scholarship to support Master's studies at Northern Illinois University, recognizing vision, goals, and achievements."
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
