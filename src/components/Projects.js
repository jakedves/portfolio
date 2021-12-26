import Project from "./Project";
import RecipeBuilder from "../images/RecipeBuilderiOS.png";
import SleepTracker from "../images/SleepAndMood.png";
import WorldsApart from "../images/WorldsApart.png";

export default function Projects() {
  let projects = [
    {
      name: "Recipe Builder for iOS",
      desc: `Recipe Builder is the ultimate recipe-building app, made for iOS. It is simple. Fast. Easy to use.
       Recipe Builder is an app that cuts out all the details of other recipe-building apps. No need to enter the cost
       of a recipe, how many calories it has, or anything else you don't care about. Aimed at students, Recipe Builder is 
       the most convenient solution available. Download on the App Store today.`,
      image: RecipeBuilder,
      tools: [
        { tool: "Swift", color: "orange" },
        { tool: "SwiftUI", color: "blue" },
        { tool: "UIKit", color: "skyblue" },
        { tool: "Core Data", color: "blue" },
        { tool: "CloudKit", color: "skyblue" },
      ],
    },
    {
      name: "Sleep & Mood Tracker for Desktop",
      desc: `This application was built for Windows and macOS devices, and is a Java application that encourages users
      to be more healthy and meet their sleep requirements, by logging their sleep against their mood and providing insights.`,
      image: SleepTracker,
      tools: [
        { tool: "Java", color: "orange" },
        { tool: "Java Swing", color: "yellow" },
        { tool: "Scrum Methodology", color: "blue" },
        { tool: "SQL", color: "blue" },
      ],
    },
    {
      name: "GMTK 2021 Game Jam: Worlds Apart",
      desc: `This game was a submission for a Game Jam, where we have 48 hours to design and develop a game based on the theme:
       'Joined Together'. This game was built using Unity3D, along with C# and developed with pair programming. The concept behind
       the game is that there's two worlds that you exist in simultaneously, and you're trying to bring them back together. Each world
       replies on you to solve a puzzle that's based in the other world to progress.`,
      image: WorldsApart,
      tools: [
        { tool: "C#", color: "purple" },
        { tool: "Unity 3D", color: "grey" },
        { tool: "Unity Animator", color: "grey" },
        { tool: "Scripting", color: "red" },
        { tool: "Pair Programming", color: "green" },
        { tool: "Level Design", color: "blue" },
      ],
    },
    {
      name: "This Website!",
      desc: `This website is my portfolio. Built using HTML, CSS, JavaScript and React.`,
      tools: [
        { tool: "HTML", color: "red" },
        { tool: "CSS", color: "blue" },
        { tool: "JavaScript", color: "yellow" },
        { tool: "React", color: "blue" },
      ],
    },
  ];

  return (
    <div className="projects">
      <h1 className="section-title">Take a look.</h1>
      <div className="showcase">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
