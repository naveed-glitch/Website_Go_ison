export interface Insight {
  id: number;
  title: string;
  category: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export const insightsData: Insight[] = [
  {
    id: 1,
    title: "The Future of Remote Work: Trends and Insights",
    category: "Workplace",
    description: "Exploring the evolving landscape of remote work and its impact on productivity.",
    content: `
      The shift towards remote work has accelerated, with hybrid models becoming the norm. According to Buffer's 2023 State of Remote Work report, 68% of remote workers reported a very positive experience. However, challenges such as loneliness and collaboration remain prevalent. Companies are investing in tools and strategies to foster connection and maintain productivity in this new work environment.
    `,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Remote work/office
    date: "May 15, 2023",
    author: "Alex Johnson"
  },
  {
    id: 2,
    title: "Artificial Intelligence in Recruitment: Transforming Hiring Processes",
    category: "Technology",
    description: "How AI is revolutionizing recruitment by enhancing efficiency and reducing bias.",
    content: `
      AI is increasingly being integrated into recruitment processes, from resume screening to candidate matching. A 2025 report by BCG highlights that AI allows recruiters to cast a wider net, identifying diverse talent pools and streamlining hiring workflows. This shift not only improves efficiency but also promotes inclusivity in hiring practices.
    `,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // AI/technology
    date: "June 2, 2023",
    author: "Sarah Williams"
  },
  {
    id: 3,
    title: "Diversity Hiring Initiatives: Building Inclusive Workforces",
    category: "Inclusion",
    description: "Strategies for implementing effective diversity hiring programs.",
    content: `
      Companies are recognizing the value of diverse teams in driving innovation and performance. A 2023 Pew Research Center survey found that 56% of employed U.S. adults view increased focus on diversity, equity, and inclusion (DEI) at work as a positive development. Implementing structured interviews, diverse hiring panels, and partnerships with underrepresented communities are key strategies for fostering an inclusive workforce.
    `,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Diversity/inclusion
    date: "April 28, 2023",
    author: "Michael Chen"
  },
  {
    id: 4,
    title: "The Gig Economy: Opportunities and Challenges",
    category: "Economy",
    description: "Understanding the rise of freelance work and its implications for businesses.",
    content: `
      The gig economy continues to expand, offering flexibility for workers and access to specialized skills for employers. A 2024 World Economic Forum article notes that the gig economy is growing rapidly, with digital platforms connecting freelancers to short-term projects. While this model offers benefits, it also presents challenges in terms of worker rights and job security.
    `,
    imageUrl: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3023?auto=format&fit=crop&w=800&q=80", // Freelance/gig economy
    date: "May 30, 2023",
    author: "Emily Rodriguez"
  },
  {
    id: 5,
    title: "Skills-Based Hiring: Shifting Focus from Degrees to Capabilities",
    category: "Recruitment",
    description: "Adopting skills-first hiring practices to enhance talent acquisition.",
    content: `
      A growing number of employers are moving towards skills-based hiring, emphasizing practical abilities over formal education credentials. A 2025 report by Workday highlights that organizations embracing this approach see improved hiring outcomes and increased employee retention. This shift opens opportunities for a broader range of candidates and promotes a more inclusive hiring process.
    `,
    imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Skills/assessment
    date: "June 10, 2023",
    author: "David Kim"
  },
  {
    id: 6,
    title: "Employee Wellbeing Programs: Investing in Mental Health",
    category: "Wellness",
    description: "The business case for supporting employee mental health and wellbeing.",
    content: `
      Comprehensive wellbeing programs are becoming essential for organizations aiming to enhance productivity and reduce turnover. A 2023 article from the Times of India discusses how modern workplaces are transforming employee wellbeing through holistic strategies, including mental health support, flexible work arrangements, and wellness initiatives. Companies investing in these programs report higher employee satisfaction and engagement.
    `,
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=800&q=80", // Wellbeing/mental health
    date: "May 22, 2023",
    author: "Jennifer Lopez"
  }
];

