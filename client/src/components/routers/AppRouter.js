import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Home from '../pages/Home';
import AllUsers from '../pages/admin/AllUsers';
import Reportes from '../pages/Reportes';
import NominaForm from '../forms/NominaForm';
import CertificadoLaboralForm from '../forms/CertificadoLaboralForm';
import NotFound from '../pages/NoFound';
import AddUser from '../pages/admin/AddUser';
import EditUser from '../pages/admin/EditUser';
import AllHolidays from '../pages/AllHolidays';
import AddHoliday  from '../pages/AddHoliday';
import EditHoliday  from '../pages/EditHoliday';
import AllPermisos from '../pages/AllPermisos';
import EditPermiso from '../pages/EditPermiso';
import AddPermiso from '../pages/AddPermiso';
import Login from '../pages/Login';
import Layout from '../layouts/Layout';

export default function AppRouter() {
    return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route path='/login' element={<Login /> } />
        <Route path='/' element={<Home/>} />
        <Route path='/permisos' element={<AllPermisos /> } />
        <Route path='/vacaciones' element={<AllHolidays /> } />
        <Route path='/usuarios' element={<AllUsers />} />
        <Route path='/reportes' element={<Reportes/>} />
        <Route path='/nomina' element={<NominaForm/>} />
        <Route path='/' element={<PrivateRoute />}>
            <Route path='usuarios/crear' element={<AddUser /> } />
        </Route>        
        <Route path='/usuarios/editar/:id' element={<EditUser /> } />        
        <Route path='/vacaciones/solicitar' element={<AddHoliday />} />
        <Route path='/vacaciones/editar/:id' element={<EditHoliday /> } />        
        <Route path='/permisos/crear' element={<AddPermiso /> } />
        <Route path='/permisos/editar/:id' element={<EditPermiso /> } />        
        <Route path='certificadolaboral' element={<CertificadoLaboralForm />} />
        
        <Route path="*" element={<NotFound />} />       
      </Routes>
      </Layout>
    </Router>
    </> 
    )
}
