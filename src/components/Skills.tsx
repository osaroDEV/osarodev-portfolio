"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: "📘" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", icon: "🎨" },
  { name: "Framer Motion", level: 88, category: "Animation", icon: "✨" },
  { name: "Node.js", level: 80, category: "Backend", icon: "🟢" },
  { name: "AI/ML Integration", level: 85, category: "AI", icon: "🤖" },
  { name: "Three.js / WebGL", level: 75, category: "3D", icon: "🎮" },
  { name: "Git / DevOps", level: 85, category: "Tools", icon: "🔧" },
];

const technologies = [
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
            Technologies I <span className="text-gradient">master</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to
            build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gradient">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                />
              </div>
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
                {[...technologies, ...technologies].map((tech, index) => (
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
