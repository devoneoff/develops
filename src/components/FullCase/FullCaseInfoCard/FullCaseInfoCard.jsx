import React from "react";
import './FullCaseInfoCard.css';

const FullCaseInfoCard = ({ heading, cases, error }) => {
    return (
            <div className="case-info-card">
                {cases.map((item, index) => (
                    <React.Fragment key={`case_${index}`}>
                            <div className="case-info-content">
                                <img src={item.image} alt="" />
                            </div>
                        </React.Fragment>
                    
                ))}
            </div>
    )
}

export default FullCaseInfoCard;