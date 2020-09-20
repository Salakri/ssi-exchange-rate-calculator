import React from "react";
import "./App.css";
import Header from "./components/header";
import Exchange from "./components/exchange";
import History from "./components/history";

function App() {
  return (
    <div className="App">
      <Header />
      <Exchange />
      <History />
    </div>
  );
}

export default App;
