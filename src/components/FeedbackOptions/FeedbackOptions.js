import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptionsList">
      {options.map(option => (
        <li>
          <button
            type="button"
            className="BtnControl"
            onClick={() => {
              onLeaveFeedback(options);
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
