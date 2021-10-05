export default function AboutCard({ title, description = "" }) {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-desc">{description}</p>
    </div>
  );
}
