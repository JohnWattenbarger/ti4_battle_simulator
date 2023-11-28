// src/pages/ResultsPage.tsx
import { IconButton } from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ResultsPage: React.FC = () => {
    return (
        <div className="page results-page">
            <div className="battle-summary-box">
                {/* Display battle summary here */}
            </div>
            <div className="win-percent">
                <p>Win Percentage for Attacking Army: 75%</p>
            </div>
            <div className="action-buttons">
                <Link to="/battle-simulation">
                    <IconButton iconProps={{ iconName: 'Back' }} title="Back" />
                </Link>
            </div>
        </div>
    );
};

export default ResultsPage;
