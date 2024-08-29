import React, { useRef, useState } from 'react';
import './editviewdoctor.css';
import doctorprofilesow from '../../../../Assets/doctoprofiletypeone.jpeg';
import { MdModeEdit } from 'react-icons/md';

const Editviewdoctor = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(doctorprofilesow);
  const [name, setName] = useState('Yunche Wilson'); 
  const [about, setAbout] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maxime eius suscipit adipisci? Eos veritatis quidem, repellendus aspernatur vel nemo necessitatibus voluptatum dolorem vero accusantium ab, dolore autem recusandae quia?'
  );

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  // Update state with new image URL
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  // Update state with new name
  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  // Update state with new about text
  const handleAboutChange = (event) => {
    setAbout(event.target.value); 
  };

  return (
    <div className="admin-edit-view-doctor-top-head">
      <h2 className="admin-viewdoctor-head-title">Edit Doctor Profile</h2>

      <div className="admin-viewdoctor-container">
        <div className="admin-viewdoctor-profile-header">

          <div className="admin-viewdoctor-profile-head">
            <img
              src={profileImage}
              alt="Profile"
              className="admin-viewdoctor-profile-show"
            />
            <div className="admin-viewdoctor-profile-icon-header">
              <input
               type="file"
               ref={fileInputRef}
               onChange={handleFileChange}
               style={{ display: 'none' }}
              />
              <MdModeEdit className="adim-viewdoctor-profile-edit-iocn"  onClick={handleEditClick} />
            </div>
          </div> 

          <div className="admin-viewdoctor-profile-head-title">
            
            <div className="admin-viewdoctor-profile-input-header">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
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
                value={about}
                onChange={handleAboutChange}
                className="about-us-clsn"
              />
              <p className="admin-viewdoctor-profile-input-placeholder">
               About Me<span> *</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editviewdoctor;
