import React from 'react';
import FeedItem from './FeedItem';
import FeedHighlight from './FeedHighlight';
import { FeedContent, Divisor } from './Feed.style';

function Feed({ content }) {
  return content.map((itemContent, itemIndex) => (
    <FeedContent>
      {itemIndex === 0 ? (
        <>
          <FeedHighlight key={itemContent.id} content={itemContent} />
          <Divisor />
        </>
      ) : (
        <FeedItem key={itemContent.id} content={itemContent} />
      )}
    </FeedContent>
  ));
}

Feed.defaultProps = {
  content: [],
};

export default Feed;
