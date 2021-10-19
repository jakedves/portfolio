export default function ShowcaseItem({ project, rightAligned }) {
  return (
    <div
      className={
        "showcase-item " + `${rightAligned ? "right-aligned" : "left-aligned"}`
      }
    >
      <img src={project.image} alt="" />
      <div className="showcase-text">
        {/* attributes here are empty */}
        <strong>{project.name}</strong>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
