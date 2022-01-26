import "./styles/App.scss";
import Nav from "./components/navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalStories from "./components/personalStories/overview/PersonalStories";
import Search from "./components/search/Search";
import Facts from "./components/facts/Facts";
import Story from "./components/personalStories/story/Story";

const App = () => {
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
};

export default App;
