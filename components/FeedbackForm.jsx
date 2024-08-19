import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/feedback', { feedback });
            setResponseMessage(response.data);
            setFeedback(''); 
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage('Error submitting feedback');
        }
    };

    return (
        <div className="relative w-full p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Feedback</h3>
            {responseMessage && <p className="text-green-600 mb-4">{responseMessage}</p>}
            <form onSubmit={handleSubmit} className="w-full">
                <textarea
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                    rows="5" 
                    placeholder="Leave your feedback here..."
                    value={feedback}
                    onChange={handleChange}
                    required
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;

