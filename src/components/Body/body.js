import React from 'react';
import PropTypes from 'prop-types';
import './body.css';
import Hello from '../Hello/hello.js';
import Me from '../Me/me.js';
import Projects from '../Projects/projects.js';
import Skills from '../Skills/skills.js';

const Body = ({ ...props }) => {
  const sections = [Hello, Me, Skills, Projects];

  const bodySections =
            sections.map(
              (Element) => {
                return <Element key={Element.id}/>;
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
