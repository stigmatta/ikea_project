import './Ideas.css'
import Arrow from '../../../assets/srcArrow.svg'
import React from "react";

export default function Ideas(props){
    return(
        <div className='Ideas' style={{height:props.height}}>
            {props.images.map((img) => (
                <div className = "one-idea" style={{ width: img.width, height: img.height}}>
                    <img className='arrow' src = {Arrow}></img>
                    <img src={img.src} style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                </div>
            ))}
    </div>
  );
}