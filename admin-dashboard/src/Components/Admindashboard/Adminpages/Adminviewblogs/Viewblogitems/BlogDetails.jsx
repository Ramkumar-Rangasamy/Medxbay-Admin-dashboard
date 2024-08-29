import React from "react";
import Comment from "./Comment";
import { IoIosCalendar } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

function BlogDetails() {
  return (
    <div className="Adminviewblog-blog-cnt">
      <div className="Adminviewblog-blog-post-cnt">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <div className="Adminviewblog-blog-status-info">
          <p className="Adminviewblog-read-more-text">Read more in 8 Minutes</p>
          <div className="Adminviewblog-blog-status">
            <div className="Adminviewblog-date-info-cnt">
              <IoIosCalendar size="1.1rem" className="Adminviewblog-date-info-cnt-icon" />
              <p className="Adminviewblog-blue-text">05 Sep 2022</p>
            </div>
            <div className="Adminviewblog-date-info-cnt">
              <TbMessage size="1.1rem" className="Adminviewblog-date-info-cnt-icon"/>
              <p className="Adminviewblog-blue-text">58</p>
            </div>
            <div className="Adminviewblog-date-info-cnt">
              <LuEye size="1.1rem" className="Adminviewblog-date-info-cnt-icon"/>
              <p className="Adminviewblog-blue-text">2.8k</p>
            </div>
          </div>
        </div>

        <img
          src=""
          alt="blog-img"
          className="Adminviewblog-blog-image"
        />
        <p className="Adminviewblog-blog-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="Adminviewblog-social-reach-cnt">
          <IoLogoFacebook className="Adminviewblog-facebook-icon"/>
          <span>2.5k</span>
        </div>
        <div className="Adminviewblog-blog-tags">
          <div className="Adminviewblog-blog-tags-content">
            <span className="Adminviewblog-blog-tags-item"># Ophthalmology </span>
          </div>
          <div className="Adminviewblog-blog-tags-content">
            <span className="Adminviewblog-blog-tags-item"># Beauty</span>
          </div>
          <div className="Adminviewblog-blog-tags-content">
            <span className="Adminviewblog-blog-tags-item"># Prevention</span>
          </div>
        </div>
      </div>
      
      <div className="Adminviewblog-blogger-details-cnt Adminviewblog-profileInfo">
        <img
          src=""
          alt="profile-img"
          className="Adminviewblog-profile-img"
        />
        <h4>Elizabeth</h4>
        <p>Dentist</p>
        <p className="Adminviewblog-profile-bio">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem recusandae atque iusto ipsam. Tempore nihil modi
          doloribus architecto necessitatibus assumenda aut, illo accusamus
          ipsa, facilis quaerat expedita repellat quisquam! Magni.
        </p>
        <div className="Adminviewblog-profile-socials-cnt">
          <IoLogoFacebook className="Adminviewblog-facebook-icon"/>
          <IoLogoLinkedin className="Adminviewblog-facebook-icon"/>
          <FaTwitter className="Adminviewblog-facebook-icon"/>
          <SiInstagram className="Adminviewblog-facebook-icon"/>
        </div>
      </div>
      <div className="Adminviewblog-comments-cnt">
        <h4 className="Adminviewblog-comments-title">Comments</h4>
        <Comment/>  
      </div>
    </div>
  )
}

export default BlogDetails;
