import { Project } from "@/types/project";

export const projects: Project[] = [
    {
    id: 1,
    title: "Michael Stevens Solicitors",
    description:
      "A comprehensive digital transformation for a leading legal firm, focusing on trust, clarity, and ease of access to legal resources.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    image: "/projects/michael-stevens-solicitors/hero.png",
    color: "from-indigo-500 to-purple-600",
    slug: "michael-stevens-solicitors",
    githubUrl: "https://github.com/osaroDEV/mss",
    liveUrl: "https://michaelstevenssolicitors.com",
  },
  {
    id: 2,
    title: "Ritzy Healthcare",
    description:
      "A patient-centric healthcare management system designed to streamline operations and improve patient outcomes.",
    category: "Health Systems",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/projects/ritzy-healthcare/hero.png",
    color: "from-emerald-500 to-teal-600",
    slug: "ritzy-healthcare",
    githubUrl: "https://github.com/osaroDEV/r-healthcare",
    liveUrl: "https://r-healthcare.vercel.app",
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
    title: "Coding Tutor",
    description:
      "An interactive learning platform designed to bridge the gap between theory and practice in software engineering.",
    category: "EdTech Platform",
    tags: ["Next.js", "Tailwind", "Animations", "LMS Integration"],
    image: "/projects/coding-tutor/hero.png",
    color: "from-amber-500 to-orange-600",
    slug: "coding-tutor",
    githubUrl: "https://github.com/osaroDEV/html-tutor-app",
    liveUrl: "https://code-illustrated.vercel.app",
  },
];

export const categories = [
  "All",
  "Web Application",
  "E-Commerce",
  "Portfolio",
  "Marketing",
];
