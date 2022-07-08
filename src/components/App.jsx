import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/';
import Notification from './Notification';
import { Container } from './app.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodCounter = () => {
    this.setState(() => {
      return { good: this.state.good + 1 };
    });
  };

  neutralCounter = () => {
    this.setState(() => {
      return { neutral: this.state.neutral + 1 };
    });
  };

  badCounter = () => {
    this.setState(() => {
      return { bad: this.state.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((sum, accum) => {
      return sum + accum;
    });
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivProc = Math.round((this.state.good * 100) / total);
    return positivProc;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodCounter={this.goodCounter}
            onNeutralCounter={this.neutralCounter}
            onBadCounter={this.badCounter}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              onCountTotalFeedback={countTotalFeedback}
              onCountPositiveFeedbackPercentage={
                countPositiveFeedbackPercentage
              }
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Container>
    );
  }
}
