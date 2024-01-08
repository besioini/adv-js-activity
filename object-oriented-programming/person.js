// const person = {
//     name: {
//         first: 'Elyan',
//         last: 'Kemble',
//     },
//     age: 32,
//     location: {
//         city: 'Garland',
//         state: 'Texas',
//         zip: 75040
//     },
//     occupation: 'Front-End Developer',
//     introduce: function() {
//         console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//     }  
// }
// console.log(person.introduce()) 


// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes,
//         this.legs = legs,
//         this.isAwake = isAwake,
//         this.isMoving = isMoving
// 	}
// }

// // const cat1 = new Animal(2, 4, true, false);

// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	  // return is not needed because the new object is returned by default
// 	}
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow...");
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

//     }

//     getPrivateInfo(){
//         return this.#getInfo()
//     }
// }

// const student3 = new Student("Pearline Molly Elizabeth Prentice", 1926)
// console.log(student3.getDob())
// console.log(student3.getName())
// console.log(student3.getAge())
// console.log(student3.getPrivateInfo())

/**
 * ! Add some inheritance to the Encapsulation
**/


class Learner {
    #grades = [];
    #name = {
        first: "",
        last: ""
    };
    #age;

    constructor(firstName, lastName, age) {
        this.#name.first = firstName;
        this.#name.last = lastName;
        this.#age = age;
    }
    get name() {
        return this.#name.first + " " + this.#name.last;
    }
    get age() {
        return this.#age;
    }
    addGrades(...grades) {
        grades = grades.flat();
        grades.forEach((grade) => {
        grade = Number(grade);

        if (grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
        }
        });
    }
    get grades() {
        return this.#grades;
    }
    get average() {
        const arr = [...this.#grades];
        arr.sort((a, b) => a - b).shift();
        console.log(arr)

        return Math.floor(arr.reduce((a, b) => a + b) / arr.length);
    }
}

const learner_1 = new Learner();

learner_1.addGrades(55.95, 93.556, 70.4555, 80, 99)

console.log(learner_1.grades)
console.log(learner_1.average)