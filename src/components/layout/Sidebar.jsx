import { NavLink } from "react-router-dom";
import Avatar from "../common/Avatar";

const suggestedUsers = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    username: "emma_watson",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    username: "alex_dev",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const Sidebar = () => {
  return (
    <aside className="ig-sidebar d-none d-lg-block">
      {/* User Profile */}
      <div className="ig-sidebar-user d-flex align-items-center mb-4">
        <Avatar
          src="https://i.pravatar.cc/150?img=11"
          alt="profile"
          size="md"
        />
        <div className="ms-3">
          <strong>your_username</strong>
          <div className="text-muted small">Your Name</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="ig-sidebar-nav mb-4">
        <NavLink to="/" end className="ig-sidebar-link">
          🏠 Home
        </NavLink>
        <NavLink to="/explore" className="ig-sidebar-link">
          🔍 Explore
        </NavLink>
        <NavLink to="/chat" className="ig-sidebar-link">
          💬 Messages
        </NavLink>
        <NavLink to="/profile/1" className="ig-sidebar-link">
          👤 Profile
        </NavLink>
      </nav>

      {/* Suggestions */}
      <div className="ig-sidebar-suggestions">
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted small">Suggested for you</span>
          <button className="btn btn-link btn-sm p-0">See All</button>
        </div>

        {suggestedUsers.map((user) => (
          <div
            key={user.id}
            className="d-flex align-items-center mb-3"
          >
            <Avatar
              src={user.avatar}
              alt={user.username}
              size="sm"
            />
            <div className="ms-2 flex-grow-1">
              <strong className="small">{user.username}</strong>
            </div>
            <button className="btn btn-link btn-sm p-0">
              Follow
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
