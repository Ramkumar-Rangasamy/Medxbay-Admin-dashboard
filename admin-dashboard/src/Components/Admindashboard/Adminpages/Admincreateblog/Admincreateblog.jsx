import React, { useRef, useState } from "react";
import './admincreateblog.css';
import Admineditor from "./Admineditor";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';



const Admincreateblog = ({ loadBlogs }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    category: "",
    subCategory: "",
    hashtags: "",
    priority: "",
    description: "",
    image: null,
    save: false,
  });

  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleAddClick = () => {
    // Resetting new blog data when cancel is clicked
    setNewBlog({
      title: "",
      author: "",
      category: "",
      subCategory: "",
      hashtags: "",
      priority: "",
      description: "",
      image: null,
      save: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog submitted:", newBlog);
  };

  const categories = ["Technology", "Health", "Travel", "Food", "Lifestyle"];
  const subCategories = {
    Technology: ["AI", "Blockchain", "Cybersecurity"],
    Health: ["Nutrition", "Mental Health", "Fitness"],
    Travel: ["Adventure", "Culture", "Guides"],
    Food: ["Recipes", "Reviews", "Nutrition"],
    Lifestyle: ["Fashion", "Home Decor", "Wellness"],
  };

  const handlePublish = async () => {
    toast.success("Blog Publish");
    console.log("Blog submitted:", newBlog);
    try {
      const formData = new FormData();
      for (const key in newBlog) {
        formData.append(key, newBlog[key]);
      }

      const res = await axios.post(`API here`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data) {
        console.log("Blog published successfully:", res.data);
        loadBlogs();
        handleAddClick();
      } else {
        console.error("Failed to publish blog:", res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="admin-create-blog">
        <h2 className="admin-create-blog-title">Create Blogs</h2>
        <div className="admin-create-blog-form-container">
            <form className="admin-create-blog-form-gap" onSubmit={handleSubmit}>
                <div className="admin-create-blog-header">
                <input
                    type="text"
                    value={newBlog.title}
                    className="admin-create-blog-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                    }
                />
                <p className="admin-create-blog-placeholder">
                    Blog Title
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>

                <div className="admin-create-blog-header">
                <input
                    type="text"
                    value={newBlog.author}
                    className="admin-create-blog-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, author: e.target.value })
                    }
                />
                <p className="admin-create-blog-placeholder">
                    Author Name
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>

                <div className="admin-create-blog-header">
                <select
                    value={newBlog.category}
                    className="admin-create-blog-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, category: e.target.value })
                    }
                >
                    <option value="" disabled hidden>
                    Choose Blog Category
                    </option>
                    {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
                <p className="admin-create-blog-placeholder">
                    Blog Category
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>

                <div className="admin-create-blog-header">
                <select
                    value={newBlog.subCategory}
                    className="admin-create-blog-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, subCategory: e.target.value })
                    }
                >
                    <option value="" disabled hidden>
                    Choose Blog Sub Category
                    </option>
                    {newBlog.category &&
                    subCategories[newBlog.category].map((subCategory, index) => (
                        <option key={index} value={subCategory}>
                        {subCategory}
                        </option>
                    ))}
                </select>
                <p className="admin-create-blog-placeholder">
                    Blog Sub Category
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>

                <div className="admin-create-blog-header">
                <input
                    type="text"
                    value={newBlog.hashtags}
                    className="admin-create-blog-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, hashtags: e.target.value })
                    }
                />
                <p className="admin-create-blog-placeholder">
                    Hashtags (separated with a comma)
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>

                <div className="admin-create-blog-header">
                    <p className="admin-create-blog-placeholder-status">
                    Blog priority
                    <span style={{ color: "red" }}> *</span>
                    </p>
                    <div className="admin-create-blog-check-hilo">
                        <div className="admin-create-blog-radio-input-header">
                            <input
                                type="radio"
                                id="check-high"
                                name="priority"
                                value="high"
                                checked={newBlog.priority === "high"}
                                onChange={() =>
                                setNewBlog({
                                    ...newBlog,
                                    priority: "high",  
                                })
                                }
                            />
                            <label htmlFor="check-high" className="admin-create-blog-radio-radio-label">
                                High
                            </label>
                        </div>
                        <div className="admin-create-blog-radio-input-header">
                            <input
                                type="radio"
                                id="check-low"
                                name="priority"
                                value="low"
                                checked={newBlog.priority === "low"}
                                onChange={() =>
                                setNewBlog({
                                    ...newBlog,
                                    priority: "low",
                                })
                                }
                            />
                            <label htmlFor="check-low" className="admin-create-blog-radio-radio-label">
                            Low
                            </label>
                        </div>
                    </div>
                </div>
            </form>

            <div className="admin-create-blog-editor-and-file-container">
                <div className="admin-create-blog-editor-box">
                    <Admineditor
                        ref={quillRef}
                        defaultText="Description"
                        onTextChange={(content) => {
                        const plainText = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
                        setNewBlog({ ...newBlog, description: plainText });
                        }}
                    />
                </div>

                <div className="admin-create-blog-header-file">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="admin-create-blog-file-input"
                    onChange={(e) =>
                    setNewBlog({ ...newBlog, image: e.target.files[0] })
                    }
                />
                <p className="admin-create-blog-file-name">{newBlog?.image?.name}</p>

                <div className="choose-file-admin-create-blog" onClick={() => fileInputRef.current.click()}>
                    <span>Choose File</span>
                </div>
                <p className="admin-create-blog-placeholder">
                    Image
                    <span style={{ color: "red" }}> *</span>
                </p>
                </div>
            </div>

            <div className="admin-create-blog-button">
                <div className="admin-create-blog-button-inside" onClick={handlePublish}>
                 <span>Publish Blog</span>
                </div>
                <div className="admin-create-blog-button-inside" onClick={handleAddClick}
                 style={{ background: "#3334480D", color: "black" }} >
                 <span>Cancel</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Admincreateblog;
