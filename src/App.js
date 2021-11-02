import React from "react";
import { Header } from "./component";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
