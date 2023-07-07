import React, { useEffect, useState } from "react";

const clock = ({ title, dateTime }) => {
  const [currentTime, setCurrentTime] = useState(dateTime);

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
          {title} <br />
          <br />
          <span className="clock">{currentTime}</span>
        </h1>
      </div>
    </>
  );
};

export default clock;
