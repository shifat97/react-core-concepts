import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increase = () => {
    count = count + 1;
    setCount(count);
  }

  const decrease = () => {
    count = count - 1;
    setCount(count);
  }

  return (
    <div style={{border: '2px solid tomato', padding: '50px'}}>
      <h3>{count}</h3>
      <button style={{marginRight: '10px'}} onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter;