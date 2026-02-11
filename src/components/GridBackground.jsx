import React from 'react';
import './GridBackground.css';

function GridBackground() {
  return (
    <div className="grid-background">
      <div className="grid-lines horizontal" />
      <div className="grid-lines vertical" />
    </div>
  );
}

export default GridBackground;
