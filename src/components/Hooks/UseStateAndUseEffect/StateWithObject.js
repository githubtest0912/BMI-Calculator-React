import React, { useState } from "react";

const StateWithObject = () => {
//   const [people, setPeople] = useState({
  
//     name: "Anu",
//     age:20,
//     message:'hello'
//   });

  const [name, setName] = useState('Anu');
  const [age, setAge] = useState(20)
  const [message, setMessage] = useState('hello')

//   const changeName = () => {
//     setPeople({ ...people, name: "Bala" });
//   };

const changeName = () => 
{
    setName('Bala')
    setAge(25)
    setMessage('hi')
}

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Message: {message}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default StateWithObject;
