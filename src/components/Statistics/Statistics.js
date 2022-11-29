import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="StatisticsBox">
    <span className="StatisticsTitle">Good: {good} </span>
    <span className="StatisticsTitle">Neutral: {neutral} </span>
    <span className="StatisticsTitle">Bad: {bad} </span>
    {total > 0 && <span className="StatisticsTitle">Total: {total}</span>}
    {positivePercentage > 0 && (
      <span className="StatisticsTitle">
        Positive Feedback: {positivePercentage}%
      </span>
    )}
  </div>
);

export default Statistics;
