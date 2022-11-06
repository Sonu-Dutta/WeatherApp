import React, { useState, useEffect } from "react";
import "./css/style.css";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="date_time">
        <span> {date.toLocaleDateString()}</span>
        <span> {date.toLocaleTimeString()}</span>
      </p>
    </div>
  );
};

export default DateTime;
