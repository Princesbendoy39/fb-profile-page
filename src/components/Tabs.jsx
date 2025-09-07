import React, { useState } from "react";
import Posts from "./Posts";
import Intro from "./Intro";
import Friends from "./Friends";
import Photos from "./Photos";
import "../styles/Tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  const friendsList = [
    { name: "Jasmen Banda", avatar: "/images/Jasmen.jpg" },
    { name: "Jhon Carlo Tanghinan", avatar: "/images/Jhon.jpg" },
    { name: "Charlie", avatar: "/images/charlie.jpg" },
    { name: "David", avatar: "/images/david.jpg" },
  ];

  const photoList = [
    "/images/view.jpeg",
    "/images/alice.jpg",
    "/images/bob.jpg",
    "/images/charlie.jpg",
  ];

  return (
    <div>
      <div className="tabs-content">
        {["Posts", "About", "Friends", "Photos"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === "Posts" && <Posts />}
        {activeTab === "About" && <Intro />}
        {activeTab === "Friends" && <Friends friends={friendsList} />}
        {activeTab === "Photos" && <Photos images={photoList} />}
      </div>
    </div>
  );
}

export default Tabs;
