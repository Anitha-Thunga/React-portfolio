import { useState } from "react";
function Updater() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
};
export default Updater;