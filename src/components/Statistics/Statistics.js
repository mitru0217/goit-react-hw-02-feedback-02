import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, onTotal }) => (
  <div className="StatisticsBox">
    <span className="StatisticsTitle">Good: {good} </span>
    <span className="StatisticsTitle">Neutral: {neutral} </span>
    <span className="StatisticsTitle">Bad: {bad} </span>

    <span className="StatisticsTitle" onChange={onTotal}>
      Total:{onTotal}
    </span>
  </div>
);

export default Statistics;
