import UnitCard from "./UnitCard";

/**
 * This component contains all the information regarding my education at the University of Bath.
 * I had highlight cards showcasing the key modules I have undertaken (or am undertaking).
 */
export default function Education() {
  let units = [
    {
      unitTitle: "Machine Learning",
      unitDesc: `A look into a wide variety of techniques used in modern machine learning. Including deep neural networks, and reinforcement learning.
      This unit had a practical focus on libraries such as sklearn, and TensorFlow.`,
      unitLink: "https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20315.html",
    },
    {
      unitTitle: "Data Structures & Algorithms",
      unitDesc: `This unit was a comprehensive look at the ways we can analyse different data structures and algorithms, and included looking at some more
      advanced and abstract types, and when to apply them.`,
      unitLink: "https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20254.html",
    },
    {
      unitTitle: "Principles of Programming 2",
      unitDesc: `A practical based introduction to writing good quality software, with object orientation in C, Java and Python. This unit covered GUIs,
      multi-threading, networking, object orientation, memory management and was driven by practical based assignments.`,
      unitLink: "https://www.bath.ac.uk/catalogues/2021-2022/cm/CM10228.html",
      unitGrade: "87%",
    },
    {
      unitTitle: "Fundamentals of Visual Computing",
      unitDesc: `A study of the fundamental concepts used for graphics rendering, image manipulation, animation and more. This unit provided a way to 
      interact with graphics in WebGL, using Three.js and Python Labs to apply these concepts.`,
      unitLink: "https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20219.html",
    },
  ];

  return (
    <section className="education">
      <h1 className="section-title">Education</h1>
      <section className="unit-card-container">
        {units.map((unit) => {
          return <UnitCard unit={unit} />;
        })}
      </section>
    </section>
  );
}
