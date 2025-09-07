import React from "react";
import "../styles/Post.css";

function Post() {
  return (
    <div className="posts-container">
      {/* 🔹 First Post */}
      <div className="post">
        <div className="post-header">
          <div className="post-user">
            <img src="Jhon.jpg" alt="Princes Bendoy" className="post-avatar" />
            <div>
              <h4>Jhon Carlo Tanghinan</h4>
              <p className="post-time">20m · 🌍</p>
            </div>
          </div>
          <div className="post-menu">⋯</div>
        </div>

        <div className="post-content">
          <p>Ok lang kung maliit ka, kasya ka naman sa puso ko 🤭</p>
        </div>

        <div className="post-actions">
          <button>👍 Like</button>
          <button>💬 Comment</button>
          <button>↗️ Share</button>
        </div>
      </div>

      {/* 🔹 Second Post */}
      <div className="post">
        <div className="post-header">
          <div className="post-user">
            <img src="Jasmen.jpg" alt="Jasmen Banda" className="post-avatar" />
            <div>
              <h4>Jasmen Banda</h4>
              <p className="post-time">10m · 🌍</p>
            </div>
          </div>
          <div className="post-menu">⋯</div>
        </div>

        <div className="post-content">
          <p>Pwede bang i-turn off na lang ang ilaw? Para tayo na lang ang mag-ON 😉</p>
        </div>

        <div className="post-actions">
          <button>👍 Like</button>
          <button>💬 Comment</button>
          <button>↗️ Share</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
