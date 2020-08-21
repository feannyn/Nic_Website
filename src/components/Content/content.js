import React from 'react';
import PropTypes from 'prop-types';
import './content.css';

const Content = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

Content.propTypes = {
  children: PropTypes.any.isRequired
};

export default Content;
