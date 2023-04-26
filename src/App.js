import './App.css';
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [Text, setText] = useState("");

  const Submit = (event) => {
    event.preventDefault();
    setText(name);
    setName("");
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='App'>
      <form onSubmit={Submit}>
        <label>
          <input placeholder='Add Your Name...' type="text" value={name} onChange={nameChange} />
          <button type="submit">Submit</button>
        </label>
        <h1>Hi My Name is : {Text}</h1>

      </form>
    </div>
  );
}

export default App;
