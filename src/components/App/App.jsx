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
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.trunc(((good * 0.1) / total) * 1000);
    return (
      <div className='Container'>
        <Section title="Upload stats">
          <FeedbackOtions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
          {total === 0 ? (
            <span className="StatisticsTitle">No Feedback given</span>
          ) : (
            <div className="Statistic__option">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                onTotal={() => this.countTotalFeedback(this.props)}
              />
              {total > 0 && (
                <span className="StatisticsTitle">Total: {total}</span>
              )}
              {positivePercentage > 0 && (
                <span className="StatisticsTitle">
                  Positive Feedback: {positivePercentage}%
                </span>
              )}
            </div>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
