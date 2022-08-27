import React, { useId, useState } from "react";

const UseIdExample = () => {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
    };
    setNewEmail([...newEmail, newUser]);
    setEmail("");
  };

  const id = useId();
  console.log(id);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`email-${id}`}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id={`email-${id}`}
        ></input>
        <label htmlFor={`password-${id}`}>Password:</label>
        <input type="password" id={`password-${id}`}></input>

        <button>Submit</button>
      </form>
      <table>
        <tr>
         
          <th>Email</th>
        </tr>
        <tr>
          {newEmail.map((item) => {
            return (
              <div key={item.id}>
              
                <h4> {item.email}</h4>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
};

export default UseIdExample;
