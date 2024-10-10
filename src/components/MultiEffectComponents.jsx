import React, { useEffect, useState } from "react";

const MultiEffectComponents = () => {
  const [count, setCount] = useState(0);
  const [seconds, Setseconds] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      Setseconds((preveSeconds) => preveSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Seconds:{seconds}</h2>
    </div>
  );
};

export default MultiEffectComponents;
