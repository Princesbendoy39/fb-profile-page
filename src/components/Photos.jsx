import React from "react";
import "../styles/Photos.css"; // optional CSS file

function Photos() {
  const photos = ["c.jpeg", "Jhon.jpg", "Jasmen.jpg", "sea.jpg", "tang.jpg", "men.jpg", "ME.jpg", "carlo.jpg", "jas.jpg"];

  return (
    <div className="photos">
      <h3>Photos</h3>
      <div className="photos-grid">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={`/${photo}`} // lagay mo sa /public folder
            alt={`Photo ${i + 1}`}
            className="photo-item"
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;
