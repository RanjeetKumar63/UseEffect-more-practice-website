import React, { useEffect, useState } from "react";

const TimerComponents = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      console.log("Time to Stop");
      clearInterval(intervalId);
    };
  }, []);
  // it will be run only first render

  return (
    <div>
      <h1>Seconds:{second}</h1>
    </div>
  );
};

export default TimerComponents;
