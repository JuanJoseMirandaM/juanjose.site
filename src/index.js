import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Home from "views/Home";
import Inf111 from "views/auxiliaturas/inf111/Inf111";
import NavBar from "components/Navbars/Navbar";
import Footer from "components/Footers/Footer";
import Inf113 from "views/auxiliaturas/inf113/Inf113";
// others

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/inf111" render={(props) => <Inf111 {...props} />} />
      <Route exact path="/inf113" render={(props) => <Inf113 {...props} />} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
