import "./styles/App.scss";
import Title from "./components/Title";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
