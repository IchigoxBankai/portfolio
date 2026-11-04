import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPaintBrush,
  FaBolt,
  FaArrowRight,
  FaDownload,
  FaGithub,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { CheckCircle2, ExternalLink, Lock, Gamepad2 } from "lucide-react";
import monsterImg from "../../assets/images/projects/monster.png";
import githubUniverseImg from "../../assets/images/projects/GitHubUniverse.png";
import gameVaultImg from "../../assets/images/projects/GameVault.png";
import "./About.css";

const skills = [
  { icon: <FaReact />, text: "React", color: "#61DAFB" },
  { icon: <FaJs />, text: "JavaScript", color: "#F7DF1E" },
  { icon: <FaPaintBrush />, text: "UI / UX Design", color: "#E50914" },
  { icon: <FaBolt />, text: "Framer Motion", color: "#FF0055" },
  { icon: <SiTailwindcss />, text: "Tailwind CSS", color: "#38BDF8" },
  { icon: <SiFirebase />, text: "Firebase", color: "#FFCA28" },
];

const pillars = [
  "Clean, Scalable Architecture",
  "Modern Motion & Micro-interactions",
  "High-Performance & Responsive UI",
];

function About() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setCanHover(true);
    }
  }, []);

  // Framer Motion 3D Mouse Parallax & Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotation for the main workspace browser window
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Gentle layered parallax shifts for overlapping cards & badges
  const card1ParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const card1ParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  const card2ParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const card2ParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);

  const badgeParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const badgeParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

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
    <section className="about" id="about">
      {/* Subtle crimson ambient glow */}
      <div className="about-ambient-glow" />

      <div className="container about-container">
        {/* ================= LEFT: DIGITAL WORKSPACE SHOWCASE ================= */}
        <motion.div
          className="about-visual-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="workspace-showcase"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Soft Red Ambient Glow behind composition */}
            <div className="workspace-ambient-glow" aria-hidden="true" />

            {/* Main Browser Window (Monster Energy) */}
            <motion.div
              className="workspace-browser-window"
              style={{
                rotateX: canHover ? rotateX : 0,
                rotateY: canHover ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Minimal Browser Toolbar */}
              <div className="browser-toolbar">
                <div className="browser-traffic-lights" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="browser-address-bar">
                  <Lock size={11} className="address-lock-icon" />
                  <span className="address-url">monster-energy-website.vercel.app</span>
                </div>

                <a
                  href="https://monster-energy-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-open-btn"
                  title="Open live project"
                  aria-label="Open Monster Energy live website"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Project Preview Image */}
              <div className="browser-preview-viewport">
                <img
                  src={monsterImg}
                  alt="Monster Energy Website Preview"
                  className="browser-preview-img"
                  loading="lazy"
                />

                {/* Subtle Project Info Bar at bottom of browser window */}
                <div className="browser-project-meta">
                  <div className="meta-info">
                    <span className="meta-badge-live">
                      <span className="live-ping" />
                      Live Project
                    </span>
                    <span className="meta-title">Monster Energy</span>
                  </div>
                  <span className="meta-tag">Featured Web</span>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Project Card 1: GitHub Universe */}
            <motion.div
              className="workspace-float-card card-github-universe"
              style={{
                x: canHover ? card1ParallaxX : 0,
                y: canHover ? card1ParallaxY : 0,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <a
                href="https://ichigoxbankai.github.io/GithubUniverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-card-link"
                title="View GitHub Universe"
              >
                <div className="float-card-thumb">
                  <img
                    src={githubUniverseImg}
                    alt="GitHub Universe Project"
                    loading="lazy"
                  />
                  <span className="float-card-icon-badge" aria-label="GitHub Project">
                    <FaGithub size={13} />
                  </span>
                </div>

                <div className="float-card-body">
                  <div className="float-card-header">
                    <span className="float-card-name">GithubUniverse</span>
                    <ExternalLink size={11} className="float-card-ext" />
                  </div>
                  <div className="float-card-tags">
                    <span className="mini-badge">3D Solar System</span>
                    <span className="mini-badge-tech">Three.js</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Overlapping Project Card 2: GameVault */}
            <motion.div
              className="workspace-float-card card-gamevault"
              style={{
                x: canHover ? card2ParallaxX : 0,
                y: canHover ? card2ParallaxY : 0,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <a
                href="https://game-vault-henna-pi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-card-link"
                title="View GameVault"
              >
                <div className="float-card-thumb">
                  <img
                    src={gameVaultImg}
                    alt="GameVault Project"
                    loading="lazy"
                  />
                  <span className="float-card-icon-badge badge-crimson" aria-label="Game Project">
                    <Gamepad2 size={13} />
                  </span>
                </div>

                <div className="float-card-body">
                  <div className="float-card-header">
                    <span className="float-card-name">GameVault</span>
                    <ExternalLink size={11} className="float-card-ext" />
                  </div>
                  <div className="float-card-tags">
                    <span className="mini-badge">Games Hub</span>
                    <span className="mini-badge-tech">React • Flutter</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Floating Tech Badge 1: React */}
            <motion.div
              className="floating-tech-badge-wrapper badge-pos-react"
              style={{
                x: canHover ? badgeParallaxX : 0,
                y: canHover ? badgeParallaxY : 0,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.div
                className="floating-tech-badge"
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                <FaReact className="tech-badge-icon" style={{ color: "#61DAFB" }} />
                <span className="tech-badge-name">React</span>
              </motion.div>
            </motion.div>

            {/* Floating Tech Badge 2: JavaScript */}
            <motion.div
              className="floating-tech-badge-wrapper badge-pos-js"
              style={{
                x: canHover ? card1ParallaxX : 0,
                y: canHover ? card1ParallaxY : 0,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <motion.div
                className="floating-tech-badge"
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 5.1, ease: "easeInOut" }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                <FaJs className="tech-badge-icon" style={{ color: "#F7DF1E" }} />
                <span className="tech-badge-name">JavaScript</span>
              </motion.div>
            </motion.div>

            {/* Floating Tech Badge 3: Firebase */}
            <motion.div
              className="floating-tech-badge-wrapper badge-pos-firebase"
              style={{
                x: canHover ? card2ParallaxX : 0,
                y: canHover ? card2ParallaxY : 0,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <motion.div
                className="floating-tech-badge"
                animate={{ y: [-3, 4, -3] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                <SiFirebase className="tech-badge-icon" style={{ color: "#FFCA28" }} />
                <span className="tech-badge-name">Firebase</span>
              </motion.div>
            </motion.div>

            {/* Decorative Red Geometric Elements */}
            <motion.div
              className="decorative-red-shape shape-diamond"
              animate={{ rotate: [0, 180, 360], y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              aria-hidden="true"
            >
              <span className="diamond-inner" />
            </motion.div>

            <motion.div
              className="decorative-red-shape shape-cross"
              animate={{ scale: [1, 1.2, 1], opacity: [0.65, 1, 0.65] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              aria-hidden="true"
            >
              +
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT: EDITORIAL CONTENT ================= */}
        <motion.div
          className="about-content-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about-eyebrow">ABOUT ME</span>

          <h2 className="about-title">
            Passionate Frontend Developer <br />
            <span>&amp; UI Designer</span>
          </h2>

          <p className="about-description">
            I build fast, modern and visually engaging web experiences using
            React, Firebase and the latest frontend technologies. My goal is to
            transform ideas into elegant, responsive and high-performance digital
            products that users genuinely enjoy.
          </p>

          {/* Key Value Pillars */}
          <div className="about-pillars">
            {pillars.map((pillar, index) => (
              <div key={index} className="about-pillar-item">
                <CheckCircle2 size={18} className="pillar-check-icon" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* Skills Grid / Pills */}
          <div className="about-skills-wrapper">
            <span className="about-skills-label">TECH EXPERTISE</span>
            <div className="skill-pills">
              {skills.map((skill, index) => (
                <div
                  className="skill-pill"
                  key={index}
                  style={{ "--pill-color": skill.color }}
                >
                  <span className="skill-pill-icon">{skill.icon}</span>
                  <span className="skill-pill-text">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="about-actions">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Nihar_Puthran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn primary-btn"
            >
              <FaDownload className="btn-icon" />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="about-btn secondary-btn">
              <span>Let's Connect</span>
              <FaArrowRight className="btn-icon-arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;