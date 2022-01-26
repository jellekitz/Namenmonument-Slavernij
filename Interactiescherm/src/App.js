import "./Styles/App.scss";
import Nav from "./Components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalStories from "./Components/PersonalStories/Overview/PersonalStories";
import Search from "./Components/Search/Search";
import Facts from "./Components/Facts/Facts";
import Story from "./Components/PersonalStories/Story/Story";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Facts />} />
          <Route path="/persoonlijke-verhalen" element={<PersonalStories />} />
          <Route path="/zoeken" element={<Search />} />
          <Route path="/verhaal-maria" element={<Story />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
