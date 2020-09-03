import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';

const Menu = ({ location }) => {
  const ids = ['hello', 'me', 'experience', 'skills', 'projects'];

  const sectionMap = location.map((element, id) => {
    return <li key={id}>{element}</li>;
  });

  return (
    <div className='menu'>
      <div className='sticky'>
        <ul>
          {sectionMap}
        </ul>
      </div>
    </div>

  );
};

Menu.propTypes = {
  location: PropTypes.array.isRequired
};

export default Menu;
