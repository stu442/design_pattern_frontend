let count = 0;

const counter = {
    increment() {
        count++;
    },
    decrement() {
        count--;
    },
    getCount() {
        return count;
    }
}

Object.freeze(counter);

export default counter;