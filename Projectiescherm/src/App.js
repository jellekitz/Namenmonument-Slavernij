import "./styles/App.scss";
import React, { useState } from "react";
import Alima from "./images/Alima.svg";
import Title from "./components/Title";
import Content from "./components/Content";
import Interface from "./components/Interface";

function App() {
  // Add highlighted name
  const [name, setName] = useState(null);

  const addName = () => {
    setName(() => {
      return <p className="randomName--highlighted">Bangu</p>;
    });
  };

  // Add personal highlighted name
  const [personalName, setPersonalName] = useState(null);

  const addPersonalName = () => {
    setPersonalName(() => {
      return (
        <>
          <p className="randomName--highlighted-personal">Alima</p>
          <img
            className="randomName--highlighted-personal__image"
            src={Alima}
          ></img>
        </>
      );
    });
  };

  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <Content name={name} personalName={personalName} />
      </main>
      <div className="overlay"></div>
      <footer>
        <Interface addName={addName} addPersonalName={addPersonalName} />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </footer>
    </div>
  );
}

export default App;
