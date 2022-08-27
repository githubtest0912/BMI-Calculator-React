import React, { useDeferredValue, useMemo, useState } from 'react';

 
const UseDeffer = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        setInput(e.target.value)
    }

    const defferedInput = useDeferredValue(input)

    // use memo

    const list = useMemo(() => {
        const late = 1000;
        const listItems = [];
        for(let i=0; i<late; i++) {
            listItems.push(defferedInput)
        }
        return listItems;

    }, [defferedInput])

    return (
        <div>
            <h1>UseDefferedValue Example</h1>
            <br />
           
            <input type="text" 
            value={input}
            onChange={handleSubmit}
            />
            {
                list.map((item) => {
                    return(
                        <div>{item} </div>
                    )
                })
            }
        </div>
    );
}
 

 
export default UseDeffer;