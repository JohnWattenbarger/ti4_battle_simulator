// src/pages/ResultsPage.tsx
import { IconButton } from '@fluentui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ResultsPage: React.FC = () => {
    const location = useLocation();
    const { simulationResults } = location.state as { simulationResults: any };

    return (
        <div className="page results-page">
            <div className="battle-summary-box">
                {/* Display battle summary here */}
                <p>Attacking Army:</p>
                <p>Cost: {simulationResults.attackingSummary.cost}</p>
                <p>Total Capacity: {simulationResults.attackingSummary.totalCapacity}</p>
                <p>Fleet Pool: {simulationResults.attackingSummary.fleetPool}</p>
                <br />
                <p>Defending Army:</p>
                <p>Cost: {simulationResults.defendingSummary.cost}</p>
                <p>Total Capacity: {simulationResults.defendingSummary.totalCapacity}</p>
                <p>Fleet Pool: {simulationResults.defendingSummary.fleetPool}</p>
            </div>
            <div className="win-percent">
                <p>Win Percentage for Attacking Army: {simulationResults.winPercentage.toFixed(2)}%</p>
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
