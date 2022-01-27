import "./styles/App.css";
import "./styles/Text.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Education.css";
import "./styles/Teaser.css";
import "./styles/Contact.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Teaser from "./components/Teaser";
import Contact from "./components/Contact";

function App() {
  // pages should include:
  // About, Projects, Degree, Contact
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Education />
      <Teaser />
      <Contact />
    </div>
  );
}

export default App;
