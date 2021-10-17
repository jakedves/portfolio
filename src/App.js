import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects";

function App() {
  // pages should include:
  // About, Projects, Degree, Contact
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
