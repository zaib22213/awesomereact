// import Heading from './Heading';

import React, { useState } from "react";

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
    // console.log('Clicked' + count++);
  };
  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={IncNum}>CLICK ME</button>
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
