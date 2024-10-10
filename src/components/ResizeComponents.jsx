import React, { useEffect, useState } from "react";

const ResizeComponents = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event listener added");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listner remove");
    };
  }, []);
  return (
    <div>
      <h1>Window width:{windowWidth}px</h1>
    </div>
  );
};

export default ResizeComponents;
