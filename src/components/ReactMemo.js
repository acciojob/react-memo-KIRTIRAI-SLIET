import React from "react";

const ReactMemoComp = ({ todos }) => {
  console.log("Rendering Todo List...");

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ReactMemoComp);
