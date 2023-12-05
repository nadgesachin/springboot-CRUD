import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEmployeeComponent = () => {
    const navigate = useNavigate(); 
    const { id } = useParams(); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if (id !== '_add') {
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
            });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName, lastName, emailId };
        console.log('employee => ' + JSON.stringify(employee));

        if (id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees'); // Use navigate() instead of history.push()
            });
        } else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees'); // Use navigate() instead of history.push()
            });
        }
    }

    const cancel = () => {
        navigate('/employees'); // Use navigate() instead of history.push()
    }

    const getTitle = () => {
        return (
            id === '_add' ?
                <h3 className="text-center">Add Employee</h3> :
                <h3 className="text-center">Update Employee</h3>
        );
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;



