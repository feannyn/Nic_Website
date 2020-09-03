import React from 'react';
import PropTypes from 'prop-types';
import './job.css';
import { Accordion, Card } from 'react-bootstrap';

const Job = ({ evKey, job, ...props }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={evKey}>
        {job} {evKey}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={evKey}>
        <Card.Body>Hello! {evKey}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

Job.propTypes = {
  evKey: PropTypes.number.isRequired,
  job: PropTypes.string.isRequired
};

export default Job;
