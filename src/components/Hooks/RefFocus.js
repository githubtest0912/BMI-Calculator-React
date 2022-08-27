import React, {useRef} from "react";

const RefFocus = () => {
    const inputFocus = useRef(null)
    const focusInput = () => {
        inputFocus.current.value =
      "How are you?";
        inputFocus.current.focus()
    }
   
  return(
   
     <div>
    <form>
        <h1>useRef Focus example</h1>
        <input type="text" ref={inputFocus}></input>
        <button onClick={focusInput}>Press</button>
    </form>
  </div>
  );
};

export default RefFocus;
