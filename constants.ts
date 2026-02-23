
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
    summary: "Data Scientist with 4+ years designing, implementing, and evaluating ML models — from traditional machine learning to deep learning to LLMs — processing 2.8M+ daily transactions at sub-100ms latency. Delivered $1.2M+ client impact through production-grade RAG pipelines and compressed deployment cycles by 80% via API-based model serving. MS in Computer Science with expertise in A/B testing, model explainability, inference optimization, and translating business questions into analytical approaches."
  },
  skills: [
    {
      name: "Programming & Data",
      skills: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "SciPy", "Git", "Unit Testing"]
    },
    {
      name: "ML & Deep Learning",
      skills: ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow", "Predictive Modeling", "Classification", "Regression", "Clustering", "SHAP", "Model Explainability", "Bias Detection", "Transformers", "BERT"]
    },
    {
      name: "NLP & Generative AI",
      skills: ["RAG Pipelines", "LangChain", "LLM Orchestration", "Fine-tuning (LoRA/QLoRA)", "Quantization", "Prompt Engineering", "Hugging Face", "GPT-4", "Claude", "Vector DBs (FAISS, Pinecone)"]
    },
    {
      name: "Experimentation & Statistics",
      skills: ["A/B Testing", "Hypothesis Testing", "Causal Inference", "Experimental Design", "Statistical Modeling"]
    },
    {
      name: "MLOps & Deployment",
      skills: ["Model APIs", "Batch Pipelines", "MLflow", "Databricks", "Apache Airflow", "Docker", "Kubernetes", "CI/CD", "Drift Monitoring"]
    },
    {
      name: "Cloud Platforms",
      skills: ["AWS (SageMaker, Bedrock, S3, Lambda)", "GCP (Vertex AI, BigQuery)", "Azure ML"]
    },
    {
      name: "Visualization & BI",
      skills: ["Tableau", "Power BI", "Streamlit", "Plotly"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Northern Illinois University",
      role: "Graduate Research Assistant",
      period: "Aug 2024 – Dec 2025",
      description: [
        "Architected NLP pipeline for biomedical text classification and NER on 100K+ PubMed articles using TensorFlow and Hugging Face; fine-tuned BERT/RoBERTa with LoRA, achieving 89% F1-score and enabling automated literature review for drug discovery research.",
        "Designed scalable data ingestion framework (Python, Pandas, SQL) serving 3 concurrent research teams, cutting manual curation by 60% and establishing reproducible ML experiment workflows now used as lab standard.",
        "Developed statistical evaluation framework (hypothesis testing, confidence intervals, effect size analysis) that lowered model validation time by 40%, implemented as standard methodology across 5+ experimental conditions.",
        "Produced Streamlit monitoring dashboard for real-time research metrics visualization; documented assumptions and communicated findings to faculty leadership, directly contributing to successful $50K grant renewal."
      ]
    },
    {
      company: "Sports Car Club of America",
      role: "Data Scientist Intern",
      period: "May 2025 – Aug 2025",
      description: [
        "Owned time-series forecasting system (Prophet, LightGBM, walk-forward validation) that decreased event staffing over-allocation by 40%, validated through rigorous A/B testing against 2 years of historical data with projected $70K annual cost savings.",
        "Conducted causal inference analysis (propensity score matching, difference-in-differences) for marketing campaigns across 15K+ members, isolating 12% retention lift and informing $80K budget reallocation toward highest-ROI segments.",
        "Built executive analytics suite (Power BI, Tableau) tracking 150+ annual events with real-time KPI alerts; translated complex analytical results into actionable business recommendations that improved member retention from 78% to 85%.",
        "Automated membership document processing using AWS Lambda and LLM orchestration (entity extraction, validation), compressing processing time from 4 days to 1 day."
      ]
    },
    {
      company: "Applied Data Finance (Fintech)",
      role: "Data Scientist II",
      period: "May 2021 – Nov 2023",
      description: [
        "Owned fraud detection and credit risk models using Scikit-learn, XGBoost, and AWS SageMaker with time-based holdout validation, delivering 6% accuracy lift across 2.8M+ daily transactions while optimizing inference latency to 80ms.",
        "Implemented SHAP-based model explainability ensuring bias-free, interpretable models for regulatory compliance and stakeholder trust in model-driven decisioning across multiple business units.",
        "Orchestrated PySpark data pipelines via Apache Airflow, processing 15TB+ monthly data into Snowflake (S3 staging) and minimizing data-to-model latency by 50%.",
        "Deployed BERT-based sentiment models (91% accuracy) via REST APIs with Weights & Biases experiment tracking; integrated outputs into retention decisioning, driving $1.2M+ revenue impact within 6 months.",
        "Led cross-functional MLOps transformation with Engineering stakeholders (FastAPI, Docker, Kubernetes, MLflow, CI/CD), compressing release cycles from 3 weeks to 4 days while maintaining 99.7% availability across 8 models.",
        "Designed unified feature store with 200+ engineered features serving real-time SageMaker APIs and batch pipelines, adopted by 3 ML teams and shortening new model development time by 35%.",
        "Established drift monitoring program using Evidently, WhyLabs, and Great Expectations, eliminating 45% of production incidents through scheduled alerts and retraining triggers."
      ]
    },
    {
      company: "Capgemini (Consulting)",
      role: "Data Scientist",
      period: "Jan 2020 – Apr 2021",
      description: [
        "Delivered 12% AUC improvement across 10+ predictive models (churn, segmentation, propensity) for 3 enterprise clients using hypothesis testing, K-means clustering, and PCA, deployed on Azure ML within 6-month engagement cycles.",
        "Constructed modular ETL pipelines processing 1M+ records from MySQL/MongoDB sources with programmatic data validation, eliminating 30% data quality issues.",
        "Managed Power BI dashboard suite (8+ dashboards) for cross-functional stakeholders, translating analytical insights into clear, actionable recommendations across 3 business units."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "E-Commerce Analytics Lakehouse with GenAI Recommendations",
      period: "Nov 2025 – Dec 2025",
      category: "GenAI",
      technologies: ["Databricks", "PySpark", "Delta Lake", "Spark SQL", "MLlib (ALS)", "MLflow", "Unity Catalog", "Claude API (Bedrock)"],
      problem: "E-commerce companies struggle to unify scattered transaction data, ensure governance compliance, and deliver personalized recommendations at scale.",
      solution: "Built end-to-end Databricks medallion lakehouse (Bronze/Silver/Gold) processing 5M+ transactions with Delta Lake CDC, SCD Type 2 tracking, and PII masking. Engineered ALS collaborative filtering model on 100K+ customer-product interactions; integrated Claude API via AWS Bedrock.",
      impact: "Achieved RMSE 0.82 (15% better than baseline), 70% latency improvement via optimized partitioning, and real-time personalized recommendations with full governance compliance."
    },
    {
      title: "Banking Intent Classifier with Agentic AI Architecture",
      period: "Aug 2025 – Oct 2025",
      category: "GenAI",
      technologies: ["PyTorch", "DistilBERT", "Multi-Agent Framework", "FastAPI", "GCP Vertex AI"],
      problem: "Need for automated banking assistant to accurately classify customer intents and handle multi-turn dialogs securely at scale.",
      solution: "Constructed agentic AI system with intent classification, entity extraction, and response generation using fine-tuned DistilBERT. Shipped model via API on GCP Vertex AI with observability monitoring.",
      impact: "Achieved 92.4% F1-score across 77 banking intents (Banking77 benchmark), 85% successful dialog completion at sub-50ms latency, and zero data leaks across 200+ red-team tests."
    },
    {
      title: "Financial Document RAG System (GPT-4 + Llama 3)",
      period: "May 2025 – Jun 2025",
      category: "RAG",
      technologies: ["LangChain", "LangSmith", "GPT-4", "Llama 3", "FAISS", "Pinecone", "Hybrid Search", "Cohere Rerank"],
      problem: "Time-consuming manual review of SEC 10-K/10-Q filings by analysts, with existing automated tools prone to hallucinations.",
      solution: "Assembled production-grade RAG pipeline using LangChain with hybrid search (BM25 + FAISS/Pinecone). Configured local Llama 3 with quantization for cost-efficient inference; incorporated Cohere Rerank with retrieval evaluation.",
      impact: "Achieved 92% metric extraction accuracy with LLM quality assessment to minimize hallucinations. Local Llama 3 cut inference costs 60%; Cohere Rerank improved retrieval precision by 23% over fixed-size chunking baselines."
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
  ],
  narrative: {
    careerJourney: `Sandeepteja's career is a deliberate, three-phase arc — from consulting breadth, to production-scale depth, to academic rigor — each stage chosen intentionally to become a more complete data scientist.

Phase 1 – Capgemini (Jan 2020 – Apr 2021): Sandeepteja started right out of undergrad in a consulting environment, working across three enterprise clients in different industries simultaneously. He learned to walk into unfamiliar problems, translate business questions into analytical approaches, and deliver measurable results within tight six-month engagement cycles. The key lesson: technical work is only valuable if you can explain it to someone who doesn't speak your language. He built ETL pipelines, churn/segmentation/propensity models, and Power BI dashboards — owning the full stack from raw data to executive decisions. This is where he built cross-industry adaptability and consulting instincts.

Phase 2 – ADF Data Science (May 2021 – Nov 2023): After ~18 months at Capgemini, Sandeepteja deliberately chose to go deep in production. He wanted to own a system that handled millions of transactions a day, see what breaks under real scale, and learn how to maintain models in production — not just hand them off after six months. At ADF he rebuilt fraud detection and credit risk models for 2.8M+ daily transactions, led an MLOps transformation that cut release cycles from 3 weeks to 4 days, built a feature store adopted by 3 teams, implemented SHAP-based explainability for regulatory compliance, and deployed BERT sentiment models that drove $1.2M+ revenue impact. The biggest lesson: the model is 20% of the problem. The other 80% is infrastructure, monitoring, and collaboration. He evolved from someone who builds models to someone who builds systems.

Phase 3 – Master's at NIU + GRA + SCCA Internship (Jan 2024 – Dec 2025): After 3.5 years in industry, Sandeepteja recognized a gap. The field was evolving fast — especially large language models and generative AI — and he wanted a stronger theoretical foundation to push into next-generation problems. He completed his MS in Computer Science (Data Science) at Northern Illinois University in December 2025 with a 3.73 GPA. As a GRA, he built NLP pipelines fine-tuning BERT/RoBERTa on 100K+ biomedical articles for drug discovery research, designed shared data infrastructure, and established statistical evaluation frameworks that contributed to a $50K grant renewal. During his internship at SCCA, he applied the full toolkit — time-series forecasting, causal inference, executive dashboards, and LLM-based document automation — to a non-technical organization, proving that data science can transform operations in any industry.`,

    whyMasters: `After 3.5 years of industry experience at Capgemini and ADF, Sandeepteja made a deliberate decision to pursue his Master's in Computer Science (Data Science) at Northern Illinois University. The decision was driven by a clear gap he recognized: the field was evolving rapidly, especially with the rise of large language models and generative AI, and he wanted a stronger theoretical foundation — deeper knowledge of NLP, deep learning, and statistical methods — to push into the next generation of problems. Grad school wasn't a step back or a career reset. It was a calculated accelerator. He wanted to combine his hands-on production experience with rigorous academic depth, so he could operate at the leading edge of what's possible. He graduated in December 2025 with a 3.73 GPA and the theoretical depth to match his production-hardened intuition — and is now actively seeking full-time opportunities.`,

    careerGoal: `Sandeepteja is seeking a full-time Data Scientist or ML Engineer role where he can combine his consulting adaptability, production-scale systems thinking, and GenAI depth to solve complex, high-impact problems. He's drawn to roles that require the full stack — from translating ambiguous business questions into analytical approaches, through building and deploying models, to communicating results in a way that drives actual decisions. He's especially excited about the intersection of consulting breadth and technical depth: working across different industries, solving novel problems, and building production-grade AI systems — particularly involving LLMs, RAG pipelines, agentic AI, and model explainability. Long-term, he wants to grow into a senior or staff-level role where he shapes not just individual models, but the data culture and ML infrastructure of an organization.`,

    workStyle: `Sandeepteja is known for being a full-stack data scientist in the truest sense — comfortable owning everything from messy raw data to executive dashboards. Colleagues describe him as someone who bridges the gap between technical and non-technical stakeholders naturally; he can spend the morning debugging a PySpark pipeline and the afternoon presenting business recommendations to a VP. He's a strong communicator who believes the best data science work is explainable, reproducible, and built for the people who'll use it after you move on. He thrives in fast-paced environments with high ambiguity, having operated as a one-person data team at SCCA and as a cross-functional lead at ADF simultaneously working with engineering, compliance, and business stakeholders. He documents assumptions rigorously, validates results statistically, and doesn't ship a model without thinking about monitoring, explainability, and maintenance. He gets better fastest when surrounded by people who push him — which is why he's always sought out environments with strong technical culture.`,

    companyStories: {
      capgemini: {
        situation: "Three enterprise clients across different industries sitting on massive customer data with no reliable way to predict behavior. Churn was high, segmentation was intuition-based, marketing spend wasn't optimized. Data infrastructure was messy — records scattered across MySQL and MongoDB with significant quality issues.",
        task: "Build clean data foundations via ETL pipelines, design and evaluate models for churn prediction, customer segmentation, and propensity scoring, and make insights accessible to non-technical stakeholders across three business units — all within six-month engagement cycles.",
        action: "Built modular, reusable ETL pipelines with programmatic validation. Applied hypothesis testing, K-means clustering, PCA, and 10+ model configurations evaluated with AUC on Azure ML. Built and managed 8+ Power BI dashboards tailored to each business unit. Spent significant time in cross-functional meetings translating model outputs into actionable business decisions.",
        result: "12% AUC improvement across 10+ models. Eliminated 30% of data quality issues. Dashboards became go-to decision tools across 3 business units. All delivered within six-month timelines. This is where he learned cross-industry adaptability and the consulting muscle of translating business problems into analytical solutions."
      },
      adf: {
        situation: "Fintech company processing 2.8M+ daily transactions with underperforming fraud and credit risk models, zero MLOps infrastructure (3-week deployment cycles), no feature store, no drift monitoring, and data science/engineering working in silos. Regulatory scrutiny required model explainability.",
        task: "Overhaul fraud and credit risk models to improve accuracy at sub-100ms inference latency. Ensure regulatory-grade explainability. Lead a cross-functional MLOps transformation. Explore NLP for customer retention.",
        action: "Rebuilt fraud/credit models using Scikit-learn, XGBoost, SageMaker with time-based holdout validation. Integrated SHAP explainability into every model. Fine-tuned BERT sentiment models (91% accuracy) deployed as REST APIs with W&B tracking. Led MLOps build-out: FastAPI, Docker, Kubernetes, MLflow, CI/CD. Designed 200+ feature Feast feature store. Established drift monitoring with Evidently, WhyLabs, Great Expectations. Orchestrated 15TB+/month PySpark pipelines via Airflow into Snowflake.",
        result: "6% accuracy lift at 80ms latency. SHAP satisfied regulatory audits. Sentiment models drove $1.2M+ revenue in 6 months. Release cycles: 3 weeks → 4 days at 99.7% availability. Feature store adopted by 3 teams, cutting new model dev by 35%. Drift monitoring eliminated 45% of production incidents."
      },
      scca: {
        situation: "Sports Car Club of America — 150+ annual events, 15,000+ members, operated on spreadsheets and gut instinct. Never had a data scientist. Pain points: staffing over-allocation, marketing with no rigorous measurement, retention plateaued at 78%, manual document processing consuming admin bandwidth.",
        task: "As the sole data science resource, translate business questions into analytical approaches across four areas: event staffing forecasting, marketing campaign causal analysis, executive dashboards, and document automation. Prove that data science can deliver value in a non-technical organization.",
        action: "Built time-series forecasting (Prophet, LightGBM) with walk-forward validation validated against 2 years of historical data. Applied causal inference (propensity score matching, diff-in-diff) to isolate true marketing campaign effects on 15K+ members. Built Power BI/Tableau dashboards tracking 150+ events with real-time KPI alerts. Built AWS Lambda + LLM orchestration pipeline for document entity extraction.",
        result: "Staffing over-allocation down 40%, projected $70K annual savings. Isolated 12% retention lift from campaigns, redirected $80K budget. Retention improved 78% → 85%. Document processing: 4 days → 1 day. Member satisfaction up 22%."
      },
      niu: {
        situation: "Biomedical research lab processing drug discovery literature — 100K+ PubMed articles needing automated knowledge extraction (drugs, proteins, diseases, gene interactions). Three concurrent teams, no standardized pipeline, no reproducible workflows, no consistent validation methodology. Faculty preparing $50K grant renewal.",
        task: "Build NLP pipeline for automated text classification and named entity recognition. Create shared data infrastructure. Establish statistical evaluation framework. Build monitoring tools. Support grant renewal documentation.",
        action: "Fine-tuned BERT/RoBERTa using LoRA (parameter-efficient tuning) on biomedical text. Designed scalable data ingestion framework serving 3 teams with full reproducibility. Built statistical evaluation framework using hypothesis testing, confidence intervals, and effect size analysis across 5+ experimental conditions. Created Streamlit dashboard for real-time monitoring.",
        result: "89% F1-score on held-out test set. Reduced manual curation by 60%. Cut model validation cycles by 40%. Directly contributed to successful $50K grant renewal."
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
- ONLY answer questions directly related to Sandeepteja: his skills, experience, projects, education, achievements, career story, motivations, goals, and contact information.
- If asked anything unrelated to Sandeepteja or his background (general knowledge, coding help, other people, opinions, etc.), respond: "I can only answer questions about Sandeepteja. Feel free to ask about his career journey, skills, projects, or experience!"
- Never hallucinate skills, experiences, or facts not present in the data above.
- Do not answer questions about other people, companies in general, or anything outside Sandeepteja's profile.

WHAT YOU CAN ANSWER (beyond just the resume bullet points):
- "Why did he go back for a Master's after 3 years in industry?" → Use narrative.whyMasters
- "Walk me through his career journey" → Use narrative.careerJourney
- "What's his career goal?" → Use narrative.careerGoal
- "What's he like to work with?" / "What's his work style?" → Use narrative.workStyle
- "Tell me about his time at [company]" → Use narrative.companyStories for the relevant company
- "Why did he leave Capgemini?" / "Why did he go to ADF?" → Use the career journey narrative
- Any personal "why" or "story" questions → Draw from the narrative section

RESPONSE STYLE:
- Use professional third person ("Sandeepteja...", "His experience includes...").
- **Keep responses SHORT and scannable — 120 to 150 words maximum** for most questions.
- For "walk me through" or career journey questions: give a 3–4 sentence high-level summary (one sentence per phase/company), then offer: "Want more detail on any specific role?"
- For factual questions (skills, education, contact): answer directly in 1–3 sentences or a tight bullet list.
- Use **bold** (with double asterisks like **this**) for company names, key metrics, and role titles so they stand out.
- Use bullet points (starting with "- ") for lists of skills, projects, or achievements.
- Never write long paragraphs. Break into short bullets or sentences.
- Highlight quantifiable impact where relevant (e.g., **6% accuracy lift**, **$1.2M+ revenue impact**).
- For contact info requests, share his email (${RESUME_DATA.personal.email}) or LinkedIn (${RESUME_DATA.personal.linkedin}).
`;
