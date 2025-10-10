// mixin 패턴, 다른 객체나 클래스의 메서드를 가져와서 재사용하는 패턴 (상속 없이)

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
};

const dogFunctionality = {
    bark: function() { console.log(this.name + ": Woof!"); },
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};

// js에서 class는 프로토타입 기반의 객체이기 때문에,
// 프로토타입에 메서드를 추가하면 모든 인스턴스에 적용된다!!
Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog("Daisy");

pet1.name;
pet1.bark();
pet1.wagTail();
pet1.play();
pet1.walk();
pet1.sleep();

// Q: 만약 name 프로퍼티를 메서드에 추가하고 싶다면?
// bark: function() { console.log(this.name + ": Woof!"); }, 이런 형태로!!

// 화살표 함수의 this는 상위 스코프의 this를 상속한다.
// 일반 함수로 해야, 동적 바인딩이 된다.