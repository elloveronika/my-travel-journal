import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import data from "./data";

console.log("this is data", data);
function App() {
  return (
    <div className="App">
      <Content data={data} />
      <Header />
    </div>
  );
}

export default App;
