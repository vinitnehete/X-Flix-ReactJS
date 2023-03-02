import "./App.css";

import Main from "./components/Main";
import Videopage from "./components/Videopage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";


function App() {
  return (
    
    <BrowserRouter>
    <React.StrictMode>
    
      <Switch>
      <Route path="/video/:id" >
        <Videopage />
      </Route>
      <Route exact path="/" >
        <Main />
      </Route>
      </Switch>
   
    </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
