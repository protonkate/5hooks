import useTimeout from "./useTimeout";

import React, { useState } from 'react'

export default function TimeoutComponent() {

    const [count, setCount] = useState(10);
    const {clear, reset} = useTimeout(() => setCount(2), 4000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 5)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}
 