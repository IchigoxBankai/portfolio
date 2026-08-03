import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFirebase,
  SiVercel,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, title: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, title: "CSS3" },
  { icon: <FaJsSquare color="#F7DF1E" />, title: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, title: "React" },
  { icon: <SiFirebase color="#FFCA28" />, title: "Firebase" },
  { icon: <FaNodeJs color="#5FA04E" />, title: "Node.js" },
  { icon: <FaGitAlt color="#F05032" />, title: "Git" },
  { icon: <FaGithub color="#ffffff" />, title: "GitHub" },
  { icon: <SiVercel color="#ffffff" />, title: "Vercel" },
  { icon: <SiTailwindcss color="#38BDF8" />, title: "Tailwind CSS" },
];

function TechStack() {
  return (
    <section className="tech" id="skills">
      <div className="container">

        <span className="cantarell-regular ">
          MY SKILLS
        </span>

        <h2 className="cantarell-bold">
          Technologies I Work With
        </h2>

        <div className="tech-grid">

          {skills.map((skill, index) => (

            <div className="tech-card" key={index}
              data-aos="flip-left">

              <div className="tech-icon">
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