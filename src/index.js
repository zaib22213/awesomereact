// var React = require('react');
import  React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
// import script from './script';

ReactDOM.render(
   <>
   <div className="cards">
   <div className="card">
      <img src="https://lh3.googleusercontent.com/proxy/wQbhn6BPNErZ4_YrbLkYxXZ4IT5rx9u7u1hP6mI8Babu183UtsHEESdPsyaNapMtEzeiUKRBcPyMNSwr9_YeosYVUw6_NXLHF22iQmzPlVl8U5iyjJNT6A"
       alt="mypic" 
       className="card_img"
       />
       <div className="card_info">
          <span className="card_category">A Netflix Original Series</span>
          <h3 className="card_title">Dark</h3>
          <a href="https://www.netflix.com/pk/title/80100172" target="_blank"></a>
          <button>Watch Now</button>
       </div>

   </div>

   </div>
   </>
   , document.getElementById('root'));
