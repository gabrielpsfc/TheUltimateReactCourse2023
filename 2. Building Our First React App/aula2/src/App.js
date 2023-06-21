import React from 'react'
import { useState, useEffect } from 'react'
import Message from './components/Message'

const App = () => {
  const [advice, setAdvice] = useState('')
  const [cont, setCont] = useState(0)


  async function getAdive() {     

    const res = await fetch("https://api.adviceslip.com/advice")    
    const data = await res.json() 
    setAdvice(data.slip.advice)
    setCont((c) => c+1) 
  }

  useEffect( ()=> {
    getAdive()
  },[])

  



  return (
    <div>
      
      <h1>{advice}</h1>
      <button onClick={() => getAdive()}>Get advice</button>
      <Message count={cont}>{cont}</Message>
      
    </div>
  )
}

export default App