import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './comp/pages/home';
import Nav from './comp/bars/nav';
import Login from './comp/pages/login';
import Register from './comp/pages/register';
import User from './comp/pages/user';
import User2 from './comp/pages/user2';
import Profile from './comp/pages/profile';




function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/> 
    <Route path="/login" exact component={Login}/>
    <Route path="/register" exact component={Register}/>
    <Route path="/user" exact component={User}/>
    <Route path="/user2" exact component={User2}/>
    <Route path="/profile/:userId" exact component={Profile} data={User} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
