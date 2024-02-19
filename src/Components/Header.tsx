import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center p-3 text-black">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center text-black mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="Search Games"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon
            className="text-[35px] bg-slay-200 text-black p-1 rounded-full"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slay-200 text-black p-1 rounded-full"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
