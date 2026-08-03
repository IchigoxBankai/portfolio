import "./Experience.css";
import {
  FaLaptopCode,
  FaReact,
  FaAward,
  FaRocket,
} from "react-icons/fa";

const journey = [
  {
    year: "2023",
    icon: <FaLaptopCode />,
    title: "Started Web Development",
    desc: "Began learning the fundamentals of HTML, CSS and JavaScript while building my first responsive websites.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2024",
    icon: <FaReact />,
    title: "React & Firebase",
    desc: "Started developing modern web applications using React, Firebase, Vite and responsive UI design.",
    tech: ["React", "Firebase", "Vite"],
  },
  {
    year: "2025",
    icon: <FaAward />,
    title: "Academic Excellence",
    desc: "Achieved a 9.60 CGPA while developing multiple real-world projects and improving UI/UX skills.",
    tech: ["Leadership", "Projects", "UI/UX"],
  },
  {
    year: "2026",
    icon: <FaRocket />,
    title: "Professional Growth",
    desc: "Focused on creating premium portfolios, AI-powered web applications and preparing for full-time opportunities.",
    tech: ["React", "AI", "Frontend"],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <div
          className="experience-heading"
          data-aos="fade-up"
        >
          <span>MY JOURNEY</span>

          <h2>Experience Timeline</h2>

          <p>
            My journey from learning web development
            to building modern applications and
            continuously improving every day.
          </p>
        </div>

        <div className="timeline">

          {journey.map((item, index) => (

            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
            >

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="year-bg">
                  {item.year}
                </div>

                <div className="timeline-icon">
                  {item.icon}
                </div>

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

                <div className="tech-list">

                  {item.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="tech-badge"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;