import { useState } from "react";
import "./App.css";
import Values from "values.js";
import Color from "./components/Color";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([...new Values("#F15025").all(10)]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColors = new Values(color).all(10);
      setList(newColors);
    } catch (error) {
      setError(true);
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>color generator</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="input"
            id="input"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : "input"}
          />
          <button className="btn">submit</button>
        </form>
      </div>
      <div className="colors">
        {list?.map((item, index) => {
          return <Color key={index} {...item} index={index} hex={item.hex} />;
        })}
      </div>
    </div>
  );
}

export default App;
