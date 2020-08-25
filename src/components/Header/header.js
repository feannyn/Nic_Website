import React from 'react';
import STRING_CONSTANTS from '../../res/strings';

// import PropTypes from 'prop-types';
import './header.css';

const Header = () => {
  return (
    <div className='bg'>
      <h1>{STRING_CONSTANTS.WELCOME}</h1>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
