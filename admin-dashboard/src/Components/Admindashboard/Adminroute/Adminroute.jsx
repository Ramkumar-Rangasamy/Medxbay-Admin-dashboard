import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Adminlayout from '../Adminlayout/Adminlayout';
import Admindashboardpage from '../Adminpages/Admindashboardpage/Admindashboardpage';
import Adminappointments from '../Adminpages/Adminappointments/Adminappointments';

const Adminroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Adminlayout />}>
        <Route index  path="/" element={<Navigate to="admindashboardpage" />} />
        <Route path="/admindashboardpage" element={<Admindashboardpage />} />
        <Route path="/adminappointments" element={<Adminappointments />} />
      </Route>
    </Routes>
  );
};

export default Adminroute;
