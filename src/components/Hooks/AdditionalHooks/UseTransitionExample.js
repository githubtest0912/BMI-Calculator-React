import React, { useState, useTransition } from "react";

const UseTransitionExample = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, startTransition] = useTransition();

  const List_Size = 10000;

  const handleChange = (e) => {
    setInput(e.target.value);

    const listItems = [];
    for (let i = 0; i < List_Size; i++) {
      listItems.push(e.target.value);
    }
    startTransition(() => {
      setList(listItems);
    });
  };

  return (
    <div className="App">
      <h1>useTransition Example</h1>
      <br />
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a value"
      />

      <>
        {isLoading ? (
          <div> Loading... </div>
        ) : (
          <>
            {list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </>
        )}
      </>
    </div>
  );
};

export default UseTransitionExample;
