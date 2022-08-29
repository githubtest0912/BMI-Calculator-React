import React from 'react';
import StateCounter from './UseStateAndUseEffect/StateCounter'
import StateButton from './UseStateAndUseEffect/StateButton'
import StateExample from './UseStateAndUseEffect/StateExample'
import StateWithArray from './UseStateAndUseEffect/StateWithArray';
import StateWithObject from './UseStateAndUseEffect/StateWithObject'
import UseEffectExample from './UseStateAndUseEffect/UseEffectExample';
import UseLayoutExample from './UseStateAndUseEffect/UseLayoutExample';
import Effect from './UseStateAndUseEffect/Effect';
 
const UseStateAndEffectTogether = () => {
    return (
        <div>
           <StateCounter />
           <StateButton />
           <StateExample />
           <StateWithArray />
           <StateWithObject />
           <UseEffectExample />
           <UseLayoutExample />
           <Effect />
        </div>
    );
}
 

 
export default UseStateAndEffectTogether;