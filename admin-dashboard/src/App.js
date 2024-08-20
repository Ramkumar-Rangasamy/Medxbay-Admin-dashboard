import React from 'react';
//imported bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
//imported react-router-deom for router
import { BrowserRouter as Router } from 'react-router-dom';
//calling or render main page
import Adminroute from './Components/Admindashboard/Adminroute/Adminroute';


function App() {
  return (
    <Router>
     <Adminroute/>
    </Router>
  );
}

export default App;
