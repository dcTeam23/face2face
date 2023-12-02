import './counter.css';
import React from 'react';
import SetupCounter from '../../counter';

export function Counter() {
  return (
    <div className="card">
      <button id="counter" type="button">
        <SetupCounter />
      </button>
    </div>
  );
}