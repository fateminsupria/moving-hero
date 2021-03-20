import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import ToFrom from './Components/ToFrom/ToFrom';


export const UserContext =createContext();
 

 function App() {
   document.title = "Moving Hero";

   const [loggedInUser, setLoggedInUser] = useState({ });


  return (
      <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
        <p>User:{loggedInUser.name}</p> 

        <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/login/:bedType">
            <Login/>
          </PrivateRoute>
          <Route path="/destination">
            <Destination />
            </Route>
            <Route path="/ToFrom">
              <ToFrom />
            </Route>
          <Route exact path="/">
              <Home />
            </Route>
        </Switch>
        </Router>
      </UserContext.Provider>
    
  );
}

export default App;
