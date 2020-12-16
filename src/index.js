// var React = require('react');
import  React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
// import script from './script';

// Make the component of the Card
function Card(props) {
   return(
       <>
      <div className="cards">
      <div className="card">
         <img src={props.imgsrc}
          alt="mypic" 
          className="card_img"
          />
          <div className="card_info">
             <span className="card_category">{props.title}</span>
             <h3 className="card_title">{props.sname}</h3>
             <a href={props.links} target="_blank">
             <button>Watch Now</button>
             </a>
             
          </div>
   
      </div>
   
      </div>
      </>
     );
}

ReactDOM.render(
   <> 
<Card sname="Dark"
    imgsrc="https://lh3.googleusercontent.com/proxy/wQbhn6BPNErZ4_YrbLkYxXZ4IT5rx9u7u1hP6mI8Babu183UtsHEESdPsyaNapMtEzeiUKRBcPyMNSwr9_YeosYVUw6_NXLHF22iQmzPlVl8U5iyjJNT6A"
    title="Netflix Original Series"
    links="https://www.netflix.com/pk/title/80100172" />
    </>
   , document.getElementById('root'));
