// import Heading from './Heading';

import React, { useState } from "react";

// import React from 'react';

const App = () => {
  const state = useState();
  let CurrTime = new Date().toLocaleTimeString();
  const [CTime, setTime] = useState(CurrTime);
  const UpdatedTime = () => {
    CurrTime = new Date().toLocaleTimeString();
    setTime(CurrTime);
    // setCount(count + 1);
    // console.log('Clicked' + count++);
  };
  return (
    <>
      <div>
        <h1> {CTime} </h1>
        <button onClick={UpdatedTime} >GET TIME</button>
      </div>
    </>
  );
};

// import Parag from './Parag';
// import List from './List';

// function App(){
//     return(
//         <>
//         <Heading />
//         <Parag />
//         <List />
//         </>

//     );
// }

export default App;
