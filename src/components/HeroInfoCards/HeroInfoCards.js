import React from 'react';
import { infoCards } from '../../portfolio'; // Adjust the import path if needed
import './HeroInfoCards.css'; // We'll style everything in this file

// This is the parent component that displays all the cards
const HeroInfoCards = () => (
    <div className='hero-info-container'>
        {infoCards.map((card) => (
            <div key={card.label} className='info-card'>
                <span className='info-icon'>{card.icon}</span>
                <div className='info-content'>
                    <span className='info-label'>{card.label}</span>
                    <span className='info-value'>{card.value}</span>
                </div>
            </div>
        ))}
    </div>
);

export default HeroInfoCards;