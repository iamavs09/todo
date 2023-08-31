import React from "react";
import { useState } from "react";

const SingleTodo = ({ item, list, setList }) => {
  const [upvalue, setUpValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isComp, setIsComp] = useState(false);

  const handleDelete = (item) => {
    console.log(list);
    setList(list.filter((i) => i.id !== item.id));
  };

  const handleUpdate = (item) => {
    const updatedList = list.map((i) =>
      i.id === item.id ? { ...i, isUpdating: !i.isUpdating, text: upvalue } : i
    );
    setList(updatedList);
    setUpValue(""); // Clear the input field
  };

  const handleComplete = (item) => {
    const updatedList = list.map((i) =>
      i.id === item.id ? { ...i, isComp: !i.isComp } : i
    );
    console.log(updatedList); // Add this line
    setList(updatedList);
  };

  return (
    <div className={`todo ${item.isComp ? "strike" : ""}`} key={item.id}>
      {item.isUpdating ? (
        <input
          className="updateinput"
          type="text"
          value={upvalue}
          onChange={(e) => setUpValue(e.target.value)}
        />
      ) : (
        <p>{item.text}</p>
      )}
      <div className="buttonwrapper">
        <button onClick={() => handleDelete(item)}>❌</button>
        <button onClick={() => handleUpdate(item)}>✒️</button>
        <button onClick={() => handleComplete(item)}>✔️</button>
      </div>
    </div>
  );
};

export default SingleTodo;
