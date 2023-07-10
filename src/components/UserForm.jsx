import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/CrudSlice";
import './UserForm.css'

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [university, setUniversity] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      name.length >= 2 &&
      age !== "" &&
      university !== "" &&
      university.length >= 2
    ) {
      const data = { name, age, university };
      dispatch(addUser(data));
    }
    setName('')
    setAge('')
    setUniversity('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div> <span>Name: </span> <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /></div>
        <div><span>Age: </span>  <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /></div>
        <div> <span>University: </span>   <input
          type="text"
          placeholder="Enter your University"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        /></div>
        <div> <button>Add List</button></div>
      </form>
    </div>
  );
}
export default UserForm;
