import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import Player from "./pages/player";
import MovieDetails from "./pages/movies-details";
import SeriesDetails from "./pages/series-details";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Search from "./pages/search";
import Login from "./pages/login";

const NotFound = () => (
  <div className="text-center">
    Oops what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/play-content/:id" exact component={Player} />
    <Route path="/search" exact component={Search} />
    <Route path="/login" exact component={Login} />
    <Route path="/movies" exact component={Movies} />
    <Route path="/movies/:id" exact component={MovieDetails} />
    <Route path="/series" exact component={Series} />
    <Route path="/series/:id" exact component={SeriesDetails} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
