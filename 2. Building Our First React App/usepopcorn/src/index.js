import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
//import StarRating from "./StarRating";
//import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/**
 * 
 * 
 * function Tst() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating setMovieRating={setMovieRating} />
      <p>MovieRating is {movieRating}</p>
    </>
  );
} 
 * <StarRating maxRating={5} />
    <StarRating maxRating={10} color={"#2323de"} size={60} className="" />
    <StarRating
      maxRating={5}
      size={25}
      messages={["Horrivel", "Ruim", "Mediocre", "ok", "Bom"]}
      defaultRating={3}
    />
    <Tst />
 * 
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
