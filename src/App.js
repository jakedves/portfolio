import "./styles/App.css";
import "./styles/Text.css";
import "./styles/Education.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  // pages should include:
  // About, Projects, Degree, Contact
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
