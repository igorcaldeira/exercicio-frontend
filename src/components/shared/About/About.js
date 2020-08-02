import React from 'react';
import { Paragraph } from './About.style';

const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;

const About = ({ content }) => content.map((text) => <Paragraph key={generateKey()}>{text}</Paragraph>);

export default About;
