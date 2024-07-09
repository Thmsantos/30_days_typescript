type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe{
    return{
        toBe: (compare: any) => {
            return val === compare;
        },
        notToBe: (compare: any) => {
            return val !== compare;
        }
    };
}

const func1 = () => expect(5).toBe(5);
const func2 = () => expect(5).toBe(null);
const func3 = () => expect(5).notToBe(5);
const func4 = () => expect(5).notToBe(4);


console.log(func1()); 
console.log(func2()); 
console.log(func3()); 
console.log(func4()); 
