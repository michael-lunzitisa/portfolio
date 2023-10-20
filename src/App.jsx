import NavBar from "./components/NavBar";
import About from "./components/About";
import Skils from "./components/Skils";

const App = () => {
  return (
    <div className="h-[100vh] bg-[#313444] w-full">
      <NavBar />
      <About />
      <Skils />
    </div>
  );
};

export default App;
