export default function ShowcaseItem({ item, rightAligned }) {
  return (
    <div className="showcase-item">
      {rightAligned && <div>I am right aligned</div>}
      {!rightAligned && <div>I am not right aligned</div>}
    </div>
  );
}
