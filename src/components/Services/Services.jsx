import "./Services.css";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
  FaDesktop,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern React websites with smooth animations, clean architecture and responsive layouts.",
    tech: ["React", "JavaScript", "Firebase"],
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Building high-performance, interactive mobile and web applications with seamless user experiences.",
    tech: ["Mobile Apps", "Web Apps", "Cross-Platform", "React"],
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful interfaces focused on user experience, premium aesthetics and intuitive interactions.",
    tech: ["Figma", "Design System", "Motion"],
  },
  {
    icon: <FaDesktop />,
    title: "Responsive Websites",
    desc: "Pixel-perfect layouts optimized for desktop, tablet and mobile devices with fast loading.",
    tech: ["HTML5", "CSS3", "Responsive"],
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Optimization",
    desc: "Deploying projects with high performance, SEO optimization and fast loading speed.",
    tech: ["Vercel", "Firebase", "GitHub"],
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="container">

        <span className="section-tag">
          WHAT I DO
        </span>

        <h2 className="services-title">
          Services I Provide
        </h2>

        <p className="services-subtitle">
          Crafting premium digital experiences that combine modern
          design, clean code and smooth interactions.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <div className="service-tags">

                {service.tech.map((tag, i) => (

                  <span key={i}>
                    {tag}
                  </span>

                ))}

              </div>

          <a
            href="#contact"
            className="service-link"
          >
            Let's Talk
            <FaArrowRight />
          </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;