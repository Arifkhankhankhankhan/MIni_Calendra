import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="container">
      <div className="month">{date.toLocaleDateString("en-US", { month: "long" })}</div>
      <div className="weekday">{date.toLocaleDateString("en-US", { weekday: "long" })}</div>
      <div className="day">{date.getDate()}</div>
      <div className="year">{date.getFullYear()}</div>
    </div>
  );
}

export default App;