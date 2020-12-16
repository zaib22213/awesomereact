import "./index.css";

import Cards from './Cards';
import React from 'react';
import ReactDOM from 'react-dom';
import sdata from "./LinksNetflix";

ReactDOM.render(
   <> 
   <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
   
<Cards
    sname={sdata[0].sname}
    imgsrc={sdata[0].imgsrc}
    title={sdata[0].title}
    links={sdata[0].links}
    
    />
    
<Cards 
     sname={sdata[1].sname}
    imgsrc={sdata[1].imgsrc}
    title={sdata[1].title}
    links={sdata[1].links}
    
    />
<Cards 
   sname={sdata[2].sname}
    imgsrc={sdata[2].imgsrc}
    title={sdata[2].title}
    links={sdata[2].links}
    />
 <Cards 
   sname={sdata[3].sname}
    imgsrc={sdata[3].imgsrc}
    title={sdata[3].title}
    links={sdata[3].links}
    />
<Cards 
   sname={sdata[4].sname}
    imgsrc={sdata[4].imgsrc}
    title={sdata[4].title}
    links={sdata[4].links}
    />
    </>
   , document.getElementById('root'));
