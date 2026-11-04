import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ArrowDown,
  Zap,
} from "lucide-react";
import {
  FaReact,
  FaGithub,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

// Avatar options: av4.jpg is the anime headphones character matching Enji Kusnadi reference!
import luffyImg from "../../assets/images/hero/luffy.png";
import avHeadphones from "../../assets/images/logo/av4.jpg";
import avGlasses from "../../assets/images/hero/hero1.webp";
import avCasual from "../../assets/images/logo/avatar.webp";
import avAnimeBw from "../../assets/images/hero/av7.jpg";

import heroSmokeBg from "../../assets/images/hero/hero-bg.png";

import LuffyEyeTracker from "./LuffyEyeTracker";
import "./Hero.css";

const avatarOptions = [
  { img: luffyImg, name: "Monkey D. Luffy" },
  { img: avHeadphones, name: "Studio Mode (Headphones)" },
  { img: avGlasses, name: "Deep Focus (Glasses)" },
  { img: avCasual, name: "Casual Flow" },
  { img: avAnimeBw, name: "Bankai Mindset" },
];

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
  const [avatarIndex, setAvatarIndex] = useState(0);

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

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Parallax offsets for floating badges
  const chip1X = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const chip1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const chip2X = useTransform(smoothMouseX, [-0.5, 0.5], [12, -12]);
  const chip2Y = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

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

  const handleCycleAvatar = () => {
    setAvatarIndex((prev) => (prev + 1) % avatarOptions.length);
  };

  return (
    <section className="hero-section" id="home">
      {/* Subtle Anime Ink/Smoke Artistic Backdrop — localized & softly blended */}
      <div
        className="hero-smoke-backdrop"
        style={{ backgroundImage: `url(${heroSmokeBg})` }}
        aria-hidden="true"
      />

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
            <span className="greeting-text">HELLO, I'M</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="hero-heading" variants={itemVariants}>
            <span className="heading-line accent-text">NIHAR</span>
            <span className="heading-line">PUTHRAN<span className="heading-dot-red">.</span></span>
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
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="hero-tech-box"
                  whileHover={{ y: -3, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  title={tech.name}
                >
                  <span
                    className="hero-tech-glyph"
                    style={{ "--hover-color": tech.color }}
                  >
                    {tech.icon}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN: ANIMATED CHARACTER PORTAL (ENJI-INSPIRED) ================= */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dynamic Crimson Ambient Aura Behind Character */}
          <div className="character-ambient-aura" />

          {/* 3D Tilt Container */}
          <motion.div
            className="character-tilt-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1200,
              rotateX: canHover ? rotateX : 0,
              rotateY: canHover ? rotateY : 0,
            }}
          >
            {/* Gentle Continuous Floating Motion */}
            <motion.div
              className="character-float-wrapper"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Outer Portal & Character Illustration Frame */}
              <div
                className="character-portal"
                onClick={handleCycleAvatar}
                title="Click to cycle avatar"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCycleAvatar();
                  }
                }}
              >
                {/* Decorative Orbital Rings & Backdrop */}
                <div className="portal-ring portal-ring-outer" />
                <div className="portal-ring portal-ring-dashed" />
                <div className="portal-backdrop-circle" />

                {/* Character Image Mask */}
                <div className="character-frame">
                  {avatarIndex === 0 ? (
                    <LuffyEyeTracker />
                  ) : (
                    <motion.img
                      key={avatarIndex}
                      src={avatarOptions[avatarIndex].img}
                      alt={avatarOptions[avatarIndex].name}
                      className="character-image"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      loading="eager"
                    />
                  )}
                  <div className="character-glass-rim" />
                </div>
              </div>

              {/* Floating UI Chip 1: Top-Right (CREATIVE MIND) */}
              <motion.div
                className="character-chip chip-top-right"
                style={{
                  x: canHover ? chip1X : 0,
                  y: canHover ? chip1Y : 0,
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.06, y: -4 }}
              >
                <div className="chip-icon-box icon-sparkle">
                  <Sparkles size={13} />
                </div>
                <span className="chip-text">CREATIVE MIND</span>
              </motion.div>

              {/* Floating UI Chip 2: Mid-Left (REACT 19) */}
              <motion.div
                className="character-chip chip-mid-left"
                style={{
                  x: canHover ? chip2X : 0,
                  y: canHover ? chip2Y : 0,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                whileHover={{ scale: 1.06, y: -4 }}
              >
                <div className="chip-icon-box icon-react">
                  <FaReact size={14} style={{ color: "#61DAFB" }} />
                </div>
                <span className="chip-text">REACT.JS</span>
              </motion.div>

              {/* Floating UI Chip 3: Bottom-Right (UI / UX & MOTION) */}
              <motion.div
                className="character-chip chip-bottom-right"
                style={{
                  x: canHover ? chip1X : 0,
                  y: canHover ? chip1Y : 0,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0,
                }}
                whileHover={{ scale: 1.06, y: -4 }}
              >
                <div className="chip-icon-box icon-motion">
                  <Zap size={13} style={{ color: "#E50914" }} />
                </div>
                <span className="chip-text">UI / UX &amp; MOTION</span>
              </motion.div>

              {/* Status Indicator Badge: Bottom Center */}
              <motion.div
                className="character-status-pill"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.04, y: -2 }}
              >
                <span className="status-ping-wrapper">
                  <span className="status-ping" />
                  <span className="status-dot" />
                </span>
                <span className="status-text">Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;