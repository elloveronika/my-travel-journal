import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import data from "./data";
import "./index.css";

console.log("this is data", data);
function App() {
  return (
    <div className="App">
      <Header />
      <Content data={data} />
    </div>
  );
}

export default App;
