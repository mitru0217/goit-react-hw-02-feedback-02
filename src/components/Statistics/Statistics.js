import React from 'react';
import './Statistics.css';

// const Statistics = (props, index) => (
//   <div className="StatisticsBox">
//     <span className="StatisticsTitle">Good: {props.stats.good} </span>
//     <span className="StatisticsTitle">Neutral: {props.stats.neutral} </span>
//     <span className="StatisticsTitle">Bad: {props.stats.bad} </span>

//     {/* <span className="StatisticsTitle" onChange={onTotal}>
//       Total:{onTotal}
//     </span> */}
//   </div>
// );

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
