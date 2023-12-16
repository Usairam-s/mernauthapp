import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex mx-auto flex-row justify-between max-w-6xl p-3 items-center">
        <Link to="/">
          <h2 className="font-semibold">MERN Auth App</h2>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>Signin</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
