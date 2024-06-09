import './Ideas.css'
import Arrow from '../../../assets/srcArrow.svg'
import React from "react";

export default function Ideas(props){
    return(
        <div className='Ideas'>
            {props.images.map((img) => (
                <div className = "one-idea">
                    <img className='arrow' src = {Arrow}></img>
                    <img src={img.src} style={{ width: img.width, height: img.height, objectFit: 'cover' }} />
                </div>
            ))}
    </div>
  );
}