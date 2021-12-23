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

  function incrementTitle() {
    setTitle((num) => (num + 1) % titles.length);
  }

  /*  Consider the following flow:
  1. Perform first CSS animation (title goes up and disappears)
  2. After that animation has completed, increment title
  3. Perform second CSS animation (new title comes up from bottom and fades in)
  4. Pause for n seconds
  */

  // useEffect: whenever title changes, start the animation (roll-in), wait 2.4 seconds, roll-out, updateTitle
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  useEffect(() => {
    delay(2400).then(() => {
      var titleElement = document.getElementById("my-title");

      titleElement.style.animation = "roll-out 0.3 linear 1";
      titleElement.style.animationPlayState = "paused";
      titleElement.style.animationPlayState = "running";

      setTitle((num) => (num + 1) % titles.length);

      titleElement.style.animation = "roll-in 0.3 linear 1";
      titleElement.style.animationPlayState = "paused";
      titleElement.style.animationPlayState = "running";
    });
  }, [title, titles.length]);

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
