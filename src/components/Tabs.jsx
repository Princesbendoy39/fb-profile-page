import React, { useState } from "react";
import "../styles/ProfileHeader.css"; // make sure CSS below is included

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  const tabs = ["Posts", "About", "Reels", "Photos"];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
