import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import './DashboardItems.css'
import { Button, Table } from '@material-ui/core';
const DashboardItems = (props) => {
    
    // console.log(props);
    const [appointsDate, setAppointsDate] = useState([]);
    const [signglePres, setSinglePres] = useState([]);
    // console.log(signglePres);
    useEffect(() => {
        fetch('https://doctors-portal-web-app.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => {
                setAppointsDate(data);
            })
    }, [])
    //Prescription handle start
    const handleMakePres = (finalDate) => {
        setSinglePres(finalDate);
        // window.location.pathname = "/pres"
    }
    return (
        <Row>
            <Col md={12}>
                <div className="item-app">
                    
                        <div className="pending-app td-app">
                            <div>
                                <h1>12</h1>
                            </div>
                            <div>
                                <p>Todays Appointment</p>
                            </div>
                        </div>
                  
                 
                        <div className="pending-app tl-app">
                            <div>
                            <h1> {appointsDate.length} </h1>
                            </div>
                            <div>
                                <p>Total Appointment</p>
                            </div>
                        </div>
                 
                        <div className="pending-app pd-app">
                            <div>
                                <h1>12</h1>
                            </div>
                            <div>
                                <p>Pending Appointments</p>
                            </div>
                        </div>
               
                        <div className="pending-app t-p">
                            <div>
                            <h1> {appointsDate.length} </h1>
                            </div>
                            <div className="total-p">
                                <p>Total Patient</p>
                            </div>
                        </div>
                    
                </div>
            </Col>
            <Col md={12}>
                <div className="mt-4 s-table">
                    <h6>Recent Appoinments</h6>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Prescription</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointsDate.map(finalDate =>
                                    
                                    <tr>
                                        <td> 1 </td>
                                        <td> {finalDate.date} </td>
                                        <td> {finalDate.time} </td>
                                        <td> {finalDate.name} </td>
                                        <td> {finalDate.phone} </td>
                                        <td>
                                            <Button disabled href="/pres" onClick={() => handleMakePres(finalDate)} className="table-btn" variant="info">
                                                MAKE
                                            </Button>
                                        </td>
                                        <td>
                                            <Button disabled className="table-btn" variant="info"> NOT VISITED </Button>
                                        </td>
                                    </tr>
                                )
                                
                            }
                            
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    );
};

export default DashboardItems;