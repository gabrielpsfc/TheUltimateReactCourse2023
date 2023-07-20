import "./App.css";
import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [itensList, setItensList] = useState([]);

  function handleAddItens(item) {
    setItensList((s) => [...s, item]);
  }

  function handleDell(id) {
    setItensList((s) => s.filter((item) => id !== item.id));
  }

  function handleToggleItem(id) {
    setItensList((s) =>
      s.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItensList([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItens={handleAddItens} />
      <PackingList
        array={itensList}
        handleDell={handleDell}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <Stats item={itensList} />
    </div>
  );
}

/**
 * criar state dentro de handleAddItens
 * 
 * 
 * 
 * const [itens, setItens] = useState([
    { n: 2, item: "escolva de dentes" },
    { n: 2, item: "bermuda" },
  ])
  const [n, setN] = useState(null)
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(n, item)
    const novoItem = { n, item }
    setItens([...itens, novoItem])

  }

  const handleDell = (index) => {
    setItens(itens.filter((_, i) => i !== index))
  }

  function handleClearList() {
    setItens([])
  }

  return (
    <>
      <h1>FAR AWAY</h1>

      <form className="add-form">
        <h3>What do you need for your trip?</h3>
        <input type="number" placeholder={0} value={n} onChange={(e) => setN(e.target.value)} />
        <input type="text" placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>

      <div className="list">
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              {item.n} {item.item}
              <button onClick={() => handleDell(index)}>X</button>
            </li>
          ))}
        </ul>
        <button>SORT BY</button>
        <button onClick={() => handleClearList()}>CLEAR LIST</button>
      </div>

      <div className="stats">number of itens in your pack {itens.length}</div>
    </>
  );
 */
// state is internal data, component "memory", can be updated by the component itself, updating state causes component to re-render. state are used by developer to make components interactive
// props is external data, similar to function parameters, read-only, receiving new props causes component to re-render, usually when the parent's state has been updated. updating state re-render the component who owns the state and the component who received the state as props. props are used by developers to give the parent abilite to config child components
