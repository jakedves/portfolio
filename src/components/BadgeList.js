export default function BadgeList({ badges }) {
  if (badges == null) {
    return null;
  }

  return badges.map((badge) => {
    return (
      <div className="badge">
        <h6>{badge.content}</h6>
      </div>
    );
  });
}
