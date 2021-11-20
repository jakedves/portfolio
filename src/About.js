import React from "react";
import AboutCard from "./AboutCard.js";
import AboutText from "./AboutText.js";
import MKW from "./MarioKartWii.png";
import SquidGame from "./SquidGame.jpg";

export default function About() {
  return (
    <div className="about">
      <AboutText
        title="Hi, I'm Jake."
        body="I love experimenting with technology and trying new things."
      />
    </div>
  );
}
