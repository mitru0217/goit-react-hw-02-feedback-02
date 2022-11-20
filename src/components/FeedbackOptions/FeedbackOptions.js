import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className="FeedbackBtnsControl">
    <button type="button" className="BtnControl" onClick={onGood}>
      Good
    </button>
    <button type="button" className="BtnControl" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" className="BtnControl" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
