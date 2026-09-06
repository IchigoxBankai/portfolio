function ProjectCard({ project, index }) {
  const isExpandedItem = index >= 6;
  const animationDelay = isExpandedItem ? `${(index - 6) * 70}ms` : `${(index % 6) * 50}ms`;

  return (
    <div
      className={`project-card ${isExpandedItem ? "card-animate-in" : ""}`}
      style={{ animationDelay }}
      data-aos="zoom-in-up"
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <div className="project-overlay">
          <button
            className="view-btn"
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
          >
            View Live Site →
          </button>
        </div>
      </div>

      <div className="project-content">
        <div className="project-info">
          <h3>{project.title}</h3>
          <p className="project-category">{project.category}</p>
          {project.tech && project.tech.length > 0 && (
            <div className="project-tech-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-external-icon"
          aria-label={`Open ${project.title}`}
        >
          ↗
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;