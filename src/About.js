import React, { useState } from "react";
import AboutCard from "./AboutCard.js";

export default function About() {
  return (
    <div className="about">
      <AboutCard title="Currently Playing" />
      <AboutCard title="Currently Working On" />
      <AboutCard title="Currently Watching" />
      <AboutCard title="Currently Studying" />
    </div>
  );
}
