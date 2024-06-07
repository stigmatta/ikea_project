import React, { Component } from "react"
import image1 from "./assets/image1.png"
import './image_render.css'

class Image extends Component{
    render(){
        const {top, left, src, width, height} = this.props
        const pos ={
            top: `${top}px`,
            left: `${left}px`,
        };
        const size = {
            width: `${width}px`,
            height: `${height}px`
        }

    return(
        <div className="idea_image1" style={pos}>
            <a>test</a>
            <img className="idea_image1" src={src} style={size}></img>
        </div>
    );
    };
}

export class Idea_render extends Component{
    render(){
        const {top_p, left_p, image_objects} = this.props
        const pos ={
            top: `${top_p}px`,
            left: `${left_p}px`
        };
        return(
            <div>
                <a>test</a>
            <div style={pos}>
                {
                    image_objects.map(image => <Image top = {image.top} left = {image.left} src = {image.src} width = {image.width} height = {image.height}></Image>)
                }
            </div>
        </div>
        );
    };
}
