import React, {useState, useEffect, useLayoutEffect} from 'react';

const UseEffectExample = () => {
    const [value, setValue] = useState()
    useEffect(() => console.log('1'),[]);
    useEffect(() => console.log('2'),[]);
    useEffect(() => console.log('3'),[]);
    useLayoutEffect(() => console.log('4'),[]);
    return (
        <div>

           <h1 onClick={() => setValue('hello')}>Test</h1>
           {value}
        </div>
    );
}
 

 
export default UseEffectExample;