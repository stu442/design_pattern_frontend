// Flyweight 패턴: 유사한 객체를 대량으로 생성 시 메모리를 절약
// 책의 고유 정보(Intrinsic)를 담는 Flyweight 객체를 관리합니다.
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Flyweight 객체들을 캐싱할 저장소 (Map 사용)
const bookFlyweights = new Map();

// Flyweight 객체를 생성하거나, 있으면 반환하는 팩토리 함수
const createBook = (title, author, isbn) => {
    if (bookFlyweights.has(isbn)) {
        return bookFlyweights.get(isbn);
    }

    const book = new Book(title, author, isbn);
    bookFlyweights.set(isbn, book);
    return book;
};


// --- 클라이언트 코드 ---
// 실제 서점의 책 목록 (Extrinsic 상태 포함)
const bookList = [];

// 책을 목록에 추가하는 함수
const addBook = (title, author, isbn, availability, sales) => {
    // createBook을 통해 Flyweight 객체를 가져오거나 생성
    const flyweight = createBook(title, author, isbn);

    // Flyweight(공유 정보)와 Extrinsic(개별 정보)를 조합
    const book = {
        ...flyweight,
        availability,
        sales,
    };

    bookList.push(book);
    return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

// 총 5권의 책을 추가했지만,
console.log("Total amount of copies: ", bookList.length);
// 실제 생성된 고유한 책(Flyweight) 객체는 3개뿐입니다.
console.log("Total amount of unique books: ", bookFlyweights.size);
