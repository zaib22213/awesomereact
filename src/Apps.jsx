import React from 'react';

const SlotM = () => {
    let x = '😊';
    let y = '😊';
    let z = '😊';
    if ((x===y) && (y===z)) {
       return (
           <>
               <div>
                   <h1> {x} {y} {y}</h1>
                <h1>This is matching</h1>
               </div>
           </>
       )
    } else {

    }
}

const Apps = () => {
return (
<>
<h1 className='heading_style'> 
🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot machine game</span>🎰
</h1>
<SlotM />
</>)
};
export default Apps;