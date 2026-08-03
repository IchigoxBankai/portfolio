function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      data-aos="zoom-in-up"
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay">
          <button
            className="view-btn"
            onClick={() => window.open(project.live, "_blank")}
          >
            View Project →
          </button>
        </div>
      </div>

      <div className="project-content">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>

        <span>↗</span>
      </div>
    </div>
  );
}

export default ProjectCard;