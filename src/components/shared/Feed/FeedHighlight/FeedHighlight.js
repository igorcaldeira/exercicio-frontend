import React from 'react';
import Link from 'components/shared/Link';

const FeedHighlight = ({ content }) => {
  const { title, subtitle, description, picture, url } = content;
  return (
    <>
      <img src={require(`assets/img/${picture}`)} />
      <h5>{title}</h5>
      <p>{description}</p>
      <Link href={url}>Find out more</Link>
    </>
  );
};

FeedHighlight.defaultProps = {
  content: [],
};

export default FeedHighlight;
