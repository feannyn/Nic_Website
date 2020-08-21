import React from 'react';

import Content from '../Content/content.js';
import Menu from '../Menu/menu.js';
import Header from '../Header/header.js';
import Body from '../Body/body.js';
import Footer from '../Footer/footer.js';
import 'materialize-css';
import './App.css';
// import { Button } from 'react-materialize';

const App = () => {
  return main();
};

const main = () => {
  const sections = ['Hello', 'Me', 'Skills', 'Projects'];

  return (
    <Content>
      <Header className='col s12'/>
      <Body className='col s12' location={sections} />
      <Footer className='col s12'/>
      <Menu className='menu' location={sections} />
      {/* <Button node="button"
        style={{
          marginRight: '5px'
        }}
        waves="light"> THIS IS A BUTTON FROM MATERIALIZE</Button> */}
    </Content>
  );
};

export default App;
