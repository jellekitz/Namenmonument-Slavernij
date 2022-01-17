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
      <footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </footer>
    </div>
  );
}

export default App;
