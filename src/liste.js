import React from 'react';
import Item from './item';

import './movie.css';

const Liste=({news,remove})=>{
    
    
    return(<div className="movie-list">
        {news.map((el,index)=>{return<Item  key={index}  item={el}   id={index} remove={remove} />})},
        
   {/* {remove.map((el,index)=>{<Item item={el} key={index}  id={index} remove={remove} /> })} */}
        

      
    </div>)
}
export default Liste