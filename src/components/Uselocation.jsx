import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Link,
} from "react-router-dom";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import Locationone from "./Locationone";
import Locationtwo from "./Locationtwo";

function Uselocation() {
  //   //DESTRUCTURE SEARCH FROM USELOCATION
  //   const { search } = useLocation();
  //   //USE MATCH FUNCTION TO MATCH SEARCH AND TYPE
  //   const match = search.match(/type=(.*)/);
  //   const type = match?.[1];
  // DESTRUCTURE TYPE FROM URL PARAMETERS
  //   const { type } = useParams();

  //NESTED ROUTES
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <p>Uselocation</p>
      {/* WITH HOOKS */}
      {/* {type === "locationone" && <Locationone />}
      {type === "locationtwo" && <Locationtwo />} */}

      {/* NESTED ROUTES */}
      <Switch>
        <Route path={`${path}/locationone`}>
          <Locationone />
        </Route>
        <Route path={`${path}/locationtwo`}>
          <Locationtwo />
        </Route>
      </Switch>
    </>
  );
}

export default Uselocation;
