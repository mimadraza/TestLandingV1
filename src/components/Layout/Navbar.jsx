import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">AI Builder</NavLink>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

        {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
      </ul>

      <div className="nav-actions">
  {!user ? (
    <>
      <NavLink to="/login" className="nav-login">
        Login
      </NavLink>

      <NavLink to="/register" className="nav-primary">
        Sign Up
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to="/dashboard" className="nav-login">
        Dashboard
      </NavLink>

      <button onClick={logout} className="nav-login">
        Logout
      </button>
    </>
  )}
</div>

    </nav>
  );
}

export default Navbar;
