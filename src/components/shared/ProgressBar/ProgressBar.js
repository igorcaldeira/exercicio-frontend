import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from './Progress.style';

const ProgressBar = ({ title, description, progress }) => {
  return (
    <div>
      {title}
      {description}
      <Bar progress={progress} />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

ProgressBar.defaultProps = {
  progress: 0,
};

export default ProgressBar;
