import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const setIntervalRef = useRef();

  useEffect(() => {
    setIntervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);
  }, []);

  const handleStop = () => {
    clearInterval(setIntervalRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStop}>Stop !!</button>
    </div>
  );
};

export default Counter;
