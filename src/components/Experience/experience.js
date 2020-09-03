import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './experience.css';
import Job from '../Job/job.js';
import Photo from '../Photo/photo';
import {
  Core_Logo
} from '../../res/imagePaths';

const Experience = () => {
  const jobs = [
    'Virtru',
    'I2x/FSU',
    'Citi: Business',
    'Citi: Tech',
    'law 1',
    'Law 2'
  ];

  const jobRender = jobs.map((element, i) => {
    return <Job evKey={i + 1} key={i} job={element} />;
  });

  return (
    <Container>
      <h1> Experience</h1>
      <Row>
        <Col>
          <Photo incl={false} path={Core_Logo}/>
        </Col>
        <Col>
          <Accordion>
            {
              jobRender
            }
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
