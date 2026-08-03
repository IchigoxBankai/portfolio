import "./Services.css";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern React websites with smooth animations, clean architecture and responsive layouts.",
    tech: ["React", "JavaScript", "Firebase"],
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful interfaces focused on user experience, premium aesthetics and intuitive interactions.",
    tech: ["Figma", "Design System", "Motion"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Websites",
    desc: "Pixel-perfect layouts optimized for desktop, tablet and mobile devices.",
    tech: ["HTML", "CSS", "Responsive"],
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

          <button
  className="service-link"
  onClick={() =>
    window.open(
      "https://wa.me/918591575101?text=Hi%20Nihar!%20I%20found%20your%20portfolio.",
      "_blank"
    )
  }
>
  Let's Talk
  <FaArrowRight />
</button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;