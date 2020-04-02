import React from 'react';
import PropTypes from 'prop-types';

function DigitalDisplay({ time }) {
  return <div>{time}</div>;
}

DigitalDisplay.propTypes = {
  time: PropTypes.string.isRequired,
};

export default DigitalDisplay;
