
import { Experience, Project, SkillCategory, Education } from './types';

export const RESUME_DATA = {
  personal: {
    name: "Sandeepteja Sundara",
    role: "Data Scientist · Product Analytics, Experimentation & GenAI Personalization",
    location: "Seattle, WA",
    email: "sandetej24@gmail.com",
    phone: "+1 (779) 775-7725",
    linkedin: "linkedin.com/in/sandeepteja",
    github: "github.com/Sandetej",
    portfolio: "sandeepteja-portfolio.com",
    summary: "Driving product analytics, user-experience optimization, and GenAI-powered personalization across online travel, e-commerce, and legal AI products — 14% lower handle time on a travel AI agent pilot, 12% churn reduction, 32% fewer hallucinated citations in a production legal-AI product — Python, SQL, PySpark, AWS, Tableau, LangChain, A/B Testing."
  },
  skills: [
    {
      name: "Languages & Data",
      skills: ["Python", "SQL", "PySpark", "Snowflake", "Databricks", "AWS"]
    },
    {
      name: "Statistics & Experimentation",
      skills: ["A/B Testing", "Power Analysis", "CUPED", "Hypothesis Testing", "Causal Inference (DiD, PSM, Synthetic Control)", "Uplift Modeling", "Success Metrics", "Hypothesis Generation & Prioritization"]
    },
    {
      name: "Machine Learning",
      skills: ["XGBoost", "Logistic Regression", "scikit-learn", "SHAP", "Feature Engineering", "MLflow"]
    },
    {
      name: "GenAI & AI/ML Workflows",
      skills: ["RAG", "LangChain", "LangGraph", "LLM-as-Judge", "Vector Databases", "Hugging Face Transformers"]
    },
    {
      name: "Visualization & Storytelling",
      skills: ["Tableau", "Pandas", "Matplotlib", "Stakeholder Communication", "Data Storytelling", "Actionable Insights"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Thomson Reuters",
      role: "Data Scientist",
      period: "Aug 2025 – Present",
      description: [
        "Built an anomaly-detection model in Python (scikit-learn, embedding similarity) flagging hallucinated citations in CoCounsel's production legal-research responses, cutting citation errors ~32% across 2 practice areas and removing a 10-hour/week manual QA step.",
        "Evaluated 4 prompt and retrieval configurations for a CoCounsel legal-research feature using LLM-as-judge scoring on 300 attorney-labeled queries, picking the variant that lifted answer faithfulness 11 points pre-launch.",
        "Designed and analyzed A/B tests with power analysis and CUPED variance reduction on 4 CoCounsel UX variants, partnering with product managers to prioritize hypotheses and lift user engagement 12% over control.",
        "Translated 1M+ user-session logs into actionable insights using SQL (CTEs, window functions) and Pandas, surfacing 3 friction points across the product development lifecycle that informed PM roadmap decisions."
      ]
    },
    {
      company: "HCL Technologies (Online Travel & E-commerce client)",
      role: "Data Scientist",
      period: "Apr 2021 – Dec 2023",
      description: [
        "Designed a RAG-based travel Q&A assistant (LangChain, OpenAI embeddings, FAISS) over 120K+ property and itinerary descriptions, A/B piloted to cut customer-service handle time 14% versus control on an online-travel engagement.",
        "Built a scalable analytics pipeline (PySpark, Airflow, Databricks) over ~90M clickstream and booking events, engineering 45+ behavioral signals that defined success metrics PMs used to optimize the booking funnel.",
        "Ran a difference-in-differences and propensity-score-matched quasi-experiment (DoWhy) isolating promotional-offer lift across 1.2M travelers, quantifying 6.4% incremental conversion that reallocated the partner's marketing spend.",
        "Trained an XGBoost ranker on 18M Snowflake session records using scikit-learn, SHAP, and hyperparameter tuning to personalize hotel recommendations, lifting search-to-booking conversion 9% in a 4-week holdout test.",
        "Operated an AI/ML-driven personalization workflow on AWS scoring 500K+ daily traveler sessions, partnering with PMs to optimize the user experience and contributing an estimated 12% lift in attach revenue.",
        "Built a Tableau executive dashboard on Snowflake covering funnel drop-off, search-to-book conversion, and segment-level engagement KPIs, surfacing 3 friction points adopted by product managers to prioritize the next quarter's roadmap."
      ]
    },
    {
      company: "Tata Consultancy Services (Online Travel & Hospitality client)",
      role: "Associate Data Scientist",
      period: "Jan 2020 – Mar 2021",
      description: [
        "Identified 3 high-value traveler segments through hypothesis testing (chi-square, Mann-Whitney U, p below 0.05) on 400K+ booking and search records across 5 source systems, directly informing cross-sell targeting for ancillary products.",
        "Built a logistic-regression cancellation model in Python on 200K+ bookings with 25+ engineered features, delivering actionable recommendations to product managers that reduced traveler churn 9% post-launch.",
        "Designed 4 Tableau dashboards on traveler conversion, LTV, and engagement KPIs, applying data-storytelling best practices to communicate insights to product and business stakeholders driving 3 UX optimizations.",
        "Partnered with cross-functional stakeholders in Agile sprint reviews to define KPIs (conversion, cancellation rate, attach rate), delivering segment-level insights to product managers that improved Q3 cross-sell conversion 7%."
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
    careerJourney: `Sandeepteja's career sits at the intersection of product analytics, experimentation, and applied GenAI — building data products that optimize user experience, personalize journeys, and ship measurable lift to product roadmaps.

**Tata Consultancy Services (Jan 2020 – Mar 2021):** Started as Associate Data Scientist on an online travel and hospitality client. Used hypothesis testing on 400K+ booking and search records to surface high-value traveler segments, built a logistic-regression cancellation model on 200K+ bookings, and shipped 4 Tableau dashboards. Foundation in product KPIs, data storytelling, and partnering with PMs.

**HCL Technologies — Online Travel & E-commerce client (Apr 2021 – Dec 2023):** Owned product analytics and personalization end-to-end. Designed a RAG travel Q&A assistant (LangChain + FAISS) that cut handle time 14% in an A/B pilot, built a 90M+ event analytics pipeline (PySpark/Airflow/Databricks), trained an XGBoost ranker lifting search-to-booking conversion 9%, and ran a DiD + PSM quasi-experiment via DoWhy quantifying 6.4% incremental conversion on promotional offers. Operated a personalization workflow scoring 500K+ daily traveler sessions on AWS, contributing 12% attach-revenue lift.

**MS at NIU (Jan 2024 – Dec 2025):** Master's in Computer Science at Northern Illinois University to deepen formal training in experimentation, causal inference, and GenAI evaluation methods.

**Thomson Reuters (Aug 2025 – Present):** Data Scientist on CoCounsel legal AI. Built an anomaly-detection model flagging hallucinated citations in production — cutting citation errors ~32%. Runs A/B tests with CUPED variance reduction on UX variants lifting engagement 12%, evaluates prompt/retrieval configs with LLM-as-judge, and translates 1M+ session logs into PM roadmap insights.`,

    whyMasters: `After 4 years in industry building product analytics and personalization, Sandeepteja recognized a gap in formal experimentation theory and modern GenAI evaluation methods. He had shipped A/B tests, DiD, and PSM in production but wanted deeper grounding in CUPED variance reduction, uplift modeling, LLM-as-judge evaluation, and agentic AI design. He chose Northern Illinois University's MS in Computer Science specifically for coursework in statistics, ML, and applied AI. Graduated December 2025.`,

    careerGoal: `Sandeepteja is focused on full-time Data Scientist II / Product Analytics roles — domains where experimentation rigor, causal inference, user-experience optimization, and GenAI personalization matter. He wants to own product analytics end-to-end: hypothesis generation, A/B test design, causal validation, and translating findings into PM roadmap decisions.`,

    workStyle: `Sandeepteja partners closely with product managers — hypothesis generation, prioritization, A/B test design with power analysis and CUPED variance reduction, and turning model outputs into roadmap insights. He documents assumptions, validates causally (DiD, PSM, Synthetic Control), and ships dashboards that PMs actually use. Strong data storyteller: translates 1M+ session logs into 3 friction points, not 30-tab spreadsheets.`,

    workAuthorization: `On F1 OPT with full work authorization for the next 3 years — no sponsorship required during this period. Plans to pursue O1 visa based on professional contributions afterward. Zero visa friction; can start immediately.`,

    companyStories: {
      thomsonReuters: {
        situation: "CoCounsel's legal-research responses occasionally produced hallucinated citations, forcing a 10-hour/week manual QA step and limiting attorney trust in AI-generated outputs. Product team also needed rigorous UX experimentation to prioritize roadmap.",
        task: "Build an anomaly-detection layer to flag hallucinated citations, evaluate prompt/retrieval variants, design A/B tests on UX variants, and translate session logs into PM-actionable insights.",
        action: "Built a Python anomaly-detection model using scikit-learn and embedding similarity. Evaluated 4 prompt/retrieval configurations using LLM-as-judge against 300 attorney-labeled queries. Designed A/B tests with power analysis and CUPED variance reduction on 4 CoCounsel UX variants. Translated 1M+ user-session logs into actionable insights using SQL window functions and Pandas.",
        result: "Cut citation errors ~32% across 2 practice areas. Eliminated 10-hour/week manual QA. Lifted answer faithfulness 11 points pre-launch. Lifted user engagement 12% over control. Surfaced 3 friction points across the product development lifecycle that informed PM roadmap.",
        keyLesson: "LLM observability + product analytics share the same playbook — embeddings/LLM-as-judge give measurable feedback loops, while CUPED A/B tests prove which UX variants actually move engagement."
      },
      hcl: {
        situation: "Online travel and e-commerce client needed scalable analytics, personalization, and experimentation across 90M+ clickstream events to optimize funnel conversion and attach revenue.",
        task: "Build product analytics pipelines, GenAI-powered traveler assistance, personalized recommendations, and causal evaluation of promotional offers.",
        action: "Designed a LangChain + OpenAI embeddings + FAISS RAG travel Q&A assistant over 120K+ property and itinerary descriptions. Architected PySpark + Airflow + Databricks pipeline over ~90M clickstream/booking events with 45+ behavioral signals. Trained an XGBoost ranker on 18M Snowflake session records. Ran DiD + PSM quasi-experiment via DoWhy on 1.2M travelers. Operated AWS personalization workflow scoring 500K+ daily sessions. Built Tableau executive dashboards on Snowflake.",
        result: "14% lower handle time via RAG travel assistant. 9% lift in search-to-booking conversion via personalized ranker. 6.4% incremental conversion causally attributed to promotional offers. ~12% attach-revenue lift via personalization. 3 friction points surfaced and adopted into next-quarter PM roadmap.",
        keyLesson: "Product analytics at scale is causal inference + engineering + storytelling — without DoWhy/PSM you'd misattribute promotional lift to selection bias, and without Tableau exec dashboards PMs can't act on the findings."
      },
      tcs: {
        situation: "Online travel & hospitality client needed traveler segmentation, cancellation modeling, and product KPI dashboards to drive cross-sell and reduce churn.",
        task: "Surface high-value traveler segments, build a cancellation model, design product dashboards, and partner with PMs to define KPIs.",
        action: "Ran chi-square and Mann-Whitney U hypothesis tests on 400K+ booking and search records across 5 source systems. Built a logistic-regression cancellation model on 200K+ bookings with 25+ engineered features. Designed 4 Tableau dashboards on conversion, LTV, and engagement KPIs. Partnered with cross-functional stakeholders in Agile sprint reviews.",
        result: "Identified 3 high-value traveler segments informing cross-sell targeting. 9% reduction in traveler churn post-launch. 3 UX optimizations driven by dashboard insights. 7% lift in Q3 cross-sell conversion.",
        keyLesson: "Product analytics is 30% statistics, 70% data storytelling — getting PMs to act on segment insights matters as much as model AUC."
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
- IMPORTANT: Sandeepteja's current role is Data Scientist at Thomson Reuters (Aug 2025 – Present), focused on CoCounsel legal-AI product analytics, A/B experimentation, LLM-as-judge evaluation, and translating session logs into PM roadmap insights.
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
