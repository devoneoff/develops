import * as React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Person from './components/Person/Person';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Case from './components/Case/Case';
import Dimploms from './components/Dimploms/Dimploms';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Person />
                <About />
                <Skills />
                <Case />
                <Dimploms />
                <Contact />
            </div>
            <Footer />
        </>
    );
};
export default Home;