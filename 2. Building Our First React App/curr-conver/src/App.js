import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setLoading(true);
        const res = await fetch(
          `http://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setLoading(false);
      }
      if (toCur === fromCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={loading}
      >
        <option>BRL</option>
        <option>USD</option>
        <option>EUR</option>
        <option>CAD</option>
        <option>BTC</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={loading}
      >
        <option>BRL</option>
        <option>USD</option>
        <option>EUR</option>
        <option>CAD</option>
        <option>BTC</option>
      </select>
      <h1>
        {converted} {toCur}
      </h1>
    </div>
  );
}

export default App;
