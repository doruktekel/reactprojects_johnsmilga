import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCount = +count;
    if (newCount < 0) {
      newCount = 1;
    }
    if (newCount > 5) {
      newCount = 5;
    }
    setArr(data.slice(0, newCount));
  };
  return (
    <div className="container">
      <h1>tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <section className="text">
        {arr.map((item, index) => {
          return (
            <p key={index} className="paragraph">
              {item}
            </p>
          );
        })}
      </section>
    </div>
  );
}

export default App;
