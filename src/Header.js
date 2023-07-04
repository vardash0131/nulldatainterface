// Header.js
import React from 'react';
import './Header.css';
import AddEmployee from './Routes/AddEmployee';
import ConsultEmployee from './Routes/ConsultEmployee';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box  } from '@mui/material';

  
const Header = () => {
    return (
       
        <Router>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Prueba tecnica null data
            </Typography>

            
            <nav>
                <Button
                component={Link}
                to="/agregar"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
                >
                Agregar Empleado
                </Button>
                <Button
                component={Link}
                to="/consultar"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
                >
                Consultar Empleado
                </Button>
            </nav>
            </Toolbar>
        </AppBar>
            <Box sx={{ mt: 4 }}>
            {/* Aquí puedes agregar los comentarios sin afectar los botones */}
            <Typography variant="body1">
            Esta Prueba tecnica fue realizada con react  y utilizando laravel 10 con php 8 asi mismo se monto en un servidor cloud (GCP) usando cloud run como servicio serverless y Dockerfile, se utilizo Cloud run para compilar el docker en Google container registry
            </Typography>
        </Box>
            <Routes>
              <Route path="/agregar" element={<AddEmployee />} />
              <Route path="/consultar" element={<ConsultEmployee />} />
              </Routes>
        </Router>
     
      );
      
};

export default Header;