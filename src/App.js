import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import DashBoard from './pages/DashBoard';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          <Route exact path="/signup"><SignUpPage /></Route>
          <Route exact path="/dashboard"><DashBoard /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
