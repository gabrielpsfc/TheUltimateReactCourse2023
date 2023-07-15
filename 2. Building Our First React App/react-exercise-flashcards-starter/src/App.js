import "./App.css";
import { useState } from "react";

function FlashCards({ ar }) {
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const handleClick = (id) => {
    itensSelecionados.includes(id)
      ? setItensSelecionados(itensSelecionados.filter((item) => item !== id))
      : setItensSelecionados((s) => [...s, id]);
    console.log(itensSelecionados);
  };

  return (
    <div className="flashcards">
      {ar.map((q) => (
        <div
          onClick={() => handleClick(q.id)}
          className={itensSelecionados.includes(q.id) ? "selected" : ""}
          key={q.id}
        >
          {itensSelecionados.includes(q.id) ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="App">
      <FlashCards ar={questions} />
    </div>
  );
}

export default App;
