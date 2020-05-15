export function fight(firstFighter, secondFighter) {
    let fighterA;
    let fighterB;
    let winner;

    if (headOrTail() === 1){
        fighterA = firstFighter;
        fighterB = secondFighter;
        }
        else {
        fighterB = firstFighter;
        fighterA = secondFighter;
        }

    while (fighterA.health > 0 && fighterB.health > 0){
        fighterA.health = fighterA.health - getDamage(fighterB, fighterA);
        if (fighterA.health <= 0){
            return winner = fighterB;
        }
        fighterB.health = fighterB.health - getDamage(fighterA, fighterB);
        if (fighterB.health <= 0){
            return winner = fighterA;
        }
    }
}

    function headOrTail() {
    let min = Math.ceil(1);
    let max = Math.floor(2);
    let coin = Math.floor(Math.random() * (max - min + 1)) + min;

    return coin;
}

    function getDamage(attacker, enemy) {
    let damage = getHitPower(attacker) - getBlockPower(enemy);

    return damage;
}

    function getHitPower(fighter) {
    let hit_power = fighter.attack * chanceGenerator();

    return hit_power;
}

    function getBlockPower(fighter) {
    let block_power = fighter.defense - chanceGenerator();

    return block_power;
}

    function chanceGenerator() {

    return Math.random() + 1;
}
