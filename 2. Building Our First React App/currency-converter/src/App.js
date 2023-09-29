import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [input, setInput] = useState("0");
  const [from, setFrom] = useState("USA");
  const [to, setTo] = useState("EUR");
  const [convert, setConvert] = useState("1");

  useEffect(
    function () {
      async function fetchData(toCurrency) {
        try {
          const host = "api.frankfurter.app";
          const res = await fetch(
            `https://${host}/latest?amount=${input}&from=${from}&to=${to}`
          );
          const data = await res.json();
          console.log(data);
          setConvert(data.rates[toCurrency]);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchData(to);
    },
    [input, from, to]
  );

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option>BRL</option>
        <option>USD</option>
        <option>EUR</option>
        <option>CAD</option>
        <option>BTC</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option>BRL</option>
        <option>USD</option>
        <option>EUR</option>
        <option>CAD</option>
        <option>BTC</option>
      </select>
      <input type="text" value={convert} />
    </div>
  );
}

export default App;
