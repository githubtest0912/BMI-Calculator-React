import React, { useState, useReducer } from "react";
import data from "./data";
import ReducerTODOModal from "./ReducerTodoModal";

// reducer function
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "TESTING") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  return state;
};

// default state value
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const ReducerTODO = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  //   const [people, setPeople] = useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);
  //  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && dept) {
      dispatch({ type: "TESTING" });
    } else {
    }
  };

  return (
    <div className="container">
      <h2>Use Reducer Example</h2>
      {state.isModalOpen && (
        <ReducerTODOModal modalContent={state.modalContent} />
      )}
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3 container">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 container">
          <label htmlFor="dept" className="form-label">
            Department:
          </label>
          <input
            type="text"
            className="form-control"
            id="dept"
            placeholder="Enter Department"
            name="dept"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
          <br />
          <div className="container">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
      <table className="table container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {state.people.map((person) => {
            return (
              <>
                <tr>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.dept}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReducerTODO;
