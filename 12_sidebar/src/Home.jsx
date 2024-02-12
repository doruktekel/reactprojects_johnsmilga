import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContex } from "./context";

const Home = () => {
  const { openModal, openSideBar } = useGlobalContex();

  return (
    <main>
      <button className="sidebar-toogle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
