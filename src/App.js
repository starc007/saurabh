import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 ">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Experience />
    </div>
  );
}

export default App;
