# 싱글턴 패턴

하나의 클래스에 단 하나의 인스턴스만 존재하도록 보장한다.

**장점**
- 메모리 낭비를 줄이고 동일한 객체를 재사용할 수 있다.
- 애플리케이션 어디에서든 동일한 상태와 설정을 공유할 수 있다.

**단점**
- 전역 상태가 늘어나면서 테스트와 유지보수가 어려워질 수 있다.
- 여러 컨텍스트에서 의존하면 결합도가 높아져 대체 구현을 도입하기 힘들다.

## 쓸만한 곳

예전에 페이지네이션을 구축할 때,
이런 패턴을 사용한 적이 있었다.

```js
const Pagination = {
  currentPage: 1,
  pageSize: 10,

  setPage(page) {
    this.currentPage = page;
  },

  getPage() {
    return this.currentPage;
  }
};

Object.freeze(Pagination);

export default Pagination;
```

> 그치만 좋은 패턴은 아니라는 생각이었음. 전역 객체를 사용하는건 여전했다. 그치만, 불변성을 유지할 수 있었다는 부분은 매력적이었음. 페이지네이션이 들어갈 곳이 딱 1곳 이었기 때문에, 적절한 선택이었다고 생각

## 새로 알게 된 것

```js
Object.freeze()
```

객체의 불변성을 보장하는 재미있는 메서드라고 생각한다.

그러나, 얕은 동결로 1단계 프로퍼티까지만 동결이 가능하고, 내부는 수정할 수 있다

```js
const person = {
  name: "Alice",
  address: { city: "Seoul" }
};

Object.freeze(person);

person.name = "Bob"; // ❌ 변경 불가
person.address.city = "Busan"; // ✅ 가능 (내부 객체는 freeze되지 않음)

console.log(person.address.city); // "Busan"

```

깊은 동결을 원하면 재귀적으로 freeze 해야한다.

```js
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (
      typeof obj[prop] === "object" &&
      obj[prop] !== null
    ) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: "Alice",
  address: { city: "Seoul" }
};

deepFreeze(user);

user.address.city = "Busan"; // ❌ 불가
console.log(user.address.city); // "Seoul"

```