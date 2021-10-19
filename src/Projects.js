import Showcase from "./Showcase";

export default function Projects() {
  let projects = [
    {
      name: "Recipe Builder for iOS",
      desc: "The ultimate recipe building app for iOS",
      image: "",
    },
    {
      name: "The JDX Compiler",
      desc: "A compiler written in Swift",
      image: "",
    },
    {
      name: "Sleep & Mood Tracker for Desktop",
      desc: "A Java app that tracks a users mood and sleep over time, giving them tips on how to improve their lifestyle",
      image: "",
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">Take a look.</h1>
      <Showcase projects={projects} />
    </div>
  );
}
