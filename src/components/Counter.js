import React, { useRef, useEffect } from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  const head = useRef(null);
  useEffect(() => {
    console.log(head);
  }, []);

  return (
    <div>
      <h1 ref={head}>{number}</h1>
      <div>
        <button type="button" onClick={onIncrease}>+1</button>
        <button type="button" onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
