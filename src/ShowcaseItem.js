import Projects from "./Projects";
import BadgeList from "./BadgeList";

export default function ShowcaseItem({ project, rightAligned }) {
  return (
    <div
      className={`showcase-item ${
        rightAligned ? "right-aligned" : "left-aligned"
      }`}
    >
      {project.image ? (
        <img src={project.image} alt={`${project.name}`} />
      ) : null}
      <div className="showcase-text">
        {/* attributes here are empty */}
        <strong>{project.name}</strong>
        <p>{project.desc}</p>

        {project.tools ? <BadgeList tools={project.tools} /> : null}
      </div>
    </div>
  );
}
