import React, { useState } from 'react';
import './adminmanagepayments.css';
import { RiSearchLine } from 'react-icons/ri';
import { LiaEditSolid } from "react-icons/lia";
import { RiArrowDownSLine } from "react-icons/ri";
const Adminmanagepayments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [managePayments, setManagePayments] = useState([
    { id: 1, doctorName: 'Dr. Pardhu', paymentType: 'Premium', email: 'pardhu@example.com', totalFees: '$90.00', pendingAmount: '$30.00', serviceCharge: '$10.00' },
    { id: 2, doctorName: 'Dr. Hari', paymentType: 'Standard', email: 'hari@example.com', totalFees: '$120.00', pendingAmount: '$40.00', serviceCharge: '$20.00' },
    { id: 3, doctorName: 'Dr. Shiva', paymentType: 'Premium', email: 'shiva@example.com', totalFees: '$150.00', pendingAmount: '$50.00', serviceCharge: '$25.00' },
    { id: 4, doctorName: 'Dr. Kishore', paymentType: 'Standard', email: 'kishore@example.com', totalFees: '$200.00', pendingAmount: '$70.00', serviceCharge: '$35.00' },
    { id: 5, doctorName: 'Dr. Radha', paymentType: 'Standard', email: 'radha@example.com', totalFees: '$100.00', pendingAmount: '$20.00', serviceCharge: '$15.00' },
    { id: 6, doctorName: 'Dr. Sam', paymentType: 'Standard', email: 'sam@example.com', totalFees: '$130.00', pendingAmount: '$50.00', serviceCharge: '$20.00' },
    { id: 7, doctorName: 'Dr. Pardhu', paymentType: 'Premium', email: 'pardhu2@example.com', totalFees: '$160.00', pendingAmount: '$60.00', serviceCharge: '$30.00' },
    { id: 8, doctorName: 'Dr. Hari', paymentType: 'Standard', email: 'hari2@example.com', totalFees: '$210.00', pendingAmount: '$80.00', serviceCharge: '$40.00' },
    { id: 9, doctorName: 'Dr. Shiva', paymentType: 'Premium', email: 'shiva2@example.com', totalFees: '$110.00', pendingAmount: '$25.00', serviceCharge: '$15.00' },
    { id: 10, doctorName: 'Dr. Kishore', paymentType: 'Standard', email: 'kishore2@example.com', totalFees: '$140.00', pendingAmount: '$50.00', serviceCharge: '$20.00' },
    { id: 11, doctorName: 'Dr. Radha', paymentType: 'Premium', email: 'radha2@example.com', totalFees: '$170.00', pendingAmount: '$65.00', serviceCharge: '$30.00' },
    { id: 12, doctorName: 'Dr. Sam', paymentType: 'Standard', email: 'sam2@example.com', totalFees: '$220.00', pendingAmount: '$90.00', serviceCharge: '$40.00' },
  ]);

  const [currentPayment, setCurrentPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableField, setEditableField] = useState(null);

  const filteredPayments = managePayments.filter(payment => {
    if (activeTab !== 'All' && payment.paymentType.toLowerCase() !== activeTab) {
      return false;
    }
    if (searchQuery && !(
      payment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase())
    )) {
      return false;
    }
    return true;
  });

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const openModal = (payment) => {
    setCurrentPayment(payment);
    setIsModalOpen(true);
    setEditableField(null); // Reset editable field when opening a new modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPayment(null); // Clear the current payment when closing
    setEditableField(null); // Reset editable field when closing the modal
  };

  const handleIconClick = (field) => {
    setEditableField(field);
  };

  const handleInputChange = (e) => {
    setCurrentPayment({
      ...currentPayment,
      [editableField]: e.target.value,
    });
  };

  const saveChanges = () => {
    setManagePayments(managePayments.map(payment => 
      payment.id === currentPayment.id ? currentPayment : payment
    ));
    closeModal(); // Close the modal after saving
  };

  return (
    <div className="adminpayment">
      <h2 className='adminpayment-title'>Manage Payments</h2>
      <div className="admin-dashboard-appointments-tabs-container">
        <div className="admin-dashboard-appointments-tabs">
          <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`admin-tab ${activeTab === 'standard' ? 'admin-active' : ''}`} onClick={() => setActiveTab('standard')}>Standard</button>
          <button className={`admin-tab ${activeTab === 'premium' ? 'admin-active' : ''}`} onClick={() => setActiveTab('premium')}>Premium</button>
        </div>
        <div className="admin-search-bar">
          <input
            type="text"
            placeholder="Search for payments ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearchLine
            className="admin-search-bar-icon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='adminpayment-table-container'>
        <table className="Adminpayment-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Payment Type</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.doctorName}</td>
                <td>{payment.paymentType}</td>
                <td>{payment.email}</td>
                <td>
                  <button className='payment-View' onClick={() => openModal(payment)}>
                    Payment Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && currentPayment && (
        <div className="adminpayment-modal-overlay">
          <div className="adminpayment-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="adminpayment-modal-header">
              <h2>Payment Details</h2>
            </div>
            <div className="adminpayment-modal-body">
              <div className="adminpayment-modal-field">
                <label>Total Fees</label>
                <input type="text" value={currentPayment.totalFees} readOnly />
              </div>
              {currentPayment.paymentType.toLowerCase() === 'standard' && (
                <div className="adminpayment-modal-field">
                  <label>Service Charge</label>
                  <div className="adminpayment-input-with-icon">
                    <input
                      type="text"
                      value={currentPayment.serviceCharge}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>
                </div>
              )}
              <div className="adminpayment-modal-field">
                <label>Pending Amount</label>
                <div className="adminpayment-input-with-icon">
                  <input
                    type="text"
                    value={currentPayment.pendingAmount}
                    onChange={handleInputChange}
                    readOnly={editableField !== 'pendingAmount'}
                  />
                  <LiaEditSolid
                    className="adminpayment-input-icon"
                    onClick={() => handleIconClick('pendingAmount')}
                  />
                </div>
              </div>
              <div className="adminpayment-modal-field adminpayment-modal-select-box-container">
                <label>Payment Status</label>
                <select value={currentPayment.paymentStatus} onChange={handleInputChange} className='adminpayment-modal-select-box'>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <RiArrowDownSLine className="adminpayment-modal-arrow-icon" />
              </div>
            </div>
            <div className="adminpayment-modal-footer">
              <button className="adminpayment-savebutton" onClick={saveChanges}>
                Save Changes
              </button>
              <button className="adminpayment-closebutton" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adminmanagepayments;
