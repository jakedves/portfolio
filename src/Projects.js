import Showcase from "./Showcase";
import RecipeBuilder from "./RecipeBuilderiOS.png";

export default function Projects() {
  let projects = [
    {
      name: "Recipe Builder for iOS",
      desc: `Recipe Builder is the ultimate recipe-building app, made for iOS. It is simple. Fast. Easy to use.
       Recipe Builder is an app that cuts out all the details of other recipe-building apps. No need to enter the cost
       of a recipe, how many calories it has, or anything else you don't care about. Aimed at students, Recipe Builder is 
       the most convenient solution available. Download on the App Store today.`,
      image: RecipeBuilder,
      tools: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit"],
    },
    {
      name: "The JDX Compiler",
      desc: "A compiler written in Swift",
    },
    {
      name: "Sleep & Mood Tracker for Desktop",
      desc: `A Java app that tracks a users mood and sleep over time, giving them tips on how to 
      improve their lifestyle`,
      tools: ["Java", "Java Swing", "SQL", "JFreeChart", "Scrum Methodology"],
    },
    {
      name: "Worlds Apart",
      desc: `This game was a submission for the GMTK 2021 Game Jam, where we had 48 hours to design,
       develop and submit a game, based on the theme: Joined Together. The basis of the game is that you are 
       alone, lost in the world and you need to solve some puzzles to escape. Luckily for you, what you realise 
       is that you are actually in two places, at once (or are you?), and you have to work with yourself on one side, 
       to unlock puzzles on the other side.
       \n
       This game was made using Unity3D, C# and we worked with pair programming, and designed the map ourselves. The assets
        used in the game were all free assets from the Unity Asset Store.`,
      tools: ["C#", "Unity 3D", "Unity Animator", "Scripting"],
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">Take a look.</h1>
      <Showcase projects={projects} />
    </div>
  );
}
