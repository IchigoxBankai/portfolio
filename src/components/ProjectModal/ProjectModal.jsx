import "./ProjectModal.css";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  // Close on ESC key and freeze body scroll
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-content">
          <span className="category">{project.category}</span>
          <h2>{project.title}</h2>

          <p className="description">{project.description}</p>

          {project.tech && project.tech.length > 0 && (
            <div className="tech-list">
              {project.tech.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          )}

          <div className="modal-buttons">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="live-btn"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="github-btn"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;