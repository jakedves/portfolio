import React, { useState } from "react";
import AboutCard from "./AboutCard.js";

export default function About() {
  return (
    <div className="about">
      <AboutCard title="Playing" />
      <AboutCard title="Current Project" />
      <AboutCard title="Watching" />
      <AboutCard title="Studying" />
    </div>
  );
}
