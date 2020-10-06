//import { Switch } from "@material-ui/core";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header";
import Home from "./components/home";
import Checkout from "./components/checkout";
import Login from "./components/login/login";
//import { auth } from "firebase";
import { useStateValue } from "./stateProvider";
import firebase from "firebase";
import Payment from "./components/payment";
import Orders from "./components/orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HWJn4FU3tGX8CNTDFXQ9iIaLPPvrEmyBVYgeu4gCkLTVf9DRSBKjf18oKtbUagQ8c33dZ4Qb5Ui7zMP76SWo3N000QD9wNa3u"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
