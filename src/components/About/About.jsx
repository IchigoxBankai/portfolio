import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPaintBrush,
  FaBolt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { CheckCircle2, Copy, Check, Terminal } from "lucide-react";
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

const rawCodeString = `const nihar: Developer = {
  name: "Nihar Puthran",
  role: "Frontend Developer & UI Designer",
  location: "Mumbai, India",
  education: {
    field: "Computer Science",
    cgpa: 9.52, // Academic Excellence
  },
  mindset: "Every project is another step towards my Bankai.",
  status: "Available for high-impact work",
};`;

function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawCodeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="about" id="about">
      {/* Subtle crimson ambient glow */}
      <div className="about-ambient-glow" />

      <div className="container about-container">
        {/* ================= LEFT: DEVELOPER CODE CARD ================= */}
        <motion.div
          className="about-visual-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="dev-code-card">
            {/* macOS Window Titlebar */}
            <div className="code-card-header">
              <div className="traffic-lights">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="code-card-tab">
                <SiTypescript className="tab-ts-icon" />
                <span>nihar.bio.ts</span>
              </div>

              <button
                type="button"
                className="code-copy-btn"
                onClick={handleCopyCode}
                title="Copy snippet"
                aria-label="Copy developer code snippet"
              >
                {copied ? <Check size={14} className="copy-check" /> : <Copy size={14} />}
                <span className="copy-text">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body with Realistic Syntax Highlighting */}
            <div className="code-editor-body">
              <pre className="code-content">
                <code>
                  <div className="code-line">
                    <span className="line-num">01</span>
                    <span className="token-keyword">const </span>
                    <span className="token-variable">nihar</span>
                    <span className="token-punct">: </span>
                    <span className="token-type">Developer </span>
                    <span className="token-punct">= </span>
                    <span className="token-punct">&#123;</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">02</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">name</span>
                    <span className="token-punct">: </span>
                    <span className="token-string">"Nihar Puthran"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">03</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">role</span>
                    <span className="token-punct">: </span>
                    <span className="token-string">"Frontend Developer &amp; UI Designer"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">04</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">location</span>
                    <span className="token-punct">: </span>
                    <span className="token-string">"Mumbai, India 🇮🇳"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">05</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">education</span>
                    <span className="token-punct">: </span>
                    <span className="token-punct">&#123;</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">06</span>
                    <span className="token-indent">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="token-key">field</span>
                    <span className="token-punct">: </span>
                    <span className="token-string">"Computer Science"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line highlight-line">
                    <span className="line-num">07</span>
                    <span className="token-indent">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="token-key">cgpa</span>
                    <span className="token-punct">: </span>
                    <span className="token-number">9.52</span>
                    <span className="token-punct">, </span>
                    <span className="token-comment">// Academic Score</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">08</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-punct">&#125;,</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">09</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">experience</span>
                    <span className="token-punct">: </span>
                    <span className="token-string">"3+ Years Modern Web"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line highlight-bankai">
                    <span className="line-num">10</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">mindset</span>
                    <span className="token-punct">: </span>
                    <span className="token-string token-bankai">"Towards my Bankai ⚔️"</span>
                    <span className="token-punct">,</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">11</span>
                    <span className="token-indent">&nbsp;&nbsp;</span>
                    <span className="token-key">status</span>
                    <span className="token-punct">: </span>
                    <span className="token-string token-status">"Available for Work"</span>
                  </div>

                  <div className="code-line">
                    <span className="line-num">12</span>
                    <span className="token-punct">&#125;;</span>
                  </div>
                </code>
              </pre>
            </div>

            {/* Code Card Status Bar */}
            <div className="code-card-statusbar">
              <div className="status-item">
                <Terminal size={13} className="status-terminal-icon" />
                <span>TypeScript 5.4</span>
              </div>
              <div className="status-item status-live">
                <span className="status-dot-pulse" />
                <span>Ready to Build</span>
              </div>
            </div>
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