import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { ScrollDown, ScrollLink } from "./HeroElements";
import { Link as LinkScroll } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  return (
    <header id="home" className="header-section relative h-screen flex flex-col md:flex-row items-center justify-between bg-black px-8 pt-16 md:pt-0 md:pl-[94px]">
      {/* Mobile View */}
      <div className="flex flex-col items-center mb-8 pt-16 md:hidden">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-white w-40 h-40 flex items-center justify-center mb-6">
          <img
            src=".//myimages/myimgCoat.png"
            alt="Yuvraj Warad"
            className="w-full h-full object-cover scale-90"
          />
        </div>
        <motion.h1
          className="text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Yuvraj Warad",
              2000,
              'Full-Stack Developer',
              2000,
              'Designer',
              2000,
              'Next.js Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </motion.h1>
        <p className="text-lg text-white text-center mb-6">
          Full-Stack Developer | Designer | Next.js Developer
        </p>
        {/* Wrap button with LinkScroll */}
        <LinkScroll to="projects" smooth={true} duration={500}>
          <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
            See My Work
          </button>
        </LinkScroll>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full md:w-1/2 flex-col items-start justify-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Yuvraj Warad",
              2000,
              'Full-Stack Developer',
              2000,
              'Designer',
              2000,
              'Next.js Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: 'inherit', display: 'inline-block' }}
            repeat={Infinity}
          />
        </motion.h1>
        <p className="mt-4 text-lg md:text-2xl text-white animate-fadeIn">
          Full-Stack Developer | Designer | Next.js Developer
        </p>
        {/* Wrap button with LinkScroll */}
        <LinkScroll to="projects" smooth={true} duration={500}>
          <button className="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
            See My Work
          </button>
        </LinkScroll>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center mt-8 md:mt-0">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-white w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center">
          <img
            src="/myimages/myimgCoat.png"
            alt="Yuvraj Warad"
            className="w-full h-full object-cover scale-60"
          />
        </div>
      </div>

      {/* Scroll Down Link */}
      <ScrollAnimation animateIn="fadeIn" delay={200}>
        <ScrollDown to="projects" id="scrollDown" smooth={true} duration={200}>
          <ScrollLink className="flex items-center color-red mt-8 cursor-pointer">
            <img src="/scroll-down.svg" alt="scroll down" className="mr-7" />
            <span className="text-white mt-22" style={{ marginTop: '400px' }}>Scroll down</span>
          </ScrollLink>
        </ScrollDown>
      </ScrollAnimation>

      {/* Zig-Zag Divider */}
      <DividerContainer>
        <Divider />
      </DividerContainer>
    </header>
  );
};

// Zig-Zag Divider
const DividerContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const zigzag = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  background-size: 200% 100%;
  animation: ${zigzag} 1s linear infinite;
`;

export default Header;
