import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

/*
import: This is like saying, "Hey, I need these tools from other places to make my code work."
React: This is the library we're using to build our app. It allows us to create components (small reusable pieces of code).
useState: A special tool in React to store data and track changes over time (like keeping score in a game).
useEffect: A tool to run certain actions when the component is first shown or when something changes (e.g., starting a timer).
Timer: We're importing the Timer component (created in another file) so we can use it in this file.
*/

const App = () => {
  const [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState('#000000');


  /*
  useState: This helps us keep track of two things:
  time: The current time.
  backgroundColor: The background color of the page.
  new Date(): This gets the current date and time when the app first loads.
  '#000000': This is the initial color for the background (black in this case). 

  setTime and setBackgroundColor: These are functions that allow us to update the time and backgroundColor

  */


  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);

      const hours = String(newTime.getHours()).padStart(2, '0');
      const minutes = String(newTime.getMinutes()).padStart(2, '0');
      const seconds = String(newTime.getSeconds()).padStart(2, '0');
      const newColor = `#${hours}${minutes}${seconds}`;
      setBackgroundColor(newColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Timer time={time} backgroundColor={backgroundColor} />
    </div>
  );
};

export default App;
