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
import { TbStar } from "react-icons/tb";
import { SiCommerzbank } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa6";
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
    // Update active item based on the current path
    if (location.pathname.includes('/admin-viewpatients') || location.pathname.includes('/edit-viewpatients')) {
      setActiveItem('/admin-viewpatients');
    } else if (location.pathname.includes('/admin-doctorprofile') || location.pathname.includes('/admin-doctorprofile-verification')) {
      setActiveItem('/admin-doctorprofile');
    } else {
      setActiveItem(location.pathname);
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
      <li className={`menu-item ${activeItem === '/viewadminblogs' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/viewadminblogs')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/viewadminblogs" className="menu-link">
          <div className="sidebar-icon"><  MdWallpaper /></div>
          <span>View Admin Blogs</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/statistics' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/statistics')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/statistics" className="menu-link">
          <div className="sidebar-icon"><RiInboxLine  /></div>
          <span>Upload Admin Blog</span>
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
      <li className={`menu-item ${activeItem === '/reports' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/reports')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/reports" className="menu-link">
          <div className="sidebar-icon"><MdPreview /></div>
          <span>View Doctors</span>
        </Link>
      </li>
      <li className={`menu-item ${activeItem === '/admin-viewpatients' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewpatients')}
          onMouseLeave={() => setActiveItem(location.pathname)}
      >
        <Link to="/admin-viewpatients" className="menu-link">
          <div className="sidebar-icon"><FaUserInjured /></div>
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