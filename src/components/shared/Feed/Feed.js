import React from 'react';
import FeedItem from './FeedItem';
import FeedHighlight from './FeedHighlight';
import { FeedContent, Divisor } from './Feed.style';

const Feed = ({ content }) =>
  content.map((itemContent, itemIndex) => (
    <FeedContent key={itemContent.id}>
      {itemIndex === 0 ? (
        <>
          <FeedHighlight content={itemContent} />
          <Divisor />
        </>
      ) : (
        <FeedItem content={itemContent} />
      )}
    </FeedContent>
  ));

Feed.defaultProps = {
  content: [],
};

export default Feed;
