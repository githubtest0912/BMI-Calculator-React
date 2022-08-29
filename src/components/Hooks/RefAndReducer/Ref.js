import React, {useState, useEffect, useRef} from 'react';

 
const Ref = () => {
    const [inputValue, setInputValue] = useState('')
    const count = useRef(0)

useEffect(() => {
     count.current = count.current + 1;
    
})

    return (
        <div>
            <h1>useRef Example</h1>
            <input type='text'
            value={inputValue}
            onChange = {(e) => setInputValue(e.target.value)}
            />
<h1>you counted {count.current} time</h1>
        </div>
        
    );
}
 

 
export default Ref;