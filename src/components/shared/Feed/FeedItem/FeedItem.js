import React from 'react';
import Link from 'components/shared/Link';
import { FeedItemSlot, Cover } from './FeedItem.style';

const FeedItem = ({ content }) => {
  const { title, subtitle, description, picture, url } = content;
  return (
    <FeedItemSlot.Wrapper>
      <FeedItemSlot.Picture>
        <Cover src={require(`assets/img/${picture}`)} />
      </FeedItemSlot.Picture>
      <FeedItemSlot.Description>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link href={url}>Find out more</Link>
      </FeedItemSlot.Description>
    </FeedItemSlot.Wrapper>
  );
};

FeedItem.defaultProps = {
  content: [],
};

export default FeedItem;
