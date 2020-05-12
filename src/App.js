import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appoinment from './components/Appoinment/Appoinment';
import AppointmentService from './components/AppintmentService/AppointmentService';
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import ImportFakeData from './components/ImportFakeData';

function App(props) {
  //pass selected current calender date to schedule from start
  const [newDate, setNewDate] = useState(new Date());
  // console.log("new", newDate.toDateString())
  const currentDate = newDate.toDateString();
  const handleOnChange = (date) => {
    setNewDate(date);
  }
  //pass selected current calender date to schedule from start

  //pass selected service to schedule form start
  const [service, setService] = useState([]);
  // console.log(service);
  const handleBookAppointment = (service) => {
    setService(service);
  }
//pass selected service to schedule form end
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
              <AppointmentService handleBookAppointment={handleBookAppointment} currentDate={currentDate} ></AppointmentService>
            </Route>
            <Route path= "/schedule">
              <ScheduleForm service={service} currentDate={currentDate}></ScheduleForm>
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
