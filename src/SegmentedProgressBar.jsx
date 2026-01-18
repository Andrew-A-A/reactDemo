import React from 'react';
import './SegmentedProgressBar.css';

const SegmentedProgressBar = ({ totalSegments, completedPercentage }) => {
  // Calculate how many segments are fully completed
  const filledSegments = Math.floor((completedPercentage / 100) * totalSegments);

  const segments = Array.from({ length: totalSegments }, (_, index) => {
    // Determine if the segment should be filled or empty
    const isFilled = index < filledSegments;
    return <div key={index} className={`progress-segment ${isFilled ? 'filled' : ''}`} />;
  });

  return <div className="progress-container">{segments}</div>;
};

export default SegmentedProgressBar;
