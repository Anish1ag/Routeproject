import { NavLink, Outlet } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="sidenav">
        <ul>
          <li>
            <NavLink to="">First content</NavLink>
          </li>
          <li>
            <NavLink to="/second">Second content</NavLink>
          </li>
          <li>
            <NavLink to="/third">Third content</NavLink>
          </li>
          <li>
            <NavLink to="/fourth">Fourth content</NavLink>
          </li>
          <li>
            <NavLink to="/fifth">Fifth content</NavLink>
          </li>
        </ul>
      </div>
      <div className="out">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
