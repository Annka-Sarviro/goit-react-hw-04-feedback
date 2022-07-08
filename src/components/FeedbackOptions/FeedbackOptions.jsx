import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, FededbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGoodCounter, onNeutralCounter, onBadCounter }) => {
  return (
    <ButtonList>
      <li>
        <FededbackButton onClick={onGoodCounter}>Good</FededbackButton>
      </li>
      <li>
        <FededbackButton onClick={onNeutralCounter}>Neutral</FededbackButton>
      </li>
      <li>
        <FededbackButton onClick={onBadCounter}>Bad</FededbackButton>
      </li>
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGoodCounter: PropTypes.func,
  onNeutralCounter: PropTypes.func,
  onBadCounter: PropTypes.func,
};
