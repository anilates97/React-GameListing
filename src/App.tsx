import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState<any>("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#3a3a3a]" : null
        }  min-h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
