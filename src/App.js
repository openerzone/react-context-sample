import "./styles.css";
import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";

export default function App() {
  return (
    <div className="App">
      <SelectColor />
      <hr />
      <ColorBox />
    </div>
  );
}
