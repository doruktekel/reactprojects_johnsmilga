import { useState } from "react";
import "./App.css";
import People from "./component/People";
import data from "./data";

function App() {
  const [users, setUsers] = useState(data);
  const removeAll = () => {
    setUsers([]);
  };
  const refreshAll = () => {
    setUsers(data);
  };
  return (
    <div className="App">
      <h1>{users.length} Birthdays Today</h1>
      <People users={users} />
      <div className="btns">
        {users.length !== 0 ? (
          <button onClick={removeAll} className="btn">
            Remove All
          </button>
        ) : (
          <button onClick={refreshAll} className="btn">
            Refresh
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
