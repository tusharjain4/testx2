'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface WorksProps {
  projects: Project[];
}

const projectImagePaths = [
  "/assets/images/img_rectangle_369.png",
  "/assets/images/img_rectangle_369_396x836.png",
  "/assets/images/img_rectangle_369_1.png",
  // Add more paths if there are more projects than provided image assets
  // For now, it will cycle through these three or use the last one if more projects exist.
];

const Works: React.FC<WorksProps> = ({ projects }) => {
  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My works</h2>

        <div role="list">
          {projects.map((project, index) => (
            <article className="project-item" role="listitem" key={project.name}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.slice(0, 3).map((keyword, i) => (
                    <span className="keyword" key={i}>{keyword}</span>
                  ))}
                </div>
              </div>
              <img
                src={projectImagePaths[index % projectImagePaths.length]}
                alt={`Project showcase for ${project.name}`}
                className="project-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;