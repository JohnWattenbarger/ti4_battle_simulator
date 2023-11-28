// src/unitStats.ts
export enum UnitTypes {
    Fighter = 'Fighter',
    Carrier = 'Carrier',
    Cruiser = 'Cruiser',
    Destroyer = 'Destroyer',
    Dreadnought = 'Dreadnought',
    Warsun = 'Warsun',
}

export interface Unit {
    type: UnitTypes;
    cost: number;
    capacity: number;
    fleetPool: number;
}

const unitStats: Unit[] = [
    { type: UnitTypes.Fighter, cost: 1, capacity: 0.5, fleetPool: 0 },
    { type: UnitTypes.Carrier, cost: 3, capacity: 6, fleetPool: 1 },
    { type: UnitTypes.Cruiser, cost: 2, capacity: 0, fleetPool: 1 },
    { type: UnitTypes.Destroyer, cost: 1, capacity: 0, fleetPool: 1 },
    { type: UnitTypes.Dreadnought, cost: 4, capacity: 1, fleetPool: 1 },
    { type: UnitTypes.Warsun, cost: 12, capacity: 3, fleetPool: 2 },
    // Add more units as needed
];

export default unitStats;
