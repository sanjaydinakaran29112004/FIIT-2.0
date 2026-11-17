export interface HighlightItem {
  icon: string;
  text: string;
}

export interface Course {
  id: string;
  category: string;
  badge: {
    text: string;
    variant: "orange" | "blue" | "indigo" | "cyan" | "amber" | "sky";
  };
  path: string;
  careerPathId: string;
  discipline: string;
  title: string;
  description: string;
  techTags: string[];
  highlights: HighlightItem[];
  duration: string;
  durationWeeks: number;
  format: string;
  campusLocation: string;
  campuses: string[];
  employabilityIndex: number;
  demandScore: number;
  level: "beginner" | "intermediate" | "advanced";
  deliveryFormat: "hybrid" | "fulltime" | "weekend";
}

export const COURSES: Course[] = [
  {
    id: "java-full-stack",
    category: "SOFTWARE ENGINEERING",
    badge: {
      text: "High Placement Velocity",
      variant: "orange",
    },
    path: "Path: Enterprise Full Stack Engineer",
    careerPathId: "full-stack",
    discipline: "Software Engineering",
    title: "Java Full Stack Engineering & Cloud Microservices",
    description:
      "Architect resilient enterprise architectures using Spring Boot, Hibernate, and Angular/React. Covers production container orchestration with Docker and REST...",
    techTags: ["Java 21", "Spring Boot 3", "Docker", "PostgreSQL", "AWS"],
    highlights: [
      { icon: "layers", text: "4 Production Capstones" },
      { icon: "clock", text: "160 Hrs Lab Coding" },
      { icon: "check-circle", text: "1-on-1 Code Reviews" },
      { icon: "award", text: "Accredited Credential" },
    ],
    duration: "16 Weeks",
    durationWeeks: 16,
    format: "Hybrid / Lab Intensive",
    campusLocation: "Available across all 9 FIIT Branches in TN",
    campuses: [
      "Avadi",
      "Ambattur",
      "RedHills",
      "Tambaram",
      "Kelambakkam",
      "Iyyappanthangal",
      "Chengalpattu",
      "Vellore",
      "Tiruvannamalai",
    ],
    employabilityIndex: 98,
    demandScore: 99,
    level: "beginner",
    deliveryFormat: "hybrid",
  },
  {
    id: "enterprise-data-analytics",
    category: "DATA ANALYTICS",
    badge: {
      text: "Zero-Coding Transition",
      variant: "sky",
    },
    path: "Path: Business Intelligence & Data Specialist",
    careerPathId: "data-analyst",
    discipline: "Data & Analytics",
    title: "Enterprise Data Analytics & PowerBI Intelligence",
    description:
      "Transform raw transactional data into actionable board-ready BI dashboards. Master complex DAX queries, ETL pipelines using SQL, statistical reporting, and predictiv...",
    techTags: [
      "PowerBI Pro",
      "Advanced SQL",
      "Excel VBA",
      "Tableau",
      "Python Pandas",
    ],
    highlights: [
      { icon: "database", text: "6 Client-Scale Datasets" },
      { icon: "clock", text: "120 Hrs Lab Analytics" },
      { icon: "users", text: "Portfolio Review Sessions" },
      { icon: "award", text: "Industry Capstone Cert" },
    ],
    duration: "12 Weeks",
    durationWeeks: 12,
    format: "Weekend / Evening Hybrid",
    campusLocation: "Avadi, Tambaram, Ambattur & Vellore Campuses",
    campuses: ["Avadi", "Tambaram", "Ambattur", "Vellore"],
    employabilityIndex: 95,
    demandScore: 96,
    level: "beginner",
    deliveryFormat: "weekend",
  },
  {
    id: "aws-cloud-devops",
    category: "CLOUD & DEVOPS",
    badge: {
      text: "AWS Solutions Architect Track",
      variant: "blue",
    },
    path: "Path: Cloud & DevOps Architect",
    careerPathId: "cloud-architect",
    discipline: "Cloud & DevOps",
    title: "AWS Cloud & DevOps Engineering with Kubernetes",
    description:
      "Design zero-downtime multi-region cloud infrastructures. Build automated CI/CD deployment pipelines using Jenkins, GitLab CI, Terraform IaC, and...",
    techTags: ["AWS ECS/EKS", "Kubernetes", "Terraform", "Docker", "CI/CD"],
    highlights: [
      { icon: "cloud", text: "Live Cloud Sandboxes" },
      { icon: "clock", text: "140 Hrs Lab Deployment" },
      { icon: "shield", text: "Infra Security Auditing" },
      { icon: "award", text: "AWS Cert Voucher Ready" },
    ],
    duration: "14 Weeks",
    durationWeeks: 14,
    format: "Hybrid Classroom & Lab",
    campusLocation: "Available across all 9 FIIT Branches",
    campuses: [
      "Avadi",
      "Ambattur",
      "RedHills",
      "Tambaram",
      "Kelambakkam",
      "Iyyappanthangal",
      "Chengalpattu",
      "Vellore",
      "Tiruvannamalai",
    ],
    employabilityIndex: 96,
    demandScore: 97,
    level: "beginner",
    deliveryFormat: "hybrid",
  },
  {
    id: "applied-ai-genai",
    category: "ARTIFICIAL INTELLIGENCE",
    badge: {
      text: "Next-Gen LLMs",
      variant: "blue",
    },
    path: "Path: Applied AI & ML Engineer",
    careerPathId: "ai-engineer",
    discipline: "AI & Machine Learning",
    title: "Applied AI & GenAI Application Development",
    description:
      "Construct production Retrieval-Augmented Generation (RAG) pipelines, fine-tune open-source LLMs (Llama 3, Mistral), and build vector-search intelligent agents usin...",
    techTags: ["PyTorch", "LangChain", "Pinecone", "FastAPI", "HuggingFace"],
    highlights: [
      { icon: "sparkles", text: "3 Enterprise RAG Projects" },
      { icon: "clock", text: "130 Hrs GPU Cloud Coding" },
      { icon: "monitor", text: "Local GPU Workstations" },
      { icon: "user-check", text: "Evaluated by AI Engineers" },
    ],
    duration: "14 Weeks",
    durationWeeks: 14,
    format: "Hybrid Tech Studio",
    campusLocation: "Chennai Main Labs & Vellore Innovation Center",
    campuses: ["Avadi", "Ambattur", "Tambaram", "Vellore"],
    employabilityIndex: 97,
    demandScore: 98,
    level: "beginner",
    deliveryFormat: "hybrid",
  },
  {
    id: "cyber-defense-soc",
    category: "CYBERSECURITY",
    badge: {
      text: "SOC Tier-1 & 2 Blueprint",
      variant: "indigo",
    },
    path: "Path: Certified Cybersecurity Specialist",
    careerPathId: "cybersecurity",
    discipline: "Cybersecurity & SOC",
    title: "Cyber Defense & SOC Operations Analyst",
    description:
      "Train in a simulated live Security Operations Center. Master SIEM telemetry with Splunk, vulnerability hunting with Wireshark and Kali, incident response triage, and...",
    techTags: [
      "Splunk SIEM",
      "Kali Linux",
      "Wireshark",
      "Burp Suite",
      "MITRE ATT&CK",
    ],
    highlights: [
      { icon: "shield-alert", text: "12 Live Attack Simulations" },
      { icon: "clock", text: "110 Hrs Blue Team Lab" },
      { icon: "search", text: "Forensics Investigation" },
      { icon: "award", text: "CompTIA Security+ Mapped" },
    ],
    duration: "12 Weeks",
    durationWeeks: 12,
    format: "Classroom + Isolated Lab",
    campusLocation: "Avadi, RedHills, Tambaram & Kelambakkam",
    campuses: ["Avadi", "RedHills", "Tambaram", "Kelambakkam"],
    employabilityIndex: 94,
    demandScore: 93,
    level: "beginner",
    deliveryFormat: "fulltime",
  },
  {
    id: "mern-stack-web",
    category: "WEB DEVELOPMENT",
    badge: {
      text: "Startup & Freelance Favorite",
      variant: "cyan",
    },
    path: "Path: Full Stack Developer",
    careerPathId: "full-stack",
    discipline: "Software Engineering",
    title: "MERN Stack Professional Web Architecture",
    description:
      "Build responsive, end-to-end commercial web products. Master React 18, Next.js App Router, Express REST APIs, MongoDB aggregation pipelines, and JWT multi-tier...",
    techTags: ["React 18", "Next.js 14", "Node.js", "MongoDB", "TailwindCSS"],
    highlights: [
      { icon: "layout", text: "3 Full-Scale Web Apps" },
      { icon: "clock", text: "140 Hrs Hands-on Lab" },
      { icon: "git-commit", text: "GitHub Commit Audits" },
      { icon: "cloud", text: "Live Cloud Hosting" },
    ],
    duration: "14 Weeks",
    durationWeeks: 14,
    format: "Full-Time Lab / Hybrid",
    campusLocation: "Available across all 9 FIIT Branches",
    campuses: [
      "Avadi",
      "Ambattur",
      "RedHills",
      "Tambaram",
      "Kelambakkam",
      "Iyyappanthangal",
      "Chengalpattu",
      "Vellore",
      "Tiruvannamalai",
    ],
    employabilityIndex: 95,
    demandScore: 97,
    level: "beginner",
    deliveryFormat: "hybrid",
  },
  {
    id: "python-backend-microservices",
    category: "SOFTWARE ENGINEERING",
    badge: {
      text: "High Async Throughput",
      variant: "amber",
    },
    path: "Path: Backend Software Engineer",
    careerPathId: "full-stack",
    discipline: "Software Engineering",
    title: "Python Backend & Microservices Architecture",
    description:
      "Engineer asynchronous distributed backends with Django and FastAPI. Master Redis caching, Celery task workers, RabbitMQ messaging, and high-concurrency...",
    techTags: ["Python 3.12", "FastAPI", "Django", "Redis", "PostgreSQL"],
    highlights: [
      { icon: "cpu", text: "2 High-Scale APIs" },
      { icon: "clock", text: "120 Hrs Code Lab" },
      { icon: "activity", text: "Load Test Validations" },
      { icon: "award", text: "Backend Cert Included" },
    ],
    duration: "12 Weeks",
    durationWeeks: 12,
    format: "Weekend / Evening",
    campusLocation: "Avadi, Tambaram & Chengalpattu",
    campuses: ["Avadi", "Tambaram", "Chengalpattu"],
    employabilityIndex: 93,
    demandScore: 92,
    level: "beginner",
    deliveryFormat: "weekend",
  },
  {
    id: "cisco-network-infrastructure",
    category: "NETWORKING & INFRA",
    badge: {
      text: "Cisco CCNA 200-301",
      variant: "blue",
    },
    path: "Path: Enterprise Network Administrator",
    careerPathId: "non-it",
    discipline: "Networking (CCNA/CCNP)",
    title: "Enterprise Network Systems & Cisco Routing Infrastructure",
    description:
      "Hands-on physical rack configuration. Design IP addressing schemes, VLAN segmentation, OSPF routing, access-control lists (ACLs), and automated network...",
    techTags: [
      "Cisco IOS",
      "Packet Tracer",
      "GNS3 Labs",
      "BGP / OSPF",
      "VLANs",
    ],
    highlights: [
      { icon: "server", text: "Physical Cisco Hardware Racks" },
      { icon: "clock", text: "100 Hrs Hardwire Lab" },
      { icon: "wrench", text: "Break-Fix Diagnostics" },
      { icon: "award", text: "CCNA Exam Readiness" },
    ],
    duration: "10 Weeks",
    durationWeeks: 10,
    format: "Hardware Lab Intensive",
    campusLocation: "Avadi & Ambattur Hardware Testbenches",
    campuses: ["Avadi", "Ambattur"],
    employabilityIndex: 91,
    demandScore: 90,
    level: "beginner",
    deliveryFormat: "fulltime",
  },
];
