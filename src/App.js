import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store";

import Navbar from "./components/Navbar/Navbar";
import RandomImages from "./components/RandomImagesComponent/RandomImages";
import FavsComponent from "./components/FavsComponent/FavComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={RandomImages} />
          <Route path="/favs" component={FavsComponent} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
