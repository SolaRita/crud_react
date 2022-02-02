import React from "react";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navbar/>

      </header>
      <main>
        <Form/>
      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;
