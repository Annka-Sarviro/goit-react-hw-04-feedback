import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, TotalValue } from './Statistics.styled';

const Statistics = ({
  allFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <FeedbackList>
        <li>Good: {allFeedback.good}</li>
        <li>Neutral: {allFeedback.neutral}</li>
        <li>Bad: {allFeedback.bad}</li>
      </FeedbackList>
      <TotalValue>
        <p>
          Total: <span>{countTotalFeedback}</span>
        </p>
        <p>
          Positive feedback: <span>{countPositiveFeedbackPercentage}%</span>
        </p>
      </TotalValue>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onCountTotalFeedback: PropTypes.number,
  onCountPositiveFeedbackPercentage: PropTypes.number,
};
