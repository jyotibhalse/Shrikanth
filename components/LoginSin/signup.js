import React, { useState } from 'react';
import Dashboard  from "../Header/Dashboard";
import './signup.css'

export default function Signup(){
    const [formData, setFormData] = useState({
        shopName: '',
        ownerName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form Data:', formData);
    };

    return(
        <>
        <Dashboard/>
        <div className="container">
            <div className="signup-form">
                <h2>Medical Shop Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="shopName">Shop Name</label>
                        <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text" id="ownerName" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
        </>
    );
};

