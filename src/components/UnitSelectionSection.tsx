// src/components/UnitSelectionSection.tsx
import React from 'react';
import { Stack, Label, Dropdown } from '@fluentui/react';

interface UnitSelectionSectionProps {
    title: string;
    units: any[];
    setUnits: React.Dispatch<React.SetStateAction<any[]>>;
}

const UnitSelectionSection: React.FC<UnitSelectionSectionProps> = ({ title, units, setUnits }) => {
    return (
        <Stack
            verticalAlign="start"
            tokens={{ childrenGap: 20 }}
            className={`unit-selection-section ${title.toLowerCase()}`}
        >
            <div className="section-title">
                <Label>{title}</Label>
            </div>
            {/* Add unit selection components here */}
            {/* Example: */}
            <Dropdown
                placeholder="Select unit..."
                label="Unit Type"
                options={[
                    { key: 'fighter', text: 'Fighter' },
                    { key: 'cruiser', text: 'Cruiser' },
                ]}
            />
            <Dropdown
                placeholder="Select quantity..."
                label="Quantity"
                options={[
                    { key: 0, text: '0' },
                    { key: 1, text: '1' },
                    { key: 2, text: '2' },
                ]}
            />
        </Stack>
    );
};

export default UnitSelectionSection;
