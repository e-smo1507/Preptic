import React from "react";
import ReactDOM from  'react-dom/client'
const head =React.createElement("h1",
  { id : "root"},
  "mini me")
const head2= React.createElement("h2" ,
  {id: "hr"},
  "helloW0OEO")
const cont = React.createElement("div", 
  { id : "root" },
  [head,head2]);
   const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(cont);

  // HMR HOT MODULE REPALCEMENT