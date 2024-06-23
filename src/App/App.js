import "./App.css";
import Main from "./Main/Main";
import Header from "./Header/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header element={<h1>- FAST REACT PIZZA CO. -</h1>} />
      <Main />
    </div>
  );
}

export default App;
