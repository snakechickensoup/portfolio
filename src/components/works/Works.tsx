import React from 'react';
import { works } from 'assets/options';
import Work from './Work';

const Works = () => {
  return (
    <article>
      <ul>
        {works.map((work, idx) => (
          <React.Fragment key={work.company}>
            <Work key={work.company} {...work} />
            {idx === 0 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
};

export default Works;
