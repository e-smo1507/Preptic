import React from "react";
import ReactDOM from  'react-dom/client'

// const head = React.createElement("h1",
//   { id : "root",
//     key:"h1",
//   },
//   "mini me");
//      console.log(head);
// //React.createElement GIVE US OBJECT WHICH IS THEN CONVERTED IN HTML

// const head2 = React.createElement("h2" ,
//   {id: "hr"},
//   "helloW0OEO")

// const cont = React.createElement("div", 
//   { id : "root",
//     key:"h2",
//    },
//   //WHEN WE HAVE MORE SIBLINGS INSIDE A PARTICULAR ATTRINUTE WE HAVE TO GIVE KEYS INSIDE {} CALLED AS PROPES
//   [head,head2]);
 
//    const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(cont);


  const hini = (
  <h1 id ='title' key ='h2'>
    this is jsx
    </h1>
  )

//react components
//functiinal component -> new  
//classical component ->old

const HeaderComponet = () => {
  return <h1> Functional Component </h1>
};




   const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(hini);
  root.render(<HeaderComponet/>);

  // HMR HOT MODULE REPALCEMENT

