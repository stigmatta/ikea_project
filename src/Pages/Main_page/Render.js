import React from "react"
import image1 from "./Assets/image1.png"
import image2 from "./Assets/image2.png"
import image3 from "./Assets/image3.png"
import image4 from "./Assets/image4.png"
import image5 from "./Assets/image5.png"
import image6 from "./Assets/image6.png"
import image7 from "./Assets/image7.png"
import image8 from "./Assets/image8.png"
import image9 from "./Assets/image9.png"
import image10 from "./Assets/image10.png"
import image11 from "./Assets/image11.png"
import { Render_Header } from "../Components/Header/header"
import { Render_info } from "../Components/Info/info"
import { Render_catalog } from "../Components/Catalog/Catalog"
import { Idea_render } from "../Components/image_render/image_render"

import './style.css'


const imageObjects = [
    {
        src: image1,
        width: 480,
        height: 595,
        top:6127,
        left:220
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:6127,
        left:720
    },
    {
        src: image1,
        width: 480,
        height: 595,
        top:6127,
        left:1220
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:6742,
        left:220
    },
    {
        src: image1,
        width: 480,
        height: 595,
        top:6586,
        left:720
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:6742,
        left:1220
    }
]

const imageObjects2 = [
    {
        src: image1,
        width: 480,
        height: 595,
        top:4863,
        left:220
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:4863,
        left:720
    },
    {
        src: image1,
        width: 480,
        height: 595,
        top:4863,
        left:1220
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:5478,
        left:220
    },
    {
        src: image1,
        width: 480,
        height: 595,
        top:5322,
        left:720
    },
    {
        src: image1,
        width: 480,
        height: 439,
        top:5478,
        left:1220
    }
]

export function Main_Page()
{
    return(
        <div>
            <Render_Header></Render_Header>
            <div className="main">
                <img src={image1} className="main_image"></img>
                <a className="main_text">ВСЕ ДЛЯ ДОМУ</a>
                <button className="create_account">СТВОРИТИ АКАУНТ ТА ПОЧАТИ!</button>
                <div className="catalog">КАТАЛОГ</div>
                <div className="top">
                    <div className="top_position">
                        <div className="top_mark">TOP</div>
                        <img src={image2} className="top_image"></img>
                        <div className="top_background">
                        <div className="top_description">
                            <a className="name">ПОДУШКИ</a>
                            <br></br>
                            <a className="type">спальна кімната...</a>
                            <p className="price">12$</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="top_position">
                    <div className="top_mark">TOP</div>
                        <img src={image3} className="top_image"></img>
                        <div className="top_background">
                        <div className="top_description">
                            <a className="name">КОВДРА</a>
                            <br></br>
                            <a className="type">спальна кімната...</a>
                            <p className="price">30$</p>
                        </div>
                        </div>
                    </div>
                    <div className="top_position">
                    <div className="top_mark">TOP</div>
                        <img src={image4} className="top_image"></img>
                        <div className="top_background">
                        <div className="top_description">
                            <a className="name">ЛІЖКО</a>
                            <br></br>
                            <a className="type">спальна кімната...</a>
                            <p className="price">414$</p>
                        </div>
                        </div>
                    </div>
                </div>
                <a className="discount">ЛОВИ МОМЕНТ | <a className="discount_bold">Знижки до 60%</a> на вибрані категорії товарів!</a>
            </div>
            <div>
                <a className="name1">ЗНАЙДИ ТЕ, ЩО ШУКАЕШ!</a>
                <div className="new_collection">
                    <img className="new_collection_image" src={image5}></img>
                    <div className="new_collection_name">НАША НОВА КОЛЛЕКЦІЯ</div>
                </div>

                <div className="best">
                    <img className="best_image" src={image6}></img>
                    <div className="best_name">НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</div>
                </div>

                <div className="couch">
                    <img className="couch_image" src={image7}></img>
                    <div className="couch_name">Temp</div>
                </div>
            </div>
            <div>
                    <a className="new_name">НОВИНКИ</a>
                    <img className="new_image1" src={image8}></img>
                    <img className="new_image2" src={image9}></img>
                    <img className="new_image3" src={image10}></img>
                    <img className="new_image4" src={image11}></img>
            </div>

            
            <a className="catalog2_name">КАТАЛОГ</a>
            <Render_catalog top = {4093} left = {209}></Render_catalog>
            <div>
                <a className="idea_name">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</a>
                <Idea_render top_p={0} left_p={0} image_objects = {imageObjects2}></Idea_render>
            </div>
            <a className="info_main_name">ВАЖЛИВА ІНФОРМАЦІЯ</a>
            <Render_info top = {7391} left = {220} text = {'test test test'} name = {'test'}></Render_info>
            <a className="recomendation_name">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</a>
            <div className="button_row1">
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
            </div>
            <Idea_render top_p={0} left_p={0} image_objects = {imageObjects}></Idea_render>
                <div className="button_row1">
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
                <div className="recomendation_button">НАЗВА НАБОРУ</div>
            </div>
        </div>
    );
}