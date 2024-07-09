function expect(val) {
    return {
        toBe: function (compare) {
            return val === compare;
        },
        notToBe: function (compare) {
            return val !== compare;
        }
    };
}

var func1 = function () { return expect(5).toBe(5); };
var func2 = function () { return expect(5).toBe(null); };
var func3 = function () { return expect(5).notToBe(5); };
var func4 = function () { return expect(5).notToBe(4); };

console.log(func1());
console.log(func2());
console.log(func3());
console.log(func4());
