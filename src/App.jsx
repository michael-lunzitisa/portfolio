import NavBar from "./components/NavBar";
import About from "./components/About";
import Skils from "./components/Skils";
import Projet from "./components/Projet";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-[100vh] bg-[#313444] w-full">
      <NavBar />
      <About />
      <Skils />
      <Projet />
      <Contact />
    </div>
  );
}

export default App;
