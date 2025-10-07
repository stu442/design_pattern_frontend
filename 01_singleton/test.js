import Counter from "./singleton_object";

beforeEach(() => {
    // Reset shared counter state to zero between tests
    while (Counter.getCount() > 0) {
        Counter.decrement();
    }
    while (Counter.getCount() < 0) {
        Counter.increment();
    }
});

test("1번 증가 시 1이 된다.", () => {
    Counter.increment();
    expect(Counter.getCount()).toBe(1);
});

test("3번 증가 시 3이 된다.", () => {
    Counter.increment();
    Counter.increment();
    Counter.increment();
    expect(Counter.getCount()).toBe(3);
});

test("1번 감소 시 -1이 된다.", () => {
    Counter.decrement();
    expect(Counter.getCount()).toBe(-1);
});