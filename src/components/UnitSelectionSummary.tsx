import React from 'react';
import { Stack, Label } from '@fluentui/react';
import { Unit } from '../unitStats';

interface UnitSelectionSummaryProps {
    units: Array<{
        unit: Unit;
        quantity: number;
    }>;
    style?: React.CSSProperties | undefined;
}

const UnitSelectionSummary: React.FC<UnitSelectionSummaryProps> = ({ units, style }) => {
    const calculateSummary = (units: { unit: Unit; quantity: number }[]) => {
        const cost = units.reduce((totalCost, { unit, quantity }) => totalCost + unit.cost * quantity, 0);
        const totalCapacity = units.reduce((totalCap, { unit, quantity }) => totalCap + unit.capacity * quantity, 0);
        const fleetPool = units.reduce((totalPool, { unit, quantity }) => totalPool + unit.fleetPool * quantity, 0);

        return { cost, totalCapacity, fleetPool };
    };

    const summary = calculateSummary(units);


    return (
        <Stack className='unit-selection-summary'>
            <Label>Cost: {summary.cost}</Label>
            <Label>
                Capacity: {summary.totalCapacity} /{' '}
                {units.some((unit) => unit.unit.capacity < unit.quantity) ? (
                    <span style={{ color: 'red' }}>{summary.totalCapacity}</span>
                ) : (
                    summary.totalCapacity
                )}
            </Label>
            <Label>Fleet Pool: {summary.fleetPool}</Label>
        </Stack>
    );
};

export default UnitSelectionSummary;
