import React, { useState } from "react";

const PostComment = () => {
  const [isCurrentFocus, setIsCurrentFocus] = useState(null);
  const [newComment, setNewComment] = useState({
    comment: "",
    save: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Comment submitted:", newComment);
  };

  return (
    <div className="Adminviewblog-leave-comment-cnt">
      <h4 className="Adminviewblog-comments-title">Leave a Comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="Adminviewblog-textarea-comment-post">
          <textarea
            value={newComment.comment}
            className="Adminviewblog-input-textarea-commit-post"
            onFocus={() => setIsCurrentFocus("comment")}
            onBlur={() => setIsCurrentFocus(null)}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          />
          <p
            className={`Adminviewblog-input-placeholder-commit-post ${newComment.comment || isCurrentFocus === "comment" ? "focused" : ""}`}
          >
            Comment <span style={{ color: "red" }}> *</span>
          </p>
        </div>
        
        <div className="Adminviewblog-comment-term-conformation-cnt">
          <input
            type="checkbox"
            checked={newComment.save}
            onChange={() => setNewComment({ ...newComment, save: !newComment.save })}
            className="Adminviewblog-comment-checkbox"
          />
          <span className="Adminviewblog-checkbox-comment-txt" >
            Save my name, email, and website in this browser for the next time I comment.
          </span>
        </div>
        <button type="submit" className="Adminviewblog-submit-button">Post Comment</button>
      </form>
    </div>
  );
};

export default PostComment;
