import React from "react";
import './Case.css';
import { CASES } from "../../utils/dataCases";
import CaseCard from "./CaseCard/CaseCard";
import Slider from "react-slick";
import { useRef } from 'react';
import { Link } from 'react-router-dom';


const Case = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            <section className="case-container" id="case">
                <h5>Latest Projects</h5>
                <div className="case-content">
                    <div className="arrow-right" onClick={slideRight}>
                        <span class="material-symbols-outlined">chevron_right</span>
                    </div>
                    <div className="arrow-left" onClick={slideLeft}>
                        <span class="material-symbols-outlined">chevron_left</span>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {CASES.map((item) => (
                            <CaseCard key={item.title} details={item} />
                        ))}
                    </Slider>
                </div>
                <div className="case-link">
                    <div className="case-link-a">
                        <Link to="/fullcase">View all projects</Link>
                    </div>
                </div>
            </section>
        </>
        

        
    );
    
};

export default Case;