import "./Styles/App.scss";
import Nav from "./Components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalStories from "./Components/PersonalStories/PersonalStories";
import Search from "./Components/Search/Search";
import Facts from "./Components/Facts/Facts";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/wistjedat" element={<Facts />} />
          <Route path="/persoonlijke-verhalen" element={<PersonalStories />} />
          <Route path="/zoeken" element={<Search />} />
        </Routes>
        <div className="overlay"></div>
      </div>
    </Router>
  );
}

export default App;
