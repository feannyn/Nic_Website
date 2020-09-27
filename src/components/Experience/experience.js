import React from 'react';
import './experience.css';
import Job from '../Job/job.js';
import Photo from '../Photo/photo';
import {
  CoreLogo
} from '../../res/imagePaths';

const Experience = () => {
  const jobs = [
    'Virtru',
    'I2x/FSU',
    'Citi: Business',
    'Citi: Tech'
  ];

  const jobRender = jobs.map((element, i) => {
    return (
      // This needs to be a job object
      <div key={i} className='dimensions'>
        <h2>element {i}</h2>
        {/* Need to place photo of company here */}
        <div className='overlay overdime'>
          <h2>overlay {i}</h2>
          {/* Place secondary photo here of company */}
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Experience</h1>
      <div className='experience'>
        {jobRender}
      </div>
    </>
  );
};

export default Experience;
