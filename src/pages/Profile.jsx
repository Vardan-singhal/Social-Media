import { useState } from "react";
import Avatar from "../components/common/Avatar";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="ig-profile container">
      {/* Profile Header */}
      <div className="ig-profile-header row align-items-center">
        {/* Avatar */}
        <div className="col-4 col-md-3 text-center">
          <Avatar
            src="https://i.pravatar.cc/150?img=11"
            alt="username"
            size="xl"
          />
        </div>

        {/* Info */}
        <div className="col-8 col-md-9">
          <div className="d-flex align-items-center flex-wrap gap-2">
            <h4 className="mb-0 me-2">username</h4>

            <button
              className={`btn btn-sm ${
                isFollowing ? "btn-outline-secondary" : "btn-primary"
              }`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>

            <button className="btn btn-sm btn-outline-secondary">
              Message
            </button>
          </div>

          {/* Stats */}
          <div className="ig-profile-stats d-flex gap-4 mt-3">
            <span>
              <strong>24</strong> posts
            </span>
            <span>
              <strong>1,240</strong> followers
            </span>
            <span>
              <strong>180</strong> following
            </span>
          </div>

          {/* Bio */}
          <div className="ig-profile-bio mt-3">
            <strong>Your Name</strong>
            <p className="mb-1">
              Frontend Developer 🚀 <br />
              Building Instagram-like apps
            </p>
            <a href="#" className="ig-profile-link">
              yourwebsite.com
            </a>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="ig-profile-highlights d-flex gap-3 my-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="ig-highlight-item text-center">
            <div className="ig-highlight-circle">+</div>
            <small>Story {i + 1}</small>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr />

      {/* Tabs */}
      <div className="ig-profile-tabs d-flex justify-content-center gap-4 mb-3">
        <span className="active">📷 POSTS</span>
        <span>🔖 SAVED</span>
        <span>🏷 TAGGED</span>
      </div>

      {/* Posts Grid */}
      <div className="ig-profile-grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="ig-profile-grid-item">
            <img
              src={`https://picsum.photos/600/600?random=${i}`}
              alt="post"
            />
            <div className="ig-profile-grid-overlay">
              ❤️ {i * 12} &nbsp; 💬 {i * 3}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
