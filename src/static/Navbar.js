import React from "react";
import logo from './img/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar =() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold mr-4"><img className="lg:h-12 h-6 w-full p-1 bg-white rounded-lg" src={logo} /></Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-lg lg:flex-grow lg:flex lg:justify-end">
            <Link to="/" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Home</Link>
            <Link to="/about" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">About Us</Link>
            <Link to="/facilities" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Facilities</Link>
            <Link to="/gallery" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Gallery</Link>
            <Link to="/careers" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Careers</Link>
            <Link to="/contact" className="block lg:px-8 py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;