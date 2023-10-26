import { projects } from 'assets/options';
import Project from './Project';
import React from 'react';

const Projects = () => {
  return (
    <article>
      <ul>
        {projects.map((project, idx) => (
          <React.Fragment key={project.name}>
            <Project {...project} />
            {idx === 0 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
