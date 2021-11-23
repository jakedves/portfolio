export default function BadgeList({ tools }) {
  const blackText = ["yellow", "orange", "white", "lightblue", "skyblue"];

  return tools.map((tool) => {
    return (
      <div
        className="tool"
        style={{
          background: tool.color,
          color: blackText.includes(tool.color) ? "black" : "white",
        }}
      >
        {tool.tool}
      </div>
    );
  });
}
