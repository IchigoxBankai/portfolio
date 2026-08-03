import "./Projects.css";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;