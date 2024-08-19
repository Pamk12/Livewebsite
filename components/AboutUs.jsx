import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FeedbackForm from './FeedbackForm';

function AboutUs() {
    const [isFeedbackVisible, setFeedbackVisible] = useState(false);
    const toggleFeedbackForm = () => {
        setFeedbackVisible((prev) => !prev);
    };

    const scrollToFeedback = () => {
        const feedbackForm = document.getElementById("feedback-form");
        feedbackForm.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="fixed right-0 top-1/3 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-l shadow-lg hover:bg-green-600 transition duration-200">
                <button 
                    onClick={toggleFeedbackForm} 
                    className="flex flex-col items-center"
                >
                    <span className="text-sm">Feedback</span>
                </button>
            </div>
            {isFeedbackVisible && (
                <div id="feedback-form" className="fixed right-16 top-1/3 bg-white shadow-lg p-4 rounded-lg transition-all duration-300">
                    <FeedbackForm />
                </div>
            )}
            <section id="about" className="bg-white p-8">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h2>
                    <p className="text-lg text-gray-600 text-center mb-4">
                        Welcome to Techy Software, where innovation meets excellence. We are a leading technology company dedicated to providing innovative software solutions that empower businesses to thrive in the digital age.
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                Our mission is to deliver cutting-edge technology solutions that foster growth and streamline operations for our clients, enabling them to achieve their goals efficiently and effectively.
                            </p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Innovation: We embrace new ideas to stay ahead of the curve.</li>
                                <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
                                <li>Collaboration: We believe in teamwork to achieve the best results.</li>
                                <li>Customer Focus: Our clients' success is our top priority.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our History</h3>
                        <p className="text-gray-600">
                            Founded in 2024, Techy Software has rapidly evolved from a small startup into a trusted provider of software solutions across various industries. With our dedicated team of experts, we have successfully completed numerous projects, demonstrating our commitment to quality and excellence.
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <a 
                            href="#services" 
                            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-200"
                        >
                            Explore Our Services
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl hover:text-blue-800 transition duration-200" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl hover:text-blue-600 transition duration-200" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-2xl hover:text-pink-800 transition duration-200" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl hover:text-blue-900 transition duration-200" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
 
