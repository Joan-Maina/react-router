import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About";
import History from "./components/History";
import Uselocation from "./components/Uselocation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./components/Navigate";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/location" component={Uselocation} />
            <Route path="/contact" component={Contact}></Route>
            {/* HOOKS */}
            {/* <Route path="/location/:type">
              <Uselocation />
            </Route> */}
          </Switch>
        </div>
      </Router>
      {/* <History /> */}
    </>
  );
}

export default App;
