// var React = require('react');
import  React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

// Chanllenge one

ReactDOM.render(
<>
<h1>Netflix</h1>
<p>List of Netflix series</p>
<ol>
  <li>DARK</li>
  <li>DANGER</li>
  <li>CARTOON</li>
  <li>DRAMMA</li>
  <li>FILM</li>
  <li>FILM</li>


</ol>
</>,
   document.getElementById('root')
  );
  // chanllenge two
  const myname = "Zaib Un Nisa";
  const currentdate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  ReactDOM.render(
    <>
    <h1>Hello, My name is {myname}.</h1>
    <p>Current Date is: {currentdate} </p>
    <p>Current Time is: {currentTime} </p>

    </>,
    document.getElementById('root')
  )