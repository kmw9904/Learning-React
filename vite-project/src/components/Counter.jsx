import { useState } from "react";

function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);
  console.log("counter");

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    if (onTotal) {
      onTotal();
    }
  };

  return <button onClick={handleCounter}>Counter: {counter}</button>;
}

export default Counter;
