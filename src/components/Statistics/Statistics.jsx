import React from "react";

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