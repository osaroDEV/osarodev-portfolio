"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectHeroImageProps {
  image: string;
}

export default function ProjectHeroImage({ image }: ProjectHeroImageProps) {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div className="relative aspect-16/10 rounded-2xl overflow-hidden glass-card group">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0" />
      </motion.div>
    </div>
  );
}
