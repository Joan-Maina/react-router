import { useHistory } from "react-router";
import React from "react";

function History() {
  const history = useHistory();
  const goBack = (e) => {
    window.history.back();
    // window.history.go(-1);
  };
  const goForward = (e) => {
    window.history.forward();
    // window.history.go(1);
  };
  const refreshPage = (e) => {
    window.history.go(0);
    // window.history.go();
  };
  let numberOfEntries = window.history.length;
  //   console.log(numberOfEntries);
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <button onClick={refreshPage}>Refresh page</button>
    </div>
  );
}

export default History;
