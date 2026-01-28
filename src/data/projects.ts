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
    overview:
      "Michael Stevens Solicitors is a professional law firm website built to establish trust and accessibility in legal services. The project explores how modern web technologies can be leveraged to create intuitive, content-driven experiences for clients seeking legal expertise. The primary goal was to build a scalable, maintainable platform where legal information is presented clearly and professionally. The site integrates Sanity.io as a headless CMS, enabling the firm's team to manage content—including practice areas, team profiles, and legal updates—without requiring technical expertise. This separation of content from code ensures long-term sustainability and ease of updates. Performance and accessibility were fundamental to the design. The interface prioritizes readability and logical navigation, ensuring clients can quickly find relevant legal services and contact information. The modern stack—Next.js with TypeScript, Tailwind CSS, and Sanity CMS—provides both optimal page load speeds and SEO advantages, critical for a professional services website competing in the digital landscape. The content-first approach means every design decision serves the ultimate purpose: connecting clients with the legal help they need through clear, trustworthy communication.",
    challenge:
      "Building a professional legal services platform that balances trustworthiness with modern design sensibilities, while enabling non-technical staff to manage comprehensive legal content across multiple practice areas without compromising site performance or accessibility standards.",
    solution:
      "Implemented a headless CMS architecture using Sanity.io coupled with Next.js and TypeScript, creating a separation between content management and presentation. This approach allows legal professionals to update services, team information, and legal resources through an intuitive CMS interface while maintaining strict performance budgets and WCAG accessibility compliance through a carefully optimized frontend architecture.",
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
    overview:
      "Ritzy Healthcare is a patient-centric healthcare platform designed to bridge the gap between healthcare providers and individuals seeking compassionate home care services. The project demonstrates how modern web technologies can create accessible, trustworthy interfaces for sensitive healthcare interactions. The primary goal was to build a platform that prioritizes clarity and user confidence. Healthcare decisions are deeply personal, and the interface needed to communicate professionalism while maintaining warmth and approachability. The site features comprehensive service descriptions, transparent care options, and streamlined contact pathways that reduce friction for families seeking care solutions. Built with Next.js and TypeScript, the application emphasizes performance optimization to ensure fast load times even on slower connections—critical for users who may be accessing the site during stressful situations. The responsive design ensures seamless experiences across devices, recognizing that healthcare decisions often happen on mobile devices during hospital visits or while coordinating with family members. Accessibility was treated as non-negotiable. Every component follows WCAG guidelines, with careful attention to color contrast, keyboard navigation, and screen reader compatibility. The content architecture uses clear, jargon-free language that respects users' emotional state while providing the detailed information necessary to make informed care decisions.",
    challenge:
      "Creating a healthcare services platform that balances regulatory compliance requirements with emotional accessibility, while presenting complex care options in a way that empowers families to make confident decisions without overwhelming them with information or creating barriers to contact.",
    solution:
      "Developed a component-based architecture using React and Next.js that organizes services into digestible categories with clear visual hierarchies. Implemented strategic content chunking, progressive disclosure patterns, and multiple contact pathways to accommodate different user comfort levels and urgency states, while maintaining strict performance budgets and accessibility standards throughout the entire user journey.",
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
    overview:
      "Code Illustrated Studio is a comprehensive digital agency platform built to showcase modern web development capabilities while serving as a functional business website. The project demonstrates how design studios can effectively communicate their value proposition through carefully crafted digital experiences that balance aesthetics with performance.The primary goal was to create a platform that not only presents the studio's portfolio and services but also serves as a living example of the quality clients can expect. Every interaction, animation, and layout decision reinforces the studio's commitment to craftsmanship and attention to detail. The site architecture allows for easy content updates while maintaining design consistency across all pages.Built with Next.js and TypeScript, the platform prioritizes performance without sacrificing visual impact. The responsive design system ensures the portfolio looks exceptional across all devices, recognizing that potential clients often browse agencywebsites on mobile devices during their research phase. Strategic use of animations and micro-interactions creates memorable moments without compromising load times or accessibility.The content architecture follows a narrative structure that guides visitors from initial awareness through the studio's capabilities, past work, and ultimately to conversion. Clear calls-to-action are strategically placed throughout the journey, while testimonials and metrics build credibility. The platform demonstrates that business websites can be both functionally effective and visually distinctive, avoiding generic templates in favor of a unique digital identity that reflects the studio's design philosophy.",
    challenge:
      "Creating a digital agency portfolio that stands out in a saturated market while maintaining fast performance, clear communication of services, and seamless user experience across devices. The platform needed to serve multiple audiences—potential clients evaluating capabilities, existing clients accessing resources, and industry peers assessing design quality—without diluting its core message or compromising on technical excellence.",
    solution:
      "Developed a component-driven architecture using Next.js and TypeScript that separates content from presentation, enabling rapid updates while maintaining design consistency. Implemented performance optimization strategies including image optimization, code splitting, and strategic lazy loading to achieve sub-2-second load times. Created a modular design system with reusable components that scale across different content types, ensuring visual cohesion while allowing flexibility for future growth and content expansion.",
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
    overview:
      "Coding Tutor is an interactive learning platform designed to bridge the gap between theoretical knowledge and practical application in web development. The project explores how educational technology can make programming concepts more accessible through hands-on, guided learning experiences that adapt to individual learning paces.The primary goal was to create a platform where aspiring developers can learn HTML, CSS, and JavaScript through active practice rather than passive consumption. The interface prioritizes clarity and progressive disclosure, introducing concepts incrementally while providing immediate feedback on exercises. This approach reduces the cognitive load typically associated with learning to code and helps maintain learner motivation through visible progress.Built with Next.js and modern web technologies, the platform demonstrates scalable EdTech architecture where content can be easily updated and expanded. The application uses interactive code editors, real-time validation, and visual demonstrations to help learners understand how code translates to rendered output. Each lesson is structured to build upon previous knowledge, creating a coherent learning pathway from foundational concepts to more advanced techniques.Accessibility was central to the design, ensuring that learners of varying abilities and technical backgrounds can engage with the content effectively. The platform employs clear typography, logical information hierarchy, and keyboard navigation support. The content uses plain language explanations alongside technical terminology, helping learners gradually build their technical vocabulary while maintaining comprehension.",
    challenge:
      "Designing an educational platform that makes programming accessible to complete beginners while maintaining engagement through multiple learning sessions. The challenge included creating interactive coding exercises that provide meaningful feedback, structuring curriculum progression that prevents learners from feeling overwhelmed, and building a responsive interface that works equally well on desktop and mobile devices where learners might practice on-the-go.",
    solution:
      "Implemented an interactive learning environment using Next.js with integrated code editors that provide real-time syntax highlighting and validation. Created a modular curriculum structure with bite-sized lessons, practical exercises, and immediate visual feedback loops that demonstrate the relationship between code and output. Developed a responsive component architecture with Tailwind CSS that ensures consistent learning experiences across devices, while incorporating progress tracking and achievement systems to maintain learner motivation throughout their educational journey.",
  },
];

export const categories = [
  "All",
  "Web Application",
  "E-Commerce",
  "Portfolio",
  "Marketing",
];