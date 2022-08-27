import React, {useEffect, useState} from 'react';


const ComponentDidMount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title= `you clicked ${count} times`;
        
    },[]) // pass an empty array to run only callback on mount only
    return(
        <div>
            <h3>ComponentDidMount</h3>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>

        </div>
    )
}

export default ComponentDidMount