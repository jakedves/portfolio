import ShowcaseItem from "./ShowcaseItem";

export default function Showcase(props) {
  /* We will add a Showcase Item component which will represent our projects */
  let right = true;

  return (
    <div className="showcase">
      {props.projects.map((project) => (
        <ShowcaseItem rightAligned={(right = !right)} />
      ))}
    </div>
  );
}
