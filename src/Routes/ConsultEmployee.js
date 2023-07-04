
import React from 'react';
import EmployeeSkillsTable from '../Employes/EmployeeSkillsTable';
const ConsultEmployee = () => {
  return (
    <div>
      <h2>Consultar Empleado</h2>
      <div className="form-container">
        <EmployeeSkillsTable />
      </div>
    </div>
  );
};

export default ConsultEmployee;