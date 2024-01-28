import React from "react";
import './Dimploms.css';

const Dimploms = () => {
    return (
        <section className="certif-container" id="certif">
            <h2>Certificates</h2>
            <div className="certif-content">
                <div className="certif-item">
                    <div className="certif-item-image">
                        <img src="./assets/images/frontend.jpeg" alt="" />
                    </div>
                    <div className="certif-item-text">
                        Basic courses on web application design and development using technologies and tools such as HTML, CSS, JavaScript, TypeScript, Angular, as well as Figma and Tilda.
                    </div>
                </div>
                <div className="certif-item">
                    <div className="certif-item-image">
                        <img src="./assets/images/potok.png" alt="" />
                    </div>
                </div>
                <div className="certif-item">
                    <div className="certif-item-image">
                        <img src="./assets/images/uxui.jpeg" alt="" />
                    </div>
                    <div className="certif-item-text">
                        I periodically take intensive and courses, improving my skills to master modern methods and technologies of web development.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dimploms;