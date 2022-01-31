import Project from "./Project";
import RecipeBuilder from "../images/RecipeBuilderiOS.png";
import SleepTracker from "../images/SleepAndMood.png";
import WorldsApart from "../images/WorldsApart.png";

export default function Projects() {
  let projects = [
    {
      name: "Recipe Builder for iOS",
      shortDesc: `Recipe Builder is the ultimate recipe-building app, made for iOS. It is simple. Fast. Easy to use.
      Aimed at students, it is the most convenient solution available.`,
      desc: `This app is an iOS app built using the Swift programming language, and Apple's new UI framework, SwiftUI. These
      technologies allow developers to create iOS apps in a really fast way. I made this app to be a more advanced note-taking app,
      designed for storing quick recipes easily, without the hassle of other similar apps. With the combination of the NoSQL Core Data
      database, and CloudKit integration, recipes are always available across devices, which is a convenient way to view recipes while cooking.`,
      image: RecipeBuilder,
      badges: [
        { content: "Swift & SwiftUI to develop the native iOS app" },
        {
          content:
            "CloudKit and Core Data to manage the user's database with automated syncing across devices",
        },
        {
          content:
            "Deployed onto the App Store via Xcode and managed via App Store Connect",
        },
      ],
    },
    {
      name: "Sleep & Mood Tracker",
      shortDesc: `A Java application built for Windows and macOS, which allows users to set goals for their sleep and track 
      how these goals affect their mood.`,
      desc: `This application was built for Windows and macOS devices, and is a Java application that encourages users
      to be more healthy and meet their sleep requirements, by logging their sleep against their mood and providing insights. We
      worked as a team of seven to build this project, which we split up into a UI team, database team, and controller team where we followed
      a Scrum methodology to deliver this project within our deadline.`,
      image: SleepTracker,
      badges: [
        {
          content: "Object-oriented system built in Java for Windows and macOS",
        },
        {
          content:
            "Scrum methodology used to plan the project over a fixed duration",
        },
        { content: "SQL for local database management for the user's data" },
      ],
    },
    {
      name: "GMTK 2021 Game Jam: Worlds Apart",
      shortDesc: `A Unity3D game made in only 48 hours for the GMTK 2021 Game Jam, where the theme was 'Joined Together'.`,
      desc: `This game was a submission for a Game Jam, where we have 48 hours to design and develop a game based on the theme:
       'Joined Together'. This game was built using Unity3D, along with C# and developed with pair programming. The concept behind
       the game is that there's two worlds that you exist in simultaneously, and you're trying to bring them back together. Each world
       replies on you to solve a puzzle that's based in the other world to progress.`,
      image: WorldsApart,
      badges: [
        {
          content:
            "C# Scripting with the Unity 3D engine to develop interactions",
        },
        {
          content:
            "Animations built with the Unity animator to develop natural motion",
        },
        {
          content:
            "Pair programming to design each level and develop simultaneously",
        },
      ],
    },
    {
      name: "jakedavies.dev",
      shortDesc: `This website was built using HTML, CSS, JavaScript and React, to show off some of my front-end skills`,
      desc: `This website is my portfolio. Built using HTML, CSS, JavaScript and React.`,
      badges: [
        { content: "HTML, CSS and JavaScript to create a front-end page" },
        { content: "React used to create declarative components for the UI" },
        {
          content:
            "GitHub pages (with Google domains) to host the website at my URL",
        },
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
