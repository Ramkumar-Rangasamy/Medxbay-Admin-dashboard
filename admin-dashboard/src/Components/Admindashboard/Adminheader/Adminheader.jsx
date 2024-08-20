import React from 'react'
import './adminheader.css'
import { Link } from "react-router-dom";
import profile from '../../Assets/pexels-andrea-piacquadio-3776187.jpg';
const Adminheader = () => {
  return (
    <>
        <header className="header-head">
        <div className="home-return">
         <Link to='/' className="text-home-return">Home</Link>
        </div>
        <div className="profile-container">
          <div className="image-container">
            <img src={profile} alt="Profile"/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Adminheader