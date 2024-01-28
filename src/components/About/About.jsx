import React from "react";
import './About.css';

const About = () => {
    return (
        <section className="about-container" id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-img">
                    <img src="../assets/images/me.png" />
                </div>
                <div className="about-info">
                    <p>Hi! My name is Irina Krylova. I have a diploma of secondary vocational education in the specialty "Information systems". I periodically take courses and intensive courses in development and UX/UI design.</p>
                    <p>One day, during my studies, I got acquainted with the basic technologies of web development. I was so attracted to this direction and I began to study more deeply, studying modern technologies, methods and ways of developing web applications with a marketing design.</p>
                    <p>You can find out more about the stack of technologies that I use in practice below.</p>
                    <button class="btn-cv"><a href="./assets/CV.pdf" download>Download CV</a></button>
                </div>
            </div>
        </section>
    );
};

export default About;