import React from "react";

const Options = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((s) => (
        <button className="btn btn-option" key={s}>
          {s}
        </button>
      ))}
    </div>
  );
};

export default Options;
