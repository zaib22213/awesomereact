import React from 'react';

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function sub(num1, num2) {
    let subtraction = num1 - num2;
    return subtraction;
}
function mul(num1, num2) {
    let multiplication = num1 * num2;
    return multiplication;
}
function div(num1, num2) {
    let division = num1 / num2;
    return division;
}
export default add;
export {sub, mul, div};