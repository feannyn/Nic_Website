import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import STRING_CONSTANTS from '../../res/strings';
// import REACT_IMG from '../../res/images/react.png';
import './hello.css';

const Hello = (...props) => {
  const [hello, setHello] = useState(false);

  const helloComp = () => {
    setHello(!hello);
  };

  return (
    <div className='typewriter hello'>
      <h1>HELLO WORLD!</h1>
      <p>{STRING_CONSTANTS.HELLO}</p>
      <photo img={hello} path={'TESTING PATH...NO IMG'} imgState={helloComp} test={'SHOULD NOT DISPLAY'}/>
    </div>
  );
};

// Hello.propTypes = {

// }

export default Hello;
