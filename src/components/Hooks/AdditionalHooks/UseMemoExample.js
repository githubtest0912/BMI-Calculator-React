import React,{useState, useMemo} from 'react';

 
const UseMemoExample = () => {
    const [count, setCount] = useState(0)


    const updateMe = () => {
        setCount(count + 1)
    }
    // useMemo inside ulla count mattum re-render ahum
    const noRender = useMemo(() => {
        return(
            <div><h1 style={{color:'red'}}>Count: {count}</h1></div>
        )

    },[])
    
    return (
        <div>
           {noRender}
           <button onClick={updateMe}>Update</button>
           <h1 style={{color:'blue'}}>Count: {count}</h1>
        </div>
    );
}
 

 
export default UseMemoExample;