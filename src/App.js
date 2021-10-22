import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  });

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
