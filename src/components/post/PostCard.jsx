import { useState } from "react";
import Avatar from "../common/Avatar";

const PostCard = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(128);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="ig-post-card mb-4">
      {/* Header */}
      <div className="ig-post-header d-flex align-items-center justify-content-between px-3 py-2">
        <div className="d-flex align-items-center">
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="username"
            size="sm"
          />
          <strong className="ms-2">username</strong>
        </div>
        <button className="ig-icon-btn">⋯</button>
      </div>

      {/* Image */}
      <div className="ig-post-media">
        <img
          src="https://picsum.photos/600/600"
          alt="post"
        />
      </div>

      {/* Actions */}
      <div className="ig-post-actions px-3 pt-2 d-flex justify-content-between">
        <div className="d-flex gap-3">
          <button
            className="ig-icon-btn"
            onClick={toggleLike}
            title="Like"
          >
            {liked ? "❤️" : "🤍"}
          </button>
          <button className="ig-icon-btn" title="Comment">
            💬
          </button>
          <button className="ig-icon-btn" title="Share">
            ✈️
          </button>
        </div>
        <button className="ig-icon-btn" title="Save">
          🔖
        </button>
      </div>

      {/* Likes */}
      <div className="px-3 fw-semibold small">
        {likesCount} likes
      </div>

      {/* Caption */}
      <div className="px-3 py-1">
        <strong>username</strong>{" "}
        <span className="ig-post-caption">
          This is a sample Instagram-style caption 🔥
        </span>
      </div>

      {/* Time */}
      <div className="px-3 text-muted small mb-1">
        2 hours ago
      </div>

      {/* Add Comment */}
      <div className="ig-post-comment d-flex align-items-center px-3 py-2 border-top">
        <input
          className="ig-comment-input"
          placeholder="Add a comment..."
        />
        <button className="btn btn-link btn-sm">Post</button>
      </div>
    </div>
  );
};

export default PostCard;
