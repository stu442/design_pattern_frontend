# 프로토타입 패턴

## 경험

JS에서 Prototype은 굉장히 중요한 개념 중 하나라고 생각합니다.
객체 지향을 Prototype을 기반으로 만들었기 때문이죠.

그렇지만 '이론'을 아는 것과, '실전'에 사용하는 일은
전혀 다른 일입니다.

게다가 요즘은 React와 같은 도구들이 보편화 되어 있기때문에,
프로토타입을 직접적으로 사용해볼 경험이 없습니다.

### 레거시 프로젝트

그러나, 현업에서 레거시 프로젝트를 유지보수하며
'프로토타입'을 이용한 코드들을 확인했습니다.

그제서야 아 실무에서는 이런식으로 활용하구나 생각했죠.

## 배운 것

사실상 class는 문법적 설탕(Syntactic Sugar)입니다.
내부적으로는 프로토타입으로 동작하기 때문에 해당 내용을 잘 이해하고 사용하는 것이 중요하다고 생각합니다.

또한, 실습을 통해 프로토타입 체이닝에 대해 체험할 수 있었는데요.
'상속'이라는 개념을 이런식으로 만들었구나, 느낄 수 있는 재미있는 시간이었습니다.

```js
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return "Woof!!";
    }
}

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
```