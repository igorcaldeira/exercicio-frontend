import React from 'react';
import PropTypes from 'prop-types';
import { ButtonVariation } from './Button.style';

const Button = ({ variation, children }) => {
  return (
    <ButtonVariation type="button" variation={variation}>
      {children}
    </ButtonVariation>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'rounded']),
};

export default Button;
