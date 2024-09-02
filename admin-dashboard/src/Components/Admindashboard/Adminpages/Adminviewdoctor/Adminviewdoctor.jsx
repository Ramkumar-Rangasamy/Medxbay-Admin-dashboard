import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminviewdoctor.css";
import { RiSearchLine } from "react-icons/ri";

const Adminviewdoctor = () => {
  const [doctors, setDoctors] = useState([
    { name: "Dr. John Smith", email: "john.smith@hospital.com" },
    { name: "Dr. Alice Johnson", email: "alice.johnson@clinic.com" },
    { name: "Dr. Robert Williams", email: "robert.williams@healthcare.org" },
    { name: "Dr. Carol Martinez", email: "carol.martinez@hospital.com" },
    { name: "Dr. David Wilson", email: "david.wilson@clinic.com" },
    { name: "Dr. Emily Davis", email: "emily.davis@healthcare.org" },
    { name: "Dr. Frank Brown", email: "frank.brown@hospital.com" },
    { name: "Dr. Grace Lee", email: "grace.lee@clinic.com" },
    { name: "Dr. Henry Moore", email: "henry.moore@healthcare.org" },
    { name: "Dr. Isla Walker", email: "isla.walker@hospital.com" },
    { name: "Dr. Jack Taylor", email: "jack.taylor@clinic.com" },
    { name: "Dr. Katie White", email: "katie.white@healthcare.org" },
    { name: "Dr. Liam Harris", email: "liam.harris@hospital.com" },
  ]);

  const navigate = useNavigate();

  const handleEdit = (doctor) => {
    navigate(`/edit-viewdoctor`, { state: { doctor } }); // Passing doctor data
  };

  const handleDelete = (name) => {
    const updatedDoctors = doctors.filter((doctor) => doctor.name !== name);
    setDoctors(updatedDoctors);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(lowerCaseSearchQuery) ||
      doctor.email.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <div className="admin-view-doctor">
      <div className="doctor-head-part-title-search">
        <h2 className="doctor-head-title">Doctors</h2>
        <div className="admin-search-bar">
          <input
            type="text"
            placeholder="Search for doctors..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <RiSearchLine className="admin-search-bar-icon" />
        </div>
      </div>
      <div className="admin-view-doctor-table-container">
        <table className="admin-view-doctor-table">
          <thead>
            <tr>
              <th>Doctors Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.email}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>
                  <button
                    className="admin-view-doctor-edit-button"
                    onClick={() => handleEdit(doctor)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="admin-view-doctor-delete-button"
                    onClick={() => handleDelete(doctor.name)}
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

export default Adminviewdoctor;
