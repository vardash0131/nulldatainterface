import React, { useState } from 'react';
import './AddEmployeeForm.css';
import addEmployee from './EmployeeHandler';
const AddEmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    email: '',
    nombre: '',
    posicion: '',
    fechaCumpleanos: '',
    direccion: '',
    habilidades: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    setEmployeeData((prevState) => {
      const updatedHabilidades = [...prevState.habilidades];
      updatedHabilidades[index] = {
        ...updatedHabilidades[index],
        [name]: value,
      };
      return { ...prevState, habilidades: updatedHabilidades };
    });
  };

  const handleAddSkill = () => {
    setEmployeeData((prevState) => ({
      ...prevState,
      habilidades: [...prevState.habilidades, { name: '', qualification: '' }],
    }));
  };

  const handleDeleteSkill = (index) => {
    setEmployeeData((prevState) => {
      const updatedHabilidades = [...prevState.habilidades];
      updatedHabilidades.splice(index, 1);
      return { ...prevState, habilidades: updatedHabilidades };
    });
  };

  const handleSubmit = async (e) => {
    // Restablecer los valores del formulario después de enviar
    e.preventDefault();
  
    // Construir el objeto con los datos del empleado
    const employee = {
      email: employeeData.email,
      name: employeeData.nombre,
      position: employeeData.posicion,
      birth_date: employeeData.fechaCumpleanos,
      address: employeeData.direccion,
      skill: employeeData.habilidades,
    };
    const success = await addEmployee(employee);

    if (success) {
      setEmployeeData({
        email: '',
        nombre: '',
        posicion: '',
        fechaCumpleanos: '',
        direccion: '',
        habilidades: [],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={employeeData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={employeeData.nombre}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Posición:</label>
        <input
          type="text"
          name="posicion"
          value={employeeData.posicion}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Fecha de Cumpleaños:</label>
        <input
          type="date"
          name="fechaCumpleanos"
          value={employeeData.fechaCumpleanos}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={employeeData.direccion}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Habilidades:</label>
        {employeeData.habilidades.map((habilidad, index) => (
          <div className="skill-container" key={index}>
            <label>Habilidad:</label>
            <input
              type="text"
              name="skill"
              value={habilidad.nombre}
              onChange={(e) => handleSkillChange(index, e)}
              required
            />
            <label>Calificación:</label>
            <input
              type="number"
              name="qualification"
              value={habilidad.calificacion}
              onChange={(e) => handleSkillChange(index, e)}
              required
            />
            <button
              type="button"
              className="delete-skill-button"
              onClick={() => handleDeleteSkill(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <div className="button-container">
          <button type="button" className="add-skill-button" onClick={handleAddSkill}>
            Agregar habilidad
          </button>
          <button type="submit" className="submit-button">
            Agregar empleado
          </button>
        </div>
        </div>
    </form>
  );
};

export default AddEmployeeForm;