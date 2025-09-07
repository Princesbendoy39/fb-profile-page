import React from "react";
import "../styles/Friends.css";

function Friends() {
  const friends = [
    { name: "Jasmen Banda", avatar: "Jasmen.jpg", mutual: "30 mutual friends" },
    { name: "Jhon Carlo Tanghinan", avatar: "Jhon.jpg", mutual: "15 mutual friends" },
    { name: "Jasmen Dump", avatar: "Banda.jpg", mutual: "10 mutual friends" },
    { name: "Princes Dump", avatar: "c.jpeg", mutual: "50 mutual friends" },
  ];

  return (
    <div className="friends">
      <h3>Friends</h3>
      <div className="friends-list">
        {friends.map((friend, i) => (
          <div className="friend-card" key={i}>
            <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
            <div className="friend-info">
              <p className="friend-name">{friend.name}</p>
              <p className="mutual-friends">{friend.mutual}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Friends;
