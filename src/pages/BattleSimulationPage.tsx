// src/pages/BattleSimulationPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, IconButton, PrimaryButton, Spinner, SpinnerSize } from '@fluentui/react';
import unitStats, { Unit } from '../unitStats';
import UnitSelectionSection from '../components/UnitSelectionSection';
import { calculateWinPercentage, simulateBattle } from '../battleSimulator';

const BattleSimulationPage: React.FC = () => {
    const [attackingUnits, setAttackingUnits] = useState<{ unit: Unit; quantity: number }[]>([]);
    const [defendingUnits, setDefendingUnits] = useState<{ unit: Unit; quantity: number }[]>([]);

    const buttonStyles = { root: { width: 150, margin: '10px 0' } };
    const numSimulations = 1000; // Adjust as needed

    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const runSimulation = async () => {
        setLoading(true);

        // Simulate battle asynchronously
        const simulationResults = await simulateBattleAsync(attackingUnits, defendingUnits, numSimulations);
        setLoading(false);

        // Navigate to results page
        history('/results', { state: { simulationResults } });
    };

    const simulateBattleAsync = async (
        attackingUnits: { unit: Unit; quantity: number }[],
        defendingUnits: { unit: Unit; quantity: number }[],
        numSimulations: number
    ): Promise<{
        winPercentage: number;
        attackingSummary: { cost: number; totalCapacity: number; fleetPool: number };
        defendingSummary: { cost: number; totalCapacity: number; fleetPool: number };
    }> => {
        return new Promise((resolve) => {
            // Simulate battle logic
            const winPercentage = calculateWinPercentage(attackingUnits, defendingUnits, numSimulations);
            const attackingSummary = calculateArmySummary(attackingUnits);
            const defendingSummary = calculateArmySummary(defendingUnits);

            resolve({ winPercentage, attackingSummary, defendingSummary });
        });
    };

    const calculateArmySummary = (army: { unit: Unit; quantity: number }[]): {
        cost: number;
        totalCapacity: number;
        fleetPool: number;
    } => {
        const summary = army.reduce(
            (acc, unit) => {
                acc.cost += unit.unit.cost * unit.quantity;
                acc.totalCapacity += unit.unit.capacity * unit.quantity;
                acc.fleetPool += unit.unit.fleetPool * unit.quantity;
                return acc;
            },
            { cost: 0, totalCapacity: 0, fleetPool: 0 }
        );

        return summary;
    };

    return (
        <div className="page battle-simulation-page">
            {/* Conditionally render either the "Battle" button or the loading indicator */}
            {loading && <Spinner size={SpinnerSize.large} />}
            {!loading && (
                <>
                    <Link to="/">
                        <IconButton iconProps={{ iconName: 'Back' }} title="Back" />
                    </Link>
                    <Stack>
                        <UnitSelectionSection
                            title="Attacking"
                            units={attackingUnits}
                            setUnits={setAttackingUnits}
                            unitStats={unitStats}
                        />
                        <UnitSelectionSection
                            title="Defending"
                            units={defendingUnits}
                            setUnits={setDefendingUnits}
                            unitStats={unitStats}
                        />
                    </Stack>
                    <div className="action-buttons">
                        <PrimaryButton onClick={runSimulation} styles={buttonStyles}>
                            Battle
                        </PrimaryButton>
                    </div>
                </>
            )}
        </div>
    );
};

export default BattleSimulationPage;
