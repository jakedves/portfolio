export default function AboutText({ title, body }) {
  return (
    <div className="about-text">
      <h1 className="about-title">{title}</h1>
      <h2 className="about-body">{body}</h2>
    </div>
  );
}
