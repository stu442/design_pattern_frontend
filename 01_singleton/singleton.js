let instance;
let counter = 0;

class Counter {

    constructor() {
        if (instance) {
            throw new Error("Counter instance already exists");
        }

        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        counter++;
    }

    decrement() {
        counter--;
    }
}

// 객체를 사용하는 쪽에서 직접 객체 수정할 수 없음
const singletonCounter = Object.freeze(new Counter());
// 장점 : 인스턴스를 하나만 만들도록 강제 -> 메모리 공간 절약 가능
// 안티패턴임 -> JS에서는 Class 없이 객체 만들 수 있음

export default singletonCounter;