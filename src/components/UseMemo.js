import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>My todos</h2>

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>

      <h2>Expensive Calculation</h2>
      <p>{result}</p>
    </div>
  );
};

export default UseMemo;
