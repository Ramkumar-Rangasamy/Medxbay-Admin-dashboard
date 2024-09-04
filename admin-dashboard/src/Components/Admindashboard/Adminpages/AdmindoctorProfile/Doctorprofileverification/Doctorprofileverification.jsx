import React, { useState } from 'react';
import "./doctorprofileverification.css";
import doctorprofilesow from "../../../../Assets/doctoprofiletypeone.jpeg";
import insuranceTypeone from "../../../../Assets/metlife.png";
import insuranceTypetwo from "../../../../Assets/insurance-type-2.png";
import dummypdf from "../../../../Assets/dummypdf.pdf";
import testingimage from "../../../../Assets/testingimage.jpeg";

import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";

const Doctorprofileverification = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const documents = [
    { id: 1, type: 'pdf', name: 'License proof', fileUrl: dummypdf },
    { id: 2, type: 'image', name: 'Certification proof', fileUrl: testingimage },
    { id: 2, type: 'image', name: 'business proof', fileUrl: testingimage },

    // Add more documents as needed
  ];

  const fakedata = {
    languages: ["Tamil", "English", "Kannada"],
    conditions: ["Full Body Checkup", "Clear", "Checkup"],
    hospitals: [
      {
        name: "Hospital A",
        street: "123 Main St",
        city: "Chennai",
        state: "TN",
        country: "India",
        zip: "600001",
      },
      {
        name: "Hospital B",
        street: "456 Second St",
        city: "Bangalore",
        state: "KA",
        country: "India",
        zip: "560002",
      },
    ],
    insurance: [
      { insuranceimage: insuranceTypeone, insurancename: "MetLife Insurance" },
      {insuranceimage: insuranceTypetwo,insurancename: " AXA GIG Gulf Insurance",},
    ],
    awards: [
      { awardstype: "Doctor of the Quarter 2023" },
      { awardstype: "Best Neurologist of the Year" },
    ],
  };

  const handleStatusChange = (id, newStatus) => {
    setSubscriptions(subscriptions.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
  };
  const openModal = (document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };



  return (
    <div className="admin-doctorprofileverification">
      <h2 className="head-title">Doctor Profile Verification</h2>
      <div className="admin-doctorprofileverification-container">
        <div className="admin-doctorprofileverification-header">
          <div className="admin-doctorprofileverification-profile">
            <img
              src={doctorprofilesow}
              alt="Profile"
              className="admin-verification-profile"
            />
          </div>

          <div className="admin-doctorprofileverification-title">
            <h2 className="name-clsn">Yunche Wilson</h2>
            <p className="about-us-clsn">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              maxime eius suscipit adipisci? Eos veritatis quidem, repellendus
              aspernatur vel nemo necessitatibus voluptatum dolorem vero
              accusantium ab, dolore autem recusandae quia?
            </p>
          </div>
        </div>
          <form className="admin-dp-verification-pl-details">
            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Cardialogist"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Title<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="email"
                name="email"
                value="yunchewilson.3000@gmail.com"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Email<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="date"
                value="1998-06-26"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Date of Birth<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Female"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Gender<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="India"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Country<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Tamil Nadu"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                State<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Coimbatore"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Cities<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Available"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Availability<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="In-person & Video call"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Consultation<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Heart Specialist"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Specialitie<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input">
              <p className="admin-dp-verification-input-placeholder">
                Conditions Managed<span> *</span>
              </p>
              {fakedata.conditions.map((condition, index) => (
                <input
                  key={index}
                  type="text"
                  className="admin-dp-verification-input"
                  value={condition}
                  readOnly
                />
              ))}
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input">
              <p className="admin-dp-verification-input-placeholder">
                Languages Spoken<span> *</span>
              </p>
              {fakedata.languages.map((lang, index) => (
                <input
                  key={index}
                  type="text"
                  className="admin-dp-verification-input"
                  value={lang}
                  readOnly
                />
              ))}
            </div>

            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Social Media Handles</h2>
            </div>
           
            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="https://www.medxbay.com"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Website<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="https://www.twitter.com"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Twitter<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="https://www.linkedIn.com"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                LinkedIn<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                placeholder="No Data"
                value="https://www.instagram.com"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Instagram<span> *</span>
              </p>
            </div>

            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Subscription Details</h2>
            </div>
            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Premium"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Subscription Type<span> *</span>
              </p>
            </div>
            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Verified"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Subscription Verification<span> *</span>
              </p>
            </div>

            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Hospitals Details</h2>
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input m-0">
              <p className="admin-dp-verification-input-placeholder">
                Hospital Name<span> *</span>
              </p>
              {fakedata.hospitals.map((hospital, index) => (
                <input
                  key={`hospital-name-${index}`}
                  type="text"
                  className="admin-dp-verification-input"
                  value={hospital.name}
                  readOnly
                />
              ))}
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input m-0">
              <p className="admin-dp-verification-input-placeholder">
                Location<span> *</span>
              </p>
              {fakedata.hospitals.map((hospital, index) => {
                const fullAddress = `${hospital.street}, ${hospital.city}, ${hospital.state}, ${hospital.country}, ${hospital.zip}`;
                return (
                  <input
                    key={`hospital-location-${index}`}
                    type="text"
                    className="admin-dp-verification-input"
                    value={fullAddress}
                    readOnly
                  />
                );
              })}
            </div>

            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Insurances & Awards</h2>
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input m-0">
              {fakedata.insurance.map((insurancenameall, index) => (
                <img
                  key={`insurance-image-${index}`}
                  src={insurancenameall.insuranceimage}
                  alt="Verified Insurance"
                  className="admin-dp-verification-input input-for-image-showing"
                />
              ))}
              <p className="admin-dp-verification-input-placeholder">
                Insurance image<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input m-0">
              {fakedata.insurance.map((insurancenameall, index) => (
                <input
                  key={`insurance-name-${index}`}
                  type="text"
                  value={insurancenameall.insurancename}
                  className="admin-dp-verification-input"
                  readOnly
                />
              ))}
              <p className="admin-dp-verification-input-placeholder">
                Insurance Name<span> *</span>
              </p>
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input">
              <p className="admin-dp-verification-input-placeholder">
                Awards<span> *</span>
              </p>
              {fakedata.awards.map((awards, index) => (
                <input
                  key={index}
                  type="text"
                  className="admin-dp-verification-input"
                  value={awards.awardstype}
                  readOnly
                />
              ))}
            </div>

            <div className="admin-dp-verification-pd-itheader admin-dp-verification-pd-itheader-multi-input">
              <input
                type="text"
                name="text"
                value="None"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                FAQs<span> *</span>
              </p>
            </div>

            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Documents Proof</h2>
            </div>

            {documents.map((document) => (
              <div className="admin-dp-verification-pd-itheader  admin-dp-verification-proof-conatiner " key={document.id}>
                <input
                  type="text"
                  name="view"
                  className="admin-dp-verification-input admin-dp-verification-proof-input"
                  value={document.name}
                  readOnly
                />
                <span className="admin-dp-verification-document-proof-view-button" onClick={() => openModal(document)}>
                  View
                </span>
              </div>
            ))}

            {isModalOpen && selectedDocument && (
              <div className="doctorverification-modal-overlay" onClick={closeModal}>
                <div className="doctorverification-modal-content" onClick={(e) => e.stopPropagation()}>
                  <h2 className="doctorverification-modal-proof-heading">{selectedDocument.name}</h2>
                  <div className='doctorverification-document-area'>
                    {selectedDocument.type === 'pdf' ? (
                      <embed src={selectedDocument.fileUrl} style={{ width: '900px' ,height:'400px'}}  />
                    ) : (
                      <img src={selectedDocument.fileUrl} alt="Placeholder" style={{ width: '100%' }} />
                    )}
                  </div>
                  <button onClick={closeModal} className="doctorverification-modal-close">Close</button>
                </div>
              </div>
            )}
            



            <div className="admin-dp-hospitals-verification-details-header">
              <h2>Verification</h2>
            </div>

            <div className="admin-dp-verification-pd-itheader">
              <input
                type="text"
                name="text"
                value="Not Verified"
                className="admin-dp-verification-input"
                readOnly
              />
              <p className="admin-dp-verification-input-placeholder">
                Current Verification Status<span> *</span>
              </p>
            </div>
             
            <div className="admin-dp-verification-pd-itheader">
              <div className='admin-dp-verification-select-box-header'>
                <select
                  className="admin-dp-verification-select-box-input"
                  onChange={(e) => handleStatusChange(e.target.value)}
                >
                  <option value="Verified">Verified</option>
                  <option value="Pending">Pending</option>
                  <option value="Not Verified">Not Verified</option>
                </select>
                <RiArrowDownSLine className="admin-dp-verification-select-box-arrow-icon" />
                <p className="admin-dp-verification-input-placeholder">
                  Update Verification Status<span> *</span>
                </p>
              </div>
            </div>
            


            <div className="admin-dp-verification-pd-button-itheader">
              <button type="submit" className="submit-button">Update</button>
              <Link to="/admin-doctorprofile" className="cancel-button">Close Profile</Link>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Doctorprofileverification;