import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContex } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContex();

  return (
    <aside
      className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar "} `}
    >
      <div className="sidebar-header">
        <h1>zibabda zibab</h1>
        <div className="close-btn">
          <FaTimes onClick={closeSideBar} />
        </div>
      </div>
      <ul className="links">
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
