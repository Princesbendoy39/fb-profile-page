import React from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import "./styles/App.css";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="app">
      <Header />
      <ProfileHeader />
      <Tabs />
    </div>
  );
}

export default App;
