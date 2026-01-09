"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "100%", label: "Success Rate" },
];

const expertise = [
  "AI-Powered Development",
  "Frontend Architecture",
  "React & Next.js",
  "Motion Design",
  "Performance Optimization",
  "UI/UX Implementation",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="section-heading">
            Turning <span className="text-gradient">ideas</span> into
            <br />
            digital <span className="text-gradient">reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative z-10">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                  <Image
                    src="/images/osarodev.jpeg"
                    alt="osaroDEV - AI Frontend Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay for aesthetic effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 border border-indigo-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 border border-purple-500/30 rounded-full"
              />
            </motion.div>

            {/* Background blur effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              I&apos;m a passionate{" "}
              <span className="text-white font-medium">
                AI Frontend Developer
              </span>{" "}
              with a love for creating beautiful, performant, and accessible web
              experiences. I specialize in building modern applications using
              cutting-edge technologies and AI-powered tools.
            </p>

            <p className="text-lg text-neutral-400 leading-relaxed mb-10">
              With a strong foundation in React, Next.js, and TypeScript, I
              bring designs to life with smooth animations and pixel-perfect
              attention to detail. I believe in writing clean, maintainable code
              that scales.
            </p>

            {/* Expertise Tags */}
            <div className="mb-12">
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
