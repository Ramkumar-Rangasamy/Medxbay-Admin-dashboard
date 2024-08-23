import React, { useState } from 'react';
import './admindoctorsubscription.css';
import { RiArrowDownSLine } from "react-icons/ri";

const AdmindoctorSubscription = () => {
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
    <div className="Admin-subscription">
      <h2>Doctor Subscriptions</h2>
      <div className='Admin-subscription-table-container'>
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
            {subscriptions.map(({ id, doctorName, subscriptionType, status }) => (
              <tr key={id}>
                <td>{doctorName}</td>
                <td>{subscriptionType}</td>
                <td>
                  <span className={`status-dot ${status.toLowerCase()}`}></span> {status}
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
