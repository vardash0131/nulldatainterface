import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addEmployee = async (employeeData) => {
  // Obtener la fecha en el formato "dd/mm/yyyy" y en la zona horaria de Ciudad de México
  const fechaCumpleanos = new Date(employeeData.birth_date);
  const fechaCumpleanosMexicoCity = zonedTimeToUtc(fechaCumpleanos, 'America/Mexico_City');

  // Formatear la fecha en el formato "dd/mm/yyyy"
  const formattedFechaCumpleanos = format(fechaCumpleanosMexicoCity, 'dd/MM/yyyy');

  // Actualizar el objeto employeeData con la fecha formateada
  const updatedEmployeeData = {
    ...employeeData,
    birth_date: formattedFechaCumpleanos,
  };

  try {
    const response = await fetch('https://apinulldata-jckuofkuxq-ue.a.run.app/public/api/v1/register_employe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployeeData),
    });

    if (response.ok) {
      toast.success('Empleado agregado exitosamente');
      return true;
    } else {
      toast.error('Error al agregar el empleado');
      return false;
    }
  } catch (error) {
    toast.error('Error al enviar la solicitud: ' + error);
    return false;
  }
};

export default addEmployee;