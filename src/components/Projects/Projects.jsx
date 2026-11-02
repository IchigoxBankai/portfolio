import { useState, useMemo } from "react";
import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";

const categories = [
  "All",
  "AI & Intelligent Apps",
  "Web Applications",
  "Creative & Interactive",
  "Mobile & Hubs",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const INITIAL_COUNT = 6;

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    if (activeCategory === "AI & Intelligent Apps") {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes("ai") ||
          p.tech.some((t) => t.toLowerCase().includes("ai")) ||
          p.title.includes("AI") ||
          p.title === "FolderLens"
      );
    }

    if (activeCategory === "Web Applications") {
      return projects.filter((p) =>
        [
          "BrewBite Café",
          "WatchMate",
          "DevDash",
          "Sudo Cafe",
          "UH Properties",
          "ToolSpace",
        ].includes(p.title)
      );
    }

    if (activeCategory === "Creative & Interactive") {
      return projects.filter((p) =>
        [
          "GithubUniverse",
          "Monster",
          "Stylo",
          "PlayVerse",
          "AnimeHub",
        ].includes(p.title)
      );
    }

    if (activeCategory === "Mobile & Hubs") {
      return projects.filter(
        (p) =>
          p.title === "GameVault" ||
          p.title === "AppVault" ||
          p.tech.includes("Flutter")
      );
    }

    return projects;
  }, [activeCategory]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  const handleToggle = () => {
    if (showAll) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll((prev) => !prev);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of modern web applications, AI platforms, interactive experiments,
            and digital experiences crafted with clean architecture and precision.
          </p>

          {/* Category Filter Tabs */}
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
                {cat === "All" && ` (${projects.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* View More Button */}
        {filteredProjects.length > INITIAL_COUNT && (
          <div className="view-more-wrapper" data-aos="fade-up">
            <button className="view-more-btn" onClick={handleToggle}>
              {showAll ? (
                <>
                  Show Less <span className="btn-icon">↑</span>
                </>
              ) : (
                <>
                  View More ({filteredProjects.length - INITIAL_COUNT} remaining){" "}
                  <span className="btn-icon">↓</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;