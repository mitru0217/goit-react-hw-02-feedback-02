import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptionsList">
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className="BtnControl"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
