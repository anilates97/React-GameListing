import { useContext } from "react";
import logo from "../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3 text-black">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center text-black mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="px-2 bg-transparent outline-none "
          placeholder="Search Games"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className={`text-[35px] bg-slate-200  p-1 rounded-full ${
              theme === "dark" && "bg-white text-black"
            }`}
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
