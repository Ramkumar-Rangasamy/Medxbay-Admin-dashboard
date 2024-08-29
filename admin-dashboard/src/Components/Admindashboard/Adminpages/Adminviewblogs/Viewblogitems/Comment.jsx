import React from "react";
import { IoArrowUndo } from "react-icons/io5";

const Comment = () => {
  const commentsData = [
    {
      profileImg: "",
      title: "Diana Bailey",
      time: "2 weeks ago",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit deserunt consequatur maiores adipisci ullam commodi! Expedita pariatur, eos natus nobis eum quidem?",
    },
    {
      profileImg: "",
      title: "John Doe",
      time: "1 month ago",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      profileImg: "",
      title: "Jane Smith",
      time: "3 days ago",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="Adminviewblog-comments-read">
      {commentsData.map((comment, index) => (
        <div key={index} className="Adminviewblog-style-comment-cnt">
          <div className="Adminviewblog-comment-header-text">
            <img src={comment.profileImg} alt="profile-icon" className="Adminviewblog-profile-img" />
            <div className="Adminviewblog-comment">
              <p className="Adminviewblog-comment-title">{comment.title}</p>
              <p className="Adminviewblog-comment-time-txt">{comment.time}</p>
              <p className="Adminviewblog-comment-txt">{comment.text}</p>
            </div>
          </div>
          <div className="Adminviewblog-replay-btn">
            <IoArrowUndo />
            <span>Reply</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
