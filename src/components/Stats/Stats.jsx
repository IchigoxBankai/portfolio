import "./Stats.css";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    number: "3+",
    title: "Years Experience",
  },
  {
    icon: <FaProjectDiagram />,
    number: "15+",
    title: "Projects Built",
  },
  {
    icon: <FaLaptopCode />,
    number: "9.60",
    title: "Current CGPA",
  },
  {
    icon: <FaCode />,
    number: "5+",
    title: "Technologies",
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
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;