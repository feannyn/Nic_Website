import React from 'react';
// import PropTypes from 'prop-types';
import './hello.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Hello = () => {
  const test = false;

  return (
    <div className='hello'>
      <h1>HELLO WORLD!</h1>
      <h2>{test ? 'FALSE' : 'TRUE'}</h2>
      <LoremIpsum p={2} />
    </div>
  );
};

// Hello.propTypes = {

// }

export default Hello;
