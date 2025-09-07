import React from "react";
import "../styles/ProfileHeader.css";

function ProfileHeader() {
  return (
    <div className="profile-header">
      {/* Cover Photo */}
      <div
        className="cover-photo"
        style={{ backgroundImage: "url('/view.jpeg')" }}
      ></div>

      {/* Profile Picture and Info */}
      <div className="profile-info">
        <div className="avatar-section">
          <img src="/ME.jpg" alt="Profile" className="profile-pic" />
          <h2 className="full-name">Princes Bendoy</h2>
          <p className="friends-count">1.2k friends •  190 following</p>
          <p> Preserverance comes success</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
