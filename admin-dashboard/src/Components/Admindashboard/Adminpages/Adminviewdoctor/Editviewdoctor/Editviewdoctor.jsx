import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './editviewdoctor.css';
import doctorprofilesow from '../../../../Assets/doctoprofiletypeone.jpeg';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import { PiPlusCircleFill } from 'react-icons/pi';

const Editviewdoctor = () => {
  const location = useLocation();
  const doctorData = location.state?.doctor;

  const fileInputRef = useRef(null);
  const lastContactRef = useRef(null);

  const [formData, setFormData] = useState({
    profileImage: doctorData?.profileImage || doctorprofilesow,
    name: doctorData?.name || '',
    about: doctorData?.about || '',
    title: doctorData?.title || '',
    email: doctorData?.email || '',
    date: doctorData?.date || '',
    gender: doctorData?.gender || '',
    availability: doctorData?.availability || '',
    bloodgroup: doctorData?.bloodgroup || '',
    country: doctorData?.country || '',
    state: doctorData?.state || '',
    city: doctorData?.city || '',
    consultation: doctorData?.consultation || '',
    twitter: doctorData?.twitter || '',
    facebook: doctorData?.facebook || '',
    linkedin: doctorData?.linkedin || '',
    instagram: doctorData?.instagram || '',
    website: doctorData?.website || '',
    specialties: doctorData?.specialties || ['Defult'],
    conditions: doctorData?.conditions || ['Defult'],
    languages: doctorData?.languages || ['Defult'],
    hospitaldata: doctorData?.hospitaldata || [
      { name: '', street:'', city: '', state: '', country: '', zip: ''}],
    insurance: doctorData?.insurance || [],
    awards: doctorData?.awards || ['Defult'],
  });

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event, field, index) => {
    const { id, value, files } = event.target;
  
    if (id === 'profileImage' && files && files.length > 0) {
      // Handle file input for profile image
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          profileImage: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    } else if (field && index !== undefined) {
      // Handle array field updates, including insurance
      setFormData((prevFormData) => {
        const updatedArray = [...prevFormData[field]];
        updatedArray[index] = value; // Correctly set the new value
        return {
          ...prevFormData,
          [field]: updatedArray,
        };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };
  

  const handleAddItem = (field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: [...prevFormData[field], ''],
    }));
  };


  const handleRemoveItem = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: updatedArray,
    }));

    setTimeout(() => {
      if (lastContactRef.current) {
        lastContactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="admin-edit-view-doctor-top-head">
      <h2 className="admin-viewdoctor-head-title">Edit Doctor Profile</h2>

      <div className="admin-viewdoctor-container">
        <div className="admin-viewdoctor-profile-header">
          <div className="admin-viewdoctor-profile-head">
            <img
              src={formData.profileImage}
              alt="Profile"
              className="admin-viewdoctor-profile-show"
            />
            <div className="admin-viewdoctor-profile-icon-header">
              <input
                type="file"
                id="profileImage"
                ref={fileInputRef}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <MdModeEdit
                className="admin-viewdoctor-profile-edit-icon"
                onClick={handleEditClick}
              />
            </div>
          </div>

          <div className="admin-viewdoctor-profile-head-title">
            <div className="admin-viewdoctor-profile-input-header">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="admin-viewdoctor-profile-input-name-clsn"
              />
              <p className="admin-viewdoctor-profile-input-placeholder">
                Name<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-profile-textarea">
              <textarea
                rows="4"
                cols="50"
                id="about"
                value={formData.about}
                onChange={handleChange}
                className="about-us-clsn"
              />
              <p className="admin-viewdoctor-profile-input-placeholder">
                About Me<span> *</span>
              </p>
            </div>
          </div>
        </div>

        <div className="admin-viewdoctor-profile-edit-header-two">
          <div className="admin-viewdoctor-edit-details">
          <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Title<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Email<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="date"
                id="date"
                value={formData.date}
                className="admin-viewdoctor-edit-details-input"
                onChange={handleChange}
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Date of Birth<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division select-box-arrow-icon-head">
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input select-box-arrow-icon-input"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Gender<span> *</span>
              </p>
            </div>
            
            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="country"
                placeholder='enter your country'
                value={formData.country}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Country<span> *</span>
              </p>
            </div>
            
            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                State<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                City<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division select-box-arrow-icon-head">
              <select
                id="availability"
                value={formData.availability}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input select-box-arrow-icon-input"
              >
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Availability<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division select-box-arrow-icon-head">
              <select
                id="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input select-box-arrow-icon-input"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Blood Group<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division select-box-arrow-icon-head">
              <select
                id="consultation"
                value={formData.consultation}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input select-box-arrow-icon-input"
              >
                <option value="">Select Consultation Type</option>
                <option value="In-person">In-person</option>
                <option value="Video call">Video call</option>
                <option value="Both">Both</option>
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
               Consultation<span> *</span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="admin-viewdoctor-edit-details-socialmediahandles-header">
              <h2>Social Media Handles</h2>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Twitter<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Facebook<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                LinkedIn<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Instagram<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-division">
              <input
                type="text"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className="admin-viewdoctor-edit-details-input"
              />
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Website<span> *</span>
              </p>
            </div>

            <div className="admin-viewdoctor-edit-details-socialmediahandles-header">
              <h2>Speacial Checking</h2>
            </div>

            {/* Editable List for Specialties */}
            <div className="admin-viewdoctor-edit-details-division special-division-edit">
              {formData.specialties.map((specialty, index) => (
                <div key={index} className="admin-viewdoctor-edit-details-division special-division-edit">
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) => handleChange(e, 'specialties', index)}
                    className='admin-viewdoctor-edit-details-input'
                  />
                  <MdDelete
                    onClick={() => handleRemoveItem('specialties', index)}
                    className='admin-viewdoctor-edit-details-remove-icon'
                  />
                </div>
              ))}
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Specialties
                <PiPlusCircleFill
                  onClick={() => handleAddItem('specialties')}
                  className="add-plus-icon"
                />
                <span> *</span>
              </p>
            </div>

            {/* Editable List for Conditions */}
            <div className="admin-viewdoctor-edit-details-division special-division-edit">
              {formData.conditions.map((condition, index) => (
                <div key={index} className="admin-viewdoctor-edit-details-division special-division-edit">
                  <input
                    type="text"
                    value={condition}
                    onChange={(e) => handleChange(e, 'conditions', index)}
                    className='admin-viewdoctor-edit-details-input'
                  />
                  <MdDelete
                    onClick={() => handleRemoveItem('conditions', index)}
                    className='admin-viewdoctor-edit-details-remove-icon'
                  />
                </div>
              ))}
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Conditions
                <PiPlusCircleFill
                  onClick={() => handleAddItem('conditions')}
                  className="add-plus-icon"
                />
                <span> *</span>
              </p>
            </div>

            {/* Editable List for Languages */}
            <div className="admin-viewdoctor-edit-details-division special-division-edit">
              {formData.languages.map((language, index) => (
                <div key={index} className="admin-viewdoctor-edit-details-division special-division-edit">
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => handleChange(e, 'languages', index)}
                    className='admin-viewdoctor-edit-details-input'
                  />
                  <MdDelete
                    onClick={() => handleRemoveItem('languages', index)}
                    className='admin-viewdoctor-edit-details-remove-icon'
                  />
                </div>
              ))}
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Languages
                <PiPlusCircleFill
                  onClick={() => handleAddItem('languages')}
                  className="add-plus-icon"
                />
                <span> *</span>
              </p>
            </div>
            
            <div className="admin-viewdoctor-edit-details-socialmediahandles-header">
              <h2>Hospital Details</h2>
            </div>

            {/* Editable List for Hospital */}
            <div className='admin-viewdoctor-edit-details-hospital-container'>
            {formData.hospitaldata.map((hospital, index) => (
              <div key={index} className="admin-viewdoctor-edit-details-hospital-row">
                <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="name"
                      value={hospital.name}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="Hospital Name"
                      className="admin-viewdoctor-edit-details-input"
                    />
                    <p className="admin-viewdoctor-edit-details-input-placeholder">
                      Hospital name<span> *</span>
                    </p>
                  </div>
                  <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="street"
                      value={hospital.street}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="Street"
                      className="admin-viewdoctor-edit-details-input"
                    />
                    <p className="admin-viewdoctor-edit-details-input-placeholder">
                      street<span> *</span>
                    </p>
                  </div>
                  <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="city"
                      value={hospital.city}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="City"
                      className="admin-viewdoctor-edit-details-input"
                    />
                    <p className="admin-viewdoctor-edit-details-input-placeholder">
                      city<span> *</span>
                    </p>
                  </div>
                  <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="state"
                      value={hospital.state}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="State"
                      className="admin-viewdoctor-edit-details-input"
                    />
                    <p className="admin-viewdoctor-edit-details-input-placeholder">
                      State<span> *</span>
                    </p>
                  </div>
                  <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="country"
                      value={hospital.country}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="Country"
                      className="admin-viewdoctor-edit-details-input"
                    />
                     <p className="admin-viewdoctor-edit-details-input-placeholder">
                      Country<span> *</span>
                    </p>
                  </div>
                  <div className="admin-viewdoctor-edit-details-division">
                    <input
                      type="text"
                      id="zip"
                      value={hospital.zip}
                      onChange={(e) => handleChange(e, 'hospitaldata', index)}
                      placeholder="Zip Code"
                      className="admin-viewdoctor-edit-details-input"
                    />
                     <p className="admin-viewdoctor-edit-details-input-placeholder">
                      Zip<span> *</span>
                    </p>
                  </div>
                  <div className='admin-viewdoctor-edit-details-button-aglin'>
                    <button
                      type="button"
                      className="add-button"
                      onClick={() => handleAddItem('hospitaldata')}
                    >
                    <PiPlusCircleFill className='add-iocn-color'/>Add
                    </button>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => handleRemoveItem('hospitaldata', index)}
                    >
                      <MdDelete className='remove-iocn-color'/>Remove
                    </button>
                </div>
              </div>
            ))}
            </div>

            <div className="admin-viewdoctor-edit-details-socialmediahandles-header">
              <h2>Insurance & Awards Details</h2>
            </div>
            
            {/* Editable List for Insurance & Awards  */}
            <div className="admin-viewdoctor-edit-details-division select-box-arrow-icon-head">
              {formData.insurance.map((insurance, index) => (
                <div key={index} className="admin-viewdoctor-edit-details-division special-division-edit">
                  <select
                    id={`insurance-${index}`}
                    value={insurance} 
                    onChange={(e) => handleChange(e, 'insurance', index)}
                    className="admin-viewdoctor-edit-details-input select-box-arrow-icon-input mb-2"
                  >
                    <option value="">Select Insurance Type</option>
                    <option value="ADNC">ADNC Insurance</option>
                    <option value="aetna">aetna Insurance</option>
                    <option value="AXA">AXA GIG Gulf Insurance</option>
                    <option value="Daman">Daman Insurance</option>
                    <option value="MetLife">MetLife Insurance</option>
                    <option value="National">National General Insurance</option>
                    <option value="Oriental">Oriental Insurance</option>
                  </select>
                  <RiArrowDownSLine className="select-box-arrow-icon-insurance" />
                  <MdDelete
                    onClick={() => handleRemoveItem('insurance', index)}
                    className="admin-viewdoctor-edit-details-remove-icon"
                  />
                </div>
              ))}
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Insurance
                <PiPlusCircleFill
                  onClick={() => handleAddItem('insurance')}
                  className="add-plus-icon"
                />
                <span> *</span>
              </p>
            </div>
            
            {/* Editable List for Awards*/}
            <div className="admin-viewdoctor-edit-details-division special-division-edit">
              {formData.awards.map((award, index) => (
                <div key={index} className="admin-viewdoctor-edit-details-division special-division-edit">
                  <input
                    type="text"
                    value={award}
                    onChange={(e) => handleChange(e, 'awards', index)}
                    className='admin-viewdoctor-edit-details-input'
                  />
                  <MdDelete
                    onClick={() => handleRemoveItem('awards', index)}
                    className='admin-viewdoctor-edit-details-remove-icon'
                  />
                </div>
              ))}
              <p className="admin-viewdoctor-edit-details-input-placeholder">
                Awards
                <PiPlusCircleFill
                  onClick={() => handleAddItem('awards')}
                  className="add-plus-icon"
                />
                <span> *</span>
              </p>
            </div>
            
           
            <div className="admin-viewdoctor-edit-details-socialmediahandles-header">
             <button type="submit"  className="admin-viewdoctor-edit-details-update-profile">Update Profile</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </form>
    
  );
};

export default Editviewdoctor;
