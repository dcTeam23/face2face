import './counter.css';
import React from 'react';


export function Counter() {
  return (
    <div className="card">
      <button id="counter" type="button">
        count is 0
      </button>
    </div>
  );
}