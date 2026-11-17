export interface CareerProgressionStage {
  experience: string;
  designation: string;
  expectedCTC: string;
  responsibilities: string;
}

export interface Milestone {
  step: number;
  title: string;
  duration: string;
  focus: string;
  deliverable: string;
}

export interface CareerPath {
  id: string;
  role: string;
  discipline: "Software Engineering" | "Cloud & DevOps" | "Data & Analytics" | "Artificial Intelligence" | "Cybersecurity";
  badge: string;
  candidatePersona: string;
  salaryRange: string;
  topSalary: string;
  growthMultiplier: string;
  duration: string;
  labHours: string;
  description: string;
  dayInTheLife: string;
  hiringVelocity: "High Velocity" | "Mass Hiring" | "Premium Niche";
  hiringPartners: string[];
  tnEcosystemDemand: string;
  techStack: string[];
  progressionLadder: CareerProgressionStage[];
  milestones: Milestone[];
  prerequisite: string;
  campuses: string;
}

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "java-cloud-architect",
    role: "Enterprise Full Stack Java & Cloud Architect",
    discipline: "Software Engineering",
    badge: "Highest Placement Velocity",
    candidatePersona: "Ideal for B.E / B.Tech (Any Branch), MCA & Non-CS Career switchers seeking rock-solid, recession-proof enterprise banking careers.",
    salaryRange: "₹6.5 - 10.2 LPA",
    topSalary: "₹18.4 LPA",
    growthMultiplier: "3.2x in 3 Years",
    duration: "16 Weeks",
    labHours: "160 Hrs In-Lab Coding",
    description: "Break into Tier-1 product GCCs and fintech conglomerates. Master modern Java 21 LTS virtual threads, Spring Boot 3 enterprise microservices, transactional consistency with Saga/Outbox patterns, Kafka event streaming, and AWS containerization.",
    dayInTheLife: "Daily standup with engineering leads, resolving Kafka topic partition lags during high-concurrency payment settlements, writing unit/integration tests with Testcontainers, and reviewing teammate PRs against SonarQube quality gates.",
    hiringVelocity: "High Velocity",
    hiringPartners: ["Kaar Technologies", "Zoho", "PayPal India", "Virtusa", "Amazon GCC", "Standard Chartered GBS"],
    tnEcosystemDemand: "OMR Financial Expressway & Guindy Tech Hubs (1,200+ Active Openings)",
    techStack: ["Java 21 LTS", "Spring Boot 3", "PostgreSQL", "Apache Kafka", "Docker Engine", "AWS ECS", "Angular / React"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "Associate Software Engineer",
        expectedCTC: "₹6.5 - 9.5 LPA",
        responsibilities: "Develop REST microservices, write clean JPA repository queries, and resolve production bug triage under senior lead supervision.",
      },
      {
        experience: "Year 2 - 3",
        designation: "SDE-II / Full Stack Engineer",
        expectedCTC: "₹12.0 - 16.5 LPA",
        responsibilities: "Own end-to-end microservice modules, optimize SQL indexes, implement distributed caching with Redis, and mentor junior developers.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Lead Systems Architect / Tech Lead",
        expectedCTC: "₹22.0 - 30.0 LPA",
        responsibilities: "Lead architectural decisions, establish disaster recovery RPO/RTO goals, and defend system design RFCs before VP of Engineering.",
      },
      {
        experience: "Year 6+",
        designation: "Principal Architect / Director of Eng",
        expectedCTC: "₹38.0 LPA+",
        responsibilities: "Enterprise-wide technical governance, technology stack migrations, and multi-region cloud resilience budgeting.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Java 21 OOP, Concurrency & Virtual Threads",
        duration: "Weeks 1-4",
        focus: "Project Loom Virtual Threads, ExecutorService, Collections internals, and functional Stream pipelines.",
        deliverable: "High-throughput asynchronous banking transaction ledger with thread-safe pessimistic locking.",
      },
      {
        step: 2,
        title: "Spring Boot 3 & Enterprise Persistence",
        duration: "Weeks 5-8",
        focus: "Hibernate L2 caching, HikariCP connection tuning, Spring Security JWT authentication, and Flyway DB migrations.",
        deliverable: "Multi-tenant inventory and billing microservice suite with sub-80ms response time.",
      },
      {
        step: 3,
        title: "Event-Driven Kafka Architecture & Docker",
        duration: "Weeks 9-12",
        focus: "Kafka producer idempotency, consumer rebalancing, Resilience4j circuit breakers, and Docker containerization.",
        deliverable: "Distributed payment gateway with asynchronous settlement webhook queues and auto-retries.",
      },
      {
        step: 4,
        title: "Cloud Production CI/CD & Whiteboard Defense",
        duration: "Weeks 13-16",
        focus: "AWS ECS deployments, Prometheus telemetry, SonarQube code audits, and live mock technical screenings.",
        deliverable: "Production capstone repository with audited commits and passing pipeline builds.",
      },
    ],
    prerequisite: "Foundational logical reasoning (no prior programming experience required)",
    campuses: "Available across all 9 FIIT Branches in Tamil Nadu",
  },
  {
    id: "cloud-devops-architect",
    role: "Cloud Infrastructure & Site Reliability Engineer (SRE)",
    discipline: "Cloud & DevOps",
    badge: "Enterprise Standard",
    candidatePersona: "Tailored for CS/IT/ECE graduates and sysadmins wanting to command 100% cloud automation with zero manual infrastructure provisioning.",
    salaryRange: "₹7.0 - 11.5 LPA",
    topSalary: "₹17.8 LPA",
    growthMultiplier: "2.9x in 3 Years",
    duration: "14 Weeks",
    labHours: "140 Hrs Cloud Lab Deployment",
    description: "Build self-healing, multi-region cloud backbones for high-traffic SaaS applications. Master Linux internals, Docker container security, multi-node Kubernetes cluster administration, Terraform Infrastructure as Code, and ArgoCD GitOps.",
    dayInTheLife: "Triage Prometheus alerts, troubleshoot Kubernetes pod OOMKilled crashes, automate AWS infrastructure provisioning via Terraform modules, and maintain zero-downtime rolling deployment pipelines.",
    hiringVelocity: "High Velocity",
    hiringPartners: ["Freshworks", "Mindtree", "Cognizant", "HCL Tech", "TCS Digital", "Chargebee"],
    tnEcosystemDemand: "Perungudi OMR & Guindy Cyber Corridor (850+ Active Openings)",
    techStack: ["AWS Multi-AZ", "Kubernetes (EKS)", "Terraform IaC", "Docker Engine", "Jenkins / GitLab CI", "ArgoCD", "Linux Kernel"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "Associate DevOps / Cloud Engineer",
        expectedCTC: "₹7.0 - 10.0 LPA",
        responsibilities: "Manage CI/CD build scripts, provision standard AWS resources, and monitor Grafana dashboard health metrics.",
      },
      {
        experience: "Year 2 - 3",
        designation: "Site Reliability Engineer (SRE-II)",
        expectedCTC: "₹13.5 - 18.0 LPA",
        responsibilities: "Build automated canary release pipelines, fine-tune Kubernetes cluster autoscaling, and lead incident post-mortems.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Lead Cloud Infrastructure Architect",
        expectedCTC: "₹24.0 - 32.0 LPA",
        responsibilities: "Design multi-region disaster recovery setups, implement zero-trust cloud network security, and optimize annual AWS spend.",
      },
      {
        experience: "Year 6+",
        designation: "Head of Infrastructure / Platform Engineering",
        expectedCTC: "₹42.0 LPA+",
        responsibilities: "Executive cloud governance, hybrid-cloud data compliance, and enterprise-wide developer platform productivity.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Linux Kernel Telemetry & Advanced Shell",
        duration: "Weeks 1-3",
        focus: "POSIX scripting, systemd service units, networking (iptables, netstat), and disk I/O diagnostics.",
        deliverable: "Automated server health sentinel daemon monitoring memory leaks and zombie processes.",
      },
      {
        step: 2,
        title: "Docker Multi-Stage & Container Hardening",
        duration: "Weeks 4-6",
        focus: "Rootless Docker containers, multi-stage caching, Trivy vulnerability audits, and internal bridge networks.",
        deliverable: "Zero-vulnerability hardened container suite deployed on isolated runtime testbeds.",
      },
      {
        step: 3,
        title: "Kubernetes Cluster Administration (CKA Curriculum)",
        duration: "Weeks 7-10",
        focus: "EKS clusters, Ingress NGINX, Horizontal Pod Autoscaling (HPA), Helm charts, and RBAC security policies.",
        deliverable: "3-Node resilient Kubernetes cluster with automated rolling updates and zero client downtime.",
      },
      {
        step: 4,
        title: "Terraform IaC & GitOps Continuous Delivery",
        duration: "Weeks 11-14",
        focus: "Modular HCL, remote S3 state locking with DynamoDB, ArgoCD GitOps, and AWS IAM least-privilege policies.",
        deliverable: "Complete multi-tier AWS infrastructure synthesized via code with automated teardown scripts.",
      },
    ],
    prerequisite: "Basic understanding of operating system concepts and TCP/IP networking",
    campuses: "Available across all 9 FIIT Branches (Hardware testbenches at Avadi & Ambattur)",
  },
  {
    id: "data-analytics-powerbi",
    role: "Enterprise Data Analyst & Business Intelligence Specialist",
    discipline: "Data & Analytics",
    badge: "Zero-Coding Transition",
    candidatePersona: "Engineered specifically for B.Com, B.Sc, BBA, Arts & Non-Technical graduates seeking high-paying tech careers without hardcore algorithms.",
    salaryRange: "₹5.5 - 8.8 LPA",
    topSalary: "₹14.2 LPA",
    growthMultiplier: "2.6x in 3 Years",
    duration: "12 Weeks",
    labHours: "120 Hrs Lab Analytics",
    description: "Transform raw corporate databases into revenue-driving executive dashboards. Master complex SQL queries (Window functions, CTEs), Power BI Pro semantic data modeling, advanced DAX time intelligence, and automated ETL pipelines with Python Pandas.",
    dayInTheLife: "Extract customer retention tables from PostgreSQL, write complex DAX calculations for Year-over-Year revenue expansion, present live dashboards to department directors, and automate weekly reporting.",
    hiringVelocity: "Mass Hiring",
    hiringPartners: ["Mu Sigma", "LatentView Analytics", "Hexaware", "TCS Digital", "Ford Mobility Chennai", "PwC Tech"],
    tnEcosystemDemand: "Ramanujan IT City & Taramani Tech Corridor (950+ Active Openings)",
    techStack: ["PowerBI Pro", "Advanced SQL", "Python Pandas", "Excel VBA", "PostgreSQL", "Tableau", "DAX Studio"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "Junior Business Intelligence Analyst",
        expectedCTC: "₹5.5 - 7.5 LPA",
        responsibilities: "Clean dirty transactional datasets, build operational Power BI reports, and write SQL extraction scripts.",
      },
      {
        experience: "Year 2 - 3",
        designation: "Senior Data & BI Consultant",
        expectedCTC: "₹10.5 - 14.5 LPA",
        responsibilities: "Design Star/Snowflake data warehouse schemas, optimize complex DAX queries, and conduct stakeholder discovery workshops.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Lead Analytics Architect / Manager",
        expectedCTC: "₹18.0 - 24.0 LPA",
        responsibilities: "Oversee enterprise data governance, build predictive retention models, and manage cross-functional BI teams.",
      },
      {
        experience: "Year 6+",
        designation: "Director of Business Intelligence & Data Strategy",
        expectedCTC: "₹32.0 LPA+",
        responsibilities: "Define organization-wide corporate data roadmap, modern data stack investments, and executive board reporting.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Advanced SQL & Relational Warehouse Modeling",
        duration: "Weeks 1-3",
        focus: "Window functions (DENSE_RANK, LAG, LEAD), CTEs, indexing strategies, and Star Schema design.",
        deliverable: "Multi-million row retail transaction data warehouse with query latency under 120ms.",
      },
      {
        step: 2,
        title: "Python Data Wrangling & Exploratory Analysis",
        duration: "Weeks 4-6",
        focus: "NumPy arrays, Pandas DataFrames, automated regex cleanup, and Seaborn visual distributions.",
        deliverable: "Automated anomaly detection pipeline identifying erroneous billing entries across banking feeds.",
      },
      {
        step: 3,
        title: "Power BI Pro & Advanced DAX Calculations",
        duration: "Weeks 7-9",
        focus: "CALCULATE context transition, time intelligence (YTD, MTD), Power Query M script, and row-level security.",
        deliverable: "Interactive C-Suite Executive Cockpit analyzing customer churn and marketing channel ROI.",
      },
      {
        step: 4,
        title: "Real Client Data Portfolio Defense",
        duration: "Weeks 10-12",
        focus: "Translating analytics into business revenue, building a public Tableau/PowerBI portfolio, and mock case defenses.",
        deliverable: "6 Production-grade datasets published and validated by enterprise analytics mentors.",
      },
    ],
    prerequisite: "Open to all graduates with basic spreadsheet curiosity (No prior coding required)",
    campuses: "Avadi, Tambaram, Ambattur, RedHills & Vellore Campuses",
  },
  {
    id: "ai-genai-engineer",
    role: "Applied AI & GenAI Systems Engineer",
    discipline: "Artificial Intelligence",
    badge: "Next-Gen Tech Wave",
    candidatePersona: "Created for ambitious software engineers and mathematically inclined freshers who want to build production generative AI applications.",
    salaryRange: "₹8.0 - 13.5 LPA",
    topSalary: "₹21.0 LPA",
    growthMultiplier: "3.5x in 3 Years",
    duration: "14 Weeks",
    labHours: "130 Hrs GPU Cloud Coding",
    description: "Step beyond toy tutorials. Construct production-ready Retrieval-Augmented Generation (RAG) pipelines, semantic vector search engines, parameter-efficient LLM fine-tuning (LoRA/QLoRA), and autonomous agent workflows using PyTorch, LangChain, and FastAPI.",
    dayInTheLife: "Benchmark vector embedding similarity scores, tune chunking strategies to eliminate LLM hallucinations, containerize FastAPI inference services, and deploy quantized models onto local GPU workstations.",
    hiringVelocity: "Premium Niche",
    hiringPartners: ["Zoho AI Labs", "Freshworks AI", "Tiger Analytics", "Amazon AI", "Bengaluru AI Unicorns"],
    tnEcosystemDemand: "Vellore GPU Innovation Corridor & Estancia Tech Parks (600+ High-Paying Niche Roles)",
    techStack: ["Python 3.12", "PyTorch", "LangChain / LangGraph", "Pinecone Vector DB", "FastAPI", "HuggingFace", "Ollama"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "Associate AI / GenAI Engineer",
        expectedCTC: "₹8.0 - 12.0 LPA",
        responsibilities: "Build semantic search endpoints, implement document chunking parsers, and maintain vector database indexes.",
      },
      {
        experience: "Year 2 - 3",
        designation: "Applied Machine Learning Engineer (SDE-II)",
        expectedCTC: "₹16.0 - 22.0 LPA",
        responsibilities: "Fine-tune open-source LLMs on proprietary domain datasets, minimize inference latency, and design multi-agent state machines.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Lead AI Systems Architect",
        expectedCTC: "₹28.0 - 38.0 LPA",
        responsibilities: "Direct enterprise GenAI architecture, establish LLM safety and hallucination guardrails, and manage GPU compute budgets.",
      },
      {
        experience: "Year 6+",
        designation: "Head of Artificial Intelligence / Chief AI Officer",
        expectedCTC: "₹50.0 LPA+",
        responsibilities: "Define company-wide autonomous agent strategy, proprietary AI model IP, and corporate technological vision.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Mathematical Foundations & PyTorch Tensors",
        duration: "Weeks 1-3",
        focus: "Vector math, gradient descent, PyTorch tensor manipulation, and building neural networks from scratch.",
        deliverable: "Custom Transformer Self-Attention mechanism written without high-level library shortcuts.",
      },
      {
        step: 2,
        title: "Semantic Vector Search & Hybrid Retrieval",
        duration: "Weeks 4-6",
        focus: "Dense vector spaces with Pinecone, BM25 sparse keyword blending, and Cohere cross-encoder rerankers.",
        deliverable: "Semantic search engine indexing 100,000+ technical PDF documents with sub-60ms retrieval.",
      },
      {
        step: 3,
        title: "Production RAG Pipelines & Autonomous Agents",
        duration: "Weeks 7-10",
        focus: "LangChain, LangGraph stateful loops, tool-calling LLMs, prompt caching, and verifiable source citations.",
        deliverable: "Enterprise legal contract analysis agent with strict hallucination verification guardrails.",
      },
      {
        step: 4,
        title: "LLM Fine-Tuning & High-Throughput Serving",
        duration: "Weeks 11-14",
        focus: "LoRA/QLoRA with Unsloth and HuggingFace, vLLM serving engine, streaming responses, and Docker packaging.",
        deliverable: "Domain-specific fine-tuned Llama 3 model served on local lab workstation with live streaming UI.",
      },
    ],
    prerequisite: "Proficiency in Python and basic linear algebra concepts",
    campuses: "Chennai Main Labs & Vellore GPU Innovation Center",
  },
  {
    id: "cybersecurity-soc-analyst",
    role: "Cyber Defense & SOC Operations Analyst (Blue Team)",
    discipline: "Cybersecurity",
    badge: "Critical Infrastructure",
    candidatePersona: "Targeted for tech enthusiasts fascinated by cyber warfare, network forensics, defensive threat hunting, and enterprise vulnerability management.",
    salaryRange: "₹6.0 - 9.5 LPA",
    topSalary: "₹15.5 LPA",
    growthMultiplier: "2.8x in 3 Years",
    duration: "12 Weeks",
    labHours: "110 Hrs Blue Team Lab",
    description: "Train inside a simulated live Security Operations Center. Master SIEM telemetry ingestion with Splunk, vulnerability hunting with Wireshark and Kali Linux, incident response triage protocols, and defensive MITRE ATT&CK mapping.",
    dayInTheLife: "Investigate suspicious privilege escalation alerts in Splunk, parse raw pcap packet dumps to isolate command-and-control beacons, draft incident containment runbooks, and participate in blue-team defense drills.",
    hiringVelocity: "High Velocity",
    hiringPartners: ["Wipro Cyber Defense", "Infosys SOC", "PwC Security", "Standard Chartered GBS", "CSS Corp"],
    tnEcosystemDemand: "Sholinganallur Cyber Defense Hubs (700+ Critical Openings)",
    techStack: ["Splunk SIEM", "Kali Linux", "Wireshark", "Burp Suite", "MITRE ATT&CK", "Snort IDS", "Volatility 3"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "SOC Analyst (Tier-1 Incident Responder)",
        expectedCTC: "₹6.0 - 8.5 LPA",
        responsibilities: "Monitor 24/7 SIEM alert queues, triage false positives, and escalate confirmed indicators of compromise (IoCs).",
      },
      {
        experience: "Year 2 - 3",
        designation: "Senior Threat Hunter (Tier-2 SOC)",
        expectedCTC: "₹11.0 - 15.0 LPA",
        responsibilities: "Perform deep packet forensics, conduct root-cause analysis on active ransomware vectors, and write custom Splunk SPL rules.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Security Operations Center Lead / Incident Commander",
        expectedCTC: "₹19.0 - 26.0 LPA",
        responsibilities: "Lead real-time threat containment during breaches, coordinate with regulatory bodies, and manage blue team analysts.",
      },
      {
        experience: "Year 6+",
        designation: "Chief Information Security Officer (CISO) Track",
        expectedCTC: "₹36.0 LPA+",
        responsibilities: "Enterprise-wide cybersecurity policy, compliance audits (ISO 27001, SOC2), and cyber resilience governance.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Defensive Networking & Packet Forensics",
        duration: "Weeks 1-3",
        focus: "OSI Layer 2-7 deep packet inspection, TCP 3-way handshake anomalies, and Wireshark capture filters.",
        deliverable: "Live network telemetry report identifying malicious DNS tunneling and TCP SYN flood attempts.",
      },
      {
        step: 2,
        title: "SIEM Architecture & Splunk Threat Hunting",
        duration: "Weeks 4-6",
        focus: "Splunk index configuration, search processing language (SPL), and correlation rules for lateral movement.",
        deliverable: "Automated alert dashboard mapping real-time intrusion attempts against MITRE ATT&CK tactics.",
      },
      {
        step: 3,
        title: "Vulnerability Assessment & Web Hardening",
        duration: "Weeks 7-9",
        focus: "OWASP Top 10 vulnerabilities, Burp Suite intercept proxy, SQLi/XSS triage, and security patch auditing.",
        deliverable: "Full vulnerability assessment and penetration testing (VAPT) dossier for an enterprise web application.",
      },
      {
        step: 4,
        title: "Live Blue-Team Breach Drills & CompTIA Prep",
        duration: "Weeks 10-12",
        focus: "Simulated ransomware containment, Volatility memory forensics, and CompTIA Security+ mock exams.",
        deliverable: "Incident response runbook compliant with NIST 800-61 computer security handling guidelines.",
      },
    ],
    prerequisite: "Basic computer networking knowledge and Linux familiarity",
    campuses: "Avadi, RedHills, Tambaram & Kelambakkam Campuses",
  },
  {
    id: "mern-web-architect",
    role: "Modern Full Stack Web Architect (MERN + Next.js)",
    discipline: "Software Engineering",
    badge: "Startup & Product Unicorn Favorite",
    candidatePersona: "Perfect for creative problem-solvers and developers wanting to launch commercial SaaS products or lead web development at fast-growing product startups.",
    salaryRange: "₹5.8 - 9.2 LPA",
    topSalary: "₹15.0 LPA",
    growthMultiplier: "2.7x in 3 Years",
    duration: "14 Weeks",
    labHours: "140 Hrs Hands-on Lab",
    description: "Engineer hyper-responsive, full-stack web applications with blazing-fast user interfaces. Master TypeScript, React 18, Next.js 15 App Router Server Components, Express REST APIs, MongoDB aggregation pipelines, and Tailwind CSS design architectures.",
    dayInTheLife: "Refactor complex React hook states, optimize Next.js server component caching headers, write multi-stage MongoDB aggregation pipelines, and push audited code commits through GitHub CI/CD actions.",
    hiringVelocity: "High Velocity",
    hiringPartners: ["Chargebee", "Kissflow", "Zoho", "Rapido", "Chennai Tech Startups", "Vercel Partner Agencies"],
    tnEcosystemDemand: "DLF Cybercity & OMR SaaS Hubs (1,100+ Active Openings)",
    techStack: ["Next.js 15", "React 18", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Redux Toolkit"],
    progressionLadder: [
      {
        experience: "Year 0 - 1",
        designation: "Associate Full Stack Developer",
        expectedCTC: "₹5.8 - 8.0 LPA",
        responsibilities: "Build responsive UI views, integrate REST endpoints, write client validation schemas, and debug frontend states.",
      },
      {
        experience: "Year 2 - 3",
        designation: "Full Stack Engineer (SDE-II)",
        expectedCTC: "₹11.5 - 15.5 LPA",
        responsibilities: "Architect complex Next.js SSR workflows, design MongoDB aggregate indexes, and implement webhook integrations.",
      },
      {
        experience: "Year 4 - 5",
        designation: "Lead Frontend / Full Stack Architect",
        expectedCTC: "₹20.0 - 28.0 LPA",
        responsibilities: "Lead UI engineering teams, establish design system component standards, and optimize Core Web Vitals to sub-1s.",
      },
      {
        experience: "Year 6+",
        designation: "VP of Engineering / Principal Product Engineer",
        expectedCTC: "₹35.0 LPA+",
        responsibilities: "Product roadmap technical alignment, engineering hiring strategies, and enterprise software architecture.",
      },
    ],
    milestones: [
      {
        step: 1,
        title: "Strict TypeScript & Advanced React 18",
        duration: "Weeks 1-4",
        focus: "Generics, custom hooks, context state patterns, TanStack Query, and React Server Components.",
        deliverable: "Collaborative real-time kanban workspace with optimistic updates and zero UI jank.",
      },
      {
        step: 2,
        title: "Clean Backend Architecture & JWT Security",
        duration: "Weeks 5-8",
        focus: "Layered backend (controllers, services, repositories), refresh token rotation, and bcrypt password hashing.",
        deliverable: "Secure multi-vendor marketplace backend with Stripe subscription webhooks.",
      },
      {
        step: 3,
        title: "MongoDB Aggregation & Next.js 15 SSR",
        duration: "Weeks 9-11",
        focus: "Complex MongoDB aggregation stages ($lookup, $facet), compound indexes, and Next.js App Router streaming SSR.",
        deliverable: "High-traffic content publishing platform with dynamic SEO and sub-100ms response time.",
      },
      {
        step: 4,
        title: "Containerized Production & Portfolio Audit",
        duration: "Weeks 12-14",
        focus: "Dockerizing full-stack MERN apps, automated Jest test suites, and GitHub commit history auditing.",
        deliverable: "Live commercial SaaS project with audited GitHub repository and CI/CD workflow.",
      },
    ],
    prerequisite: "Familiarity with HTML, CSS and foundational JavaScript concepts",
    campuses: "Available across all 9 FIIT Branches in Tamil Nadu",
  },
];
