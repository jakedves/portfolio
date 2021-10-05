import "./App.css";
import Home from "./Home.js";
import About from "./About.js";

function App() {
  // pages should include:
  // About, Projects, Degree, Contact
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
