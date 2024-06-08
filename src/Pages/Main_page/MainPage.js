import React from "react"
import { Link } from 'react-router-dom';

import '../../common_styles/FontAndColors.css'
import '../Main_page/MainPage.css'

import Header from '../Components/Header/header'
import BlackButton from "../Components/BlackButton/BlackButton"
import TransparentButton from "../Components/TransparentButton/TransparentButton";
import CardOffer from "../Components/CardOffer/CardOffer";
import RectCard from "../Components/RectCard/RectCard";


import Catalogue from './Assets/catalogue_button.svg'
import Offer1 from './Assets/cardOffer1.png'
import Offer2 from './Assets/cardOffer2.png'
import Offer3 from './Assets/cardOffer3.png'
import RectCard1 from './Assets/RectCard1.jpeg'
import RectCard2 from './Assets/RectCard2.jpeg'
import RectCard3 from './Assets/BigRectCard.jpeg'
import GoBack from '../../assets/GoBack.png'



export default function MainPage()
{
    return(
        <div className="MainPage">
            <div id = "MainPagePhotoPart">
                <Header></Header>
                <h1 id = "all-for-home">ВСЕ ДЛЯ ДОМУ</h1>  
                <div id = "main-page-220px">
                    <div id = "create-and-catalogue">
                        <Link className='browser-link' to="/registration">
                            <BlackButton id = "main-page-black-button" title = "СТВОРИТИ АКАУНТ ТА ПОЧАТИ!" type = "button" width = "377px" height = '60px'></BlackButton>
                        </Link>
                        <TransparentButton type = "button" title = "КАТАЛОГ" width = "211px" height = "60px" img = {Catalogue} fontSize = "16px" marginTop = "20px"> </TransparentButton>
                    </div>

                    <div id = "card-offers">
                        <CardOffer backgroundImage = {Offer1}  title = "ПОДУШКИ" small = "спальна кімната" price = "12$"></CardOffer>
                        <CardOffer backgroundImage = {Offer2} title = "КОВДРА" small = "спальна кімната" price = "30$"></CardOffer>
                        <CardOffer backgroundImage = {Offer3} title = "ЛІЖКО" small = "спальна кімната" price = "414$"></CardOffer>
                    </div>
                    <div id="under-card-offers">ЛОВИ МОМЕНТ <span style={{fontWeight:"bold"}}> | Знижки до <span style = {{fontWeight:"bolder",fontSize:"16px"}}>60%</span></span> на вибрані категорії товарів!</div>
                </div>
            </div>

            <div id = "MainPageOtherPart">
                <div className="other-part-title">ЗНАЙДИ ТЕ, ЩО ШУКАЄШ!</div>
                <div style = {{display:"flex",flexDirection:"row",gap:"21px"}}>
                    <RectCard backgroundImage = {RectCard1} title = "НАША НОВА КОЛЕКЦІЯ"></RectCard>
                    <RectCard backgroundImage = {RectCard2} title = "НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ"></RectCard>
                    
                </div>
                <div id = "big-rect-card">
                    <div id = "big-rect-card-image"></div>
                    <div id = "big-rect-card-bar"><img src = {GoBack}></img></div>
                </div>

                <div className="other-part-title">РЕКОМЕНДАЦІЇ</div>
                <div className="other-part-title" style = {{marginTop:"50.5px"}}>НАЙКРАЩІ НАБОРИ</div>
                <div className="other-part-title">НОВИНКИ</div>
                <div className="other-part-title" style = {{marginBottom:"23.5px"}} >КАТАЛОГ </div>
                <div className="other-part-title" style = {{marginTop:"83.5px"}}>ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</div>
                <div className="other-part-title">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</div>
                <div className="other-part-title">ВАЖЛИВА ІНФОРМАЦІЯ</div>


                




            </div>

           
        </div>
    )
}