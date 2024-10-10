import React from "react";
import { Element } from "react-scroll";  // Element from react-scroll
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import NavBar from "../components/NavBar/Navbar";
import GameComponent from "../components/Game/GameComponent";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <div className="background:black">
        <NavBar />

        {/* Wrapping sections in Element with specific IDs for smooth scrolling */}
        <Element name="home">
          <Header />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
        <FixSocialIcon></FixSocialIcon>
        <Element name="game">
          <GameComponent />
        </Element>
        
        </div>
     
       
      <Footer />
      <ScrollToTop></ScrollToTop>
     
    </>
  );
}

export default Home;
