// src/components/UnitSelectionSection.tsx
import React from 'react';
import { Stack, Label, Dropdown, Image } from '@fluentui/react';
import { Unit, UnitTypes } from '../unitStats';
import UnitSelectionSummary from './UnitSelectionSummary';

import FighterImage from '../images/Fighter.png';
import CarrierImage from '../images/Carrier.png';
import CruiserImage from '../images/Cruiser.png';
import DestroyerImage from '../images/Destroyer.png';
import DreadnoughtImage from '../images/Dreadnought.png';
import WarsunImage from '../images/WarSun.png';

const imageMappings = {
    Fighter: FighterImage,
    Carrier: CarrierImage,
    Cruiser: CruiserImage,
    Destroyer: DestroyerImage,
    Dreadnought: DreadnoughtImage,
    Warsun: WarsunImage,
};

interface UnitSelectionSectionProps {
    title: string;
    units: { unit: Unit; quantity: number }[];
    setUnits: React.Dispatch<React.SetStateAction<{ unit: Unit; quantity: number }[]>>;
    unitStats: Unit[];
}

const UnitSelectionSection: React.FC<UnitSelectionSectionProps> = ({ title, units, setUnits, unitStats }) => {
    const handleQuantityChange = (unit: Unit, quantity: number) => {
        const updatedUnits = [...units];
        const index = updatedUnits.findIndex((u) => u.unit === unit);
        if (index !== -1) {
            updatedUnits[index].quantity = quantity;
        } else {
            updatedUnits.push({ unit, quantity });
        }
        setUnits(updatedUnits);
    };

    return (
        <Stack
            verticalAlign="start"
            tokens={{ childrenGap: 20 }}
            className={`unit-selection-section ${title.toLowerCase()}`}
            style={{ position: 'relative' }}
        >
            <div className="section-title">
                <Label>{title}</Label>
            </div>
            <UnitSelectionSummary units={units} style={{ position: 'absolute', top: 0, right: 0 }} />
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                {unitStats.map((unit) => (
                    <Stack key={unit.type} horizontalAlign="center">
                        <Image src={imageMappings[unit.type]} alt={unit.type} width={50} height={50} />
                        <Dropdown
                            placeholder="Select quantity..."
                            label="Quantity"
                            options={[...Array(16)].map((_, index) => ({ key: index + 1, text: (index + 1).toString() }))}
                            onChange={(_, option) => handleQuantityChange(unit, option?.key as number)}
                            selectedKey={units.find(u => u.unit === unit)?.quantity}
                        />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default UnitSelectionSection;
