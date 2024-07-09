function createHelloWorld(): () => string {
    return function(): string {
        return "Hello World";
    };
};

const f = createHelloWorld();
console.log(f());