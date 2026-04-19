export const summary =
  "Software Engineer with 4+ years of experience building high-scale consumer platforms (8M+ DAU) and AI-powered content systems. Specialized in React/Next.js, JavaScript/TypeScript and Node.js with experience in LLM-driven personalization pipelines. Proven track record of improving performance, revenue and engineering velocity.";

export const aboutParagraphs = [
  "I'm a full-stack engineer with a strong focus on building scalable, high-performance web applications and polished user experiences. I enjoy working across the stack from crafting responsive, intuitive frontends to designing efficient backend systems, with an emphasis on clean architecture and maintainable code. I pay close attention to detail and aim to build products that are both functional and thoughtfully engineered.",
  "Currently, I work on high-scale consumer platforms, contributing to systems that handle millions of daily users and integrating AI-driven features to enhance personalization and engagement. My work spans frontend development, backend APIs and experimentation systems, where I focus on performance, reliability and measurable impact.",
  "Previously, I've built reusable component systems, data ingestion pipelines and full-stack features across different domains, improving development speed and system efficiency. These experiences have shaped how I approach problem-solving, balancing speed, scalability and long-term maintainability.",
  'Outside of work, I enjoy playing tennis, swimming and unwinding with FIFA on PlayStation. I also like experimenting with "vibe coding", building and exploring new ideas quickly, often at the intersection of engineering and creativity.',
] as const;

/** Technical skills by category (joined with · in the Skills section). */
export const skillsCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "React Testing Library",
      "GraphQL",
      "Material UI",
      "React Virtualization",
      "Jest/Enzyme",
      "Axios",
      "Redux/Redux Toolkit",
      "Context API",
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      "RESTful API Design",
      "Data Ingestion Pipelines",
      "API Orchestration",
      "Caching Strategies",
      "Schema Validation",
    ],
  },
  {
    category: "Domain Knowledge",
    items: [
      "Front-End Engineering",
      "Back-End Engineering",
      "Search engine optimization (SEO)",
      "Web Performance Optimization",
      "Security Best Practices",
      "CDNs",
      "Google Analytics",
      "Server/Client Side Rendering",
    ],
  },
  {
    category: "AI",
    items: [
      "RAG (Retrieval-Augmented Generation)",
      "LangChain/Graph",
      "Claude Skills",
      "Prompt Engineering",
      "Basic LLM Evaluation (prompt testing, response quality)",
      "Context Window Optimization",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub Copilot",
      "Claude CLI",
      "Jenkins",
      "Vercel",
      "VSCode",
      "Cursor",
      "Figma",
      "BitBucket",
      "Postman",
      "Webpack",
      "Babel",
      "ESLint",
      "SonarQube",
      "Snyk",
    ],
  },
] as const;

export const experience = [
  {
    dateRange: "March'25 — March'26",
    role: "Software Developer (Manager 1 level)",
    company: "Times Internet (TOI, ET Markets, TimesHealth, ET AI Bytz)",
    companyUrl: "https://timesinternet.in/",
    bullets: [
      "Optimized High-Traffic Platforms: Engineered overlay widgets (e.g., LIVE election widgets) for Times of India (8M+ daily users), ensuring seamless rendering and stability during peak traffic.",
      "Accelerated Cross-Platform Development: Built Economic Times Plan Page with reusable components integrated across Android/iOS webviews, reducing development effort and improving performance.",
      "Built Frontend Authentication SDK (FSDK): Developed a SDK enabling unified login across multiple platforms, integrating free trial and paid trial flows along with social authentication (Google via GIS, Apple & OTP Login) and handling communication for token exchange and user state management, reducing integration effort and ensuring consistent authentication experience.",
      "Delivered Times Health Plus MVP in 20 days: Leveraging AI-assisted development (Claude CLI & Cursor) to accelerate feature delivery to ~50% of expected sprint timelines while maintaining high code quality.",
      "Increased Revenue via Experimentation: Implemented A/B testing-driven UI optimizations, improving engagement, SEO performance and revenue.",
      "Built AI-Powered Content Features (ET AI Bytz): Developed personalization system for AI-generated daily newsletters, leveraging user preferences and real-time news ingestion to deliver curated summaries across business, tech, and policy enhancing content relevance and user engagement.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "A/B Testing",
      "SEO",
      "GIS",
      "WebViews",
      "AI Personalization",
    ],
  },
  {
    dateRange: "June'24 — March'25",
    role: "Senior Software Engineer",
    company: "Magic EdTech (Client: Pearson, Product: Pace)",
    companyUrl: "https://www.magicedtech.com/",
    bullets: [
      "Optimized Code and Performance: Revamped core algorithms using specialized data structures and react-virtualization, restructured code architecture, and eliminated 90% of redundancies and code smells.",
      "Accelerated Data Processing: Reduced processing time for an auto expanding search and highlight feature by 50%, significantly boosting system responsiveness and reducing page load time by 60%.",
      "Created UI Library: Engineered a robust, exportable UI library with 30+ reusable components following unit test driven development, enhancing UI consistency and expediting development across multiple projects.",
      "Built Backend Ingestion Pipeline: Designed and implemented a robust ingestion flow for CSV/XLSX files, parsing and mapping data dynamically to UI fields with schema validation and real-time error handling, improving data accuracy and reducing manual intervention.",
      "Improved System Design: Contributed to backend API design (Node.js/Express) for data export, transformation and delivery ensuring scalability and data fault tolerance.",
      "Mentored 5+ new engineers via onboarding, hands-on training and code reviews and boosting their code quality and productivity.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Virtualization",
      "Node.js",
      "Express",
      "Jest",
      "REST APIs",
      "CSV/XLSX",
      "Mentoring",
    ],
  },
  {
    dateRange: "January'22 — June'24",
    role: "Associate Software Engineer",
    company: "Magic EdTech (Client: Pearson, Product: Pace)",
    companyUrl: "https://www.magicedtech.com/",
    bullets: [
      "Developed a large-scale React + TypeScript application featuring a custom rich text editor and content-reporting tools for enterprise content workflows.",
      "Boosted Test Coverage: Increased test coverage to 85% for 5 critical modules using React Testing Library and Jest/Enzyme, reducing defects by 20% and enhancing overall code reliability.",
      "Improved Code Reliability: Solved 25% of backlog bugs through code refactoring and Unit-Test driven development, resulting in a green state for the application and smoother project development cycles.",
      "Developed Playlisting & Content Duplication Services: Engineered APIs to support copy-paste and playlisting workflows, enabling efficient duplication and persistence of structured content across multiple entities.",
      "Designed Data Transformation APIs: Built RESTful APIs for content normalization, mapping and synchronization between frontend editors and backend services.",
    ],
    skills: [
      "React",
      "TypeScript",
      "React Testing Library",
      "Jest",
      "Enzyme",
      "REST APIs",
      "Rich Text Editor",
    ],
  },
  {
    dateRange: "June'20 — August'20",
    role: "Software Engineer Intern",
    company: "BuziBrAIns",
    bullets: [
      "Solely developed a management software for event photography and videography businesses, awarded best intern and a ₹25,000 prize for exemplary performance.",
    ],
    skills: ["JavaScript", "Full-stack", "Product Development"],
  },
] as const;

export const featuredProject = {
  title: "LLMagnet",
  subtitle: "LLMagnet | Product Capabilities",
  url: "https://www.llmagnet.in/",
  githubUrl: "https://github.com/ritvik-sethi/LLMagnet",
  image: "/llmagnet-logo.svg",
  bullets: [
    "Generative Engine Optimization (GEO): Analyzes and adjusts content structures to maximize visibility and brand citations within LLM-generated responses (e.g., Perplexity, SearchGPT, and Gemini).",
    "AI Discovery Auditing: Performs automated, real-time evaluations of web content to identify semantic gaps that prevent AI models from accurately retrieving or citing the information.",
    "Performance Analytics Suite: Offers deep-dive analytics on how AI models interpret specific topics, allowing for data-driven adjustments to boost search rankings in the next generation of search.",
  ],
} as const;
