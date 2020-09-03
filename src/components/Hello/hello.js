import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import STRING_CONSTANTS from '../../res/strings';
import REACT_IMG from '../../res/images/React_Materialize/react.png';
import './hello.css';
import Photo from '../Photo/photo.js';

const Hello = ({ ...props }) => {
  const [hello, setHello] = useState(false);

  const helloComp = () => {
    setHello(!hello);
  };

  return (
    <div className='typewriter hello'>
      <h1>HELLO WORLD!</h1>
      <p>{STRING_CONSTANTS.HELLO}</p>
      <Photo incl={hello} path={REACT_IMG} imgState={helloComp} />
    </div>
  );
};

// Hello.propTypes = {

// };

export default Hello;
