import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminviewpatients.css';
import { RiSearchLine } from "react-icons/ri";

const Adminviewpatients = () => {
    const [patients, setPatients] = useState([
        { name: 'Hirushit', email: 'hirushit@gmail.com' },
        { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        { name: 'Bob Williams', email: 'bob.williams@example.com' },
        { name: 'Carol Martinez', email: 'carol.martinez@example.com' },
        { name: 'David Wilson', email: 'son@example.com' },
        { name: 'Emily Davis', email: 'emily.davis@example.com' },
        { name: 'Frank Brown', email: 'frank.brown@example.com' },
        { name: 'Grace Lee', email: 'mani.rock@example.com' },
        { name: 'Henry Moore', email: 'henry.moore@example.com' },
        { name: 'Isla Walker', email: 'isla.walker@example.com' },
        { name: 'Jack Taylor', email: 'jack.taylor@example.com' },
        { name: 'Katie White', email: 'katie.white@example.com' },
        { name: 'Liam Harris', email: 'liam.harris@example.com' },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEdit = (patient) => {
        navigate(`/edit-viewpatients`, { state: { patient } });
    };

    const handleDelete = (name) => {
        const updatedPatients = patients.filter(patient => patient.name !== name);
        setPatients(updatedPatients);
    };

    // Corrected filter logic to search by name or email
    const filteredPatients = patients.filter((patient) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
            patient.name.toLowerCase().includes(lowerCaseSearchQuery) ||
            patient.email.toLowerCase().includes(lowerCaseSearchQuery)
        );
    });

    return (
        <div className="admin-view-patient">
            <div className='patient-head-part-title-search'>
                <h2 className='admin-view-patient-title'>Patients</h2>
                <div className="admin-search-bar">
                    <input
                        type="text"
                        placeholder="Search for patients..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <RiSearchLine className="admin-search-bar-icon" />
                </div>
            </div>
            <div className="admin-view-patient-table-container">
                <table className="admin-view-patient-table">
                    <thead>
                        <tr>
                            <th>Patients Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient) => (
                            <tr key={patient.email}>
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>
                                <td>
                                    <button
                                        className="admin-view-patient-edit-button"
                                        onClick={() => handleEdit(patient)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="admin-view-patient-delete-button"
                                        onClick={() => handleDelete(patient.name)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Adminviewpatients;
