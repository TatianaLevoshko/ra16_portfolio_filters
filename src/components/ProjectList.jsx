import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects">
      <ul className="projects-list">
        {projects.map((project, idx) => (
          <li className="project-elem" key={idx}>
            <img
              src={project.img}
              alt={project.category}
              className="project-img"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
