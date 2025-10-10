// 중재자/미들웨어 패턴은 객체 간의 커뮤니케이션을 중재하는 역할을 하는 객체를 만드는 패턴
// 아래 예제에서는 ChatRoom이 중재자 역할을 함

class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}] : ${message}`);
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");

// 여러가지 객체가 서로 상호작용할 때, 객체 간 결합도를 낮추는데 좋을 것 같음
// 중앙에 관리를 위한 시스템을 하나 둬서 단순화할 수 있음!!