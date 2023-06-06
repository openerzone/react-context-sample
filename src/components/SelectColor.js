import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green"];

export default function SelectColor() {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer"
            }}
          />
        ))}
      </div>
    </div>
  );
}
