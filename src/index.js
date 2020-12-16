// var React = require('react');
import  React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import "./index.css";

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

// how to use the Inline CSS
// the properties in kabab case converting into the camel case to use it.
// In object the key:"value" is used to assess the peroperty and separated by the comma

const obj = {
   color: "green",
   fontSize: "16",
   textAlign: "center",
   margin: "50px 0",
   textTransform: "capitalize"
 }
 const Div_img = {
   display:" flex",
   alignItems: "center",
   justifyContent: "center"
 }

//  ReactDOM.render(
//    <>
// <h1 style={obj}>my name is {name}</h1>
// <div style={Div_img}>
// <img src={img1} alt="randomimage" />
// <img src={img2} alt="randomimage" />
// <img src={img3} alt="randomimage" />
// <a href={link}  target="_w3school">
// <img src={img4} alt="randomimage" />

// </a>
// </div>

// </>,
//     document.getElementById('root')
//  );


// mini project to show good morning and afternoon and night

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
let cssStyle = {};

if (curDate >= 1 && curDate < 12) {
greeting = "Good Morning";
cssStyle.color='green';
} else if(curDate >= 12 && curDate < 19) {
   greeting = "Good Afternoon";
  cssStyle.color='Orange';


} else {
   greeting = "Good Night";
  cssStyle.color='Black';
   
}

ReactDOM.render(
   <>
   <div>
<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</div>
</>,
   document.getElementById('root'));




