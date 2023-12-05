

import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams } from 'react-router-dom';

const ViewEmployeeComponent = () => {
    const { id } = useParams(); 
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        });
    }, [id]); 

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name : {employee.firstName}</label>
                        <div></div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name : {employee.lastName}</label>
                        <div></div>
                    </div>
                    <div className="row">
                        <label>Employee Email ID : {employee.emailId}</label>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployeeComponent;
