import React, { useState } from 'react';
import STRING_CONSTANTS from '../../res/strings';
import { ReactLogo } from '../../res/imagePaths';
import './hello.css';
import Photo from '../Photo/photo.js';
import { Container, Row, Col } from 'react-bootstrap';

const Hello = ({ ...props }) => {
  const [hello, setHello] = useState(false);

  const helloComp = () => {
    setHello(!hello);
  };

  return (
    <div className='typewriter hello'>
      <Container>
        <h1>HELLO WORLD!</h1>
        <Row>
          <Col className='left'>
            <p>{STRING_CONSTANTS.HELLO}</p>
          </Col>
          <Col className='right'>
            <Photo incl={hello} path={ReactLogo} imgState={helloComp} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Hello.propTypes = {

// };

export default Hello;
