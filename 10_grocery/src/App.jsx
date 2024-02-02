import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert/Alert";
import List from "./components/List/List";

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please enter at least one item", "danger");
    } else if (name && isEditing) {
      const newList = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(newList);
      showAlert(true, "Item was editted", "success");
      setName("");
      setEditId("");
      setIsEditing(false);
    } else {
      showAlert(true, "Item was added", "success");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleClear = () => {
    showAlert(true, "All items removed", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    console.log(id);
    showAlert(true, "Item was delete", "danger");
    const newlist = list.filter((item) => item.id !== id);
    setList(newlist);
  };

  const editItem = (id) => {
    setIsEditing(true);
    const getItem = list.find((item) => item.id === id);
    setName(getItem.title);
    setEditId(id);
  };

  const showAlert = (show = false, msg, type) => {
    setAlert({ show, msg, type });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="container">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h1>Grocery Bud</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="e.g eggs"
        />
        <button type="submit" className="btn">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>
      {list?.map((item, index) => {
        return (
          <div key={index}>
            <List {...item} removeItem={removeItem} editItem={editItem} />
          </div>
        );
      })}
      {list.length > 0 && (
        <button className="clear" onClick={handleClear}>
          Clear Items
        </button>
      )}
    </div>
  );
}

export default App;
