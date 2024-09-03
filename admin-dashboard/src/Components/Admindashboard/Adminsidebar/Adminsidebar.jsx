import React, { useState, useEffect } from 'react';
import './adminsidebar.css';
// Images for brand logo
import brandLogo from '../../Assets/brand-logo.png';

// Open and close sidebar icons
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

//sidebar item icons
import { BiSolidDashboard } from "react-icons/bi";
import { MdWallpaper } from "react-icons/md";
import { RiInboxLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { RiListView } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbStar } from "react-icons/tb";
import { SiCommerzbank } from "react-icons/si";
import { TbUserHexagon } from "react-icons/tb";
import { BiStreetView } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { RiLogoutCircleRLine } from 'react-icons/ri';

// Using Link and useLocation for active and inactive states
import { Link, useLocation } from 'react-router-dom';

const Adminsidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(localStorage.getItem('lastActiveItem') || '/admindashboardpage');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const setActiveItemBasedOnRoute = () => {
      let routeKey = location.pathname;
      switch (routeKey) {
        case '/admin-viewblog':
        case '/view-detailsblog':
          routeKey = '/admin-viewblog';
          break;
        case '/admin-viewdoctor':
        case '/edit-viewdoctor':
          routeKey = '/admin-viewdoctor';
          break;
        case '/admin-viewpatients':
        case '/edit-viewpatients':
          routeKey = '/admin-viewpatients';
          break;
        case '/admin-managebookings':
        case '/admin-viewbookings':
          routeKey = '/admin-managebookings';
          break;
        case '/admin-doctorprofile':
        case '/admin-doctorprofile-verification':
          routeKey = '/admin-doctorprofile';
          break;
        default:
          routeKey = location.pathname;
      }
      setActiveItem(routeKey);
      localStorage.setItem('lastActiveItem', routeKey);
    };

    setActiveItemBasedOnRoute();
  }, [location.pathname]);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    localStorage.setItem('lastActiveItem', item);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo-container">
        {isSidebarOpen ? (
          <>
            <img src={brandLogo} alt="Logo" className="logo" />
            <button className="toggle-button" onClick={toggleSidebar}>
              <FiX />
            </button>
          </>
        ) : (
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
      </div>
      <ul className="sidebar-menu-admin">
        <li 
          className={`menu-item ${activeItem === '/admindashboardpage' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admindashboardpage')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admindashboardpage')}
        >
          <Link to="/admindashboardpage" className="menu-link">
            <div className="sidebar-icon"><BiSolidDashboard /></div>
            <span>Dashboard Page</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-viewblog' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewblog')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-viewblog')}
        >
          <Link to="/admin-viewblog" className="menu-link">
            <div className="sidebar-icon"><MdWallpaper /></div>
            <span>View Blogs</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-createblog' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-createblog')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-createblog')}
        >
          <Link to="/admin-createblog" className="menu-link">
            <div className="sidebar-icon"><RiInboxLine /></div>
            <span>Create Blog</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-doctorprofile' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-doctorprofile')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-doctorprofile')}
        >
          <Link to="/admin-doctorprofile" className="menu-link">
            <div className="sidebar-icon"><FaRegUserCircle /></div>
            <span>Doctor Profile</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-managebookings' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-managebookings')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-managebookings')}
        >
          <Link to="/admin-managebookings" className="menu-link">
            <div className="sidebar-icon"><RiListView /></div>
            <span>Manage Bookings</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-doctorsubscription' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-doctorsubscription')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-doctorsubscription')}
        >
          <Link to="/admin-doctorsubscription" className="menu-link">
            <div className="sidebar-icon"><TbStar/></div>
            <span>Doctor Subscription</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-managepayments' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-managepayments')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-managepayments')}
        >
          <Link to="/admin-managepayments" className="menu-link">
            <div className="sidebar-icon"><RiMoneyDollarCircleLine /></div>
            <span>Manage Payments</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-insurance' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-insurance')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-insurance')}
        >
          <Link to="/admin-insurance" className="menu-link">
            <div className="sidebar-icon"><SiCommerzbank /></div>
            <span>Manage Insurance</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-viewdoctor' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewdoctor')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-viewdoctor')}
        >
          <Link to="/admin-viewdoctor" className="menu-link">
            <div className="sidebar-icon"><TbUserHexagon /></div>
            <span>View Doctors</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/admin-viewpatients' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/admin-viewpatients')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/admin-viewpatients')}
        >
          <Link to="/admin-viewpatients" className="menu-link">
            <div className="sidebar-icon"><BiStreetView /></div>
            <span>View Patients</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/adminappointments' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/adminappointments')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/adminappointments')}
        >
          <Link to="/adminappointments" className="menu-link">
            <div className="sidebar-icon"><AiOutlineNotification /></div>
            <span>Appointments</span>
          </Link>
        </li>
        <li 
          className={`menu-item ${activeItem === '/login' ? 'active' : ''}`} 
          onMouseEnter={() => setActiveItem('/login')}
          onMouseLeave={() => setActiveItem(localStorage.getItem('lastActiveItem') || '/admindashboardpage')}
          onClick={() => handleItemClick('/login')}
        >
          <Link to="/login" className="menu-link">
            <div className="sidebar-icon"><RiLogoutCircleRLine /></div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Adminsidebar;