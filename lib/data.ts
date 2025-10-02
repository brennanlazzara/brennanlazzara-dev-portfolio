export interface Project {
  slug: string
  title: string
  role: string
  period: string
  stack: string[]
  summary: string
  impact?: string[]
  links?: {
    live?: string
    github?: string
    case_study?: string
  }
  hero?: string
  images?: string[]
  description?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  featured?: boolean
  category?: "work" | "personal"
}

export const projects: Project[] = [
  {
    slug: "voceviva",
    title: "VoceViva — Italian Learning App",
    role: "Founder & Full-Stack Engineer",
    period: "2024–2025",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL"],
    summary:
      "A focused language-learning app with clean UX and verb workflows (presente, passato prossimo, futuro).",
    impact: [
      "Migrated legacy React/Chakra to Next.js App Router; TTI improved ≈35%",
      "Seeded 89 verbs (regular + irregular) with typed data model",
      "Deployed CI/CD on Vercel with preview envs per PR",
    ],
    links: {
      github: "https://github.com/brennanlazzara/voce-viva",
      case_study: "voceviva",
    },
    featured: true,
    category: "work",
    description:
      "Goal: faster iteration and better DX for shipping language exercises. Re-architected routes, added typed data layer, and tuned performance.",
    challenges: [
      "Next.js migration (routing, layouts, server components)",
      "Typed seed model across multiple tenses",
      "Keeping UI minimal while supporting future lessons",
    ],
    solutions: [
      "App Router + colocation of route-specific components",
      "Strict TypeScript interfaces in lib/data.ts",
      "Tailwind + shadcn for fast, consistent UI primitives",
    ],
    results: [
      "Core flows stable; easier to add new tenses",
      "Cleaner SSR/SEO surface for public pages",
    ],
    hero: "/images/voceviva-hero.png",
    images: ["/images/voceviva-1.png", "/images/voceviva-2.png", "/images/voceviva-3.png", "/images/voceviva-4.png"],
  },
  {
    slug: "pdp-social-proof-dynamic-yield",
    title: "PDP Social Proof Campaign — Dynamic Yield",
    role: "Senior Frontend Engineer",
    period: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Dynamic Yield", "React"],
    summary:
      "Implemented social proof messaging on Product Detail Pages using Dynamic Yield, reducing layout shift and improving conversion metrics.",
    impact: [
      "Reduced cumulative layout shift (CLS) by 40% during campaign load",
      "Implemented SSR hooks for clean campaign-off state with zero regressions",
      "Delivered pixel-perfect UI across mobile, tablet, and desktop breakpoints",
      "Improved crawlability and SEO by maintaining semantic HTML structure",
    ],
    links: {
      case_study: "/work/pdp-social-proof-dynamic-yield",
    },
    featured: true,
    category: "work",
    description:
      "Led the implementation of dynamic social proof messaging on high-traffic PDPs to increase customer trust and drive conversions through real-time inventory and popularity signals.",
    challenges: [
      "Preventing layout shift during async campaign load",
      "Ensuring graceful degradation when campaigns are disabled",
      "Maintaining consistent UI across three responsive breakpoints",
      "Preserving SEO value without blocking initial render",
    ],
    solutions: [
      "Pre-allocated space in layout with skeleton states",
      "Server-side rendering hooks for campaign-off fallback content",
      "CSS Grid with dynamic content areas for responsive consistency",
      "Structured data implementation to preserve semantic HTML",
    ],
    results: [
      "Zero layout shift post-implementation (CLS improvement from 0.15 to <0.05)",
      "Maintained 100% Lighthouse accessibility score",
      "Campaign A/B test showed 8% lift in add-to-cart rate",
    ],
    hero: "/images/pdp-social-proof-hero.png",
    images: ["/images/pdp-social-proof-1.png", "/images/pdp-social-proof-2.png"],
  },
  {
    slug: "pdp-oos-state-and-cursor",
    title: "PDP Out-of-Stock Handling & UX",
    role: "Senior Frontend Engineer",
    period: "2024",
    stack: ["Next.js", "TypeScript", "Shopify Commerce API", "React", "Tailwind CSS"],
    summary:
      "Replaced 404 errors with proper OOS state on PDPs, fixed cursor semantics, and improved crawlability for out-of-stock products.",
    impact: [
      "Eliminated 10K+ monthly 404 errors for temporarily OOS products",
      "Improved SEO by preserving canonical URLs and product metadata",
      "Fixed cursor pointer semantics on disabled CTAs for better UX",
      "Increased re-stock notification sign-ups by 60%",
    ],
    links: {
      case_study: "/work/pdp-oos-state-and-cursor",
    },
    featured: true,
    category: "work",
    description:
      "Redesigned out-of-stock product experience on PDPs to preserve SEO value, improve user experience, and capture re-stock interest instead of showing generic 404 pages.",
    challenges: [
      "Handling OOS products without breaking SEO or serving 404s",
      "Fixing incorrect cursor semantics on disabled add-to-cart buttons",
      "Maintaining product visibility for inventory that may return",
      "Providing clear user feedback and capture re-stock interest",
    ],
    solutions: [
      "Server-side OOS detection with proper HTTP 200 response",
      "CSS cursor semantics fix (not-allowed on disabled CTAs)",
      "Preserved structured data and canonical URLs for search indexing",
      "Implemented visible 'Notify When Available' CTA with validation",
    ],
    results: [
      "10K+ fewer 404 errors per month; improved crawl budget efficiency",
      "Re-stock notification list grew by 3,500+ subscribers in first quarter",
      "Maintained product discoverability in search results for seasonal items",
    ],
    hero: "/images/pdp-oos-hero.png",
    images: ["/images/pdp-oos-1.png", "/images/pdp-oos-2.png"],
  },
  {
    slug: "enterprise-dashboard",
    title: "Enterprise Analytics Dashboard",
    role: "Lead Frontend Developer",
    period: "2024 - Present",
    stack: ["React", "TypeScript", "Next.js", "TailwindCSS", "Recharts", "PostgreSQL"],
    summary:
      "Built a comprehensive analytics dashboard for enterprise clients, handling millions of data points with real-time updates.",
    impact: [
      "Reduced data processing time by 60% through optimized React rendering",
      "Improved user engagement by 45% with intuitive data visualizations",
      "Scaled to support 10,000+ concurrent users",
    ],
    links: {
      live: "https://demo.example.com",
      case_study: "/work/enterprise-dashboard",
    },
    hero: "/images/enterprise-dashboard-hero.jpg",
    images: [
      "/images/enterprise-dashboard-1.jpg",
      "/images/enterprise-dashboard-2.jpg",
      "/images/enterprise-dashboard-3.jpg",
    ],
    description:
      "A full-featured analytics platform that provides real-time insights into business metrics, customer behavior, and operational efficiency.",
    challenges: [
      "Handling large datasets without compromising performance",
      "Creating intuitive visualizations for complex data",
      "Ensuring real-time updates across multiple users",
    ],
    solutions: [
      "Implemented virtual scrolling and data pagination",
      "Used React Query for efficient data caching and synchronization",
      "Built custom chart components optimized for large datasets",
    ],
    results: [
      "Successfully launched to 50+ enterprise clients",
      "Achieved 99.9% uptime over 6 months",
      "Received 4.8/5 average user satisfaction rating",
    ],
    featured: true,
    category: "work",
  },
  {
    slug: "saas-platform",
    title: "SaaS Project Management Platform",
    role: "Full Stack Developer",
    period: "2023 - 2024",
    stack: ["Next.js", "TypeScript", "Prisma", "tRPC", "Stripe", "AWS"],
    summary:
      "Developed a project management SaaS platform with team collaboration features, file sharing, and integrated billing.",
    impact: [
      "Onboarded 500+ teams in first 3 months",
      "Processed $100K+ in subscription revenue",
      "Achieved 92% customer retention rate",
    ],
    links: {
      live: "https://example-saas.com",
      case_study: "/work/saas-platform",
    },
    hero: "/images/saas-platform-hero.jpg",
    featured: true,
    category: "work",
  },
  {
    slug: "open-source-ui-library",
    title: "Open Source UI Component Library",
    role: "Creator & Maintainer",
    period: "2023 - Present",
    stack: ["React", "TypeScript", "Storybook", "Vite", "CSS-in-JS"],
    summary:
      "Created and maintain an accessible, customizable UI component library with 50+ components.",
    impact: ["1,000+ GitHub stars", "5,000+ weekly npm downloads", "20+ open source contributors"],
    links: {
      github: "https://github.com/yourusername/ui-library",
      live: "https://ui-library-docs.example.com",
    },
    hero: "/images/ui-library-hero.jpg",
    featured: true,
    category: "personal",
  },
  {
    slug: "mobile-app-redesign",
    title: "Mobile App Redesign",
    role: "Frontend Lead",
    period: "2023",
    stack: ["React Native", "TypeScript", "Redux", "Firebase"],
    summary:
      "Led the complete redesign of a mobile app used by 100K+ users, focusing on performance and UX improvements.",
    impact: [
      "Improved app performance by 70%",
      "Increased user retention by 35%",
      "Reduced crash rate from 3% to 0.2%",
    ],
    links: {
      case_study: "/work/mobile-app-redesign",
    },
    hero: "/images/mobile-app-hero.jpg",
    category: "work",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator Tool",
    role: "Solo Developer",
    period: "2024",
    stack: ["Next.js", "OpenAI API", "TypeScript", "Vercel", "Supabase"],
    summary: "Built an AI-powered content generation tool for marketers and content creators.",
    impact: [
      "Generated 10,000+ pieces of content",
      "Saved users an average of 5 hours per week",
      "Achieved $5K MRR within 2 months",
    ],
    links: {
      live: "https://ai-content.example.com",
      github: "https://github.com/yourusername/ai-content",
    },
    hero: "/images/ai-content-hero.jpg",
    category: "personal",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    role: "Frontend Developer",
    period: "2022 - 2023",
    stack: ["Next.js", "TypeScript", "Shopify API", "TailwindCSS", "Framer Motion"],
    summary:
      "Developed a custom e-commerce frontend with advanced product filtering, cart management, and checkout flow.",
    impact: [
      "Increased conversion rate by 28%",
      "Reduced cart abandonment by 40%",
      "Improved page load speed by 55%",
    ],
    links: {
      live: "https://shop.example.com",
    },
    hero: "/images/ecommerce-hero.jpg",
    category: "work",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const workProjects = projects.filter((p) => p.category === "work")
export const personalProjects = projects.filter((p) => p.category === "personal")

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
