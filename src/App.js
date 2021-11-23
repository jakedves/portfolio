import "./styles/App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects";

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
