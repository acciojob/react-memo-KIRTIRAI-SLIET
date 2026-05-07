import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const expensiveCalculation = (num) => {
    let total = 0;

    for (let i = 0; i < 1000; i++) {
      total += i;
    }

    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <p>New Todo</p>

      <button onClick={addTodo}>Add Todo</button>
      <hr />

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
      <hr />
      <hr />
    </div>
  );
};

export default UseMemo;
