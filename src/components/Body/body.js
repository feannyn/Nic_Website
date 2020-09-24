import React from 'react';
import PropTypes from 'prop-types';
import './body.css';
import Hello from '../Hello/hello.js';
import Me from '../Me/me.js';
import Experience from '../Experience/experience.js';
import Projects from '../Projects/projects.js';
import Skills from '../Skills/skills.js';

const Body = ({ ...props }) => {
  return (
    <>
      <Hello />
      <Me />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
};

Body.propTypes = {
  location: PropTypes.array.isRequired
};

export default Body;
