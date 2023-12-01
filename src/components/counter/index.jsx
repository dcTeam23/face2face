import './counter.css';
import React, { useState } from "react";

// export function counter() {
//   return `
//     <div class="card">
//       <button id="counter" type="button">
//         count is 0
//       </button>
//     </div>
//   `;
// }
export function Counter() {
  const [counter , setCounter] = useState(0)
  return (
    <div className="card">
      <button onClick={() => setCounter((i) => i + 1)} id="counter" type="button">
        count is {counter}
      </button>
    </div>
  )
}