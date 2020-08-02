import React from 'react';
import { Paragraph } from './About.style';

const About = ({ content }) => content.map((text) => <Paragraph>{text}</Paragraph>);

export default About;
