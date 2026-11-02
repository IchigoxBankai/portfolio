import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Code2,
  Palette,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";
import {
  FaReact,
  FaGithub,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import heroImage from "../../assets/images/hero/av2.jpg";
import "./Hero.css";

// Staggered Entrance Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#5FA04E" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "GitHub", icon: <FaGithub />, color: "#111111" },
];

function Hero() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable mouse-driven 3D tilt on devices that support hover
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setCanHover(true);
    }
  }, []);

  // Framer Motion 3D Mouse Tilt State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e) => {
    if (!canHover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero-section" id="home">
      {/* Ambient Crimson Background Lighting */}
      <div className="ambient-glow ambient-glow-red" />
      <div className="ambient-glow ambient-glow-soft" />
      <div className="hero-subtle-grid" />

      <div className="container hero-layout">
        {/* ================= LEFT COLUMN ================= */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Greeting */}
          <motion.div className="hero-greeting-pill" variants={itemVariants}>
            <span className="greeting-dot" />
            <span className="greeting-text">HELLO, I'M NIHAR</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="hero-heading" variants={itemVariants}>
            <span className="heading-line">NIHAR</span>
            <span className="heading-line accent-text">PUTHRAN.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2 className="hero-role" variants={itemVariants}>
            Frontend Developer &amp; <span>UI Designer</span>
          </motion.h2>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            I design and build modern digital experiences, combining clean
            interfaces, thoughtful interactions and powerful web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="hero-btn primary-btn"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={18} className="btn-arrow" />
            </motion.a>

            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Nihar_Puthran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn secondary-btn"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download CV</span>
              <ArrowDown size={17} className="btn-download-icon" />
            </motion.a>
          </motion.div>

          {/* Technology Icons Stack */}
          <motion.div className="hero-tech-container" variants={itemVariants}>
            <span className="tech-label">CORE TECH</span>
            <div className="hero-tech-icons">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-icon-box"
                  whileHover={{ y: -5, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  title={tech.name}
                >
                  <span className="tech-icon" style={{ "--hover-color": tech.color }}>
                    {tech.icon}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN (ANIME VISUAL CARD) ================= */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Crimson Ambient Aura Behind Card */}
          <div className="card-ambient-aura" />

          {/* 3D Tilt Container */}
          <motion.div
            className="card-tilt-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1200,
              rotateX: canHover ? rotateX : 0,
              rotateY: canHover ? rotateY : 0,
            }}
          >
            {/* Gentle Floating Motion wrapper */}
            <motion.div
              className="card-float-wrapper"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Artwork Card */}
              <div className="portrait-card">
                <div className="card-glass-rim" />
                <img
                  src={heroImage}
                  alt="Nihar Puthran - Portrait Artwork"
                  className="portrait-image"
                  loading="eager"
                />

                {/* Inner subtle gradient vignette */}
                <div className="card-inner-shadow" />
              </div>

              {/* Floating UI Badge 1: Top-Right (CREATIVE MIND) */}
              <motion.div
                className="floating-chip chip-creative"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <div className="chip-icon-box icon-sparkle">
                  <Sparkles size={14} />
                </div>
                <span className="chip-text">CREATIVE MIND</span>
              </motion.div>

              {/* Floating UI Badge 2: Mid-Left (REACT.JS) */}
              <motion.div
                className="floating-chip chip-react"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <div className="chip-icon-box icon-code">
                  <Code2 size={14} />
                </div>
                <span className="chip-text">REACT.JS</span>
              </motion.div>

              {/* Floating UI Badge 3: Bottom-Right (UI / UX) */}
              <motion.div
                className="floating-chip chip-uiux"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0,
                }}
              >
                <div className="chip-icon-box icon-palette">
                  <Palette size={14} />
                </div>
                <span className="chip-text">UI / UX</span>
              </motion.div>

              {/* Status Indicator Badge: Bottom Center */}
              <motion.div
                className="availability-pill"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="status-ping-wrapper">
                  <span className="status-ping" />
                  <span className="status-dot" />
                </span>
                <span className="availability-text">Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;