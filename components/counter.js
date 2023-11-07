import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  const [buttonColor, setButtonColor] = useState(null);

  function increment() {
    setCount(count + 1);
    setButtonColor("green");
    setTimeout(() => {
      setButtonColor(null);
    }, 1000);
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
      setButtonColor("red");
      setTimeout(() => {
        setButtonColor(null);
      }, 1000);
    }
  }

  return (
    <div id="counter">
      <button style={{ backgroundColor: buttonColor }} onClick={increment}>
        +
      </button>
      <h1>{count}</h1>
      <button style={{ backgroundColor: buttonColor }} onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;