import React, { useState } from 'react';
import './admindoctorsubscription.css';
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

const AdmindoctorSubscription = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, doctorName: 'Dr. Pardhu', subscriptionType: 'Free', status: 'Verified' },
    { id: 2, doctorName: 'Dr. Hari', subscriptionType: 'Premium', status: 'Pending' },
    { id: 3, doctorName: 'Dr. Shiva', subscriptionType: 'Free', status: 'Verified' },
    { id: 4, doctorName: 'Dr. Kishore', subscriptionType: 'Premium', status: 'Pending' },
    { id: 5, doctorName: 'Dr. Radha', subscriptionType: 'Free', status: 'Rejected' },
    { id: 6, doctorName: 'Dr. Sam', subscriptionType: 'Premium', status: 'Pending' },
    { id: 7, doctorName: 'Dr. Pardhu', subscriptionType: 'Free', status: 'Verified' },
    { id: 8, doctorName: 'Dr. Hari', subscriptionType: 'Premium', status: 'Pending' },
    { id: 9, doctorName: 'Dr. Shiva', subscriptionType: 'Free', status: 'Verified' },
    { id: 10, doctorName: 'Dr. Kishore', subscriptionType: 'Premium', status: 'Pending' },
    { id: 11, doctorName: 'Dr. Radha', subscriptionType: 'Free', status: 'Rejected' },
    { id: 12, doctorName: 'Dr. Sam', subscriptionType: 'Premium', status: 'Pending' },
  ]);

  // Correcting the filter logic
  const filteredSubscriptions = subscriptions.filter(subscription => {
    // Filter by status
    if (activeTab !== 'All' && subscription.status.toLowerCase() !== activeTab) {
      return false;
    }
    // Filter by search query
    if (searchQuery && !subscription.doctorName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    setSubscriptions(subscriptions.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-subscription">
      <h2 className='admin-subscription-title'>Doctor Subscriptions</h2>
      <div className="admin-dashboard-appointments-tabs-container">
        <div className="admin-dashboard-appointments-tabs">
          <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`admin-tab ${activeTab === 'verified' ? 'admin-active' : ''}`} onClick={() => setActiveTab('verified')}>Verified</button>
          <button className={`admin-tab ${activeTab === 'pending' ? 'admin-active' : ''}`} onClick={() => setActiveTab('pending')}>Pending</button>
          <button className={`admin-tab ${activeTab === 'rejected' ? 'admin-active' : ''}`} onClick={() => setActiveTab('rejected')}>Rejected</button>
        </div>
        <div className="admin-search-bar">
          <input
            type="text"
            placeholder="Search for subscriptions ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearchLine
            className="admin-search-bar-icon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='admin-subscription-table-container'>
        <table className="Admin-subscription-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Subscription Type</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Documents</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map(({ id, doctorName, subscriptionType, status }) => (
              <tr key={id}>
                <td>{doctorName}</td>
                <td>{subscriptionType}</td>
                <td>
                  <span className={`status-dot ${status.toLowerCase()}`}></span>  
                </td>
                <td>
                  <div className="admin-select-container">
                    <select
                      className={`admin-status-select ${status.toLowerCase()}`}
                      value={status}
                      onChange={(e) => handleStatusChange(id, e.target.value)}
                    >
                      <option value="Verified">Verified</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                    <RiArrowDownSLine className="arrow-icon" />
                  </div>
                </td>
                <td>
                  <button className='subscription-View' onClick={openModal}>
                    View
                  </button>
                </td>
                <td>
                  <button onClick={() => console.log(`Action for ${doctorName}`)} className='subscription-submit'>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="adminsubscription-modal-overlay" onClick={closeModal}>
          <div className="adminsubscription-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Document Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Document Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Business Proof</td>
                  <td><button className='subscription-modal-View'>View</button></td>
                </tr>
                <tr>
                  <td>Certification Proof</td>
                  <td><button className='subscription-modal-View'>View</button></td>
                </tr>
                <tr>
                  <td>License Proof</td>
                  <td><button className='subscription-modal-View'>View</button></td>
                </tr>
              </tbody>
            </table>
            <button onClick={closeModal} className="adminsubscription-modal-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdmindoctorSubscription;
