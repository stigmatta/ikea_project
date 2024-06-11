import './ImagesColumn.css'
import Arrow from '../../../assets/srcArrow.svg'
import React from "react";

export default function ImagesColumn(props){
    return(
        <div className='ImageColumn'>
            {props.images.map((img) => (
                <div className = "one-idea">
                    <img className='arrow' src = {Arrow}></img>
                    <img src={img.src} style={{ width: img.width, height: img.height, objectFit: 'cover' }} />
                </div>
            ))}
    </div>
  );
}