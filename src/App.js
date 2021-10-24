import React from "react";
import { Home } from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopingCart from "./components/Cart/ShopingCart/ShopingCart";
import WishCart from "./components/Cart/WishList/WishCart";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <ShopingCart />
        </Route>
        <Route path="/whislist">
          <WishCart />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
