import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { SinglePost } from "./components/SinglePost";
import { Post } from "./components/Post";
import { Projects } from "./components/Projects";
import { Header } from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
