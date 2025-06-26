import { CDN_LOGO_URL } from "../utils/constants";

const Header = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;