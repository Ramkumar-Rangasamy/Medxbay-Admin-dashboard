import React, { useState } from 'react';
import './adminappointments.css';
import { RiSearchLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

const Adminappointments = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [appointments, setAppointments] = useState([
        { id: 1, doctor: "Dr. John Doe", patient: "Jane Smith", date: "2024-08-20", timeSlot: "10:00 AM - 10:30 AM", status: "waiting" },
        { id: 2, doctor: "Dr. Alice Johnson", patient: "Mark Taylor", date: "2024-08-20", timeSlot: "11:00 AM - 11:30 AM", status: "accepted" },
        { id: 3, doctor: "Dr. Emily Davis", patient: "Sara Wilson", date: "2024-08-20", timeSlot: "12:00 PM - 12:30 PM", status: "rejected" },
        { id: 4, doctor: "Dr. Michael Brown", patient: "James Lee", date: "2024-08-21", timeSlot: "01:00 PM - 01:30 PM", status: "completed" },
        { id: 5, doctor: "Dr. Olivia Miller", patient: "Sophia Anderson", date: "2024-08-21", timeSlot: "02:00 PM - 02:30 PM", status: "waiting" },
        { id: 6, doctor: "Dr. Daniel Clark", patient: "Liam Scott", date: "2024-08-24", timeSlot: "03:00 PM - 03:30 PM", status: "accepted" },
        { id: 7, doctor: "Dr. Noah Wilson", patient: "Ella Martinez", date: "2024-08-25", timeSlot: "09:00 AM - 09:30 AM", status: "waiting" },
        { id: 8, doctor: "Dr. Mia Carter", patient: "Henry Adams", date: "2024-08-26", timeSlot: "10:30 AM - 11:00 AM",  status: "accepted" },
        { id: 9, doctor: "Dr. Logan Baker", patient: "Isabella Green", date: "2024-08-27", timeSlot: "11:30 AM - 12:00 PM", status: "rejected" },
        { id: 10, doctor: "Dr. Ethan White", patient: "Oliver Scott", date: "2024-08-28", timeSlot: "12:30 PM - 01:00 PM", status: "completed" },
        { id: 11, doctor: "Dr. Emma Walker", patient: "Ava King", date: "2024-08-29", timeSlot: "01:30 PM - 02:00 PM", status: "waiting" },
        { id: 12, doctor: "Dr. Lucas Hall", patient: "Lucas Young", date: "2024-08-30", timeSlot: "02:30 PM - 03:00 PM", status: "accepted" },
        { id: 13, doctor: "Dr. Harper Turner", patient: "Mason Harris", date: "2024-08-31", timeSlot: "03:30 PM - 04:00 PM", status: "rejected" },
        { id: 14, doctor: "Dr. Mason Phillips", patient: "Benjamin Roberts", date: "2024-09-01", timeSlot: "04:00 PM - 04:30 PM", status: "completed" },
        { id: 15, doctor: "Dr. Sophia Lee", patient: "Harper Evans", date: "2024-09-02", timeSlot: "05:00 PM - 05:30 PM", status: "waiting" }
    ]);

    const updateStatus = (id, newStatus) => {
        setAppointments(prevAppointments =>
            prevAppointments.map(app =>
                app.id === id ? { ...app, status: newStatus } : app
            )
        );
    };

    const formatDate = (dateString) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleSearch = () => {
        setSearchQuery(searchQuery.trim());
    };

    const filteredAppointments = appointments.filter(appointment => {
        // Filter by status
        if (activeTab !== 'All' && appointment.status !== activeTab) {
            return false;
        }
        // Filter by search query (searching both doctor and patient names)
        if (searchQuery && !(
            appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appointment.patient.toLowerCase().includes(searchQuery.toLowerCase())
        )) {
            return false;
        }
        return true;
    });

    return (
        <div className="admin-dashboard-appointments">
            <h2 className='admin-manage-title'>Appointments</h2>
            <div className="admin-dashboard-appointments-tabs-container">
                <div className="admin-dashboard-appointments-tabs">
                    <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
                    <button className={`admin-tab ${activeTab === 'waiting' ? 'admin-active' : ''}`} onClick={() => setActiveTab('waiting')}>Waiting</button>
                    <button className={`admin-tab ${activeTab === 'accepted' ? 'admin-active' : ''}`} onClick={() => setActiveTab('accepted')}>Accepted</button>
                    <button className={`admin-tab ${activeTab === 'rejected' ? 'admin-active' : ''}`} onClick={() => setActiveTab('rejected')}>Rejected</button>
                    <button className={`admin-tab ${activeTab === 'completed' ? 'admin-active' : ''}`} onClick={() => setActiveTab('completed')}>Completed</button>
                </div>
                <div className="admin-search-bar">
                    <input
                        type="text"
                        placeholder="Search for appointments ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <RiSearchLine
                        className="admin-search-bar-icon"
                        onClick={handleSearch}
                    />
                </div>
            </div>
            <div className="admin-manage-appointments-table-container">
                <table className="admin-manage-appointments-table">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.patient}</td>
                                <td>{formatDate(appointment.date)}</td>
                                <td>{appointment.timeSlot}</td>
                                <td><span className={`admin-status-dot ${appointment.status}`}></span></td>
                                <td>
                                    <div className="admin-manage-appointments-select-container">
                                        <select
                                            className="admin-manage-appointments-status-select"
                                            value={appointment.status}
                                            onChange={(e) => updateStatus(appointment.id, e.target.value)}
                                        >
                                            <option value="waiting">Waiting</option>
                                            <option value="accepted">Accepted</option>
                                            <option value="rejected">Rejected</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                        <RiArrowDownSLine className="admin-manage-arrow-icon" />
                                    </div>
                                </td>
                                <td><button className="admin-manage-update-button">Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Adminappointments;
