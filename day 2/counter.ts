function createCounter(n: number): () => number {
    return function(): number {
        return n++;
    };
}

const counter = createCounter(10);
console.log(counter()); 
console.log(counter());
console.log(counter()); 

