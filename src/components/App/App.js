import React from 'react';
import Content from '../Content/content.js';
import Menu from '../Menu/menu.js';
import Header from '../Header/header.js';
import Body from '../Body/body.js';
import Footer from '../Footer/footer.js';
import './App.css';

const App = () => {
  const sections = ['Hello', 'Me', 'Skills', 'Projects'];

  return (
    <Content className='content'>
      <Header />
      <Body location={sections} />
      <Footer />
      <Menu location={sections} />
    </Content>
  );
};

export default App;
