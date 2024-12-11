import React, {useState} from "react";

const Counter = () => {
  // creating a variable count and a function setCount to update its state
  // useState(0) sets it the initial value to 0
  const [count, setCount] = useState(0); 

  // event handler to increment the count by 1
  const handleClick = () => {
    setCount(count + 1);
  };

  // event handler to reset count to 0
  const resetClick = () => {
    setCount(0);
  }
  
  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={handleClick}>Increase Counter</button>
      <div>
        <button onClick={resetClick}>Reset Counter</button>
      </div>
    </div>
  );
};

export default Counter;