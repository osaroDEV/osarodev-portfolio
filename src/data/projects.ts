import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Dashboard",
    description:
      "A comprehensive AI-powered analytics dashboard with real-time data visualization and predictive insights.",
    category: "Web Application",
    tags: ["Next.js", "TypeScript", "AI/ML", "Charts"],
    image: "/projects/dashboard.jpg",
    color: "from-indigo-500 to-purple-600",
    slug: "ai-dashboard",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with seamless checkout, inventory management, and AI product recommendations.",
    category: "E-Commerce",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/projects/ecommerce.jpg",
    color: "from-emerald-500 to-teal-600",
    slug: "ecommerce-platform",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description:
      "Award-winning portfolio website featuring immersive 3D experiences and stunning animations.",
    category: "Portfolio",
    tags: ["Three.js", "GSAP", "WebGL", "Framer Motion"],
    image: "/projects/portfolio.jpg",
    color: "from-pink-500 to-rose-600",
    slug: "creative-portfolio",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description:
      "High-converting landing page with micro-interactions, smooth scrolling, and optimized performance.",
    category: "Marketing",
    tags: ["Next.js", "Tailwind", "Animations", "SEO"],
    image: "/projects/saas.jpg",
    color: "from-amber-500 to-orange-600",
    slug: "saas-landing-page",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Fintech Mobile App",
    description:
      "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
    category: "Web Application",
    tags: ["React Native", "TypeScript", "Firebase", "Stripe"],
    image: "/projects/fintech.jpg",
    color: "from-cyan-500 to-blue-600",
    slug: "fintech-mobile-app",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description:
      "Decentralized marketplace for digital collectibles with wallet integration and live auctions.",
    category: "Web Application",
    tags: ["Next.js", "Web3", "Solidity", "IPFS"],
    image: "/projects/nft.jpg",
    color: "from-violet-500 to-fuchsia-600",
    slug: "nft-marketplace",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 7,
    title: "Health & Fitness Tracker",
    description:
      "Comprehensive wellness platform with workout tracking, meal planning, and progress analytics.",
    category: "Web Application",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "/projects/fitness.jpg",
    color: "from-lime-500 to-green-600",
    slug: "health-fitness-tracker",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 8,
    title: "Restaurant Booking System",
    description:
      "Elegant reservation platform with table management, menu browsing, and real-time availability.",
    category: "E-Commerce",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/restaurant.jpg",
    color: "from-red-500 to-orange-600",
    slug: "restaurant-booking-system",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const categories = [
  "All",
  "Web Application",
  "E-Commerce",
  "Portfolio",
  "Marketing",
];
