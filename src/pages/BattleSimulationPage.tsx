// src/pages/BattleSimulationPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton } from '@fluentui/react';
import UnitSelectionSection from '../components/UnitSelectionSection';

const BattleSimulationPage: React.FC = () => {
    const [attackingUnits, setAttackingUnits] = useState<any[]>([]);
    const [defendingUnits, setDefendingUnits] = useState<any[]>([]);

    return (
        <div className="page battle-simulation-page">
            <Stack horizontal>
                <UnitSelectionSection
                    title="Attacking"
                    units={attackingUnits}
                    setUnits={setAttackingUnits}
                />
                <UnitSelectionSection
                    title="Defending"
                    units={defendingUnits}
                    setUnits={setDefendingUnits}
                />
            </Stack>
            <div className="action-buttons">
                <Link to="/results">
                    <IconButton iconProps={{ iconName: 'Play' }} title="Battle" />
                </Link>
            </div>
        </div>
    );
};

export default BattleSimulationPage;
