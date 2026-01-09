"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  gradient: string;
  technologies: Technology[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "React",
        description:
          "Component-based library for building dynamic, interactive user interfaces with reusable UI elements.",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        description:
          "React framework enabling server-side rendering, static generation & optimized performance out of the box.",
        icon: "▲",
      },
      {
        name: "TypeScript",
        description:
          "Typed JavaScript superset that catches errors early and improves code maintainability at scale.",
        icon: "📘",
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
        icon: "🎨",
      },
    ],
  },
  {
    title: "Animation & 3D",
    gradient: "from-purple-500 to-pink-500",
    technologies: [
      {
        name: "Framer Motion",
        description:
          "Production-ready motion library for React that makes complex animations simple and declarative.",
        icon: "✨",
      },
      {
        name: "GSAP",
        description:
          "Professional-grade animation library for creating high-performance, timeline-based animations.",
        icon: "🎬",
      },
      {
        name: "Three.js",
        description:
          "JavaScript 3D library for creating immersive WebGL experiences and 3D visualizations in the browser.",
        icon: "🎮",
      },
    ],
  },
  {
    title: "Backend",
    gradient: "from-green-500 to-emerald-500",
    technologies: [
      {
        name: "Node.js",
        description:
          "JavaScript runtime enabling server-side development with a vast ecosystem of packages.",
        icon: "🟢",
      },
      {
        name: "Express",
        description:
          "Minimal and flexible Node.js framework for building robust APIs and web applications.",
        icon: "🚂",
      },
      {
        name: "MongoDB",
        description:
          "NoSQL database for flexible, scalable data storage with JSON-like document structures.",
        icon: "🍃",
      },
      {
        name: "PostgreSQL",
        description:
          "Powerful relational database for complex queries and data integrity requirements.",
        icon: "🐘",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    gradient: "from-orange-500 to-amber-500",
    technologies: [
      {
        name: "Git",
        description:
          "Version control system for tracking changes and collaborating on code with distributed teams.",
        icon: "📦",
      },
      {
        name: "Docker",
        description:
          "Containerization platform for consistent development environments and seamless deployments.",
        icon: "🐳",
      },
      {
        name: "Vercel",
        description:
          "Platform optimized for frontend frameworks with instant deployments and edge functions.",
        icon: "🔺",
      },
      {
        name: "Figma",
        description:
          "Collaborative design tool for creating UI/UX designs and developer handoff workflows.",
        icon: "🎨",
      },
    ],
  },
];

const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "Vercel",
  "AWS",
  "Figma",
  "AI Tools",
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="section relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4 block">
            My Skills
          </span>
          <h2 className="section-heading mb-6">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to
            build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-card p-6 md:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.gradient}`}
                />
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <ul className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.15 + techIndex * 0.08,
                    }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                      <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-white group-hover:text-gradient transition-all duration-300">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed mt-1">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-center text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">
            Technologies & Tools
          </h3>

          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            {/* Marquee */}
            <div className="marquee py-4">
              <div className="marquee-content">
                {[...marqueeItems, ...marqueeItems].map((tech, index) => (
                  <div
                    key={`${tech}-${index}`}
                    className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 whitespace-nowrap"
                  >
                    <span className="text-neutral-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "💡",
              title: "Problem Solver",
              description:
                "I love tackling complex challenges and finding elegant solutions through creative thinking and technical expertise.",
            },
            {
              icon: "🚀",
              title: "Performance First",
              description:
                "Every project is optimized for speed and efficiency, ensuring the best possible user experience.",
            },
            {
              icon: "🎯",
              title: "Detail Oriented",
              description:
                "Pixel-perfect implementation with meticulous attention to detail in every aspect of development.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
