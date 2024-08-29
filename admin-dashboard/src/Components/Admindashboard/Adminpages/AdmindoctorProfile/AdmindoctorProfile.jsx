import React, { useState } from 'react';
import './AdmindoctorProfile.css'; 
import { Link } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";

const AdmindoctorProfile = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const doctorprofile = [
    { id: 1, doctorName: 'Dr. Pardhu', Email: 'Pardhu@gmail.com', status: 'Verified' },
    { id: 2, doctorName: 'Dr. Hari', Email: 'Hari@gmail.com', status: 'Not Verified' },
    { id: 3, doctorName: 'Dr. Shiva', Email: 'Shiva@gmail.com', status: 'Verified' },
    { id: 4, doctorName: 'Dr. Kishore', Email: 'Kishore@gmail.com', status: 'Pending' },
    { id: 5, doctorName: 'Dr. Radha', Email: 'Radha@gmail.com', status: 'Not Verified' },
    { id: 6, doctorName: 'Dr. Hari', Email: 'rami@gmail.com', status: 'Pending' },
    { id: 7, doctorName: 'Dr. Shiva', Email: 'Shiva@gmail.com', status: 'Verified' },
    { id: 8, doctorName: 'Dr. Kishore', Email: 'Kishore@gmail.com', status: 'Not Verified' },
    { id: 9, doctorName: 'Dr. Shiva', Email: 'lumar@gmail.com', status: 'Pending' },
  ];

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Verified':
        return 'status-verified';
      case 'Pending':
        return 'status-pending';
      case 'Not Verified':
        return 'status-NotVerified';
      default:
        return '';
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const filtereddoctorprofile = doctorprofile.filter((doctor) => {
    // Filter by status
    if (activeTab !== 'All' && doctor.status !== activeTab) {
      return false;
    }
    // Filter by search query (searching doctor names and emails)
    if (searchQuery && !(
      doctor.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.Email.toLowerCase().includes(searchQuery.toLowerCase())
    )) {
      return false;
    }
    return true;
  });

  return (
    <div className="admin-doctorprofile">
      <h2 className='admin-doctorprofile-title'>Doctor Profile</h2>
      <div className="admin-dashboard-appointments-tabs-container">
        <div className="admin-dashboard-appointments-tabs">
          <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`admin-tab ${activeTab === 'Verified' ? 'admin-active' : ''}`} onClick={() => setActiveTab('Verified')}>Verified</button>
          <button className={`admin-tab ${activeTab === 'Pending' ? 'admin-active' : ''}`} onClick={() => setActiveTab('Pending')}>Pending</button>
          <button className={`admin-tab ${activeTab === 'Not Verified' ? 'admin-active' : ''}`} onClick={() => setActiveTab('Not Verified')}>Not Verified</button>
        </div>
        <div className="admin-search-bar">
          <input
            type="text"
            placeholder="Search for doctors ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearchLine
            className="admin-search-bar-icon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='admin-doctorprofile-table-container'>
        <table className="admin-doctorprofile-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtereddoctorprofile.map(({ id, doctorName, Email, status }) => (
              <tr key={id}>
                <td>{doctorName}</td>
                <td>{Email}</td>
                <td className={getStatusClassName(status)}>{status}</td>
                <td>
                  <Link to='/admin-doctorprofile-verification'>
                    <button onClick={() => console.log(`Action for ${doctorName}`)} className='admin-doctorprofile-submit'>
                      View Profile
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmindoctorProfile;
