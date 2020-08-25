import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './projects.css';
import Photo from '../Photo/photo.js';

const Projects = () => {
  const [proj, setProjImage] = useState(true);

  const projComp = () => {
    setProjImage(!proj);
  };

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <Photo incl={proj} path={'TESTING PATH...No Img'} photoState={projComp} test={'CORRECT'}/>
    </div>
  );
};

// Projects.propTypes = {

// }

export default Projects;
