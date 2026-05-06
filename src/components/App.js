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

  const addSkill = () => {
    if (input.trim().length > 5) {
      setTodos((prev) => [...prev, input]);
      setInput("");
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

      <button onClick={addSkill}>Add Skill</button>

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>

      <p>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>

      <UseMemo count={count} />

      <h1>React.memo</h1>

      <ReactMemoComp todos={todos} />
    </div>
  );
}

export default App;
