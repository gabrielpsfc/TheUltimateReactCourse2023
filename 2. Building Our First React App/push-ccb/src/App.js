import "./App.css";
import { useState } from "react";
import { FormCcbData } from "./FormCcbData";
import { TextCCB } from "./TextCCB";

function App() {
  const [dados, setDados] = useState({});

  return (
    <div className="app">
      <div className="sidebar">
        <FormCcbData handleDados={setDados} dados={dados} />
      </div>
      <div className="text-ccb">
        <TextCCB data={dados}></TextCCB>
      </div>
    </div>
  );
}
export default App;

/**
 *   <body>
    <div class="testbox">
      <form action="/">
        <h1>Workplace Complaint Form</h1>
        <div class="item">
          <p>Your name</p>
          <div>
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
        </div>
        <div class="item">
          <p>Your email</p>
          <input type="text" name="name"/>
        </div>
        <div class="item">
          <p>Date of complaint</p>
          <input type="date" name="name" required/>
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="item">
          <p>Your department</p>
          <select>
            <option value="">*Please select*</option>
            <option value="A">Department A</option>
            <option value="B">Department B</option>
            <option value="C">Department C</option>
            <option value="D">Department D</option>
            <option value="E">Department E</option>
          </select>
        </div>
        <div class="item">
          <p>Office manager name</p>
          <input type="text" name="name"/>
        </div>
        <div class="item">
          <p>The person(s) involved in this complaint are</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="item">
          <p>Note all relevant dates, places, events, etc. pertaining to the complaint</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="item">
          <p>Signature</p>
          <textarea rows="5"></textarea>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Send</button>
        </div>
      </form>
    </div>
  </body>
</html>
 */

/**
 * .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
 */
