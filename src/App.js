import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/pages/home';
import About from './component/pages/about';
import Contect from './component/pages/contect';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "./component/users/AddUser";
import User from "./component/users/User";
import EditUser from "./component/users/EditUser";

  

function App() {
  return (
   
   <Router>
      <div className="App">   
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/contact"  component={Contect} />
        <Route exact path="/home"  component={Home} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />

      </Switch>
    </div>
   </Router>
      
    
  );
}

export default App;
