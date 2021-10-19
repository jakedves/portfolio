import Showcase from "./Showcase";

export default function Projects() {
  let projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className="projects">
      <h1 className="projects-title">Take a look.</h1>
      <Showcase projects={projects} />
    </div>
  );
}
