import { useState } from "react";
import "./App.css";
import menu from "./data";
import Tabs from "./components/Tabs/Tabs";
import Menus from "./components/Menus/Menus";
const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(uniqueCategories);

  console.log(categories);

  const filterItem = (cat) => {
    if (cat === "all") {
      setMenuItem(menu);
      return;
    }
    const newMenuItem = menu.filter((item) => item.category === cat);
    setMenuItem(newMenuItem);
  };

  return (
    <div className="container">
      <h1 className="header">our menu</h1>
      <div className="underline"></div>
      <Tabs categories={categories} filterItem={filterItem} />
      <Menus menuItem={menuItem} />
    </div>
  );
}

export default App;
