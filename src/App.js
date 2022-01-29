import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Current Value = ${value} \n Button Clicks= ${count}`);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Current Value {value}</p>
      <button onClick={() => {
        setValue(value + 1) 
        setCount(count+1)
      }}>
        Increment +
      </button>
      <button onClick={() => {
        setValue(value - 1) 
        setCount(count + 1)
      }}>
        Decrement -
      </button>
    </div>
  );
}

export default App;
