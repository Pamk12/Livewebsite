import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Techy Software</h2>
                        <p className="mt-2 text-gray-400">Innovative Solutions for a Digital World</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="mr-6 mb-4 md:mb-0">
                            <h3 className="font-semibold">Quick Links</h3>
                            <ul>
                                <li><Link to="/aboutus" className="text-gray-300 hover:underline">About Us</Link></li>
                                <li><Link to="/products" className="text-gray-300 hover:underline">Our Services</Link></li>
                                <li><Link to="/contactus" className="text-gray-300 hover:underline">Contact</Link></li>
                                <li><Link to="#privacy" className="text-gray-300 hover:underline">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-blue-500" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-blue-400" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-pink-500" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-blue-700" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:justify-between">
                    <p className="text-gray-400 text-center md:text-right">
                        &copy; {new Date().getFullYear()} Techy Software. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;