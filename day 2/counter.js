function createCounter(n) {
    return function () {
        return n++;
    };
}
var counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
