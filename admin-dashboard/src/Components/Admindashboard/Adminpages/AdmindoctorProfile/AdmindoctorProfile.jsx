import React from 'react';
import './AdmindoctorProfile.css'; 
import { Link } from 'react-router-dom';

const AdmindoctorProfile = () => {
  const doctorprofile = [
    { id: 1, doctorName: 'Dr. Pardhu', Email: 'Pardhu@gmail.com', status: 'Verified' },
    { id: 2, doctorName: 'Dr. Hari', Email: 'Hari@gmail.com', status: 'Not Verified' },
    { id: 3, doctorName: 'Dr. Shiva', Email: 'Shiva@gmail.com', status: 'Verified' },
    { id: 4, doctorName: 'Dr. Kishore', Email: 'Kishore@gmail.com', status: 'Pending' },
    { id: 5, doctorName: 'Dr. Radha', Email: 'Radha@gmail.com', status: 'Not Verified' },
    { id: 6, doctorName: 'Dr. Hari', Email: 'Hari@gmail.com', status: 'Pending' },
    { id: 7, doctorName: 'Dr. Shiva', Email: 'Shiva@gmail.com', status: 'Verified' },
    { id: 8, doctorName: 'Dr. Kishore', Email: 'Kishore@gmail.com', status: 'Not Verified' },
    { id: 9, doctorName: 'Dr. Shiva', Email: 'Shiva@gmail.com', status: 'Pending' },
  ];

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Verified':
        return 'status-verified';
      case 'Pending':
        return 'status-pending';
      case 'Not Verifiedd':
        return 'status-NotVerified';
      default:
        return '';
    }
  };

  return (
    <div className="Admin-doctorprofile">
      <h2>Doctor Profile</h2>
      <div className='Admin-doctorprofile-table-container'>
        <table className="Admin-doctorprofile-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorprofile.map(({ id, doctorName, Email, status }) => (
              <tr key={id}>
                <td>{doctorName}</td>
                <td>{Email}</td>
                <td className={getStatusClassName(status)}>{status}</td>
                <td>
                  <Link to='/admin-doctorprofile-verification'>
                    <button onClick={() => console.log(`Action for ${doctorName}`)} className='Admin-doctorprofile-submit'>
                      View Profile
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmindoctorProfile;
