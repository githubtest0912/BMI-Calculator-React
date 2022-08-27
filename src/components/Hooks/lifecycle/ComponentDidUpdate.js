import React, {useEffect, useState} from 'react';


const ComponentDidUpdate = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title= `you clicked ${count} times`;
        
    }) // No second argument, so run after every render
    return(
        <div>
            <h3>ComponentDidUpdate</h3>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>

        </div>
    )
}

export default ComponentDidUpdate