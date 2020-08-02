import React from 'react';

function Skills({ content }) {
  return (
    <>
      {content.description}
      {content?.list?.map(({ item, rank, progress }) => (
        <>
          <div>
            {item} {rank}
          </div>
          <div>{progress}</div>
        </>
      ))}
    </>
  );
}

Skills.defaultProps = {
  content: {},
};

export default Skills;
