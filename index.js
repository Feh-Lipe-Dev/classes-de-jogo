class hero {

	constructor(heroName, heroAge, heroType){
		this.heroName = heroName
		this.heroAge = heroAge
		this.heroType = heroType
    
    if(heroType === 'Mago'){
      this.heroAttack = 'Bola de Fogo' 
    };
    if(heroType === 'Guerreiro'){
      this.heroAttack = 'Excalibur' 
      };
    if(heroType === 'Monge'){
      this.heroAttack = 'Aikidô' 
      };
    if(heroType === 'Ninja'){
      this.heroAttack = 'Shuriken' 
      };
    if(heroType === 'Metal Hero'){
      this.heroAttack = 'Espadium Laser' 
      };
	}
  attack(){
    console.log(`${this.heroType} ${this.heroName} atacou com ${this.heroAttack}`)    
    }
}

let mage = new hero('Merlim', 105, 'Mago');
let knight = new hero('Rei Arthur', 37, 'Guerreiro');
let monk = new hero('Benkei San', 67, 'Monge');
let ninja = new hero('Jiraya', 17, 'Ninja');
let metalHero = new hero('Jaspion', 28, 'Metal Hero');

console.log('- - - - - A BATALHA COMEÇOU! - - - - -');
mage.attack();
console.log('******************************************');
knight.attack();
console.log('******************************************');
monk.attack();
console.log('******************************************');
ninja.attack();
console.log('******************************************');
metalHero.attack();