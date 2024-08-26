import React, { useState } from 'react';
import './admindashboardpage.css';
import reviewsImg from './Assets/reviewsImg.png';
import consultationimg from './Assets/consultationimg.png';
import Newpatient from './Assets/Newpatient.png';
import experience from './Assets/Experience.png'; 
import Yourincome from './Yourincome';
import BookingRate from './BookingRate';
import { RiArrowDownSLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { RiListView } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";

const DashboardPage = () => {
  const [MyInsights, setmyinsights] = useState('This Month');
  const [blogtimePeriod, setBlogtimePeriod] = useState('This Month');

  // Data for insights
  const insightsData = {
    'This Month': {
      newPatients: '1,500+',
      pendingRequests: '1,000+',
      appointments: '200+',
    },
    'This Week': {
      newPatients: '500+',
      pendingRequests: '300+',
      appointments: '50+',
    },
    'This Year': {
      newPatients: '18,000+',
      pendingRequests: '12,000+',
      appointments: '2,400+',
    },
  };

  // Data for blogs
  const blogsData = {
    'This Month': {
      totalBlogs: '30',
      pendingBlogs: '5',
      verifiedBlogs: '25',
    },
    'This Week': {
      totalBlogs: '10',
      pendingBlogs: '2',
      verifiedBlogs: '8',
    },
    'This Year': {
      totalBlogs: '200',
      pendingBlogs: '50',
      verifiedBlogs: '150',
    },
  };

  return (
    <div className='main-dashboard-page'>
      <h2 className='heading-dashboard-page'>Dashboard</h2>
      <div className='dashboard-scoll-head'>
        <div className='dashboard-gird-layout'>

          {/* My Insights */}
          <div className="insight-patient">
            <div className='dashboard-head-common'>
              <p>My Insights</p>
              <div className="select-container">
                <select
                  className="select-box-common"
                  value={MyInsights}
                  onChange={(e) => setmyinsights(e.target.value)}
                >
                  <option value="This Month">This Month</option>
                  <option value="This Week">This Week</option>
                  <option value="This Year">This Year</option>
                </select>
                <RiArrowDownSLine className="arrow-icon-filter" />
              </div>
            </div>

            <div className="insight-item">
              <div className="insight-img-container blue-color">
                <img src={Newpatient} alt="New Patients" className='image-insight' />
              </div>
              <div className="insight-info">
                <h4>New Patients</h4>
                <p>{insightsData[MyInsights].newPatients}</p>
              </div>
            </div>

            <div className="insight-item">
              <div className="insight-img-container dark-blue-color">
                <CiClock2 className='image-insight text-light' />
              </div>
              <div className="insight-info">
                <h4>Pending Requests</h4>
                <p>{insightsData[MyInsights].pendingRequests}</p>
              </div>
            </div>

            <div className="insight-item">
              <div className="insight-img-container green-color">
                <RiListView className='image-insight text-light' />
              </div>
              <div className="insight-info">
                <h4>Appointments</h4>
                <p>{insightsData[MyInsights].appointments}</p>
              </div>
            </div>
          </div>

          {/* Your Income */}
          <div className="income-head">
            <Yourincome/>
          </div>

          {/* My Blogs */}
          <div className="dashboard-blogs-patient">
            <div className='dashboard-head-common'>
              <p>My Blogs</p>
              <div className="select-container">
                <select
                  className="select-box-common"
                  value={blogtimePeriod}
                  onChange={(e) => setBlogtimePeriod(e.target.value)}
                >
                  <option value="This Month">This Month</option>
                  <option value="This Week">This Week</option>
                  <option value="This Year">This Year</option>
                </select>
                <RiArrowDownSLine className="arrow-icon-filter" />
              </div>
            </div>

            <div className="dashboard-blogs-item">
              <div className="blog-img-container dark-blue-color">
                <TbBrandBlogger className='dashboard-image-blogs text-light' />
              </div>
              <div className="dashboard-blogs-info">
                <h4>Total Blogs</h4>
                <p>{blogsData[blogtimePeriod].totalBlogs}</p>
              </div>
            </div>

            <div className="dashboard-blogs-item">
              <div className="blog-img-container orange-color">
                <MdOutlinePendingActions className='dashboard-image-blogs text-light' />
              </div>
              <div className="dashboard-blogs-info">
                <h4>Pending Blogs</h4>
                <p>{blogsData[blogtimePeriod].pendingBlogs}</p>
              </div>
            </div>

            <div className="dashboard-blogs-item">
              <div className="blog-img-container green-color">
                <img src={experience} className='dashboard-blog-image' alt="Verified Blogs"/>
              </div>
              <div className="dashboard-blogs-info">
                <h4>Verified Blogs</h4>
                <p>{blogsData[blogtimePeriod].verifiedBlogs}</p>
              </div>
            </div>
          </div>

          {/* Consultation */}
          <div className="consultation">
            <div className='consultation-coverarea'>
              <div className='consultation-info'>
                <p className='consultation-count'>160+</p>
                <p className='consultation-label'>Consultations</p>
              </div>
              <img src={consultationimg} className='consultation-img' alt="Consultation" />
            </div>
          </div>

          {/* Reviews */}
          <div className="reviews">
            <div className='reviews-coverarea'>
              <div className='reviews-info'>
                <h2 className='reviews-count'>250+</h2>
                <p className='reviews-label'>Patient Reviews</p>
              </div>
              <img src={reviewsImg} className='reviews-img' alt="Reviews" />
            </div>
          </div>  

          {/* Booking Rate */}
          <div className="booking-rate">
            <BookingRate/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
