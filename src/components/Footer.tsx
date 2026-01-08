"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "🐙" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
  { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
  { name: "Dribbble", href: "https://dribbble.com", icon: "🏀" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">osaro</span>
                <span className="text-gradient">DEV</span>
              </span>
            </Link>
            <p className="text-neutral-400 max-w-xs">
              Crafting exceptional digital experiences with AI-powered frontend
              development.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors line-decoration"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:border-indigo-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} osaroDEV. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            Designed & Built with 💜 by osaroDEV
          </p>
        </div>
      </div>
    </footer>
  );
}
