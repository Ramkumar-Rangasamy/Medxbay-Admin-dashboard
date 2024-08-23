import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import './editviewpatient.css';

const Editviewpatient = () => {
    const location = useLocation();
    const { patient } = location.state || {};

    const [patientData, setPatientData] = useState({
        name: patient?.name || '',
        email: patient?.email || '',
        phone: patient?.phone || '',
        dob: patient?.dob || '',
        address: patient?.address || '',
        insuranceProvider: patient?.insuranceProvider || '',
        policyNumber: patient?.policyNumber || '',
        image: null,
    });

    const [emergencyContacts, setEmergencyContacts] = useState(patient?.emergencyContacts || []);

    const lastContactRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (patient) {
            setPatientData({
                name: patient.name,
                email: patient.email,
                phone: patient.phone || '',
                dob: patient.dob || '',
                address: patient.address || '',
                insuranceProvider: patient.insuranceProvider || '',
                policyNumber: patient.policyNumber || '',
                image: null,
            });
            setEmergencyContacts(patient.emergencyContacts || []);
        }
    }, [patient]);

    const handleAddContact = () => {
        setEmergencyContacts([...emergencyContacts, '']);
        setTimeout(() => {
            if (lastContactRef.current) {
                lastContactRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleRemoveContact = (index) => {
        const newContacts = [...emergencyContacts];
        newContacts.splice(index, 1);
        setEmergencyContacts(newContacts);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...patientData, [name]: value });
    };

    const handleFileChange = (e) => {
        setPatientData({ ...patientData, image: e.target.files[0] });
    };

    const handleContactChange = (index, value) => {
        const newContacts = [...emergencyContacts];
        newContacts[index] = value;
        setEmergencyContacts(newContacts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(patientData);
        console.log(emergencyContacts);
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <div className="admin-edit-patient">
            <h2>Edit Patient</h2>
            <form className="admin-edit-patient-container" onSubmit={handleSubmit}>
                <div className="admin-edit-patient-header">
                    <input
                        type="text"
                        name="name"
                        value={patientData.name}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Name<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="email"
                        name="email"
                        value={patientData.email}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Email<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="tel"
                        name="phone"
                        value={patientData.phone}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Phone Number<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="date"
                        name="dob"
                        value={patientData.dob}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Date of Birth<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="text"
                        name="address"
                        value={patientData.address}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Address<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="text"
                        name="insuranceProvider"
                        value={patientData.insuranceProvider}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Insurance Provider<span style={{ color: "red" }}> *</span>
                    </p>
                </div>
                <div className="admin-edit-patient-header">
                    <input
                        type="text"
                        name="policyNumber"
                        value={patientData.policyNumber}
                        className="admin-edit-patient-input"
                        onChange={handleInputChange}
                    />
                    <p className="admin-edit-patient-input-placeholder">
                        Policy Number<span style={{ color: "red" }}> *</span>
                    </p>
                </div>

                <div className="admin-edit-patient-header emergency-container">
                    <p className="emergency-label">
                        Emergency Contacts
                        <FaPlusCircle className="admin-edit-patient-add-icon" onClick={handleAddContact} />
                        <span style={{ color: "red" }}> *</span>
                    </p>
                    {emergencyContacts.map((contact, index) => (
                        <div
                            key={index}
                            className="admin-edit-patient-contact-row"
                            ref={index === emergencyContacts.length - 1 ? lastContactRef : null}
                        >
                            <input
                                type="text"
                                placeholder={`Contact ${index + 1}`}
                                value={contact}
                                className="admin-edit-patient-contact-input"
                                onChange={(e) => handleContactChange(index, e.target.value)}
                            />
                            <button
                                type="button"
                                className="admin-edit-patient-remove-button"
                                onClick={() => handleRemoveContact(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="admin-edit-patient-file">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="admin-edit-patient-file-input"
                        onChange={handleFileChange}
                    />
                    <p className="admin-edit-patient-file-name">{patientData.image?.name}</p>
                    <div className="admin-edit-patient-choose-file" onClick={() => fileInputRef.current.click()}>
                        <span>Choose File</span>
                    </div>
                    <p className="admin-edit-patient-input-placeholder">
                        Profile Picture<span style={{ color: "red" }}> *</span>
                    </p>
                </div>

                <div className="admin-edit-patient-button-header">
                    <button type="submit" className="submit-button">Update Patient</button>
                    <Link to="/admin-viewpatients" className="cancel-button">Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default Editviewpatient;
