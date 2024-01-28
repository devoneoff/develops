import React, { useState } from "react";
import './FullCase.css';
import { Link } from 'react-router-dom';
import { CASES } from "../../utils/data"
import FullCaseCard from '../FullCase/FullCaseCard/FullCaseCard';
import FullCaseInfoCard from '../FullCase/FullCaseInfoCard/FullCaseInfoCard';

const FullCase = () => {
    const [selectedCases, setSelectedCases] = useState(CASES[0]);
    const handleSelectCases = (data) => {
        setSelectedCases(data);
    }

    return (
        <>
        <section className="fullcase-container">
            <header>
                <div className="header__logo">ME7RIX</div>
                <div className="header__link">
                    <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                </div>
            </header>

            <div className="case-content">
                <div className="categories">
                    {CASES.map((item) => (
                        <FullCaseCard 
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedCases.title === item.title}
                        onClick={() => {
                            handleSelectCases(item);
                        }}
                        />
                    ))}
                </div>
                <div className="categories-case">
                    <FullCaseInfoCard 
                    heading = {selectedCases.title}
                    cases = {selectedCases.projects}
                    // error = {selectedCases.projects.error}
                    />
                </div>
            </div>
        </section>
            
            

        
        </>
        
    );
};
export default FullCase;