import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import RestaurantCreate from "./Components/RestaurantCreate";
import RestaurantDetail from "./Components/RestaurantDetail";
import RestaurantSearch from "./Components/RestaurantSearch";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import Login from "./Components/Login";
import Logout from './Components/Logout';
import RestaurantList from "./Components/RestaurantList";
import Protected from "./Components/Protected"


function App() {
    return (
    <div className="App" >
        <Router>
            <Protected exact path="/" component={Home} />
            <Protected exact path="/Create" component={RestaurantCreate} />
            <Protected exact path="/Detail" component={RestaurantDetail} />
            <Protected exact path="/Search" component={RestaurantSearch} />
            <Protected exact path="/List" component={RestaurantList} />
            <Route path="/logout">
                <Logout />
            </Route>
            <Protected exact path="/Update/:id" component={RestaurantUpdate} />
            <Route path="/login"
            render={props=>(
             <Login{...props}/>
              )}>    
            </Route>
        </Router></div>
    );
}

export default App;