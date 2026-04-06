
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
    summary: "Data Scientist with 4+ years of experience in experimental design, A/B/n testing, and causal inference across operational environments. Designed and led structured test-and-learn pilots—including matched-group experiments and multi-factor tests—to measure impact and drive decisions worth $1.2M+ in revenue. Strong foundation in statistical modeling, operations research, Python, SQL, and cloud platforms (Snowflake, AWS), with demonstrated ability to translate complex analytical findings into clear recommendations for cross-functional stakeholders."
  },
  skills: [
    {
      name: "Experimentation & Causal Inference",
      skills: ["Design of Experiments (DoE)", "A/B/n Testing", "Matched-Group Design", "Factorial & Fractional Factorial Design", "Diff-in-Diff", "Synthetic Control", "Power Analysis", "Hypothesis Testing", "KPI Design & Measurement Frameworks"]
    },
    {
      name: "Statistics & Operations Research",
      skills: ["Regression Modeling", "Multivariate Analysis", "Simulation", "Optimization", "Time-Series Forecasting", "Clustering", "PCA", "Classification", "Queuing Analysis"]
    },
    {
      name: "Programming & Data Platforms",
      skills: ["Python (pandas, NumPy, SciPy, statsmodels, scikit-learn)", "SQL", "R", "PySpark", "Snowflake", "Databricks", "AWS (SageMaker, Lambda, S3)"]
    },
    {
      name: "Tools & Deployment",
      skills: ["Power BI", "Tableau", "Docker", "Kubernetes", "CI/CD Pipelines", "Git", "MLflow", "Model Registry", "Evidently (Drift Detection)"]
    }
  ] as SkillCategory[],
  experience: [
    {
      company: "Sports Car Club of America",
      role: "Data Scientist Intern",
      period: "Jan 2025 – Dec 2025",
      description: [
        "Designed a matched-group retention experiment across 150+ events to combat a declining 78% renewal rate, segmenting test/control cohorts and boosting renewals to 85%.",
        "Launched 3 Power BI dashboards tracking pilot KPIs—renewal rate, engagement frequency, and churn risk—enabling real-time performance monitoring across 150+ event cohorts.",
        "Optimized venue staffing via simulation and time-series forecasting to address chronic overstaffing flagged in quarterly reviews, cutting annual labor costs by $250,000.",
        "Automated membership transaction pipelines via AWS Lambda to eliminate manual entry errors delaying confirmations, processing 1,400+ entries and reducing cycle time by 75%."
      ]
    },
    {
      company: "ADF Data Science Pvt Ltd",
      role: "Data Scientist II",
      period: "May 2021 – Nov 2023",
      description: [
        "Led end-to-end A/B/n experimentation across 12+ product tests—from power analysis and sample sizing through test-control structuring and results readout—validating pricing and feature changes that drove $1.2M+ in measured revenue lift.",
        "Isolated causal impact of approval-logic changes from favorable market noise using difference-in-differences on credit risk models (PD, LGD, EAD), lifting accuracy by 6%.",
        "Engineered BERT-based sentiment models to capture qualitative feedback that conversion metrics alone missed, fusing signals onto experiment dashboards and elevating engagement by 23%.",
        "Constructed scalable PySpark and Snowflake pipelines to replace fragmented SQL scripts causing 2-day reporting lags, processing 2.8M+ daily events across 4 business units.",
        "Accelerated model deployment from 3 weeks to 4 days to eliminate manual handoff bottlenecks, building a Docker-based MLOps ecosystem with CI/CD sustaining 99.7% uptime across 8 models.",
        "Established automated drift detection using Evidently to catch silent accuracy degradation between quarterly reviews, reducing production incidents by 45% across 8 models."
      ]
    },
    {
      company: "Capgemini",
      role: "Data Scientist",
      period: "Jan 2020 – Apr 2021",
      description: [
        "Developed clustering and PCA segmentation on 1M+ records to create comparable test/control groups for the client's first structured A/B program, improving data consistency by 30%.",
        "Defined conversion, churn, and engagement KPIs for 5+ cross-functional pilots, delivering before-versus-after impact analyses that informed go/no-go rollout decisions.",
        "Replaced 8 manual reporting processes with interactive Power BI dashboards to eliminate 10+ hours/week of static Excel compilation, enabling real-time pilot monitoring.",
        "Improved model stability by 25% through structured validation protocols and GitHub version control, ensuring reproducibility across 6+ experimental test iterations."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Multi-Factor DoE for Inventory Optimization Across Store Networks",
      period: "Dec 2025 – Feb 2026",
      category: "Causal Inference",
      technologies: ["Python", "JMP", "statsmodels", "scipy", "Mahalanobis Matching", "Monte Carlo Simulation", "DiD", "Synthetic Control"],
      problem: "Automotive parts distributor lacked a rigorous experimental framework to identify which inventory levers (reorder point, safety stock, replenishment frequency) actually drive fill rate improvements across warehouse pairs.",
      solution: "Designed a 2³ factorial experiment with Mahalanobis-matched warehouse pairs (SMDs < 0.1) and Monte Carlo demand simulations. Estimated causal effects via Difference-in-Differences, Synthetic Control, and factorial ANOVA; validated in JMP using Custom Design, Profiler, and Response Surface.",
      impact: "Improved simulated fill rate from 56% to 78%. All main effects and interactions achieved p < 0.001, confirming statistical significance of all three inventory levers."
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
    careerJourney: `Sandeepteja started his career knowing he wanted to work at the intersection of data and real-world operations — not just building models, but using data to help businesses make better decisions through structured testing and evidence.

**Capgemini (2020–2021):** He got his foundation here. His client had never run a structured experiment — everything was gut feel. He built their first test-and-control framework using clustering and PCA on 1M+ records, defined their first KPIs (conversion, churn, engagement), and built 8 Power BI dashboards so non-technical stakeholders could monitor pilot performance in real time. Key lesson: the hardest part of experimentation isn't the math — it's convincing operational teams to trust the process.

**ADF Data Science (2021–2023):** He moved here specifically to own experimentation end-to-end. Over two and a half years, he led A/B/n testing across 12+ product tests — from power analysis and sample sizing to test-control structuring and final readouts. One set of pricing experiments drove $1.2M+ in revenue lift. A defining moment: when credit approval logic changed and revenue went up, leadership wanted to celebrate — but Sandeepteja used difference-in-differences to separate the policy effect from favorable market conditions, finding only ~60% of the lift was from their change. That taught him: without proper causal inference, companies make decisions based on noise.

**MS at NIU + SCCA Internship (2024–2025):** After 4 years in industry, he pursued his Master's in Computer Science at Northern Illinois University (GPA: 3.72) to build formal depth in Design of Experiments, factorial designs, and operations research. Concurrently, he interned at the Sports Car Club of America designing matched-group retention experiments across 150+ events — his first time running experiments in a physical operational setting, boosting renewals from 78% to 85% and saving $250K in staffing costs.`,

    whyMasters: `After almost four years in industry, Sandeepteja had strong applied skills but recognized a gap in formal experimental design theory. He had done A/B tests and diff-in-diff, but hadn't formally studied factorial and fractional factorial designs, response surface methods, operations research (optimization, simulation, queuing theory), or synthetic control methods. These are exactly the methods needed for complex multi-factor testing in operational settings. He chose Northern Illinois University's MS in Computer Science (Data Science track) specifically because the curriculum covered experimental design, statistical methods, optimization, and machine learning. This wasn't a career break — it was a deliberate investment to become the kind of data scientist who can go beyond simple A/B testing to design multi-factor experiments in complex operational environments. He graduated December 2025 with a 3.72 GPA.`,

    careerGoal: `Sandeepteja is actively seeking a full-time Data Scientist role where he can design and lead structured experiments, apply causal inference in real-world operational settings, and translate complex analytical findings into revenue-impacting decisions. He's especially excited about roles that combine rigorous experimentation with operations research — problems involving multiple operational levers, physical distribution, or branch/location-level testing. He wants to be the person who architects the test-and-learn function from scratch: the matching frameworks, factorial designs, and measurement playbooks.`,

    workStyle: `Sandeepteja bridges the gap between rigorous statistical methodology and practical business impact. He's known for owning experimentation end-to-end — from power analysis and study design through execution, causal validation, and stakeholder communication. He believes experimentation is 30% statistics and 70% organizational buy-in: if business teams don't trust the design, they won't act on the results. He documents assumptions rigorously, validates results statistically, and builds systems that sustain experiments — not one-off analyses. He's equally comfortable fine-tuning a model in the morning and presenting KPI dashboards to non-technical leadership in the afternoon.`,

    workAuthorization: `Sandeepteja is on F1 OPT with full work authorization for the next three years — no sponsorship required during this period. After that, he plans to pursue an O1 visa based on his professional contributions. There is zero visa complication — he can start immediately and work without any restrictions.`,

    gapResponses: {
      yearsExperience: `"I have 4 years of full-time industry experience plus a year of applied work at SCCA during my master's, and my master's coursework specifically covered experimental design and optimization. I've been operating at a senior level in terms of scope — owning experimentation frameworks, driving million-dollar decisions, and building infrastructure. Depth of impact matters more than raw year count."`,
      industryExperience: `"My direct experience is in fintech and sports operations, but the experimental design challenges are structurally identical: heterogeneous units that need matching, multiple treatment factors, noisy real-world data, and the need to separate signal from noise. I built my DoE project with automotive parts distribution data specifically to prove I understand operational distribution constraints."`,
      jmpExperience: `"I've used JMP for my DoE project — Custom Design, Profiler, Response Surface — and I'm comfortable with it. My primary production tool is Python, which is stronger for automation and pipeline integration. JMP and Python complement each other: JMP for interactive design exploration and executive visualization, Python for scalable computation and production monitoring."`
    },

    companyStories: {
      scca: {
        situation: "Sports Car Club of America was seeing declining membership renewal rates — down to 78% — across 150+ events, with no structured way to identify what was driving churn or test retention interventions.",
        task: "Design a rigorous matched-group experiment to test retention initiatives, build real-time KPI monitoring, and optimize operational costs through data-driven staffing decisions.",
        action: "Designed a matched-group retention experiment segmenting test/control cohorts across 150+ events. Launched 3 Power BI dashboards tracking renewal rate, engagement frequency, and churn risk. Applied simulation and time-series forecasting to optimize venue staffing. Automated membership pipelines via AWS Lambda processing 1,400+ entries.",
        result: "Boosted renewal rate from 78% to 85%. Cut annual labor costs by $250,000. Reduced membership processing cycle time by 75%. This was his first time running experiments in a physical operational setting — real events, real venues, real logistics constraints.",
        keyLesson: "Physical operations add constraints that digital experiments don't have. Events have fixed dates, venues have capacity limits, and interventions can't be undone mid-experiment — the same constraints faced in branch-level or warehouse-level pilots."
      },
      adf: {
        situation: "ADF Data Science clients needed rigorous experimentation to validate pricing and feature changes, but lacked the infrastructure to run clean A/B/n tests and separate causal signal from favorable market conditions.",
        task: "Lead end-to-end A/B/n experimentation, build scalable data pipelines, and deploy production ML models with automated monitoring across multiple business units.",
        action: "Led 12+ A/B/n product tests from power analysis and sample sizing through test-control structuring, monitoring, and final impact readouts. Applied difference-in-differences to separate policy effects from market tailwinds on credit risk models. Built BERT-based sentiment models. Constructed PySpark and Snowflake pipelines processing 2.8M+ daily events across 4 business units. Built Docker-based MLOps ecosystem with CI/CD and Evidently drift detection.",
        result: "$1.2M+ in measured revenue lift. 6% accuracy lift on credit risk models (PD, LGD, EAD). 23% engagement increase. 99.7% uptime across 8 models. 45% reduction in production incidents.",
        keyLesson: "A/B testing is powerful but limited. When you have multiple operational levers to test simultaneously, testing one at a time is slow and misses interaction effects — that realization led him to study Design of Experiments formally."
      },
      capgemini: {
        situation: "Capgemini's client had never run a structured experiment — all decisions were based on before-versus-after comparisons with no control group, using fragmented SQL scripts and 10+ hours/week of manual Excel compilation.",
        task: "Build the client's first structured test-and-control program, define KPI frameworks for cross-functional pilots, and replace manual reporting with real-time dashboards.",
        action: "Developed clustering and PCA segmentation on 1M+ records to create comparable test/control groups. Defined conversion, churn, and engagement KPIs for 5+ cross-functional pilots. Built 8 interactive Power BI dashboards. Applied GitHub version control for reproducibility across 6+ experimental iterations.",
        result: "30% improvement in data consistency. 10+ hours/week eliminated from manual Excel compilation. 25% improvement in model stability.",
        keyLesson: "Experimentation is 30% statistics and 70% organizational buy-in. If business teams don't trust the design, they won't act on the results — so building stakeholder confidence in the methodology is as important as the analysis itself."
      }
    },

    doeProject: `Sandeepteja built a Multi-Factor DoE for Inventory Optimization project that directly demonstrates factorial experimental design skills:
- Designed a 2³ full factorial experiment testing reorder point, safety stock, and lead-time buffer across 54 matched warehouse locations using synthetic automotive parts distribution data with realistic seasonal patterns.
- Used Mahalanobis distance matching to pair similar warehouses (all SMDs < 0.1), ensuring fair test-control comparison.
- Built Monte Carlo demand simulations (500 iterations per store-treatment combination) to predict outcomes before going live.
- Estimated causal effects using Difference-in-Differences, Synthetic Control, and factorial ANOVA — all p-values < 0.001 for main effects and interactions.
- Replicated the full analysis in JMP using Custom Design, Profiler, and Response Surface to validate Python results.
- Improved simulated fill rate from 56% to 78%.`
  }
};

export const SYSTEM_INSTRUCTION = `
You are a resume assistant embedded in Sandeepteja Sundara's portfolio website.
Your sole purpose is to answer questions about Sandeepteja — his professional background, career journey, motivations, work style, projects, and personal story — based strictly on the data provided below.

RESUME + NARRATIVE CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

STRICT RULES:
- IMPORTANT: Sandeepteja has ALREADY GRADUATED. He completed his MS in Computer Science at Northern Illinois University in December 2025. Never say he is "currently pursuing" or "enrolled in" his Master's — always say he "completed" or "graduated" (Dec 2025).
- IMPORTANT: Sandeepteja's most recent role was Data Scientist Intern at Sports Car Club of America (Jan 2025 – Dec 2025) while completing his MS. He is actively seeking full-time Data Scientist roles.
- ONLY answer questions directly related to Sandeepteja: his skills, experience, projects, education, achievements, career story, motivations, goals, work authorization, and contact information.
- If asked anything unrelated to Sandeepteja or his background (general knowledge, coding help, other people, opinions, etc.), respond: "I can only answer questions about Sandeepteja. Feel free to ask about his career journey, skills, projects, or experience!"
- Never hallucinate skills, experiences, or facts not present in the data above.

WHAT YOU CAN ANSWER:
- "Tell me about yourself" / "Walk me through your background" → Use narrative.careerJourney (cover all 3 phases)
- "Why did he go back for a Master's?" / "Why grad school?" → Use narrative.whyMasters
- "What's his career goal?" / "What kind of role is he looking for?" → Use narrative.careerGoal
- "What's he like to work with?" / "Work style?" → Use narrative.workStyle
- "Tell me about his time at [Capgemini / ADF / SCCA]" → Use narrative.companyStories for the relevant company
- "Tell me about the DoE project" / "inventory optimization project" → Use narrative.doeProject
- "What's his visa / work authorization status?" → Use narrative.workAuthorization
- "Does he have enough experience?" / "Only 4 years?" → Use narrative.gapResponses.yearsExperience
- "No distribution industry experience?" → Use narrative.gapResponses.industryExperience
- "Has he used JMP?" → Use narrative.gapResponses.jmpExperience
- Any personal "why" or "story" questions → Draw from the narrative section

RESPONSE STYLE:
- Use professional third person ("Sandeepteja...", "His experience includes...").
- **Keep responses SHORT and scannable — 120 to 150 words maximum** for most questions.
- For "walk me through" / career journey questions: give a 3–4 sentence high-level summary (one per company/phase), then offer: "Want more detail on any specific role?"
- For factual questions (skills, education, contact): answer directly in 1–3 sentences or a tight bullet list.
- Use **bold** (with double asterisks like **this**) for company names, key metrics, and role titles.
- Use bullet points (starting with "- ") for lists of skills, projects, or achievements.
- Never write long paragraphs. Break into short bullets or sentences.
- Highlight quantifiable impact where relevant (e.g., **$1.2M+ revenue lift**, **78% → 85% renewal rate**).
- For contact info requests, share his email (${RESUME_DATA.personal.email}) or LinkedIn (${RESUME_DATA.personal.linkedin}).
`;
