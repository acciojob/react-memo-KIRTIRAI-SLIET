import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemoComp from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const addCustomTodo = () => {
    if (input.trim().length > 5) {
      setTodos((prev) => [...prev, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  return (
    <div>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>

      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addCustomTodo}>Add Skill</button>

      <br />
      <br />

      <button onClick={addTodo}>Add Todo</button>

      <hr />

      <p>
        Count: {count} <button onClick={() => setCount((c) => c + 1)}>+</button>
      </p>

      <UseMemo count={count} />

      <hr />

      <h1>React.memo</h1>

      <ReactMemoComp todos={todos} />
    </div>
  );
}

export default App;
