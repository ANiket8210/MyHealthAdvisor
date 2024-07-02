import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdownMenu = (props) => {
  
  const Show= props.OpenPfp?'block':'hidden';
  
  return (
    <div className={`mt-3 mb-3 space-y-1 px-2 ${Show}`}>
      <Link
        to="/sign-in"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-slate-950 hover:text-white"
      >
        Your Profile
      </Link>
      <Link
        to="/"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-slate-950 hover:text-white"
      >
        Sign out
      </Link>
    </div>
  );
};

export default ProfileDropdownMenu;
