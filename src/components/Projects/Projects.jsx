import { useState } from "react";
import "./Projects.css";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const handleToggle = () => {
    if (showAll) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll((prev) => !prev);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2
          className="projects-title"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="view-more-wrapper" data-aos="fade-up">
            <button
              className="view-more-btn"
              onClick={handleToggle}
            >
              {showAll ? (
                <>
                  Show Less <span className="btn-icon">↑</span>
                </>
              ) : (
                <>
                  View More Projects <span className="btn-icon">↓</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;