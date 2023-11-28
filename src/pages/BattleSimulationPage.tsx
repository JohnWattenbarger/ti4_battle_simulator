// src/pages/BattleSimulationPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton, Label, Dropdown, IButtonStyles, IDropdownOption, PrimaryButton } from '@fluentui/react';
import unitStats, { Unit, UnitTypes } from '../unitStats';
import UnitSelectionSection from '../components/UnitSelectionSection';

const BattleSimulationPage: React.FC = () => {
    const [attackingUnits, setAttackingUnits] = useState<{ unit: Unit; quantity: number }[]>([]);
    const [defendingUnits, setDefendingUnits] = useState<{ unit: Unit; quantity: number }[]>([]);

    const buttonStyles = { root: { width: 150, margin: '10px 0' } };

    return (
        <div className="page battle-simulation-page">
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
                <PrimaryButton onClick={() => console.log('Battle!')} styles={buttonStyles}>
                    Battle
                </PrimaryButton>
            </div>
        </div>
    );
};

export default BattleSimulationPage;
