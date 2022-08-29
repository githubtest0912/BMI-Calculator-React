import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    if (action.type === "plus") {
      return state + 1;
    } else {
      return state - 1;
    }
  };
  const updatePlus = () => {
    dispatch({ type: "plus" });
  };
  const updateMinus = () => {
    dispatch({ type: "minus" });
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count :{count} </h1>

      <button onClick={updatePlus}>Plus</button>
      <button onClick={updateMinus}>Minus</button>
    </div>
  );
};

export default Reducer;
