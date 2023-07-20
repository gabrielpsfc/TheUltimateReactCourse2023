import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  array,
  handleDell,
  handleToggleItem,
  clearList,
}) {
  const [option, setOption] = useState("input");
  let SortedBy = [];

  if (option === "input") {
    SortedBy = array;
  }
  if (option === "description") {
    SortedBy = array
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (option === "packed") {
    SortedBy = array
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  console.log(option);
  return (
    <div className="list">
      <ul>
        {SortedBy.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDell={handleDell}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="4">4</option>
        </select>
        <button onClick={() => clearList()}>Clear List</button>
      </div>
    </div>
  );
}
