import React, { useEffect, useState } from "react";

const clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const changeTime = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(changeTime);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="title">
          Current Time is <br />
          <br />
          <span className="clock">{currentTime}</span>
        </h1>
      </div>
    </>
  );
};

export default clock;
