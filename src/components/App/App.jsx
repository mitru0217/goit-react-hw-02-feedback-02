import React, { Component } from 'react';
import './App.css';
import Section from '../Section/Section';
import FeedbackOtions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
  onHandle = option => {
    this.setState(() => ({
      [option]: this.state[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.trunc(((good * 0.1) / total) * 1000);
    return (
      <div className="Container">
        <Section title="Upload stats">
          <FeedbackOtions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onHandle}
          />
          {total === 0 ? (
            <span className="StatisticsTitle">No Feedback given</span>
          ) : (
            <div className="Statistic__option">
              <h2>Statistics</h2>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            </div>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
