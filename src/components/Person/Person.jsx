import React from "react";
import './Person.css';

const Person = () => {
    return (
        <section className="person-container" id='person'>
            <div className="person-content">
                <h2>Building Digital Experience That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions 
                </p>
            </div>
            <div className="person-img">
                <div>
                    <img src="./assets/images/me.png" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/html5.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/css3.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/javascript.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/react.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Person;