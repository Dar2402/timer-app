// const timerElement = document.getElementById('timer');
// const colorInfoElement = document.getElementById('color-info');

// function updateTimeAndColor() {
//   const now = new Date();

//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');

//   timerElement.textContent = `${hours}:${minutes}:${seconds}`;

//   const backgroundColor = `#${hours}${minutes}${seconds}`;

//   document.body.style.backgroundColor = backgroundColor;

//   colorInfoElement.textContent = `Background Color: ${backgroundColor}`;
// }

// setInterval(updateTimeAndColor, 1000);

// updateTimeAndColor();

// ================================================================================================================

const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      const hours = String(newTime.getHours()).padStart(2, "0");
      const minutes = String(newTime.getMinutes()).padStart(2, "0");
      const seconds = String(newTime.getSeconds()).padStart(2, "0");
      const newColor = `#${hours}${minutes}${seconds}`;
      setBackgroundColor(newColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return createElement(
    "div",
    { style: { backgroundColor, height: "100vh", width: "100vw" } },
    createElement(
      "div",
      { className: "timer-container" },
      createElement("div", { className: "timer" }, time.toLocaleTimeString()),
      createElement(
        "div",
        { className: "color-info" },
        `Background Color: ${backgroundColor}`
      )
    )
  );
};

render(createElement(Timer), document.getElementById("root"));
