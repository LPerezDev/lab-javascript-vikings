// Soldier
//iteration 0, 1
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
attack() {
  return this.strength;
}

receiveDamage(damage) {
 this.health = this.health - damage;
 
 /* 
 ALT syntax 
 this.health -= damage;
*/

  }
}

/* iteration 2
Modify Viking class, inheriting Soldier class, 
re-implementing receiveDamage() method from Viking, adding battleCry() method.
*/

// Viking
class Viking extends Soldier{
  
  constructor(name, health, strength){
    super(health,strength)
    this.name = name;
  
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }
  /* this attack() function is redundant, since the Saxon
   class inherits the attack() function from Soldier. */
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health <= 0) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy =[];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];

    const attackResult = randomSaxon.receiveDamage(randomViking.strength);

    if(attackResult === 'A Saxon has died in combat') {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return attackResult;
  }

  saxonAttack(){

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];

    const attackResult = randomViking.receiveDamage(randomSaxon.strength);
    
    if(attackResult === `${randomViking.name} has died in act of combat`) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return attackResult;
  }

  showStatus(){
if(this.vikingArmy.length != 0 && this.saxonArmy.length != 0){
  return 'Vikings and Saxons are still in the thick of battle.';
} 
if(this.vikingArmy.length == 0) {
  return 'Saxons have fought for their lives and survived another day...';
}
else {
  return 'Vikings have won the war of the century!';
}
  }
}

/*
iteration 0 
receives 2 arguments: health & strength

iterartion 1
modify "Soldier" to receive 2 added methods, attack() & receiveDamage()

*/
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
