import React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import NavBar from "../components/NavBar/Navbar";
import GameComponent from "../components/Game/GameComponent";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    < >
    <div className="background:black">
    <NavBar></NavBar>
    <Header id="home" ></Header>
    <Projects></Projects>
    <About id="about"></About>
    <GameComponent></GameComponent>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Home;
