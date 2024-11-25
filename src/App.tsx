import About from "./components/About";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentProjects";
import Work from "./components/Work";

function App() {
  return (
    <div className="px-4 mx-auto sm:max-w-3xl">
      <Navbar />
      <div className="lg:px-10">
        <About />
        <RecentProjects />
        <Work />
        {/* <Experience /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
