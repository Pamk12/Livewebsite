import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenuItems, setShowMenuItems] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    useEffect(() => {
        if (isMenuOpen) {
            setShowMenuItems(true);
        } else {
        const timer = setTimeout(() => {
                setShowMenuItems(false);
            }, 300); 
            return () => clearTimeout(timer);
        }
    }, [isMenuOpen]);

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img src='./assets/techysoftware.jpg' alt='tech' className="w-12 h-12 rounded-full mr-4" />
                    <a className="text-3xl font italic text-gray-600" href="#home">Techy Softwares</a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-xl focus:outline-none">☰</button>
                </div>
                <div className="hidden lg:flex space-x-4">
    <Link to="/" className="hover:text-blue-500 p-3">Home</Link>
    {location.pathname !== "/aboutus" && (
        <Link to="/aboutus" className="hover:text-blue-500 p-3">About Us</Link>
    )}
    {location.pathname !== "/products" && (
        <Link to="/products" className="hover:text-blue-500 p-3">Services</Link>
    )}
    {location.pathname !== "/contactus" && (
        <Link to="/contactus" className="hover:text-blue-500 p-3">Contact Us</Link>
    )}
</div>
</div>
             {isMenuOpen && showMenuItems && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg z-50 overflow-hidden">
                    <Link
                        to="/"
                        className={`block p-3 transition duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                    >
                        Home
                    </Link>
                    {location.pathname !== "/aboutus" && (
                        <Link
                            to="/aboutus"
                            className={`block p-3 transition duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        >
                            About Us
                        </Link>
                    )}
                    {location.pathname !== "/products" && (
                        <Link
                            to="/products"
                            className={`block p-3 transition duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        >
                            Services
                        </Link>
                    )}
                    {location.pathname !== "/contactus" && (
                        <Link
                            to="/contactus"
                            className={`block p-3 transition duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        >
                            Contact Us
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;
