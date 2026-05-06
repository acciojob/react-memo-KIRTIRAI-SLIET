import React, { useMemo } from "react";

const UseMemo = ({ count }) => {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{result}</p>
    </div>
  );
};

export default UseMemo;
