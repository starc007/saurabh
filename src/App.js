import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-52 ">
      <Navbar />
      <About />
      <Work />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
