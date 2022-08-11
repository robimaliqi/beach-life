import "./BeachesNav.css";
import { LogOut } from "../logOut";
import { Link } from "react-router-dom";
import { Emoji } from "../Emojis/Emojis";

export const BeachesNav = (props) => {
  return (
    <div className="beaches-container">
      <div className="beach-nav-logo">
        BeachFinder
        <Emoji symbol={" 🔎"} label="Magnifying Glass Tilted Right" />
      </div>
      <div className="menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="beach-nav-bar">
        <ul className="beach-nav-bar-list">
          <li className="beach-nav-item">
            <Link to="/" className="beach-nav-link">
              Home
            </Link>
          </li>
          {props.user && (
            <li className="beach-nav-item">
              <LogOut className="beach-nav-link">Log Out</LogOut>
            </li>
          )}
          {!props.user && (
            <li className="beach-nav-item">
              <Link to="/register" className="beach-nav-link">
                Register
              </Link>
            </li>
          )}
          {!props.user && (
            <li className="beach-nav-item">
              <Link to="/signin" className="beach-nav-link">
                Log In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
