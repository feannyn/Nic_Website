import React, { useState } from 'react';
import {
  Neverzone,
  dota2day
} from '../../res/imagePaths';
import './projects.css';
// import options from './styles.js';
import Carousel from 'react-bootstrap/Carousel';
import Photo from '../Photo/photo.js';

const Projects = () => {
  const images = [
    Neverzone,
    dota2day
  ];

  const [proj, setProjImage] = useState(true);

  const projComp = () => {
    setProjImage(!proj);
  };

  const generateProjects = () => {
    return images.map((imgPath, id) => {
      return (
        <Carousel.Item key={id}>
          <Photo
            incl={proj}
            path={imgPath}
            imgState={projComp}
          />
        </Carousel.Item>
      );
    });
  };

  return (
    <div className='projects '>
      <h1>Projects</h1>
      <Carousel className='desc'>
        {
          generateProjects()
        }
      </Carousel>
    </div>
  );
};

// Projects.propTypes = {

// }

export default Projects;
