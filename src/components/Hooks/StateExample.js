import React, { useState } from "react";

const StateExample = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateMe = () => {
    setCar(previousState => {
      return{
        ...previousState, 
        color:'blue',
        year:1980
      }
    })
  }

  return <div>
    <h1>My car is {car.color} {car.model} {car.brand} in {car.year}</h1>
  <button onClick = {updateMe}>Click</button>
  </div>;
};

export default StateExample;
