import "./navBar.css";
import { LogOut } from "../logOut"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo"> Beach Life</div>
      <div className="menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <LogOut className="nav-link">
              Log Out
            </LogOut>
          </li>

        </ul>
      </nav>
    </header>
  );
};
