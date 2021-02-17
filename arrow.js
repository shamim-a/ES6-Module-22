/* function add (x, y){
    const result = x + y;
    return result;
}
console.log(add(5,2)); */

/* const add = function (x,y){
    return x+y;
}
console.log(add(3,2));
 */
const doubleIt = num => num*2;
console.log(doubleIt(5))
const doMath = (x, y) => {
    const sum = x+y;
    const sub = x-y;
    const result = sum *sub;
    return result;
}
const result = doMath(5,2);
console.log(result);