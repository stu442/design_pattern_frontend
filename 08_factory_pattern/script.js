// 객체 생성을 new가 아닌, 함수에 위임하는 패턴

// 함수에서 바로 객체 리터럴을 반환하기 위해 ()로 감싼다.
const createUser = ({ firstName, lastName, email }) => {
    // private 변수: 함수 스코프 안에 존재하여 외부에서 직접 접근 불가능
    const createdAt = new Date();

    // public한 인터페이스만 객체 리터럴로 반환
    return {
        firstName,
        lastName,
        email,
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        // 클로저를 통해 private 변수인 createdAt에 접근
        getCreationDate() {
            return createdAt.toLocaleString();
        }
    };
}

const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  });
  
  const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"
  });
  
  console.log(user1);
  console.log(user1.fullName());
  console.log(user1.getCreationDate());

  // user1.createdAt에 직접 접근하려고 하면 undefined가 나옴
  console.log('Direct access to createdAt:', user1.createdAt);
  

// 그치만, class가 있는데 factory pattern을 사용하는 이유를 모르겠다.

// new 없이 객체 생성 가능
// private 프로퍼티 정의 가능 => 클로저를 이용
// 복잡한 객체를 만들 때 사용 가능