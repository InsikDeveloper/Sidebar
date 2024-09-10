import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";

const Navbar = ({ isClick, setIsClick }) => {
  return (
    <div
      className="absolute top-0 left-0 min-h-screen bg-slate-900 text-white px-3 duration-100 "
      style={isClick ? { width: "250px" } : { width: "80px" }}
    >
      <span className="flex justify-end">
        <button
          className="text-3xl font-semibold"
          onClick={() => setIsClick(!isClick)}
        >
          <i
            className={
              isClick ? "bx bx-left-arrow-alt " : "bx bx-right-arrow-alt"
            }
          ></i>
        </button>
      </span>
      <nav>
        <Home isClick={isClick} />
        <Profile isClick={isClick} />
      </nav>
    </div>
  );
};

export default Navbar;
