export type ResourceType = 'ARTICLE' | 'SIGN' | 'NEWS' | 'REPORT' | 'HOME';

interface ResourceItem {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
  link: string;
  linkText: string;
  writtenBy: string;
}

const resourcesData: ResourceItem[] = [
  {
    id: 1,
    type: "ARTICLE",
    title: "Business Leaders Risk Sleepwalking Towards AI Misuse",
    description:
      "An in-depth analysis of the potential pitfalls in AI adoption without proper oversight, highlighting the importance of transparency and ethical considerations.",
    link: "https://www.reuters.com/sustainability/society-equity/comment-business-leaders-risk-sleepwalking-towards-ai-misuse-2024-11-19/",
    linkText: "VIEW ARTICLE",
    writtenBy: "Thomson Reuters Foundation",
  },
  {
    id: 2,
    type: "ARTICLE",
    title: "The Future of Ethical AI Practices",
    description:
      "Discover insights and resources on building ethical AI systems, fostering responsible innovation, and understanding global AI standards.",
    link: "https://www.ethicalaihub.org/",
    linkText: "VIEW HOME",
    writtenBy: "Ethical AI Hub",
  },
  {
    id: 3,
    type: "SIGN",
    title: "Pledge for AI Transparency",
    description:
      "Join a global initiative to ensure transparency, fairness, and accountability in AI systems across industries and applications.",
    link: "https://www.ai-transparency.org/pledge",
    linkText: "VIEW SIGN",
    writtenBy: "AI Transparency Initiative",
  },
  {
    id: 4,
    type: "NEWS",
    title: "AI and the Job Market: What the Future Holds",
    description:
      "The latest report highlights how advancements in AI are reshaping job roles, skill demands, and opportunities in the global workforce.",
    link: "https://www.technewsdaily.com/ai-job-market-impact-2025",
    linkText: "VIEW NEWS",
    writtenBy: "Tech News Daily",
  },
  {
    id: 5,
    type: "REPORT",
    title: "State of AI in 2025: Challenges and Opportunities",
    description:
      "A comprehensive report exploring the current state of AI, its ethical challenges, and actionable opportunities for governments and enterprises.",
    link: "https://www.aigovernance.com/state-of-ai-report-2025",
    linkText: "VIEW REPORT",
    writtenBy: "AI Governance Council",
  },
  {
    id: 6,
    type: "REPORT",
    title: "How AI Can Help Improve Workplace Diversity",
    description:
      "Learn how AI-powered tools are promoting diversity in hiring, reducing bias, and enabling organizations to build more inclusive teams.",
    link: "https://www.inclusiveworkplace.ai/blog/ai-diversity-solutions",
    linkText: "VIEW BLOG",
    writtenBy: "Inclusive Workplace AI",
  },
  {
    id: 7,
    type: "ARTICLE",
    title: "Regulating AI: What Policymakers Need to Know",
    description:
      "An overview of international regulatory approaches to AI, highlighting best practices for responsible governance.",
    link: "https://www.policyai.org/articles/regulating-ai",
    linkText: "VIEW ARTICLE",
    writtenBy: "PolicyAI",
  },
  {
    id: 8,
    type: "SIGN",
    title: "Support Open AI Research Standards",
    description:
      "Add your name to the global call for open and transparent research practices in AI development.",
    link: "https://www.openstandards.ai/pledge",
    linkText: "SIGN PLEDGE",
    writtenBy: "Open Standards AI",
  },
  {
    id: 9,
    type: "NEWS",
    title: "New AI Guidelines Proposed at UN Tech Summit",
    description:
      "Global leaders convened to discuss ethical frameworks for AI and proposed a new international charter.",
    link: "https://www.untechsummit.org/news/ai-guidelines",
    linkText: "VIEW NEWS",
    writtenBy: "Global Tech Monitor",
  },
  {
    id: 10,
    type: "REPORT",
    title: "AI Ethics Benchmark 2025",
    description:
      "Annual benchmarking report comparing AI ethics adoption across 50 major corporations worldwide.",
    link: "https://www.aiethicsreport.com/2025-benchmark",
    linkText: "DOWNLOAD REPORT",
    writtenBy: "AI Ethics Research Lab",
  },
  {
    id: 11,
    type: "ARTICLE",
    title: "The Role of Human Oversight in Autonomous Systems",
    description:
      "Why human-in-the-loop design remains crucial as AI continues to automate complex decision-making processes.",
    link: "https://www.automationwatch.org/oversight-in-autonomy",
    linkText: "READ ARTICLE",
    writtenBy: "Automation Watch",
  },
  {
    id: 12,
    type: "NEWS",
    title: "EU Approves First Comprehensive AI Regulation",
    description:
      "The European Union sets a precedent by passing a sweeping law that governs the development and deployment of AI technologies.",
    link: "https://www.euractiv.com/section/digital/news/eu-ai-act-approved/",
    linkText: "READ NEWS",
    writtenBy: "Euractiv",
  },
];

export default resourcesData;
