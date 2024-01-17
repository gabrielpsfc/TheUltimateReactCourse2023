import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <p>{question.correctOption}</p>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
