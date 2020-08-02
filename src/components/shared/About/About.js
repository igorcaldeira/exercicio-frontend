import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './About.style';

const About = ({ content }) => {
  return (
    <>
      {content.map((text) => (
        <Paragraph>{text}</Paragraph>
      ))}
    </>
  );
};

export default About;
