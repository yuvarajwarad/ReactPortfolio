import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { ScrollPercentage } from '../NavBar/Navelements'; // Reuse ScrollPercentage from Header

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <div>
      <>
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300 z-50">
          {/* YW Stylish Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4">
              <div className="text-3xl font-extrabold tracking-wide text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span style={{ fontSize: '1.5rem', lineHeight: '1rem' }}>Y</span>
                <span style={{ fontSize: '2rem', lineHeight: '1rem', marginLeft: '-0.1rem' }}>W</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center">
            <li className="mx-4 cursor-pointer">
              <Link
                to="game"
                smooth={true}
                duration={100}
                offset={-80}
                className="px-6 py-3 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
              >
                Play Game
              </Link>
            </li>
            <li className="mx-4 hover:text-pink-600 cursor-pointer">
              <Link to="home" smooth={true} duration={100} offset={-80}>
                Home
              </Link>
            </li>
            <li className="mx-4 hover:text-pink-600 cursor-pointer">
              <Link to="about" smooth={true} duration={100} offset={-80}>
                About
              </Link>
            </li>
            <li className="mx-4 hover:text-pink-600 cursor-pointer">
              <Link to="projects" smooth={true} duration={100} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="mx-4 hover:text-pink-600 cursor-pointer">
              <Link to="contact" smooth={true} duration={100} offset={-80}>
                Contact
              </Link>
            </li>
            {/* Phone Number on Right Side */}
            <li className="ml-4 flex items-center text-white hover:text-pink-600 cursor-pointer">
              <a href="tel:+918766833640" className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span className="text-lg">+918766833640</span>
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* Mobile Menu */}
          <ul
            className={
              !nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'
            }
          >
            <li className="py-6 text-4xl cursor-pointer">
              <Link
                to="game"
                smooth={true}
                duration={100}
                offset={-80}
                className="px-6 py-3 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
              >
                Play Game
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-pink-600 cursor-pointer">
              <Link onClick={handleClick} to="home" smooth={true} duration={100} offset={-80}>
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-pink-600 cursor-pointer">
              <Link onClick={handleClick} to="about" smooth={true} duration={100} offset={-80}>
                About
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-pink-600 cursor-pointer">
              <Link onClick={handleClick} to="projects" smooth={true} duration={100} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="py-6 text-4xl hover:text-pink-600 cursor-pointer">
              <Link onClick={handleClick} to="contact" smooth={true} duration={100} offset={-80}>
                Contact
              </Link>
            </li>
            <li className="mt-8 cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1z_L92TQOr9VCJQzQqhFT_y8uTlJAmJx0/view"
                download
                className="flex items-center px-6 py-3 text-xl font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                <HiDownload className="mr-2" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Scroll percentage bar */}
        <ScrollPercentage
          style={{
            width: `${scrollPercentage}%`,
          }}
        />
      </>

    </div>
  );
};

export default NavBar;
