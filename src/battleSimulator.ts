// src/battleSimulator.ts
import { Unit, UnitTypes } from './unitStats';

export const simulateBattle = (attacker: { unit: Unit; quantity: number }[], defender: { unit: Unit; quantity: number }[]): number => {
    // Function to determine the cost of a unit
    const unitCost = (unit: Unit): number => unit.cost;

    // Function to simulate a round of combat
    const combatRound = (attackingUnits: { unit: Unit; quantity: number }[], defendingUnits: { unit: Unit; quantity: number }[]): [number, number] => {
        console.log(`=== Round ${currentRound}: ===`);
        const attackHits = attackingUnits.reduce((sum, unit) => sum + rollDie(unit), 0);
        const defenseHits = defendingUnits.reduce((sum, unit) => sum + rollDie(unit), 0);
        console.log(` > Attack hits: ${attackHits}, Defense hits: ${defenseHits}`);
        console.log('----------');
        return [attackHits, defenseHits];
    };

    // Function to simulate a single die roll
    const rollDie = (unit: { unit: Unit; quantity: number }): number => {
        const dieRoll = Math.floor(Math.random() * 10) + 1;
        const hit = dieRoll >= unit.unit.combat;
        console.log(`  - Die Roll: ${dieRoll}, ${hit ? 'Hit' : 'Miss'}`);
        return hit ? 1 : 0;
    };

    // Sort units by cost (cheapest to most expensive)
    attacker.sort((a, b) => unitCost(a.unit) - unitCost(b.unit));
    defender.sort((a, b) => unitCost(a.unit) - unitCost(b.unit));

    // Initialize sustain damage for each ship
    for (const unit of [...attacker, ...defender]) {
        unit.unit.remainingSustainDamage = unit.unit.sustainDamage ? 1 : 0;
    }

    // Main battle loop
    let currentRound = 1;
    while (attacker.length > 0 && defender.length > 0) {
        let [attackHits, defenseHits] = combatRound(attacker, defender);
        currentRound++;

        // Apply hits to defending units with sustain damage
        for (const unit of defender) {
            if (unit.unit.remainingSustainDamage ?? 0 > 0) {
                const sustainedDamage = Math.min(defenseHits, unit.unit.remainingSustainDamage ?? 0);
                unit.unit.remainingSustainDamage = (unit.unit.remainingSustainDamage ?? 0) - sustainedDamage;
                defenseHits -= sustainedDamage;
                console.log(`  - ${unit.unit.type} sustained ${sustainedDamage} damage`);
            }
        }

        // Remove destroyed ships
        const destroyedDefenderUnits = defender.slice(0, defender.length - defenseHits);
        const destroyedAttackerUnits = attacker.slice(0, attacker.length - attackHits);
        defender = defender.slice(0, defender.length - defenseHits);
        attacker = attacker.slice(0, attacker.length - attackHits);

        console.log(`  - Defender units destroyed: ${destroyedDefenderUnits.map((u) => u.unit.type).join(', ')}`);
        console.log(`  - Attacker units destroyed: ${destroyedAttackerUnits.map((u) => u.unit.type).join(', ')}`);
    }

    // Determine the winner
    const winner = attacker.length > 0 ? 'Attacker' : defender.length > 0 ? 'Defender' : 'Draw';

    // Convert the winner to a numerical value
    if (winner === 'Attacker') {
        return 1;
    } else if (winner === 'Defender') {
        return 0;
    } else {
        return 0.5;
    }
};

export const calculateWinPercentage = (army1: { unit: Unit; quantity: number }[], army2: { unit: Unit; quantity: number }[], numSimulations: number): number => {
    let wins = 0;
    for (let i = 0; i < numSimulations; i++) {
        const result = simulateBattle(army1, army2);
        if (result === 1) {
            wins++;
        }
    }
    return (wins / numSimulations) * 100;
};
