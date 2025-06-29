import { Link } from "react-router-dom";
import { CDN_LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img
          className="food-logo"
          src={CDN_LOGO_URL}
          alt="Food App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            { onlineStatus ?  "🟢" : "🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;