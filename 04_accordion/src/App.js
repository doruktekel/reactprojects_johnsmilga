import { useState } from "react";
import "./App.css";
import questions from "./data";
import Question from "./components";

function App() {
  const [ques, setQues] = useState(questions);
  console.log(ques);

  return (
    <div className="container">
      <h1>questions and answers about login</h1>
      {ques?.map((que) => {
        return <Question key={que.id} {...que} />;
      })}
    </div>
  );
}

export default App;
