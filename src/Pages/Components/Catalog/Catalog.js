import React, { Component } from "react";
import './Catalog.css'
import image1 from './assets/image1.png'

const images1 = [image1, image1, image1, image1, image1, image1,]

class Render_Catalog_Pos extends Component{
    render(){
        const image = this.props
        return(
            <div className="catalog_position_start">
                    <img className="catalog_position_image" src={image}></img>
                    <a className="catalog_position_name">НАЗВА НАБОРУ</a>
            </div>
        );
    }
}


export class Render_catalog extends Component{
    render(){
        const {top, left} = this.props
        const pos={
            top: `${top}px`,
            left: `${left}px`
        }
        return(


            <div className="catalog2" style={pos}>
                <div className='catalog_row'>
                    <div className="catalog_position_start">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                </div>
                <div className='catalog_row'>
                    <div className="catalog_position_start">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                </div>
                <div className='catalog_row'>
                    <div className="catalog_position_start">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                    <div className="catalog_position">
                        <img className="catalog_position_image" src={image1}></img>
                        <a className="catalog_position_name">НАЗВА НАБОРУ</a>
                    </div>
                </div>
            </div>
        );
    };
}