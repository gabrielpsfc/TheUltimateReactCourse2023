import { useState } from "react";

function Textfull({ children, NumWords = 10, color = "blue" }) {
  const [full, setFull] = useState(false);
  const words = children.split(" ").slice(0, NumWords).join(" ");

  const style = {
    color,
  };
  return (
    <div>
      {full ? children : `${words}...`}
      <span onClick={() => setFull(!full)} style={style}>
        {full ? " see least" : " see more"}
      </span>
    </div>
  );
}

function AppMyTry() {
  return (
    <div className="App">
      <Textfull>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia
        asperiores, tempora aliquam accusamus ratione nobis minima, ducimus
        voluptatem, esse facilis distinctio ipsam sint quis id et quae minus
        vitae.
      </Textfull>
    </div>
  );
}

export default AppMyTry;
