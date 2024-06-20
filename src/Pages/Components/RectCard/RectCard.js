import React from "react";
import './RectCard.css';
import GoBack from '../../../assets/GoBack.png';

export default function RectCard(props){
    return(
        <div className='RectCard'>
            <div className='image-part' style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            <div className='title-part'>
                <span className="title-span">{props.title}</span> 
                <img src={GoBack} alt="Go Back" /> 
            </div>
        </div>
    );
}
