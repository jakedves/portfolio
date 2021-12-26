import "./styles/App.css";
import "./styles/Home.css";
import "./styles/Text.css";
import "./styles/Education.css";
import "./styles/PrivateProjects.css";
import "./styles/Contact.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects";
import Education from "./components/Education";
import PreviewPrivate from "./components/PreviewPrivate";
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
      <PreviewPrivate />
      <Contact />
    </div>
  );
}

export default App;
