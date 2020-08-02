import React from 'react';
import { CardWrapper, CardTitle } from './SectionCard.style';

const SectionCard = ({ title, children }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardWrapper>
  );
};

export default SectionCard;
