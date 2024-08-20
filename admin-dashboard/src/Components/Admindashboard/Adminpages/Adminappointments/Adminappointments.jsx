import React, { useState } from 'react';
import './adminappointments.css'
import { FaCheckCircle } from 'react-icons/fa';
import { RiArrowDownSLine } from "react-icons/ri";
const Adminappointments = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctor: "Dr. John Doe",
            patient: "Jane Smith",
            date: "2024-08-20",
            timeSlot: "10:00 AM - 10:30 AM",
            department: "Cardiology",
            consultationType: "In-Person",
            status: "waiting",
        },
        {
            id: 2,
            doctor: "Dr. Alice Johnson",
            patient: "Mark Taylor",
            date: "2024-08-20",
            timeSlot: "11:00 AM - 11:30 AM",
            department: "Dermatology",
            consultationType: "Online",
            status: "accepted",
        },
        {
            id: 3,
            doctor: "Dr. Emily Davis",
            patient: "Sara Wilson",
            date: "2024-08-20",
            timeSlot: "12:00 PM - 12:30 PM",
            department: "Orthopedics",
            consultationType: "In-Person",
            status: "rejected",
        },
        {
            id: 4,
            doctor: "Dr. Michael Brown",
            patient: "James Lee",
            date: "2024-08-21",
            timeSlot: "01:00 PM - 01:30 PM",
            department: "Pediatrics",
            consultationType: "Online",
            status: "completed",
        },
        {
            id: 5,
            doctor: "Dr. Olivia Miller",
            patient: "Sophia Anderson",
            date: "2024-08-21",
            timeSlot: "02:00 PM - 02:30 PM",
            department: "Neurology",
            consultationType: "In-Person",
            status: "waiting",
        },
        {
            id: 6,
            doctor: "Dr. Daniel Clark",
            patient: "Liam Scott",
            date: "2024-08-21",
            timeSlot: "03:00 PM - 03:30 PM",
            department: "Psychiatry",
            consultationType: "Online",
            status: "accepted",
        },
        {
            id: 7,
            doctor: "Dr. Michael Brown",
            patient: "Liam Scott",
            date: "2024-08-21",
            timeSlot: "02:00 PM - 02:30 PM",
            department: "Neurology",
            consultationType: "In-Person",
            status: "waiting",
        },
        {
            id: 8,
            doctor: "Dr. Daniel Clark",
            patient: "Liam Scott",
            date: "2024-08-21",
            timeSlot: "02:00 PM - 02:30 PM",
            department: "Neurology",
            consultationType: "In-Person",
            status: "waiting",
        },
        {
            id: 9,
            doctor: "Dr. Olivia Miller",
            patient: "Sophia Anderson",
            date: "2024-08-21",
            timeSlot: "02:00 PM - 02:30 PM",
            department: "Neurology",
            consultationType: "In-Person",
            status: "waiting",
        },
        {
            id: 10,
            doctor: "Dr. Olivia Miller",
            patient: "Sophia Anderson",
            date: "2024-08-21",
            timeSlot: "02:00 PM - 02:30 PM",
            department: "Neurology",
            consultationType: "In-Person",
            status: "waiting",
        }
    ]);
    const updateStatus = (id, newStatus) => {
        setAppointments(prevAppointments =>
            prevAppointments.map(app =>
                app.id === id ? { ...app, status: newStatus } : app
            )
        );
    };

  return (
        <div className="admin-dashboard-appointments">
            <h2>Manage Appointments</h2>

            <div className="admin-manage-appointments-table-container">
                <table className="admin-manage-appointments-table">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Time Slot</th>
                            <th>Consultation type</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.patient}</td>
                                <td>{appointment.timeSlot}</td>
                                <td><FaCheckCircle className="tick-icon" /></td>
                                <td><span className={`status-dot ${appointment.status}`}></span></td>
                                <td>
                                    <div className="select-container">
                                        <select
                                            className="status-select"
                                            value={appointment.status}
                                            onChange={(e) => updateStatus(appointment.id, e.target.value)}
                                        >
                                            <option value="waiting">Waiting</option>
                                            <option value="accepted">Accepted</option>
                                            <option value="rejected">Rejected</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                        <RiArrowDownSLine className="arrow-icon" />
                                    </div>
                                </td>
                                <td><button className="update-button">Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Adminappointments