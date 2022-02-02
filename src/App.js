import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Card from "./components/Cards/Card.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Form />
        <Card />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
