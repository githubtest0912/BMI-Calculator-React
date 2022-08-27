import React, {useState, useCallback } from "react";

 const UseCallbackExample = () => {

var funccount = new Set();
const [count, setCount] = useState(0)

const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
  
  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
 
  
   
    return (
      <div>
        Count: {count}
        <button onClick={incrementCounter}>
           Increase counter
        </button>
        <button onClick={decrementCounter}>
           Decrease Counter
        </button>
             </div>
    )
    } 
   

export default UseCallbackExample;
