import ShowcaseItem from "./ShowcaseItem";

export default function Showcase(props) {
  return (
    <div className="showcase">
      {props.projects.map((project) => (
        <ShowcaseItem project={project} rightAligned={false} />
      ))}
    </div>
  );
}
