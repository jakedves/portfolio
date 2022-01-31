import BadgeList from "./BadgeList";

/**
 * This component is used to display a project as the user scrolls through the website
 * @param {project object: name, descriptions, image, tools, skills}
 * @returns
 */
export default function Project({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-desc-short">{project.shortDesc}</p>
      <BadgeList tools={project.tools}></BadgeList>
    </div>
  );
}
