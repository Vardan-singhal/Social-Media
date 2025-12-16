import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import Avatar from "../common/Avatar";

const Navbar = () => {
  return (
    <nav className="ig-navbar d-none d-md-flex">
      {/* Left: Logo */}
      <Link to="/" className="ig-navbar-logo">
        SocialGram
      </Link>

      {/* Center: Search */}
      <div className="ig-navbar-search">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      {/* Right: Icons */}
      <div className="ig-navbar-actions">
        <NavLink to="/" className="ig-nav-icon">
          🏠
        </NavLink>

        <NavLink to="/explore" className="ig-nav-icon">
          🔍
        </NavLink>

        <NavLink to="/chat" className="ig-nav-icon">
          💬
        </NavLink>

        <ThemeToggle />

        <NavLink to="/profile/1" className="ig-nav-avatar">
          <Avatar
            src="https://i.pravatar.cc/150?img=11"
            alt="profile"
            size="sm"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
