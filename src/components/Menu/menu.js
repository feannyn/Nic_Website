import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';

const Menu = ({ location }) => {
  const sectionMap = location.map((element) => {
    return <li key={element.id}>{element}</li>;
  });

  return (
    <div className='menu'>
      <ul>
        {sectionMap}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  location: PropTypes.array.isRequired
};

export default Menu;
