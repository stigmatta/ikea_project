import { Component } from 'react';
import React from "react";
import './info.css'
import image1 from './image1.png'


export class Render_info extends Component{
    render(){
        const {image, top, left, name, text} = this.props
    const pos ={
        top: `${top}px`,
        left: `${left}px`,
    };
    return(
        <div className="info_box" style={pos}>
            <img src={image1} className='info_image'></img>
            <div className="info_background">
                <div className="info_text">
                    <a className='info_name'>{name}</a>
                    <br></br>
                    <a>{text}</a>
                </div>
            </div>
        </div>
    );
    };
}