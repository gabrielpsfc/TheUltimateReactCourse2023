import React from "react";

const ImputDiv = ({ children, set, state }) => {
  return (
    <div className="item">
      <input
        type="text"
        required
        value={state}
        onChange={(e) => set(e.target.value)}
      />
      <label>{children}</label>
    </div>
  );
};

export default ImputDiv;
