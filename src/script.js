import React from 'react';
import ReactDOM from 'react-dom';
import add, {sub, mul, div} from './Calc';
// Make the simple calculator with Calc file
ReactDOM.render (
    <>
    <ul>
        <li>Sum of two no. is {add(2, 3)} </li>
        <li>Subtraction of two no. is {sub(10,7)} </li>
        <li>Multiplication of two no. is {mul(4,5)} </li>
        <li>Division of two no. is {div(20, 2)} </li>

    </ul>
    </>
    ,document.getElementById('root'));