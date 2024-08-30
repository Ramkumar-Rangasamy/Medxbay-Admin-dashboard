import React, { useState, useEffect } from 'react';
import './adminsidebar.css';
//images for brand logo
import brandLogo from '../../Assets/brand-logo.png';

//open and close sidebar icons
import { FaBars } from 'react-icons/fa';
import { FiX } from "react-icons/fi";

//sidebar item icons
import { BiSolidDashboard } from "react-icons/bi";
import { MdWallpaper } from "react-icons/md";
import { RiInboxLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { RiListView } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbStar } from "react-icons/tb";
import { SiCommerzbank } from "react-icons/si";
import { BiStreetView } from "react-icons/bi";
import { TbUserHexagon } from "react-icons/tb";
import { AiOutlineNotification } from "react-icons/ai";
import { RiLogoutCircleRLine } from 'react-icons/ri';

//using Link and uselocation for active and inactive
import { Link, useLocation } from 'react-router-dom';


const Adminsidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;
  
    if (path === '/admin-doctorprofile' || path === '/admin-doctorprofile-verification') {
      setActiveItem('/admin-doctorprofile');
    } else if (path === '/admin-viewblog' || path === '/view-detailsblog') {
      setActiveItem('/admin-viewblog');
    } else if (path === '/admin-viewdoctor' || path === '/edit-viewdoctor') {
      setActiveItem('/admin-viewdoctor');
    } else if (path === '/admin-viewpatients' || path === '/edit-viewpatients') {
      setActiveItem('/admin-viewpatients');
    } else {
      setActiveItem(path);
    }
  }, [location.pathname]);
  
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
    <div className="logo-container">
      {isSidebarOpen ? (
        <>
          <img src={brandLogo} alt="Logo" className="logo" />
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </>
      ) : (
        <button className="toggle-button" onClick={toggleSidebar}>
          <FiX />
        </button>
      )}
    </div>
    <ul className="sidebar-menu-admin">
      <li className={`menu-item ${activeItem === '/admindashboardpage' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admindashboardpage')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admindashboardpage" className="menu-link">
          <div className="sidebar-icon">< BiSolidDashboard /></div>
          <span>Dashboard Page</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-viewblog' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewblog')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-viewblog" className="menu-link">
          <div className="sidebar-icon"><  MdWallpaper /></div>
          <span>View Blogs</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-createblog' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-createblog')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-createblog" className="menu-link">
          <div className="sidebar-icon"><RiInboxLine  /></div>
          <span>Create  Blog</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-doctorprofile' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-doctorprofile')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-doctorprofile" className="menu-link">
          <div className="sidebar-icon"><FaRegUserCircle /></div>
          <span>Doctor Profile</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-managebookings' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-managebookings')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-managebookings" className="menu-link">
          <div className="sidebar-icon"><RiListView /></div>
          <span>Manage Bookings</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-managepayments' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-managepayments')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-managepayments" className="menu-link">
          <div className="sidebar-icon"><RiMoneyDollarCircleLine /></div>
          <span>Manage payments</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-doctorsubscription' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-doctorsubscription')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-doctorsubscription" className="menu-link">
          <div className="sidebar-icon"><TbStar  /></div>
          <span>Doctor Subscription</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-insurance' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-insurance')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-insurance" className="menu-link">
          <div className="sidebar-icon"><SiCommerzbank /></div>
          <span>Manage Insurance</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-viewdoctor' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewdoctor')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-viewdoctor" className="menu-link">
          <div className="sidebar-icon"><TbUserHexagon/></div>
          <span>View Doctors</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-viewpatients' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewpatients')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-viewpatients" className="menu-link">
          <div className="sidebar-icon"><BiStreetView /></div>
          <span>View Patients</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/adminappointments' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/adminappointments')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/adminappointments" className="menu-link">
          <div className="sidebar-icon"><AiOutlineNotification /></div>
          <span>Appointments</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/other-reports' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/other-reports')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/other-reports" className="menu-link">
          <div className="sidebar-icon">< RiLogoutCircleRLine /></div>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Adminsidebar