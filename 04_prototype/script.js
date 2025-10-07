class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return "Woof!!";
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Buddy");

console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
console.log(dog1.__proto__);
// 비표준
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
console.log(Object.getPrototypeOf(dog1));
// 표준 메서드 (Object.getPrototypeOf(dog1))
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

// 객체들이 모든 프로퍼티를 가져야 하는 경우
// 프로토타입을 사용하여 중복 없이 공유할 수 있다.

Dog.prototype.play = () => console.log("Playing!!");

dog1.play();
dog2.play();
dog3.play();

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        return "Flying!!";
    }
}

const dog4 = new SuperDog("Daisy");

// 프로토타입 체인, SuperDog 프로토타입에 없다면, Dog 프로토타입에서 찾는다.
console.log("dog4", dog4.bark());
console.log("dog4", dog4.fly());

const dog = {
    bark() {
        return "Woof!!";
    },
}

// prototype으로 쓰일 객체를 인자로 받아 새로운 객체로 만든다.
const pet1 = Object.create(dog);

// pet1은 아무것도 없다.
console.log(pet1);
// output: {}
// 그러나 Prototype에 있는 bark 메서드를 사용할 수 있다.
console.log(pet1.bark());

console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));