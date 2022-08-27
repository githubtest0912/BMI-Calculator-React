import React, {useState, useLayoutEffect } from 'react';

 
const UseLayoutExample = () => {
const [value, setValue] = useState('sel');

useLayoutEffect(() => {
    if(value === 'sel'){
        setValue('Selvi')
    }
    console.log('value', value)
}, [value])
    return (
        <div>
            {value} is my name
        </div>
    );
}
 
 
export default UseLayoutExample;