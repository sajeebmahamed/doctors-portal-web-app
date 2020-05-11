import React, { useState } from 'react';
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
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import ImportFakeData from './components/ImportFakeData';

function App() {
  const [newDate, setNewDate] = useState(new Date());
  console.log("new", newDate.toDateString())
  const currentDate = newDate.toDateString();
  const handleOnChange = (date) => {
    setNewDate(date);
  }

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
              <Appoinment handleOnChange={handleOnChange}></Appoinment>
              <AppointmentService currentDate={currentDate} ></AppointmentService>
            </Route>
            <Route path= "/schedule">
              <ScheduleForm currentDate={currentDate}></ScheduleForm>
            </Route>
            <Route path="/fake">
              <ImportFakeData></ImportFakeData>
            </Route>
          </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
