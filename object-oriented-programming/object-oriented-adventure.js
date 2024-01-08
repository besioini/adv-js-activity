
// Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
// }

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: 'Frank',
//             type: 'Flea',
//             belonings: ['hat', 'sunglasses']
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// //  Log each item in Robin’s inventory
// adventurer.inventory.forEach(items => {
//     console.log(items)
// })

// Test this method by calling adventurer.roll() a few times
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

// Part 2: Class Fantasy

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3: Class Features

// Expand
class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    this.role = role;
    this.companion;
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;
        this.companion;
    }
    assist() {
        console.log(`${this.name} is assisting...`);
    }
}

const robin = new Adventurer('Robin', 'Advanturer');
robin.inventory.push("sword", "potion", "artifact");

const leo = new Character("Leo", 'cat');
robin.companion = leo;
const frank = new Character("Frank", 'Flea');
robin.companion.companion = frank;
frank.inventory.push("small hat", "sunglasses");
// console.log(robin.companion.companion.inventory)

// Part 4: Class Uniforms