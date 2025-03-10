import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MyComponent from "./Components/MyComponent";
import Mybutton from "./Components/Mybutton";
import Mycard from "./Components/Mycard";
import Myflex from "./Components/Myflex";
import Myfooter from "./Components/Myfooter";
import Mygrid from "./Components/Mygrid";
import Mytypography from "./Components/Mytypography";


function App() {
  return (
    <div>
      <div className="container  m-auto p-6 bg-black">
            <Header></Header>
            <Myflex></Myflex>
            <Mygrid></Mygrid>
            <Mybutton></Mybutton>
            <MyComponent></MyComponent>
            <Mytypography></Mytypography>
            <Mycard></Mycard>
            <Myfooter></Myfooter>
      </div>
    </div>
  );
}

export default App;
