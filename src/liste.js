import React from 'react';
import Item from './item';
import './movie.css';
const Liste=({news})=>{
    return(<div className="movie-list">
        {news.map((el,index)=>{return<Item  key={index}  item={el}  />})}
    </div>)
}
export default Liste