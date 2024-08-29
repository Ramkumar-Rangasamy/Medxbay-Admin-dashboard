import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//All adminpages imported here only
import Adminlayout from '../Adminlayout/Adminlayout';

import Admindashboardpage from '../Adminpages/Admindashboardpage/Admindashboardpage';

import Adminviewblogs from '../Adminpages/Adminviewblogs/Adminviewblogs';
import Viewblogsdetails from '../Adminpages/Adminviewblogs/Viewblogsdetails';

import Admincreateblog from '../Adminpages/Admincreateblog/Admincreateblog';

import AdmindoctorProfile from '../Adminpages/AdmindoctorProfile/AdmindoctorProfile';
import Doctorprofileverification from '../Adminpages/AdmindoctorProfile/Doctorprofileverification/Doctorprofileverification';

import Admindoctorsubscription from '../Adminpages/Admindoctorsubscription/Admindoctorsubscription';

import Admininsurance from '../Adminpages/Admininsurance/Admininsurance';


import Adminviewdoctor from '../Adminpages/Adminviewdoctor/Adminviewdoctor'; 
import Editviewdoctor from '../Adminpages/Adminviewdoctor/Editviewdoctor/Editviewdoctor';

import Adminviewpatients from '../Adminpages/Adminviewpatients/Adminviewpatients';
import Editviewpatient from '../Adminpages/Adminviewpatients/Editviewpatient/Editviewpatient';

import Adminappointments from '../Adminpages/Adminappointments/Adminappointments';


const Adminroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Adminlayout />}>
        <Route index  path="/" element={<Navigate to="admindashboardpage" />} />
        <Route path="/admindashboardpage" element={<Admindashboardpage />} />
        
        <Route path="/admin-viewblog" element={<Adminviewblogs />} />
        <Route path="/view-detailsblog" element={<Viewblogsdetails />} />

        <Route path="/admin-createblog" element={<Admincreateblog/>} />


        <Route path="/admin-doctorsubscription" element={<Admindoctorsubscription/>} />
        <Route path="/admin-doctorprofile" element={<AdmindoctorProfile/>} />
        <Route path="/admin-doctorprofile-verification" element={<Doctorprofileverification/>} />
        <Route path="/admin-insurance" element={<Admininsurance/>} />


        <Route path="/admin-viewdoctor" element={<Adminviewdoctor/>} />
        <Route path="/edit-viewdoctor" element={<Editviewdoctor/>} />

        <Route path="/admin-viewpatients" element={<Adminviewpatients/>} />
        <Route path="/edit-viewpatients" element={<Editviewpatient/>} />
        <Route path="/adminappointments" element={<Adminappointments />} />
      </Route>
    </Routes>
  );
};

export default Adminroute;
