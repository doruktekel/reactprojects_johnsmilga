import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./component/Tours";
import Loading from "./component/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  if (loading === true) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="App">
        <h1 className="header">We havent enough tour to show</h1>
        <button onClick={fetchData} className="refresh">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="header">Our Tours</h1>
      <div className="line"></div>
      <Tours data={data} removeItem={removeItem} />
    </div>
  );
}

export default App;
