import React, { useState } from "react";
import data from "./data";

const StateWithArray = () => {
  const [people, setPeople] = useState(data);

  const clearItem = () => {
    setPeople([]);
  };

  const deleteItem = (id) => {
    const newPeople = people.filter((person) => {
       return person.id !== id
        
    })
    setPeople(newPeople)
  };

  return (
    <div>
      {people.map((person) => {
        const {id, name} = person
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={() => deleteItem(id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={clearItem}>Clear Item</button>
    </div>
  );
};

export default StateWithArray;
