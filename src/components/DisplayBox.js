// src/DisplayBox.js
import React from 'react';

const DisplayBox = ({ poem }) => {
  return (
  <div className="display-box">
    <h3>Generated Poem</h3>
    {poem.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
    );
};

export default DisplayBox;
