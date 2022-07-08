import React from "react";
import PropTypes from "prop-types"

const Statistics = ({ good, neutral, bad, onCountTotalFeedback, onCountPositiveFeedbackPercentage }) => {
    return  <ul>
        <li>Good: {good}</li>
        <li>Neutral:  {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {onCountTotalFeedback()}</li>
        <li>Positive feedback: {onCountPositiveFeedbackPercentage()}%</li>
      </ul>
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onCountTotalFeedback: PropTypes.func,
  onCountPositiveFeedbackPercentage: PropTypes.func,
}