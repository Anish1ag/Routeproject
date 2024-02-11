import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="logoimg">
          <img src="logo.png" alt="" height={"55px"} />
        </div>
        <div className="navcont">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-main" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-main" : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-main" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact_us"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-main" : ""
            }
          >
            Contact Us
          </NavLink>
          <NavLink className="login " to="/login">
            Login{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
