import { ExternalLink, Info } from "lucide-react";

function ProjectCard({ project, index, onSelect }) {
  const isExpandedItem = index >= 6;
  const animationDelay = isExpandedItem ? `${(index - 6) * 70}ms` : `${(index % 6) * 50}ms`;

  return (
    <div
      className={`project-card ${isExpandedItem ? "card-animate-in" : ""}`}
      style={{ animationDelay }}
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 80}
    >
      <div className="project-image" onClick={() => onSelect(project)}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <div className="project-overlay">
          <button
            type="button"
            className="view-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
          >
            <Info size={16} /> Details
          </button>
          {project.live && (
            <button
              type="button"
              className="live-direct-btn"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.live, "_blank", "noopener,noreferrer");
              }}
            >
              <ExternalLink size={16} /> Live
            </button>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-info">
          <span className="project-category">{project.category}</span>
          <h3 onClick={() => onSelect(project)}>{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
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
          onClick={(e) => e.stopPropagation()}
        >
          ↗
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;