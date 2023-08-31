import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import AppMyTry from "./AppMyTry";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App collapseNumWords={5}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      distinctio nulla, dolorem reprehenderit adipisci totam obcaecati! Autem
      eligendi optio, illum iusto dolores suscipit laudantium, reprehenderit
      asperiores, totam qui vero perspiciatis.
    </App>
    <App expanded={true}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      distinctio nulla, dolorem reprehenderit adipisci totam obcaecati! Autem
      eligendi optio, illum iusto dolores suscipit laudantium, reprehenderit
      asperiores, totam qui vero perspiciatis.
    </App>
    <App expandButtonText={"see more"}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      distinctio nulla, dolorem reprehenderit adipisci totam obcaecati! Autem
      eligendi optio, illum iusto dolores suscipit laudantium, reprehenderit
      asperiores, totam qui vero perspiciatis.
    </App>
  </React.StrictMode>
);
