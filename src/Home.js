import React, { useState } from "react";

export default function Home() {
  const titles = [
    "iOS Developer",
    "Java Developer",
    "Web Developer",
    "Computer Scientist",
  ];
  const [title, setTitle] = useState(0);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Jake Davies</h1>

        <div className="title-box">
          <h3>{titles[title % titles.length]}</h3>
        </div>
      </div>
    </div>
  );
}
