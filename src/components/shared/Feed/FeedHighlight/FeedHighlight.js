import React from 'react';
import Link from 'components/shared/Link';
import { Image } from './FeedHighlight.style';

const FeedHighlight = ({ content }) => {
  const { title, subtitle, description, picture, url } = content;
  return (
    <>
      <Image src={require(`assets/img/${picture}`)} />
      <h4>{title}</h4>
      <p>{description}</p>
      <Link href={url}>Find out more</Link>
    </>
  );
};

FeedHighlight.defaultProps = {
  content: [],
};

export default FeedHighlight;
