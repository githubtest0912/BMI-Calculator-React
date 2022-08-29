import React, { useState } from 'react';

 
const StateCounter = () => {
    const [value, setValue] = useState(0)
    const increaseValue = () => {
        setValue( value + 1)

    }

    const resetValue = () => {
        setValue(0)
        
    }

    const decreaseValue = () => {
        setValue( value - 1)
    }
    return (
        <div>
           <h1>Count the value</h1>
           <h1>{value}</h1>
           <button onClick={increaseValue}>Increase</button>
           <button onClick={resetValue}>Reset</button>
           <button onClick={decreaseValue}>Decrease</button>
        </div>
    );
}
 

 
export default StateCounter;