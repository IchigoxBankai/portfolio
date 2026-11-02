import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Monitor,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Modern React websites with smooth animations, clean architecture and responsive layouts.",
    tech: ["React", "JavaScript", "Firebase"],
    icon: <Code2 size={22} />,
  },
  {
    number: "02",
    title: "App Development",
    desc: "Building high-performance, interactive mobile and web applications with seamless user experiences.",
    tech: ["Mobile Apps", "Web Apps", "Cross-Platform", "React"],
    icon: <Smartphone size={22} />,
  },
  {
    number: "03",
    title: "UI / UX Design",
    desc: "Beautiful interfaces focused on user experience, premium aesthetics and intuitive interactions.",
    tech: ["Figma", "Design System", "Motion"],
    icon: <Palette size={22} />,
  },
  {
    number: "04",
    title: "Responsive Websites",
    desc: "Pixel-perfect layouts optimized for desktop, tablet and mobile devices with fast loading.",
    tech: ["HTML5", "CSS3", "Responsive"],
    icon: <Monitor size={22} />,
  },
  {
    number: "05",
    title: "Deployment & Optimization",
    desc: "Deploying projects with high performance, SEO optimization and fast loading speed.",
    tech: ["Vercel", "Firebase", "GitHub"],
    icon: <Rocket size={22} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Services() {
  return (
    <section className="services" id="services">
      {/* Subtle crimson ambient glow */}
      <div className="services-ambient-glow" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="services-eyebrow">WHAT I DO</span>
          <h2 className="services-title">Services I Provide</h2>
          <p className="services-subtitle">
            Crafting premium digital experiences that combine modern design, clean
            code and smooth interactions.
          </p>
        </motion.div>

        {/* Services Grid (3 top row, 2 centered bottom row on desktop) */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className={`service-card card-${index + 1}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-card-glow" />

              {/* Card Top: Number & Icon */}
              <div className="service-card-header">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <div className="service-number-wrapper">
                  <span className="service-number">{service.number}</span>
                  <div className="service-number-accent" />
                </div>
              </div>

              {/* Card Content */}
              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>

              {/* Card Footer: Tech Tags & CTA */}
              <div className="service-card-footer">
                <div className="service-tags" aria-label="Technologies used">
                  {service.tech.map((tag, i) => (
                    <span key={i} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="service-talk-link"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={15} className="talk-arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;