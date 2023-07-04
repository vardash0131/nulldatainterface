import React from 'react';
import AddEmployeeForm from '../Employes/AddEmployeeForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  return (
    
    <div>

      <div className="form-container">
      <h1>Registrar empleado</h1>
        <AddEmployeeForm />
      </div>
      <ToastContainer />
    </div>
 
  );
};

export default AddEmployee;