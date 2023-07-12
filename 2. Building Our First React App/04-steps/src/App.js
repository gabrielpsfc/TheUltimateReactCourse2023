import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1)
  // const [test, setTest] = useState({ name: 'Jonas' })
  const [on, setOn] = useState(true)

  function handleNext() {
    //update state with callback function
    if (step < 3) setStep((s) => s + 1)
    //Bad Practice
    // test.name = 'Fred'
    //setTest({ name: 'Fred' })


  }

  function handlePrevius() {
    //update state with callback function
    if (step > 1) setStep((s) => s - 1)

  }


  return <>
    <button onClick={() => (setOn((o) => !o))} className="close">&times;</button>
    {on && (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? 'active' : null}>1</div>
          <div className={step >= 2 ? 'active' : null}>2</div>
          <div className={step >= 3 ? 'active' : null}>3</div>
        </div>

        <p className="message"> Step {step}: {messages[step - 1]}</p>

        <div className="buttons">
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => handlePrevius()} >Previus</button>
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => handleNext()} >Next</button>

        </div>

      </div >)
    }

  </>
}

export default App;
