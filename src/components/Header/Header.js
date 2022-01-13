import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; 
import "./Header.css";
const Header = () => {
  const {user,logOut}=  useAuth()
  
  return (
    <div>
      <Link className="navigation" to="/home">
        Home
      </Link>
      <Link className="navigation" to="/shipping">
         Shipping
      </Link>
      <Link className="navigation" to="/placeOrder">
        Place Order
      </Link>
      <Link className="navigation" to="/login">
        Login
      </Link>
      <Link className="navigation" to="/register">
        Register
      </Link>
      <span>{user.displayName} </span>
      {user?.email&& <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default Header;
