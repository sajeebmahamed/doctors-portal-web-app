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
import Dashboard from './components/dashboard/Dashboard';
import AppointmentList from './components/dashboard/AppointmentList';
import Prescription from './components/dashboard/DashboardItems/Prescription';
import NotFound from './components/NoFound/NotFound';


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
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/appoinmentlist">
              <AppointmentList></AppointmentList>
            </Route>
            <Route path="/fake">
              <ImportFakeData></ImportFakeData>
            </Route>
            <Route path="/pres">
              <Prescription ></Prescription>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
