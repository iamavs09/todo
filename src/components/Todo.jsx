import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SingleTodo from "./SingleTodo";
// import TodaysDate from "./TodaysDate";
import bgimg from "../assets/bg-desktop-dark.jpg";

const Todo = ({ isUpdating, isComp }) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const addTodo = () => {
    if (value.trim() === "") {
      alert("Enter a valid todo");
    } else {
      const newItem = {
        id: uuidv4(), // Generate a unique ID
        text: value,
        isUpdating: isUpdating,
        isComp,
      };
      setList([...list, newItem]);
      setValue(" ");
    }
  };
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        {/* className={`input ${list?"padding":" "}`} */}
        <h3>TODO</h3>
        <div className="input" >
          <form onSubmit={(e)=>e.preventDefault()}>
            <input
              type="text"
              className="todoinput"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button className="addtodo" onClick={addTodo}>
              Add
            </button>
          </form>
        </div>
      </div>
      <div className={`list ${list.length>0 ? "padding" : " "}`}>
        {list.map((item) => (
          <SingleTodo
            key={item.id}
            item={item}
            list={list}
            setList={setList}
          ></SingleTodo>
        ))}
      </div>
    </div>
  );
};

export default Todo;
