import BadgeList from "./BadgeList";

export default function Project({ project }) {
  return (
    <div className={`showcase-item`}>
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
