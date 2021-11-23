export default function AboutCard({ title, description, imagePath }) {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      {imagePath && (
        <img
          className="card-image"
          src={imagePath}
          alt={`what I'm currently ${title}`}
        />
      )}
      <p className="card-desc">{description}</p>
    </div>
  );
}
