import React from "react";

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;

/**
 *   useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
 */
