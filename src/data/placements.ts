export interface PlacedStudent {
  id: string;
  name: string;
  company: string;
  role: string;
  package: string;
  previousBg: string;
  campus: string;
  quote: string;
  track: string;
}

export interface HiringPartner {
  id: string;
  name: string;
  category: "Tier-1 Product GCC" | "SaaS Unicorn" | "Enterprise Consulting" | "Global IT Services";
  location: string;
  activeHiringRoles: string[];
}

export interface IPPPhase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  keyOutcomes: string[];
}

export const PLACEMENT_STATS = {
  highestPackage: "₹18.4 LPA",
  medianPackage: "₹6.8 LPA",
  averagePackage: "₹7.4 LPA",
  placementRate: "94.6%",
  totalOffers: "850+",
  activePartners: "140+",
  averageHiringDays: "28 Days",
};

export const SALARY_BY_TRACK = [
  { track: "Full Stack Java & Cloud Architect", min: "6.5 LPA", avg: "8.2 LPA", max: "18.4 LPA" },
  { track: "Cloud & DevOps Infrastructure", min: "7.0 LPA", avg: "8.8 LPA", max: "17.8 LPA" },
  { track: "Applied AI & GenAI Systems", min: "8.0 LPA", avg: "10.4 LPA", max: "21.0 LPA" },
  { track: "Enterprise Data Analytics & BI", min: "5.5 LPA", avg: "7.2 LPA", max: "14.2 LPA" },
  { track: "Cyber Defense & SOC Operations", min: "6.0 LPA", avg: "7.6 LPA", max: "15.5 LPA" },
  { track: "Modern MERN Professional Web", min: "5.8 LPA", avg: "7.5 LPA", max: "15.0 LPA" },
];

export const HIRING_PARTNERS: HiringPartner[] = [
  { id: "1", name: "Zoho Corporation", category: "SaaS Unicorn", location: "Estancia & Guduvanchery", activeHiringRoles: ["Backend Engineer", "Frontend Developer"] },
  { id: "2", name: "Freshworks", category: "SaaS Unicorn", location: "Perungudi OMR, Chennai", activeHiringRoles: ["Full Stack Engineer", "DevOps Specialist"] },
  { id: "3", name: "Kaar Technologies", category: "Enterprise Consulting", location: "Anna Salai, Chennai", activeHiringRoles: ["Java Cloud Architect", "Microservices Engineer"] },
  { id: "4", name: "PayPal India", category: "Tier-1 Product GCC", location: "Sholinganallur, Chennai", activeHiringRoles: ["Fintech Backend Engineer", "Security Analyst"] },
  { id: "5", name: "Amazon GCC", category: "Tier-1 Product GCC", location: "Perungudi & BLR", activeHiringRoles: ["Cloud Support Associate", "Systems Engineer"] },
  { id: "6", name: "LatentView Analytics", category: "Enterprise Consulting", location: "Ramanujan IT City, Chennai", activeHiringRoles: ["PowerBI Analyst", "Data Engineer"] },
  { id: "7", name: "Chargebee", category: "SaaS Unicorn", location: "DLF Cybercity, Chennai", activeHiringRoles: ["MERN Stack Engineer", "API Specialist"] },
  { id: "8", name: "Virtusa", category: "Global IT Services", location: "Navalur OMR, Chennai", activeHiringRoles: ["Java Spring Boot Developer", "Cloud DevOps"] },
  { id: "9", name: "Kissflow", category: "SaaS Unicorn", location: "World Trade Center, Chennai", activeHiringRoles: ["Frontend Architect", "Node.js Developer"] },
  { id: "10", name: "TCS Digital", category: "Global IT Services", location: "Siruseri IT Park, Chennai", activeHiringRoles: ["Enterprise Java Associate", "Cloud Engineer"] },
  { id: "11", name: "Ford Mobility", category: "Tier-1 Product GCC", location: "Sholinganallur, Chennai", activeHiringRoles: ["Data Analytics Consultant", "Python Dev"] },
  { id: "12", name: "Wipro Cyber Defense", category: "Global IT Services", location: "Sholinganallur, Chennai", activeHiringRoles: ["SOC Analyst L1/L2", "Security Engineer"] },
];

export const PLACED_STUDENTS: PlacedStudent[] = [
  {
    id: "p1",
    name: "Anbarasan S.",
    company: "PayPal India",
    role: "Fintech Microservices Engineer",
    package: "₹14.5 LPA",
    previousBg: "B.E Mechanical (2023 Batch, Zero Prior Coding)",
    campus: "Avadi Campus Hub",
    quote: "Coming from a mechanical branch, online tutorials made no sense. At FIIT Avadi, my mentor Sundararajan sir sat with me daily to review my Spring Boot pull requests and Docker configs.",
    track: "Full Stack Java & Cloud",
  },
  {
    id: "p2",
    name: "Soundarya M.",
    company: "Freshworks",
    role: "Frontend Engineer (UI/UX)",
    package: "₹12.2 LPA",
    previousBg: "B.Sc Computer Science (Tier-3 College)",
    campus: "West Tambaram Campus",
    quote: "College theory couldn't prepare me for React 18 and Next.js App Router. The live capstone audits and mock whiteboard screenings gave me instant confidence during the Freshworks technical rounds.",
    track: "Modern MERN Stack",
  },
  {
    id: "p3",
    name: "Vigneshwaran K.",
    company: "Kaar Technologies",
    role: "Enterprise Java Architect",
    package: "₹8.5 LPA",
    previousBg: "B.E ECE (2024 Fresh Graduate)",
    campus: "Vellore Innovation Center",
    quote: "The physical workstations and dedicated 1-on-1 code reviews at the Vellore campus kept me disciplined. Kaar Tech's hiring panel specifically praised my Kafka event-driven project architecture.",
    track: "Full Stack Java & Cloud",
  },
  {
    id: "p4",
    name: "Harish Kumar",
    company: "Zoho Corporation",
    role: "Backend Systems Developer",
    package: "₹8.0 LPA",
    previousBg: "BCA (Career Gap of 1.5 Years)",
    campus: "Ambattur Industrial Hub",
    quote: "I had an education gap and doubted my chances. FIIT's placement cell not only refined my GitHub repo commits but directly routed my profile to Zoho's technical screening rounds.",
    track: "Software Engineering",
  },
  {
    id: "p5",
    name: "Priyadharshini R.",
    company: "LatentView Analytics",
    role: "PowerBI & Business Intelligence Specialist",
    package: "₹7.8 LPA",
    previousBg: "B.Com Information Systems",
    campus: "RedHills Technology Campus",
    quote: "I wanted a high-paying tech career without heavy algorithmic coding. The real retail datasets and complex DAX formulas I mastered at RedHills directly matched LatentView's client case study.",
    track: "Enterprise Data Analytics",
  },
  {
    id: "p6",
    name: "Dinesh B.",
    company: "Wipro Cyber Defense",
    role: "SOC Operations Analyst (Tier-1)",
    package: "₹7.2 LPA",
    previousBg: "B.Tech IT (Fresher)",
    campus: "Kelambakkam OMR Hub",
    quote: "Practicing live packet triage on physical Cisco racks and hunting SIEM alerts with Splunk in the lab was identical to what Wipro asked in my live scenario defense interview.",
    track: "Cyber Defense & SOC",
  },
];

export const IPP_PHASES: IPPPhase[] = [
  {
    phase: 1,
    title: "Production Capstone Code Rigor",
    duration: "Weeks 1-8",
    description: "Write clean, enterprise-compliant code. Weekly pull request audits, SonarQube static code analysis, and unit test suites that prove you can write production code on day one.",
    keyOutcomes: [
      "Zero code smell repository on GitHub",
      "Automated CI/CD workflows and Docker configurations",
      "Mentor code reviews matching Silicon Valley standards",
    ],
  },
  {
    phase: 2,
    title: "Data Structures & Algorithmic Drills",
    duration: "Weeks 9-11",
    description: "High-frequency interview problem patterns. Master two-pointer, sliding window, tree traversals, and dynamic programming without brute-force rote memorization.",
    keyOutcomes: [
      "120+ Curated LeetCode Medium problem patterns solved",
      "Time and space complexity verbal articulation",
      "Weekly timed algorithmic hackathons on HackerRank",
    ],
  },
  {
    phase: 3,
    title: "System Design & Architecture Defense",
    duration: "Weeks 12-14",
    description: "Learn how to defend distributed architectures on an actual whiteboard. High-level design (HLD) and low-level design (LLD) with database sharding and caching trade-offs.",
    keyOutcomes: [
      "Design distributed rate limiters, URL shorteners & pub/sub feeds",
      "Defend SQL vs NoSQL, CAP theorem, and ACID compliance",
      "Live whiteboard architectural presentations with mentors",
    ],
  },
  {
    phase: 4,
    title: "Mock Interview Booths & Direct HR Drives",
    duration: "Weeks 15-16",
    description: "Soundproof interview booth drills. Practice with active engineering leads from Zoho, Kaar Tech, and PayPal, followed by direct profile routing to 140+ hiring partners.",
    keyOutcomes: [
      "4 Live technical mock interviews with video telemetry feedback",
      "Executive behavioral STAR interview preparation",
      "Guaranteed interview scheduling across Chennai & Bengaluru",
    ],
  },
];
