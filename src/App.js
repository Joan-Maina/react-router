import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Shop />
    </div>
  );
}

export default App;
