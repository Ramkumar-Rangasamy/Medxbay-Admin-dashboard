import React, { useState } from 'react';
import './adminmanagebookings.css';
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Adminmanagebooking = () => {
  const navigate = useNavigate(); // Create navigate function
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookings, setBookings] = useState([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Hari', doctorEmail: 'hari@example.com', date: 'Aug 23 2024', consultationType: 'in-person', appointmentTime: '14:00 - 15:00', status: 'Waiting', hospitalName: 'ABC Hospital', street: '123 Main St', city: 'Chennai', state: 'Tamil Nadu', country: 'India', zipCode: '600001', amount: '$100.00', paymentStatus: 'Paid' },
    { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Pardhu', doctorEmail: 'pardhu@example.com', date: 'Aug 24 2024', consultationType: 'video call', appointmentTime: '10:00 - 11:00', status: 'Completed', hospitalName: 'XYZ Hospital', street: '456 Maple Ave', city: 'Hyderabad', state: 'Telangana', country: 'India', zipCode: '500001', amount: '$80.00', paymentStatus: 'Paid' },
    { id: 3, patientName: 'Emily Johnson', doctorName: 'Dr. Raman', doctorEmail: 'raman@example.com', date: 'Aug 25 2024', consultationType: 'in-person', appointmentTime: '16:00 - 17:00', status: 'Waiting', hospitalName: 'PQR Hospital', street: '789 Oak St', city: 'Bangalore', state: 'Karnataka', country: 'India', zipCode: '560001', amount: '$120.00', paymentStatus: 'Unpaid' },
    { id: 4, patientName: 'Michael Brown', doctorName: 'Dr. Singh', doctorEmail: 'singh@example.com', date: 'Aug 26 2024', consultationType: 'video call', appointmentTime: '09:00 - 10:00', status: 'Cancelled', hospitalName: 'LMN Hospital', street: '321 Pine St', city: 'Mumbai', state: 'Maharashtra', country: 'India', zipCode: '400001', amount: '$90.00', paymentStatus: 'Paid' },
    { id: 5, patientName: 'Sarah Davis', doctorName: 'Dr. Lee', doctorEmail: 'lee@example.com', date: 'Aug 27 2024', consultationType: 'in-person', appointmentTime: '11:00 - 12:00', status: 'Completed', hospitalName: 'JKL Hospital', street: '654 Cedar St', city: 'Delhi', state: 'Delhi', country: 'India', zipCode: '110001', amount: '$95.00', paymentStatus: 'Unpaid' },
    { id: 6, patientName: 'David Wilson', doctorName: 'Dr. Kumar', doctorEmail: 'kumar@example.com', date: 'Aug 28 2024', consultationType: 'video call', appointmentTime: '15:00 - 16:00', status: 'Waiting', hospitalName: 'OPQ Hospital', street: '987 Birch St', city: 'Pune', state: 'Maharashtra', country: 'India', zipCode: '411001', amount: '$75.00', paymentStatus: 'Paid' },
    { id: 7, patientName: 'Laura Martinez', doctorName: 'Dr. Patel', doctorEmail: 'patel@example.com', date: 'Aug 29 2024', consultationType: 'in-person', appointmentTime: '13:00 - 14:00', status: 'Cancelled', hospitalName: 'XYZ Hospital', street: '123 Elm St', city: 'Kolkata', state: 'West Bengal', country: 'India', zipCode: '700001', amount: '$85.00', paymentStatus: 'Paid' },
    { id: 8, patientName: 'James Anderson', doctorName: 'Dr. Sharma', doctorEmail: 'sharma@example.com', date: 'Aug 30 2024', consultationType: 'video call', appointmentTime: '08:00 - 09:00', status: 'Completed', hospitalName: 'ABC Hospital', street: '456 Willow St', city: 'Chennai', state: 'Tamil Nadu', country: 'India', zipCode: '600002', amount: '$110.00', paymentStatus: 'Unpaid' },
    { id: 9, patientName: 'Olivia Thomas', doctorName: 'Dr. Gupta', doctorEmail: 'gupta@example.com', date: 'Aug 31 2024', consultationType: 'in-person', appointmentTime: '10:00 - 11:00', status: 'Waiting', hospitalName: 'DEF Hospital', street: '789 Cedar St', city: 'Hyderabad', state: 'Telangana', country: 'India', zipCode: '500002', amount: '$130.00', paymentStatus: 'Paid' },
    { id: 10, patientName: 'William Jackson', doctorName: 'Dr. Singh', doctorEmail: 'singh2@example.com', date: 'Sep 01 2024', consultationType: 'video call', appointmentTime: '12:00 - 13:00', status: 'Completed', hospitalName: 'PQR Hospital', street: '321 Oak St', city: 'Bangalore', state: 'Karnataka', country: 'India', zipCode: '560002', amount: '$70.00', paymentStatus: 'Paid' },
    { id: 11, patientName: 'Ava White', doctorName: 'Dr. Sharma', doctorEmail: 'sharma2@example.com', date: 'Sep 02 2024', consultationType: 'in-person', appointmentTime: '14:00 - 15:00', status: 'Waiting', hospitalName: 'JKL Hospital', street: '654 Birch St', city: 'Mumbai', state: 'Maharashtra', country: 'India', zipCode: '400002', amount: '$115.00', paymentStatus: 'Unpaid' },
    { id: 12, patientName: 'Ethan Harris', doctorName: 'Dr. Patel', doctorEmail: 'patel2@example.com', date: 'Sep 03 2024', consultationType: 'video call', appointmentTime: '09:00 - 10:00', status: 'Cancelled', hospitalName: 'XYZ Hospital', street: '987 Maple St', city: 'Delhi', state: 'Delhi', country: 'India', zipCode: '110002', amount: '$105.00', paymentStatus: 'Paid' },
  ]);

  const filteredBookings = bookings.filter(booking => {
    // Filter by consultation type and search query
    if (activeTab !== 'All' && booking.consultationType.toLowerCase() !== activeTab) {
      return false;
    }
    if (searchQuery && 
      !booking.patientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !booking.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !booking.doctorEmail.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const handleViewDetails = (booking) => {
    navigate('/admin-viewbookings', { state: { booking } });
  };

  return (
    <div className="admin-bookings">
      <h2 className='admin-bookings-title'>Manage Bookings</h2>
      <div className="admin-dashboard-appointments-tabs-container">
        <div className="admin-dashboard-appointments-tabs">
          <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`admin-tab ${activeTab === 'in-person' ? 'admin-active' : ''}`} onClick={() => setActiveTab('in-person')}>In-Person</button>
          <button className={`admin-tab ${activeTab === 'video call' ? 'admin-active' : ''}`} onClick={() => setActiveTab('video call')}>Video Call</button>
        </div>
        <div className="admin-search-bar">
          <input
            type="text"
            placeholder="Search for bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearchLine
            className="admin-search-bar-icon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='admin-bookings-table-container'>
        <table className="Admin-bookings-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Doctor Email</th>
              <th>Date</th>
              <th>Consultation Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.patientName}</td>
                <td>{booking.doctorName}</td>
                <td>{booking.doctorEmail}</td>
                <td>{booking.date}</td>
                <td>{booking.consultationType}</td>
                <td>
                  <button className='admin-bookings-View' onClick={() => handleViewDetails(booking)}>
                    view details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminmanagebooking;
