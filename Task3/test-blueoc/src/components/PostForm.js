import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PostForm.css';

const PostForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        userId: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = await response.json();
            dispatch({ type: 'ADD_POST', payload: data });

            // Reset form
            setFormData({
                title: '',
                body: '',
                userId: ''
            });
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className="post-form">
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User ID:</label>
                    <input
                        type="number"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <button
                        className="btn btn-secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={handleSubmit}
                    >
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;