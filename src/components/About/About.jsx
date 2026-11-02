import { motion } from "framer-motion";
import bgImg from "../../assets/images/about/bg1.png";
import {
  FaReact,
  FaJs,
  FaPaintBrush,
  FaBolt,
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { CheckCircle2, Sparkles } from "lucide-react";
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
  return (
    <section className="about" id="about">
      {/* Subtle crimson ambient glow */}
      <div className="about-ambient-glow" />

      <div className="container about-container">
        {/* ================= LEFT: VISUAL CENTERPIECE ================= */}
        <motion.div
          className="about-visual-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-artwork-card">
            {/* The dramatic red & black ink splash artwork */}
            <div
              className="about-artwork-bg"
              style={{ backgroundImage: `url(${bgImg})` }}
              role="img"
              aria-label="Artistic red and black splash artwork"
            />
            <div className="about-artwork-overlay" />

            {/* Floating Info Chip 1: Top-Right (Education) */}
            <motion.div
              className="about-floating-chip chip-education"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="chip-icon-box icon-gold">
                <FaGraduationCap />
              </div>
              <div className="chip-text-group">
                <span className="chip-sub">Academic Score</span>
                <span className="chip-main">9.52 CGPA</span>
              </div>
            </motion.div>

            {/* Floating Info Chip 2: Bottom-Left (Location) */}
            <motion.div
              className="about-floating-chip chip-location"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="chip-icon-box icon-red">
                <FaMapMarkerAlt />
              </div>
              <div className="chip-text-group">
                <span className="chip-sub">Location</span>
                <span className="chip-main">Mumbai, India</span>
              </div>
            </motion.div>

            {/* Floating Info Chip 3: Experience */}
            <motion.div
              className="about-floating-chip chip-experience"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="chip-icon-box icon-sparkle">
                <Sparkles size={14} />
              </div>
              <div className="chip-text-group">
                <span className="chip-sub">Experience</span>
                <span className="chip-main">3+ Years</span>
              </div>
            </motion.div>
          </div>

          {/* Signature Quote Callout */}
          <div className="about-quote-box">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              Every project is another step towards my Bankai.
            </p>
            <span className="quote-author">— Nihar Puthran</span>
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

          {/* Buttons */}
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