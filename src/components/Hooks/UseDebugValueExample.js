import React, { useState, useDebugValue } from 'react';

 
const UseDebugValueExample = () => {
    
        const [value, setValue] = useState(null);
        
    return (
        <div>
           
   {value}
   {useDebugValue(value) ? 'not empty' : 'empty'}

        </div>
    );
}
 

 
export default UseDebugValueExample;