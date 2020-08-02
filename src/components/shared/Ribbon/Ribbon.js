import React from 'react';
import { Box, RibbonWrapper } from './Ribbon.style';

const Ribbon = ({ children }) => {
  return (
    <Box>
      <RibbonWrapper>
        <span>app</span>
      </RibbonWrapper>
      {children}
    </Box>
  );
};

export default Ribbon;
