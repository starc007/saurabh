import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("sv2theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // change background color
      document.documentElement.style.setProperty("background-color", "#18181b");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("background-color", "#fff");
    }
  }, [theme]);

  const toggleTheme = () => {
    //set theme to local storage
    if (theme === "dark") {
      localStorage.setItem("sv2theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("sv2theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <div className="px-4 mx-auto sm:max-w-4xl">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="lg:px-10">
        <About />
        <Work />
        {/* <Experience /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
