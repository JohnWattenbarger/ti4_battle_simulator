// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="page home-page">
            <h1>Twilight Imperium 4th Edition Battle Simulator</h1>
            <Link to="/battle-simulation">Start</Link>
        </div>
    );
};

export default HomePage;
