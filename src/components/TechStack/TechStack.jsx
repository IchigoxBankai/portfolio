import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiFirebase,
  SiVercel,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, title: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, title: "CSS3", color: "#1572B6" },
  { icon: <FaJsSquare />, title: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, title: "React", color: "#61DAFB" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", color: "#38BDF8" },
  { icon: <FaNodeJs />, title: "Node.js", color: "#5FA04E" },
  { icon: <SiExpress />, title: "Express.js", color: "#ffffff" },
  { icon: <SiMongodb />, title: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase />, title: "Firebase", color: "#FFCA28" },
  { icon: <FaGitAlt />, title: "Git", color: "#F05032" },
  { icon: <FaGithub />, title: "GitHub", color: "#ffffff" },
  { icon: <SiVercel />, title: "Vercel", color: "#ffffff" },
];

function TechStack() {
  return (
    <section className="tech" id="skills">
      <div className="container">

        <span className="section-tag-tech">
          MY SKILLS & TOOLS
        </span>

        <h2 className="tech-title">
          Technologies I Work With
        </h2>

        <div className="tech-grid">
          {skills.map((skill, index) => (
            <div
              className="tech-card"
              key={index}
              style={{
                "--brand-color": skill.color,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="tech-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;