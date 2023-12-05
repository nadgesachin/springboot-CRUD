import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = (props) => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        });
    }, [props.match.params.id]);

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name:</label>
                        <div>{employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name:</label>
                        <div>{employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Email ID:</label>
                        <div>{employee.emailId}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployeeComponent;
