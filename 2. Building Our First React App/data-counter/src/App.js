
import './App.css';
import { useState } from 'react'



function App() {
  const [cont, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const hoje = new Date();
  hoje.setDate(hoje.getDate() + cont)
  const ano = hoje.getFullYear()
  const dia = hoje.getDate()
  const mes = hoje.getMonth()
  //const dia = hoje.




  function handleCount(flag = true) {
    if (flag) {
      setCount((s) => s + step)

      console.log('true')
    } else {
      setCount((s) => s - step)
      console.log('false')
    }



  }

  function handleStep(flag = true) {
    flag ? setStep((s) => s + 1) : setStep((s) => s - 1)
  }


  return <>
    <div><button onClick={() => handleStep(false)} >-</button>Step: {step} <button onClick={() => handleStep()} >+</button></div>
    <div><button onClick={() => handleCount(false)} >-</button>Count: {cont} <button onClick={() => handleCount()}>+</button></div>
    <p>{hoje.toDateString()}</p><p>{dia}/{mes + 1}/{ano}</p>


  </>
}

export default App;

/**
 *  flag ? setCount((s) => s + step) : (setCount((s) => s - step))
    flag ? setDiaSemana((s) => (s + step) < 7 ? s += step : s = (s + step) - 7) : setDiaSemana((s) => (s - step) >= 0 ? s -= step : s = (s - step) + 7)
    flag ? setDia((s) => (s + step) < meses[mes].dias ? s += step : (s = (s + step) - meses[mes].dias)) : setDia((s) => (s - step) > 0 ? s -= step : s = (s - step) + meses[mes].dias)
 */
