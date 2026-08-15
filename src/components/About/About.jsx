import "./About.css";
import bgImg from "../../assets/images/about/bg1.png";
import {
  FaReact,
  FaJs,
  FaPaintBrush,
  FaBolt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, text: "React" },
  { icon: <FaJs />, text: "JavaScript" },
  { icon: <FaPaintBrush />, text: "UI Design" },
  { icon: <FaBolt />, text: "Framer Motion" },
];

function About() {
  return (
    <section className="about" id="about"style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container about-container">

        {/* LEFT */}

        <div className="about-image">

          <div className="image-glow"></div>

          

        </div>

        {/* RIGHT */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Passionate Frontend Developer
            <br />
            & UI Designer
          </h2>

          <p>
            I build fast, modern and visually engaging web experiences
            using React, Firebase and the latest frontend technologies.
            My goal is to transform ideas into elegant, responsive and
            high-performance digital products that users genuinely enjoy.
          </p>

          {/* Skills */}

          <div className="skill-pills">

            {skills.map((skill, index) => (

              <div
                className="skill-pill"
                key={index}
              >
                {skill.icon}
                <span>{skill.text}</span>
              </div>

            ))}

          </div>

          

          {/* Buttons */}

          <div className="about-buttons">

            <a
  href="resume.pdf"
  download="Nihar_Puthran_Resume.pdf"
  className="resume-btn"
>
  <FaDownload />
  Download Resume
</a>

            <a
              href="#contact"
              className="contact-btn"
            >
              Let's Connect
              <FaArrowRight />
            </a>

          </div>

          {/* Quote */}

          <div className="about-quote">

            <p>
              "Every project is another step towards my Bankai."
            </p>

            <span>— Nihar Puthran</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;