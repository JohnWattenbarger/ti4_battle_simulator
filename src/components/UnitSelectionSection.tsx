// src/components/UnitSelectionSection.tsx
import React from 'react';
import { Stack, Label, Dropdown } from '@fluentui/react';
import { Unit, UnitTypes } from '../unitStats';

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
        >
            <div className="section-title">
                <Label>{title}</Label>
            </div>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                {unitStats.map((unit) => (
                    <Stack key={unit.type} horizontalAlign="center">
                        <img src={`${unit}.png`} alt={unit.type} width={50} height={50} />
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
