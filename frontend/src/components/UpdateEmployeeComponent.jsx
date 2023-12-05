import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const { id } = useParams();

    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            const { firstName, lastName, emailId } = res.data;
            setEmployee({ ...employee, firstName, lastName, emailId });
        });
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id).then((res) => {
            navigate('/employees'); // Use navigate instead of history.push
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const cancel = () => {
        navigate('/employees'); // Use navigate instead of history.push
    };


            return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input
                                        placeholder="Email Address"
                                        name="emailId"
                                        className="form-control"
                                        value={employee.emailId}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={updateEmployee}>
                                    Save
                                </button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UpdateEmployeeComponent;





// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import EmployeeService from '../services/EmployeeService';

// const UpdateEmployeeComponent = () => {
//     const history = useHistory();
//     const { id } = useParams();

//     const [employee, setEmployee] = useState({
//         id: id,
//         firstName: '',
//         lastName: '',
//         emailId: ''
//     });

//     useEffect(() => {
//         EmployeeService.getEmployeeById(id).then((res) => {
//             const { firstName, lastName, emailId } = res.data;
//             setEmployee({ ...employee, firstName, lastName, emailId });
//         });
//     }, [id]);

//     const updateEmployee = (e) => {
//         e.preventDefault();
//         EmployeeService.updateEmployee(employee, id).then((res) => {
//             history.push('/employees');
//         });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEmployee({ ...employee, [name]: value });
//     };

//     const cancel = () => {
//         history.push('/employees');
//     };

//     return (
//         <div>
//             <br />
//             <div className="container">
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h3 className="text-center">Update Employee</h3>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group">
//                                     <label> First Name: </label>
//                                     <input
//                                         placeholder="First Name"
//                                         name="firstName"
//                                         className="form-control"
//                                         value={employee.firstName}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label> Last Name: </label>
//                                     <input
//                                         placeholder="Last Name"
//                                         name="lastName"
//                                         className="form-control"
//                                         value={employee.lastName}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label> Email Id: </label>
//                                     <input
//                                         placeholder="Email Address"
//                                         name="emailId"
//                                         className="form-control"
//                                         value={employee.emailId}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <button className="btn btn-success" onClick={updateEmployee}>
//                                     Save
//                                 </button>
//                                 <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>
//                                     Cancel
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateEmployeeComponent;

