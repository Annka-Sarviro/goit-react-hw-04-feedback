import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/';
import Notification from './Notification';
import { Container } from './app.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = { good: good, neutral: neutral, bad: bad };

  const counterFeedback = e => {
    const button = e.currentTarget.name;
    switch (button) {
      case 'good':
        return setGood(state => state + 1);

      case 'neutral':
        return setNeutral(state => state + 1);

      case 'bad':
        return setBad(state => state + 1);

      default:
        throw new Error(`Unsuported action type ${button}`);
    }
  };

  const countTotalFeedback = () => {
    console.log(Object.values(allFeedback));
    return Object.values(allFeedback).reduce((sum, accum) => sum + accum);
  };

  const countPositiveFeedbackPercentage = Math.round(
    (allFeedback.good * 100) / countTotalFeedback()
  );

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={allFeedback}
          onLeaveFeedback={counterFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            allFeedback={allFeedback}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Container>
  );
}
