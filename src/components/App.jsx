import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Nitification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addAllFeedback = event => {
    const btnName = event.currentTarget.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [btnName]: prevState[btnName] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positive: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          {<FeedbackOptions addGoodFeedback={this.addAllFeedback} />}
        </Section>

        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positive={this.state.positive}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
