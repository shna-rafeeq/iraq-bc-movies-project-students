import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import Info from "./Components/info";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { StateProvider, StateContext } from "./Components/StateProvider";

export default function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <StateProvider>
            <Header />
            <Route path="/iraq-bc-movies-project-students">
              <Redirect to="/"> </Redirect>
            </Route>
            <Route path="/movie/:id" component={MoviePage} />
            <Route path="/person/:id" component={Info} />
            <Route exact path="/" component={Main} />
          </StateProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
