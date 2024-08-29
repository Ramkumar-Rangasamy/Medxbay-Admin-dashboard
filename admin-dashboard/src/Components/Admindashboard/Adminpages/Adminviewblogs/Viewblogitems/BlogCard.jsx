import React, { useState } from "react";
import BlogDetails from "./BlogDetails";
import PostComment from "./PostComment";
import { IoIosCalendar } from "react-icons/io";
import { TbSquareRoundedArrowDown } from "react-icons/tb";
import profileImg from '../../../../Assets/profileimg.png';
import blogimg from '../../../../Assets/blogimg.png';

const BlogCard = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogDataArray = [
    {
      id: 1,
      imageUrl: blogimg,  
      profileImageUrl: profileImg,  // Use the imported profile image
      authorName: "Author One",
      authorTitle: "M.B.B.S, Diabetologist",
      date: "05 Sep 2022",
      title: "Simple Changes That Lowered My Mom's Blood Pressure",
      previewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      readTime: 8,
    },
    {
      id: 2,
      imageUrl: blogimg,  
      profileImageUrl: profileImg,  // Use the imported profile image
      authorName: "Author One",
      authorTitle: "M.B.B.S, Diabetologist",
      date: "05 Sep 2022",
      title: "Simple Changes That Lowered My Mom's Blood Pressure",
      previewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      readTime: 8,
    },
  ];

  const handleBlogClick = (id) => {
    setActiveBlog((prev) => (prev === id ? null : id));
  };

  return (
    <div className="Adminviewblog-blog-card-container">
      {blogDataArray.map((blog) => (
        <div
          key={blog.id}
          className="Adminviewblog-blog-card-wrapper"
          style={{ display: activeBlog && activeBlog !== blog.id ? 'none' : 'block' }}
        >
          <div className="Adminviewblog-blog-card-cnt">
            <img src={blog.imageUrl} alt="blog" className="Adminviewblog-blog-card-img" />
            <div className="Adminviewblog-blog-card-profileInfo-cnt">
              <div className="Adminviewblog-profileInfo-cnt">
                <img
                  src={blog.profileImageUrl}
                  alt="profile"
                  className="Adminviewblog-blog-card-profile-img"
                />
                <div className="Adminviewblog-profileInfo">
                  <h4>{blog.authorName}</h4>
                  <p>{blog.authorTitle}</p>
                </div>
              </div>
              <div className="Adminviewblog-date-info-cnt">
                <IoIosCalendar size="1.1rem" className="Adminviewblog-date-info-cnt-icon" />
                <p className="Adminviewblog-blue-text">{blog.date}</p>
              </div>
            </div>
            <div className="Adminviewblog-blog-content-preview-cnt">
              <h4>{blog.title}</h4>
              <p>{blog.previewText}</p>
            </div>
            <div className="Adminviewblog-readMore-cnt" onClick={(e) => { e.preventDefault(); handleBlogClick(blog.id); }}>
              <h4>Read more in {blog.readTime} Minutes</h4>
              <TbSquareRoundedArrowDown
                size="1.3rem"
                className="Adminviewblog-readMore-cnt-icon"
              />
            </div>
            {activeBlog === blog.id && (
              <div className="Adminviewblog-blogdetailstransition">
                <BlogDetails blog={blog} />
                <PostComment blogId={blog.id} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
