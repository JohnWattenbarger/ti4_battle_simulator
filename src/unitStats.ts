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
    combat: number; // New property
    sustainDamage: boolean; // New property
    remainingSustainDamage?: number;
}

const unitStats: Unit[] = [
    { type: UnitTypes.Fighter, cost: 1, capacity: 0.5, fleetPool: 0, combat: 9, sustainDamage: true },
    { type: UnitTypes.Carrier, cost: 3, capacity: 6, fleetPool: 1, combat: 9, sustainDamage: false },
    { type: UnitTypes.Cruiser, cost: 2, capacity: 0, fleetPool: 1, combat: 7, sustainDamage: false },
    { type: UnitTypes.Destroyer, cost: 1, capacity: 0, fleetPool: 1, combat: 9, sustainDamage: false },
    { type: UnitTypes.Dreadnought, cost: 4, capacity: 1, fleetPool: 1, combat: 5, sustainDamage: true },
    { type: UnitTypes.Warsun, cost: 12, capacity: 3, fleetPool: 2, combat: 6, sustainDamage: true },
    // Add more units as needed
];

export default unitStats;
