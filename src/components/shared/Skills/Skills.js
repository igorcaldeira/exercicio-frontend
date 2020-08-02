import React from 'react';
import Link from 'components/shared/Link';
import ProgressBar from 'components/shared/ProgressBar';
import { Paragraph, Title, Description } from './Skills.style';

const Skills = ({ content }) => (
  <>
    <Paragraph>{content.description}</Paragraph>
    {content?.list?.map(({ item, rank, progress }) => (
      <React.Fragment key={item}>
        <Title>{item}</Title>
        <Description>{rank}</Description>
        <ProgressBar progress={progress} />
      </React.Fragment>
    ))}
    <Link>More on Coderwall</Link>
  </>
);

Skills.defaultProps = {
  content: {},
};

export default Skills;
