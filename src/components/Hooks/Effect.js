import React, {useState, useEffect} from 'react';

 
const Effect = () => {

    const [count, setCount] = useState(0)
    
    // when you press the button it will update
     
        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count+1)
            },1000) 
            return () => clearTimeout(count)
        }, []);

       
   
    return (
        <div>
<h1>Use Effect Example</h1>
        <h1>you counted {count} times</h1>
       
           
        </div>
    );
}
 

 
export default Effect;