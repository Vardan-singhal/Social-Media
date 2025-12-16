import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="mobile-nav d-md-none">
      <NavLink to="/" end className="mobile-nav-item">
        🏠
      </NavLink>

      <NavLink to="/explore" className="mobile-nav-item">
        🔍
      </NavLink>

      <NavLink to="/create" className="mobile-nav-item">
        ➕
      </NavLink>

      <NavLink to="/chat" className="mobile-nav-item">
        💬
      </NavLink>

      <NavLink to="/profile/1" className="mobile-nav-item">
        👤
      </NavLink>
    </nav>
  );
};

export default MobileNav;
