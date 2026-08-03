import "./ProjectModal.css";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

function ProjectModal({ project, onClose }) {

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        <div className="modal-image">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>

        <div className="modal-content">

          <h2>{project.title}</h2>

          <p className="category">
            {project.category}
          </p>

          <p className="description">
            {project.description}
          </p>

          <div className="tech-list">

            {project.tech.map((item, index) => (

              <span key={index}>
                {item}
              </span>

            ))}

          </div>

          <div className="modal-buttons">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <GitHub size={18} />
              GitHub
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;