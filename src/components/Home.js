import React, { useState, useEffect } from "react";

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

  /*  Consider the following flow:
  1. Perform first CSS animation (title goes up and disappears)
  2. After that animation has completed, increment title
  3. Perform second CSS animation (new title comes up from bottom and fades in)
  4. Pause for n seconds
  */

  // useEffect? whenever title changes, start the animation (roll-in), wait 2.4 seconds, roll-out, updateTitle

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-header">Jake Davies</h1>

        <div className="title-box">
          <h3 id="my-title">{titles[title]}</h3>
        </div>
      </div>
    </div>
  );
}
