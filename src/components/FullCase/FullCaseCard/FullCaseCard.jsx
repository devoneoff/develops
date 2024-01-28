import React from "react";
import './FullCaseCard.css';

const FullCaseCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div className={`categories-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}>
            <i class={`bx ${iconUrl}`}></i>
            <span>{title}</span>
        </div>
    );
};

export default FullCaseCard;