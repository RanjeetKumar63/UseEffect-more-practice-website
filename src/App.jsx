// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(1);
//   // variation :1 {I will run on each render}
//   // useEffect(() => {
//   //   alert("Does it Count ?:   or I will run on each render");
//   // });

//   // variation:2 {that run on only 1st render }
//   // useEffect(() => {
//   //   alert("I will run on only Ist render");
//   // }, []);
//   const clickHandler = () => {
//     setCount(count + 1);
//   };
//   const clickHandlerTotal = () => {
//     setTotal(total + 1);
//   };

//   // variation 3:{}
//   // useEffect(() => {
//   //   alert("I will run every time when count/total is updated");
//   // }, [count, total]);

//   return (
//     <div>
//       <h1>Counter-veryfication</h1>
//       <button onClick={clickHandler}>Click me</button>
//       <br />
//       <h3>Count is :{count}</h3>
//       <br />
//       <br />
//       <button onClick={clickHandlerTotal}>Click me</button>
//       <br />
//       <h3>Count is :{total}</h3>
//     </div>
//   );
// };

// export default App;

import React from "react";
import LoggerComponents from "./components/LoggerComponents";
import TimerComponents from "./components/TimerComponents";
import Datafetcher from "./components/Datafetcher";
import ResizeComponents from "./components/ResizeComponents";
import MultiEffectComponents from "./components/MultiEffectComponents";

const App = () => {
  return (
    <div>
      <LoggerComponents />
      <br />
      <TimerComponents />
      <br />
      <br />
      <Datafetcher />
      <br />
      <br />
      <ResizeComponents />
      <br />
      <br />
      <MultiEffectComponents />
    </div>
  );
};

export default App;
