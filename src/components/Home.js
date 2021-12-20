import React, { useState } from "react";

export default function Home() {
  const titles = [
    "Software Engineer",
    "iOS",
    "Java",
    "Web",
    "Embedded Systems",
    "Computer Scientist",
  ];
  const [title, setTitle] = useState(0);

  function incrementTitle() {
    setTitle((title + 1) % titles.length);
  }

  /*  Consider the following flow:
  1. Perform first CSS animation (title goes up and disappears)
  2. After that animation has completed, increment title
  3. Perform second CSS animation (new title comes up from bottom and fades in)
  4. Pause for n seconds
  */

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-header">Jake Davies</h1>

        <div className="title-box">
          <h3>{titles[title]}</h3>
        </div>
      </div>
    </div>
  );
}
