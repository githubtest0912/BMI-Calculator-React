import React from 'react';
import UseCallbackExample from './UseCallbackExample';
import UseDebugValueExample from './UseDebugValueExample';
import UseDeffer from './UseDeffer';
import UseIdExample from './UseIdExample';
import UseMemoExample from './UseMemoExample';
import UseTransitionExample from './UseTransitionExample';
 
const AdditionalHooks = () => {
    return (
        <div>
           <UseCallbackExample />
           <UseDebugValueExample />
           <UseDeffer />
           <UseIdExample />
           <UseMemoExample />
           <UseTransitionExample />
        </div>
    );
}
 

 
export default AdditionalHooks;