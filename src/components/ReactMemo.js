import React, { useState } from "react";

const List = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

const MemoList = React.memo(List);

const ReactMemoComp = () => {
  const [todos, setTodos] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.trim().length > 5) {
      setTodos((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <MemoList todos={todos} />
    </div>
  );
};

export default ReactMemoComp;
