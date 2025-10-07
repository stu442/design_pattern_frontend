const person = {
    name: "John",
    age: 42,
    nationality: "Korean",
}

// 두 번째 인자는 핸들러를 의미한다.
// const personProxy = new Proxy(person, {})

// const personProxy = new Proxy(person, {
//     get: (obj, prop) => {
//         console.log(`The value of ${prop} is ${obj[prop]}`)
//     },

//     set: (obj, prop, value) => {
//         console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
//         obj[prop] = value;
//         return true;
//     }
// })

// personProxy.name;
// personProxy.age = 43;

// 유효성 검사에 유용하다

// const personProxy = new Proxy(person, {
//     get: (obj, prop) => {
//         if(!obj[prop]) {
//             console.error(`No ${prop} found in person object`)
//         } else {
//             console.log(`The value of ${prop} is ${obj[prop]}`)
//         }
        
//     },

//     set: (obj, prop, value) => {
//         if(prop === "age" && typeof value !== "number") {
//             console.error("Age must be a number")
//             return false;
//         } else if (prop === 'name' && value.length < 2) {
//             console.error("Name must be at least 2 characters long")
//             return false;
//         } else {
//             console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
//             obj[prop] = value;
//             return true;
//         }
//     }
// })

// personProxy.nonExistentProperty;
// personProxy.age = "44";
// personProxy.name = "";

// 이제는 Reflect를 사용하는 것이 더 좋다

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      return Reflect.set(obj, prop, value);
    }
  });
  
  personProxy.name;
  personProxy.age = 43;