import "./Stats.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
  FaCode,
} from "react-icons/fa";
import projects from "../../data/projects";

function AnimatedCounter({ value, decimals = 0, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = parseFloat(value);
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo curve
      const progress = frame >= totalFrames ? 1 : 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = start + (end - start) * progress;

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
}

const stats = [
  {
    icon: <FaAward />,
    value: 3,
    suffix: "+",
    decimals: 0,
    title: "Years Experience",
    description: "Continuous learning & development",
  },
  {
    icon: <FaProjectDiagram />,
    value: projects.length,
    suffix: "+",
    decimals: 0,
    title: "Projects Built",
    description: "AI, Web & Mobile applications",
  },
  {
    icon: <FaLaptopCode />,
    value: 9.52,
    suffix: "",
    decimals: 2,
    title: "Current CGPA",
    description: "Academic & technical excellence",
  },
  {
    icon: <FaCode />,
    value: 15,
    suffix: "+",
    decimals: 0,
    title: "Technologies",
    description: "Modern frontend & backend tools",
  },
];

function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="stat-card-glow" />
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{item.icon}</span>
              </div>

              <h2 className="stat-number">
                <AnimatedCounter
                  value={item.value}
                  decimals={item.decimals}
                />
                {item.suffix}
              </h2>

              <h3 className="stat-title">{item.title}</h3>
              <p className="stat-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;