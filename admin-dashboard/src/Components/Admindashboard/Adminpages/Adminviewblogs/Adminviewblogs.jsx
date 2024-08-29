import React, { useState } from 'react';
import './Adminviewblogs.css';
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Adminviewblogs = () => {
    const navigate = useNavigate(); // Create navigate function
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewblogs, setViewblogs] = useState([
        { id: 1, Title: 'Olympics', Author: 'Kousik', AuthorEmail: 'kousik0840@gmail.com', status: 'verified' },
        { id: 2, Title: 'Blog Post 2', Author: 'Author 2', AuthorEmail: 'author2@example.com', status: 'verified' },
        { id: 3, Title: 'Blog Post 3', Author: 'Author 3', AuthorEmail: 'author3@example.com', status: 'rejected' },
        { id: 4, Title: 'Blog Post 4', Author: 'Author 4', AuthorEmail: 'author4@example.com', status: 'verified' },
        { id: 5, Title: 'Blog Post 5', Author: 'Author 5', AuthorEmail: 'author5@example.com', status: 'pending' },
        { id: 6, Title: 'Blog Post 5', Author: 'Author 5', AuthorEmail: 'author5@example.com', status: 'rejected' },
        { id: 7, Title: 'Blog Post 5', Author: 'Author 5', AuthorEmail: 'author5@example.com', status: 'rejected' },
        { id: 8, Title: 'Blog Post 5', Author: 'Author 5', AuthorEmail: 'author5@example.com', status: 'rejected' },
        { id: 9, Title: 'Blog Post 5', Author: 'Author 5', AuthorEmail: 'author5@example.com', status: 'rejected' },
    ]);

    // Updated filter logic for search
    const filteredviewblogs = viewblogs.filter(viewblog => {
        // Filter by status
        if (activeTab !== 'All' && viewblog.status.toLowerCase() !== activeTab) {
            return false;
        }
        // Filter by search query on title, author, or email
        if (searchQuery && !(
            viewblog.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            viewblog.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            viewblog.AuthorEmail.toLowerCase().includes(searchQuery.toLowerCase())
        )) {
            return false;
        }
        return true;
    });

    const handleSearch = () => {
        setSearchQuery(searchQuery.trim());
    };

    const handleStatusChange = (id, newStatus) => {
        setViewblogs(viewblogs.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
    };

    const handleViewDetails = (id) => {
        navigate(`/view-detailsblog`);
    };

    return (
        <div className="Adminview-blog">
            <h2 className='Adminview-blog-title'>Blog</h2>
            <div className="admin-dashboard-appointments-tabs-container">
                <div className="admin-dashboard-appointments-tabs">
                    <button className={`admin-tab ${activeTab === 'All' ? 'admin-active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
                    <button className={`admin-tab ${activeTab === 'verified' ? 'admin-active' : ''}`} onClick={() => setActiveTab('verified')}>Verified</button>
                    <button className={`admin-tab ${activeTab === 'pending' ? 'admin-active' : ''}`} onClick={() => setActiveTab('pending')}>Pending</button>
                    <button className={`admin-tab ${activeTab === 'rejected' ? 'admin-active' : ''}`} onClick={() => setActiveTab('rejected')}>Rejected</button>
                </div>
                <div className="admin-search-bar">
                    <input
                        type="text"
                        placeholder="Search for blogs "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <RiSearchLine
                        className="admin-search-bar-icon"
                        onClick={handleSearch}
                    />
                </div>
            </div>
            <div className='Adminview-blog-table-container'>
                <table className="Adminview-blog-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Change Status</th>
                            <th>View</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredviewblogs.map(({ id, Title, Author, AuthorEmail, status }) => (
                            <tr key={id}>
                                <td>{Title}</td>
                                <td>{Author}</td>
                                <td>{AuthorEmail}</td>
                                <td>
                                    <span className={`status-dot ${status.toLowerCase()}`}></span> 
                                </td>
                                <td>
                                    <div className="viewadmin-select-container">
                                        <select
                                            className={`admin-status-select ${status.toLowerCase()}`}
                                            value={status}
                                            onChange={(e) => handleStatusChange(id, e.target.value)}
                                        >
                                            <option value="verified">Verified</option>
                                            <option value="pending">Pending</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                        <RiArrowDownSLine className="arrow-icon" />
                                    </div>
                                </td>
                                <td>
                                    <button className='Adminviewblogs-View' onClick={() => handleViewDetails(id)}>
                                        View blogs
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => console.log(`Action for ${Author}`)} className='Adminviewblogs-submit'>
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Adminviewblogs;
