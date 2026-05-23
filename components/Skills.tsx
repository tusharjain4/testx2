'use client';

import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img src="/assets/images/img_frame_410.svg" alt={`${category.name} icon`} />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{category.name}</h3>
                <p className="skill-description">{category.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;