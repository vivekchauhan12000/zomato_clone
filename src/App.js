import React from 'react';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";

import './App.css';
//import List from "./components/List";
import Home from "./pages/Home";
import FilterPage from "./pages/Filterpage";
import Detail from "./pages/Detail";
import Cart from "./components/Cart";


function App() {
  return (

    <Router>
    
    <Switch>
    
    <Route path="/" exact component={Home}/>
    <Route path="/search" component={FilterPage}/>
    <Route path="/Detail/:id" component={Detail}/>

    <Route path="/cart" component={Cart}/>
    </Switch>
    </Router>
    
  );
}

export default App;
