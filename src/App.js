import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appoinment from './components/Appoinment/Appoinment';
import AppointmentService from './components/AppintmentService/AppointmentService';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <div>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
            <Route path="/appointment">
              <Appoinment></Appoinment>
              <AppointmentService></AppointmentService>
            </Route>
          </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
