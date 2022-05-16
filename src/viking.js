// Soldier
class Soldier {

  constructor(health, strength) {

    this.health = health
    this.strength = strength
  };

  attack() {
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health === 0 || this.health < 0){
      return `${this.name} has died in act of combat`
    }
    else if (this.health >= 1 ){
      return `${this.name} has received ${damage} points of damage`
    }
  };

  battleCry(){
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
    this.attack()

  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health === 0 ){
      return `A Saxon has died in combat`
    }
    else if (this.health >= 1 ){
      return `A Saxon has received ${damage} points of damage`
    }

  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){

    this.vikingArmy.push(viking);
  };

  addSaxon(saxon){

    this.saxonArmy.push(saxon);
  };

  vikingAttack(){

    let saxonRandomIndex =  Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = this.saxonArmy[saxonRandomIndex]
    let vikingRandom = this.vikingArmy[vikingRandomIndex]

    let damage = vikingRandom.strength

    saxonRandom.receiveDamage(damage)

    if (saxonRandom.health >= 1) {
      return "`receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`"}
    else if (saxonRandom.health === 0 || saxonRandom.health < 0 ){
      return this.saxonArmy.splice(saxonRandom);

    }

  };

  saxonAttack(){


    let saxonRandomIndex =  Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = this.saxonArmy[saxonRandomIndex]
    let vikingRandom = this.vikingArmy[vikingRandomIndex]

    let damage = saxonRandom.strength

    vikingRandom.receiveDamage(damage)

    if (vikingRandom.health >= 1) {
      return "`receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`"}
    else if (vikingRandom.health === 0 || vikingRandom.health < 0 ){
      return this.vikingArmy.splice(vikingRandom);

    }

  };

  showStatus(){



    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else if(this.vikingArmy.length === 1 && this.saxonArmy.length === 1){
      return "Vikings and Saxons are still in the thick of battle."
    }
  };

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
