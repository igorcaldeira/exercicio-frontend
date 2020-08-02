import React from 'react';
import Button from 'components/shared/Button';
import Ribbon from 'components/shared/Ribbon';
import { Highlight, Image } from './FeedHighlight.style';
import { GoThumbsup } from 'react-icons/go';

const FeedHighlight = ({ content }) => {
  const { title, subtitle, description, picture, url } = content;
  return (
    <Highlight>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <Ribbon>
        <Image src={require(`assets/img/${picture}`)} />
      </Ribbon>
      <p>{description}</p>
      <Button variation="secondary">
        <GoThumbsup />
        Back my project
      </Button>
    </Highlight>
  );
};

FeedHighlight.defaultProps = {
  content: [],
};

export default FeedHighlight;
