import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import DataTable from 'react-data-table-component';

const EmployeeSkillsTable = ({ employeeData }) => {
  const [email, setEmail] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://apinulldata-jckuofkuxq-ue.a.run.app/public/api/v1/get_employe/email/${email}`);
      const data = await response.json();

      if (data.status === 'true') {
        setFilteredSkills(data.data.skills);
      } else {
        setFilteredSkills([]);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
  };

  const columns = [
    { name: 'Habilidad', selector: 'name' },
    { name: 'Calificación', selector: 'rating' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <Button variant="contained" onClick={handleSearch} style={{ marginLeft: '50px' }}>
          Buscar
        </Button>
      </div>
      <DataTable columns={columns} data={filteredSkills} />
    </div>
  );
};

export default EmployeeSkillsTable;