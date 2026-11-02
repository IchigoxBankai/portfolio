import "./Stats.css";
import CountUp from "react-countup";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
  FaCode,
} from "react-icons/fa";

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
    value: 18,
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
                <CountUp
                  end={item.value}
                  decimals={item.decimals}
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
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