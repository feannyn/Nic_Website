import React from 'react';
import PropTypes from 'prop-types';
import './photo.css';
// import Carousel from 'react-bootstrap/Carousel';

const Photo = ({ incl, path, ...props }) => {
  return (
    <div className='photo' >
      <img alt='Failed to load...' src={path} />
      {/* {incl &&
        <Carousel.Caption>
          <p className='desc'>
            {'description goes here!' }
          </p>
        </Carousel.Caption>
      } */}
    </div>
  );
};

Photo.propTypes = {
  incl: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};

export default Photo;
