import React, { useState } from "react";
import Modal from "react-modal";
import './Admininsurance.css'; 
import insuranceTypeone from '../../../Assets/insurane-image.png';
import insuranceProfileTypeTwo from '../../../Assets/insurance-type-2.png'; 
import { CiImageOn } from "react-icons/ci";

Modal.setAppElement('#root');

const Admininsurance = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [insurances, setInsurances] = useState([
        { type: "ADNC Insurance", profile: insuranceTypeone },
        { type: "AXA GIG Gulf Insurance", profile: insuranceProfileTypeTwo }
    ]);
    const [newInsurance, setNewInsurance] = useState({ type: "", details: "", profile: "" }); 

    const openModal = () => setModalIsOpen(true);

    const closeModal = () => {
        // Reset the form fields when closing the modal
        setNewInsurance({ type: "", details: "", profile: "" }); 
        setModalIsOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInsurance(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewInsurance(prevState => ({
                ...prevState,
                profile: URL.createObjectURL(file)
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInsurances([...insurances, newInsurance]);
        closeModal();
    };

    const handleDelete = (index) => {
        const updatedInsurances = insurances.filter((_, i) => i !== index);
        setInsurances(updatedInsurances);
    };

    return (
        <div className="admin-insurance">
            <div className="admin-insurance-header">
                <h2>All Insurance</h2>
                <button className="Admin-new-insurance" onClick={openModal}>Add New Insurance</button>
            </div>

            <div className="admin-insurance-list">
                {insurances.map((insurance, index) => (
                    <div key={index} className="admin-insurance-content">
                        <div className="admin-insurance-image">
                            <img src={insurance.profile} alt="Insurance"/>
                        </div>
                        <p className="admin-insurance-specialist">{insurance.type}</p>
                        <button 
                            className="admin-insurance-delete" 
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for adding insurance */}
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal}
                contentLabel="Add Insurance"
                className="admin-insurance-modal"
                overlayClassName="admin-insurance-modal-overlay"
            >
                <h2>New Insurance Provider</h2>
                <form onSubmit={handleSubmit}>
                    <div className="admin-insurance-form-group">
                        <label>Insurance Type</label>
                        <input 
                            type="text" 
                            name="type" 
                            value={newInsurance.type} 
                            onChange={handleInputChange}
                            placeholder="Enter the Insurance Type" 
                            required 
                        />
                    </div>
                    <div className="admin-insurance-form-group">
                        <label>Profile Image</label>
                        <input 
                            type="file" 
                            id="profile-image-input" 
                            style={{ display: 'none' }} 
                            onChange={handleFileChange} 
                        />
                        <label 
                            htmlFor="profile-image-input" 
                            className="image-upload-box"
                        >
                            {newInsurance.profile ? 
                                <img src={newInsurance.profile} alt="Profile" className="uploaded-image" /> : 
                                <div className="image-placeholder">
                                    <CiImageOn size={50} />
                                    <p>Click to upload</p>
                                </div>
                            }
                        </label>
                    </div>
                    <div className="admininsurance-modal-button">
                        <button type="submit" className="admin-insurance-modal-submit">Add Insurance</button>
                        <button onClick={closeModal} className="admin-insurance-modal-close">Close</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Admininsurance;
