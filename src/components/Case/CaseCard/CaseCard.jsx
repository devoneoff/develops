import React from "react";
import './CaseCard.css';

const CaseCard = ({ details }) => {
    return (
        <div className="case-card">
            <img src={details.image} alt={details.title} />
        </div>
    );
};

export default CaseCard;