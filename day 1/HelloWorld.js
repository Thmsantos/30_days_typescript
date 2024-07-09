function createHelloWorld() {
    return function () {
        return "Hello World";
    };
}
;
var f = createHelloWorld();
console.log(f());
