import About from "./components/About";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="px-4 mx-auto sm:max-w-4xl">
      <Navbar />
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
