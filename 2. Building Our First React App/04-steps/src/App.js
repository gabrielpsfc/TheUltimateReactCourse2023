import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: 'Jonas' })
  const [on, setOn] = useState(true);

  function handleNext() {
    //update state with callback function
    if (step < 3) setStep((s) => s + 1);
    //Bad Practice
    // test.name = 'Fred'
    //setTest({ name: 'Fred' })
  }

  function handlePrevius() {
    //update state with callback function
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button onClick={() => setOn((o) => !o)} className="close">
        &times;
      </button>
      {on && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>
          <Step step={step}>{messages[step - 1]}</Step>
          <div className="buttons">
            <Button
              bgColor="#795"
              textColor="#fff5"
              onClick={() => alert("Ok!")}
            >
              Try this
            </Button>
          </div>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevius}>
              Previus <span>😀</span>
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>😁</span>
              <span></span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Step({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}:</h3> {children}
    </p>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
