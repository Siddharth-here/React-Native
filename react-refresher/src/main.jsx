import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App";

//const h1 = React.createElement("h1", null, "hello")

let name = 'sidd'

createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="title" id="">hello {name} </h1>
      <App /> 
  </div>
);

