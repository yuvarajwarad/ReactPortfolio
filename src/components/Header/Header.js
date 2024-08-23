import React from 'react';

const Header = () => {
  return (
    <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-slideIn">
          Hello, I'm [Your Name]
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white animate-fadeIn">
          Full-Stack Developer | Designer | Tech Enthusiast
        </p>
        <button className="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none animate-bounce">
          See My Work
        </button>
      </div>
    </header>
  );
};

export default Header;
