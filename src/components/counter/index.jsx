import './counter.css';
import React from "react";
import { useState } from "react"
export function Counter() {

const[counter, setCounter] = useState(0)

function upCounter() {
  setCounter(counter + 1)
}

  return (
    <div className="Card">
      <button onClick={upCounter}  id="counter" type="button">
        count is {counter}
      </button>
    </div>
  );
}
