import { Link } from "react-router-dom";
import { CDN_LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userData } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-md fixed top-0 left-0 right-0 h-24 py-8 z-[1000] bg-gray-100">
      <div className="logo">
        <img className="w-[128]" src={CDN_LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex text-base font-semibold tracking-normal font-[Gilroy,arial,Helvetica Neue,sans-serif]">
          <li className="p-2.5 m-2.5">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-2.5 m-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
          <li className="p-2.5 m-2.5">{userData.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
