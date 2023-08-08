import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion array={faqs} />
    </div>
  );
}

function Accordion({ array }) {
  const [curOpen, setCurOpen] = useState(null); // crio o State a cima de todo os AccordionItem

  return (
    <div className="accordion">
      {array.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="any thing"
        num={23}
        key={456}
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        just to see
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  // passo o state para cara accordionItem como prop
  const isOpen = num === curOpen; // cada accordionItem ira testar se o num é igual ao valor do state curOpen, caso seja, isOpen === true

  function handleToggle() {
    // seta o state curOpen para num do accordionItem
    onOpen(isOpen ? null : num);
  }
  console.log(isOpen, num, curOpen);

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number">{`0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
/**
 *   function handleToggleItem(id) {
    setItensList((s) =>
      s.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
 */
