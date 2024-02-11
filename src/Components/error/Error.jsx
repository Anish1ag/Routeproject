import "./error.css";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <div className="head">404 page not found! </div>
      <br />
      <div className="msg">
        Sorry, The page you are trying to reach is currently not available at
        the moment.
      </div>
      <div className="a">
        <NavLink to="/">Direct to Home page</NavLink>
      </div>
    </div>
  );
}

export default Error;
