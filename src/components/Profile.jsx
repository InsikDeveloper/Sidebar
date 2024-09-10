import React, { useState } from "react";

const Profile = ({ isClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className=" flex  items-center gap-3">
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className=""
      >
        <i className="bx bx-user text-2xl font-semibold"></i>
      </span>
      <p className={isClick ? "block" : "hidden"}>Profile</p>
      {isHover && !isClick && (
        <span className="absolute left-20 text-xs font-bold bg-slate-800 py-1 px-2 rounded-full">
          Profile
        </span>
      )}
    </div>
  );
};

export default Profile;
