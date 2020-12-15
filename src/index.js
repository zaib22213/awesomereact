// var React = require('react');
import  React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

// Chanllenge one

// ReactDOM.render(
// <>
// <h1>Netflix</h1>
// <p>List of Netflix series</p>
// <ol>
//   <li>DARK</li>
//   <li>DANGER</li>
//   <li>CARTOON</li>
//   <li>DRAMMA</li>
//   <li>FILM</li>
//   <li>FILM</li>


// </ol>
// </>,
//    document.getElementById('root')
//   );
//   // chanllenge two
//   const myname = "Zaib Un Nisa";
//   const currentdate = new Date().toLocaleDateString();
//   const currentTime = new Date().toLocaleTimeString();

//   ReactDOM.render(
//     <>
//     <h1>Hello, My name is {myname}.</h1>
//     <p>Current Date is: {currentdate} </p>
//     <p>Current Time is: {currentTime} </p>

//     </>,
//     document.getElementById('root')
//   )

//  Practice images and anchar tag
const name = 'zaib';
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/270/300";
const img4 = "https://picsum.photos/300/300";
const link = "https://www.w3schools.com/";

 ReactDOM.render(
   <>
<h1>my name is {name}</h1>
<img src={img1} alt="randomimage" />
<img src={img2} alt="randomimage" />
<img src={img3} alt="randomimage" />
<a href={link}  target="_w3school">
<img src={img4} alt="randomimage" />

</a>

</>,
    document.getElementById('root')
 );