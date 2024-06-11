import React from "react";
import './IdeaCard.css';

export default function IdeaCard(props){
    return(
        <div className='IdeaCard'>
            <div className='idea-image-part' style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            <div className='idea-title-part'>
                <span>{props.title}</span> 
            </div>
        </div>
    );
}
