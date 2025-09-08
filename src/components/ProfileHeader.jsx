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

      {/* Profile Pic */}
      <div className="profile-pic-container">
        <img src="/ME.jpg" alt="Profile" className="profile-pic" />
      </div>

      {/* Info Section */}
      <div className="profile-info">
        <h2 className="full-name">Princes Bendoy</h2>
        <p className="friends-count">1.2k friends • 190 following</p>

        {/* Friend previews */}
        <div className="friend-previews">
          <img src="/sea.jpg" alt="friend" />
          <img src="/jas.jpg" alt="friend" />
          <img src="/Jhon.jpg" alt="friend" />
        </div>

        {/* Bio */}
        <div className="bio">Preserverance comes success</div>
      </div>

      {/* Buttons */}
      {/* Professional Mode */}
      <div className="professional-mode">
        <button>Turn on professional mode</button>
        </div>

      <div className="profile-buttons">
        <button className="add-story">+ Add to Story</button>
        <button className="more-options">⋯</button>
      </div>
    </div>
  );
}

export default ProfileHeader;
