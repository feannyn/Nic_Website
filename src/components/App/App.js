import React from 'react';
import './App.css';
import Content from '../Content/content.js';
import Menu from '../Menu/menu.js';
import Header from '../Header/header.js';
import Body from '../Body/body.js';
import Footer from '../Footer/footer.js';

const App = () => {
  return main();
};

const main = () => {
  const sections = ['Hello', 'Me', 'Skills', 'Projects'];

  return (
    <Content>
      <Header />
      <Body location={sections} />
      <Footer />
      <Menu className='menu' location={sections} />
    </Content>
  );
};

export default App;
