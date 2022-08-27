import React, { useEffect, useState } from 'react';

 
const ComponentWillUnmount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // return a callback in useEffect and it will be called before unmounting
        return() => {
            console.log('componentWillUnmount')
        }
    }, []);
    return (
        <div>
            <h3>ComponentWillUnmount</h3>
            <p>you clicked {count} times</p>
            <button onClick = {() => setCount(count+1)}>Click Me</button>
        </div>
    );
}
 

 
export default ComponentWillUnmount;