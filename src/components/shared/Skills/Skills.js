import React from 'react';
import Link from 'components/shared/Link';
import ProgressBar from 'components/shared/ProgressBar';
import { Paragraph, Title, Description } from './Skills.style';

function Skills({ content }) {
  return (
    <>
      <Paragraph>{content.description}</Paragraph>
      {content?.list?.map(({ item, rank, progress }) => (
        <>
          <Title>{item}</Title>
          <Description>{rank}</Description>
          <ProgressBar progress={progress} />
        </>
      ))}
      <Link>More on Coderwall</Link>
    </>
  );
}

Skills.defaultProps = {
  content: {},
};

export default Skills;
