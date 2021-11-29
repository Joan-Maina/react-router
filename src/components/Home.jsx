import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import React from "react";
import Navigate from "./Navigate";
import "../styles/Home.css";

function Home() {
  //check on a change on URL
  window.addEventListener("popstate", () => {
    // URL changed!
    console.log("URL changed!");
  });
  //it's an object and contains location and action
  let history = useHistory();
  // history.listen((location, action) => {
  //   // this is called whenever new locations come in
  //   // the action is POP, PUSH, or REPLACE
  //   console.log(location);
  // });
  // const handleClick = (e) => {
  //   history.push("/navigate");
  // };

  return (
    <div className="main-container">
      <p>home</p>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/shop">
        <button>Shop</button>
      </Link>

      {/* when using useLocation */}
      {/* <Link to="location?type=locationone">
        <button>location 1</button>
      </Link>
      <Link to="location?type=locationtwo">
        <button>location 2</button>
      </Link> */}

      {/* when using useParams and nested routes*/}
      <Link to="/location/locationone">
        <button>location 1</button>
      </Link>
      <Link to="/location/locationtwo">
        <button>location 2</button>
      </Link>

      {/* <button></button> */}
      {/* <Route exact path="/navigate" component={Navigate}></Route> */}

      {/* <button onClick={(e) => handleClick(e)}>Navigate</button> */}
      <a
        href="/contact"
        onClick={(event) => {
          // stop the browser from changing the URL and requesting the new document
          event.preventDefault();
          // push an entry into the browser history stack and change the URL
          window.history.pushState({}, undefined, "/contact");
        }}
      >
        contact
      </a>
    </div>
  );
}

export default Home;
