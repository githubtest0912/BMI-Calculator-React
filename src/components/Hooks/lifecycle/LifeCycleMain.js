import React from 'react';
import ComponentDidMount from './ComponentDidMount'
import ComponentDidUpdate from './ComponentDidUpdate'
import ComponentWillUnmount from './ComponentWillUnmount'

 
const LifeCycleMain = () => {
    return (
        <div>
            <ComponentDidMount />
            <ComponentDidUpdate />
            <ComponentWillUnmount />
        </div>
    );
}
 

 
export default LifeCycleMain;