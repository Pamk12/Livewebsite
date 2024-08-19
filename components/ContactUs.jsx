import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', form);
            setResponseMessage(response.data);
            setForm({ name: '', email: '', message: '' }); 
        } catch (error) {
            console.error("Error:", error); 
            setResponseMessage('Error submitting contact form');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                
                {responseMessage && <p className="text-green-600 text-center mb-4">{responseMessage}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input 
                            className="border border-gray-300 p-2 w-full rounded"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="mb-4"> 
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input 
                            className="border border-gray-300 p-2 w-full rounded"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea 
                            className="border border-gray-300 p-2 w-full rounded"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    );
};

export default ContactUs;

 
