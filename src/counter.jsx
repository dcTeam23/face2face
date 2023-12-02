

import React, { useState } from 'react';

function SetupCounter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div onClick={handleClick}>
      {`count is ${counter}`}
    </div>
  );
}

export default SetupCounter;
