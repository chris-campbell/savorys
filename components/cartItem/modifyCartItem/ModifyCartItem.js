import React from "react";

const ModifyCartItem = ({ decrement, increment, removeItem }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
};

export default ModifyCartItem;
