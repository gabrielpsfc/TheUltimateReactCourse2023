import React from "react";
import { useState } from "react";

const App = ({
  collapseNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapseNumWords).join(" ")}...`;

  const buttonStyle = {
    background: "none",
    border: "none",
    front: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((s) => !s)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default App;
