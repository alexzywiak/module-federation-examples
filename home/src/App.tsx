import React, { Suspense } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import BCOne from "./BCOne";
import BCTwo from "./BCTwo";

const App = () => {
  return (
    <>
      <h1>I Am the Mono</h1>
      <BrowserRouter>
        <nav>
          <Link style={{ marginRight: "12px" }} to="/bc1">
            BC One
          </Link>
          <Link to="/bc2">BC Two</Link>
        </nav>
        <Route path="/bc1">
          <Suspense fallback={null}>
            <BCOne />
          </Suspense>
        </Route>
        <Route path="/bc2">
          <Suspense fallback={null}>
            <BCTwo />
          </Suspense>
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
