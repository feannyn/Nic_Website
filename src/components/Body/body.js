import React from 'react';
import PropTypes from 'prop-types';
import './body.css';
import Hello from '../Hello/hello.js';
import Me from '../Me/me.js';
import Experience from '../Experience/experience.js';
import Projects from '../Projects/projects.js';
import Skills from '../Skills/skills.js';

const Body = ({ ...props }) => {
  const sections = [Hello, Me, Experience, Skills, Projects];
  const ids = ['hello', 'me', 'experience', 'skills', 'projects'];

  const bodySections =
            sections.map(
              (Element, id) => {
                return <Element key={id} id={ids[id]}/>;
              }
            );

  return (
    <>
      {bodySections}
    </>
  );
};

Body.propTypes = {
  location: PropTypes.array.isRequired
};

export default Body;
