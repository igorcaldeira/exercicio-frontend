import React from 'react';
import Link from 'components/shared/Link';

const FeedItem = ({ content }) => {
  const { title, subtitle, description, picture, url } = content;
  return (
    <>
      <h5>{title}</h5>
      <p>{description}</p>
      <img src={require(`assets/img/${picture}`)} />
      <Link href={url}>Find out more</Link>
    </>
  );
};

FeedItem.defaultProps = {
  content: [],
};

export default FeedItem;
