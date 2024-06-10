import React from "react"
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import '../../common_styles/FontAndColors.css'
import '../Main_page/MainPage.css'

import Header from '../Components/Header/header'
import Footer from "../Components/Footer/Footer";


import BlackButton from "../Components/BlackButton/BlackButton"
import TransparentButton from "../Components/TransparentButton/TransparentButton";
import CardOffer from "../Components/CardOffer/CardOffer";
import RectCard from "../Components/RectCard/RectCard";
import Title from "../Components/Title/Title";
import Carousel from "../Components/Carousel/TestCarousel";
import Catalogue from "../Components/Catalogue/Catalogue";
import Gallery from "../Components/Gallery/Gallery";
import Ideas from "../Components/Ideas/Ideas";
import AdditionalSets from "../Components/AdditionalSets/AdditionalSets";
import Important from "../Components/ImportantInfo/ImportantInfo";




import CatalogueButton from './Assets/catalogue_button.svg'
import Offer1 from './Assets/cardOffer1.png'
import Offer2 from './Assets/cardOffer2.png'
import Offer3 from './Assets/cardOffer3.png'
import RectCard1 from './Assets/RectCard1.jpeg'
import RectCard2 from './Assets/RectCard2.jpeg'
import GoBack from '../../assets/GoBack.png'

import RecomCarousel1 from './Assets/RecomCarousel1.png'
import RecomCarousel2 from './Assets/RecomCarousel2.png'
import RecomCarousel3 from './Assets/RecomCarousel3.png'
import RecomCarousel4 from './Assets/RecomCarousel4.png'
import RecomCarousel5 from './Assets/RecomCarousel5.png'
import RecomCarousel6 from './Assets/RecomCarousel6.png'
import RecomCarousel7 from './Assets/RecomCarousel7.png'
import RecomCarousel8 from './Assets/RecomCarousel8.png'
import RecomCarousel9 from './Assets/RecomCarousel9.png'
import RecomCarousel10 from './Assets/RecomCarousel10.png'

import BestSet1 from './Assets/BestSet1.jpeg'
import BestSet2 from './Assets/BestSet2.jpeg'
import BestSet3 from './Assets/BestSet3.jpeg'
import BestSet4 from './Assets/BestSet4.jpeg'
import BestSet5 from './Assets/BestSet5.jpeg'
import BestSet6 from './Assets/BestSet6.jpeg'
import BestSet7 from './Assets/BestSet7.jpeg'
import BestSet8 from './Assets/BestSet8.jpeg'
import BestSet9 from './Assets/BestSet9.jpeg'
import BestSet10 from './Assets/BestSet10.jpeg'

import GalleryNew1 from "./Assets/Gallery1.jpeg";
import GalleryNew2 from "./Assets/Gallery2.jpeg";
import GalleryNew3 from "./Assets/Gallery3.jpeg";
import GalleryNew4 from "./Assets/Gallery4.jpeg";

import Catalogue1 from  "./Assets/Catalogue1.png"
import Catalogue2 from  "./Assets/Catalogue2.png"
import Catalogue3 from  "./Assets/Catalogue3.png"
import Catalogue4 from  "./Assets/Catalogue4.png"
import Catalogue5 from  "./Assets/Catalogue5.png"
import Catalogue6 from  "./Assets/Catalogue6.png"
import Catalogue7 from  "./Assets/Catalogue7.png"
import Catalogue8 from  "./Assets/Catalogue8.png"
import Catalogue9 from  "./Assets/Catalogue9.png"
import Catalogue10 from  "./Assets/Catalogue10.png"
import Catalogue11 from  "./Assets/Catalogue11.png"
import Catalogue12 from  "./Assets/Catalogue12.png"
import Catalogue13 from  "./Assets/Catalogue13.png"
import Catalogue14 from  "./Assets/Catalogue14.png"
import Catalogue15 from  "./Assets/Catalogue15.png"
import Catalogue16 from  "./Assets/Catalogue16.png"
import Catalogue17 from  "./Assets/Catalogue17.png"
import Catalogue18 from  "./Assets/Catalogue18.png"


import IdeaImage1 from './Assets/IdeaImage1.jpeg'
import IdeaImage2 from './Assets/IdeaImage2.jpeg'
import IdeaImage3 from './Assets/IdeaImage3.jpeg'
import IdeaImage4 from './Assets/IdeaImage4.jpeg'
import IdeaImage5 from './Assets/IdeaImage5.jpeg'
import IdeaImage6 from './Assets/IdeaImage6.jpeg'


import AddIdea1 from './Assets/AddIdea1.jpeg'
import AddIdea2 from './Assets/AddIdea2.jpeg'
import AddIdea3 from './Assets/AddIdea3.jpeg'
import AddIdea4 from './Assets/AddIdea4.jpeg'
import AddIdea5 from './Assets/AddIdea5.jpeg'
import AddIdea6 from './Assets/AddIdea6.jpeg'


import ImportantInfo1 from './Assets/Important1.jpeg'







const recomCarouselImages = [

    {src : RecomCarousel1,alt: 'RecomCarousel1'},
    {src : RecomCarousel2,alt: 'RecomCarousel2'},
    {src : RecomCarousel3,alt: 'RecomCarousel3'},
    {src : RecomCarousel4,alt: 'RecomCarousel4'},
    {src : RecomCarousel5,alt: 'RecomCarousel5'},
    {src : RecomCarousel6,alt: 'RecomCarousel6'},
    {src : RecomCarousel7,alt: 'RecomCarousel7'},
    {src : RecomCarousel8,alt: 'RecomCarousel8'},
    {src : RecomCarousel9,alt: 'RecomCarousel9'},
    {src : RecomCarousel10,alt: 'RecomCarousel10'},
]

const bestSetsImages = [
    {src :BestSet1, alt: 'BestSet1'},
    {src :BestSet2, alt: 'BestSet2'},
    {src :BestSet3, alt: 'BestSet3'},
    {src :BestSet4, alt: 'BestSet4'},
    {src :BestSet5, alt: 'BestSet5'},
    {src :BestSet6, alt: 'BestSet6'},
    {src :BestSet7, alt: 'BestSet7'},
    {src :BestSet8, alt: 'BestSet8'},
    {src :BestSet9, alt: 'BestSet9'},
    {src :BestSet10, alt: 'BestSet10'},
]

const galleryNewImages = [
    {src:GalleryNew1,width:"559px",height:"275px"},
    {src:GalleryNew2,width:"901px",height:"275px"},
    {src:GalleryNew3,width:"905px",height:"676px"},
    {src:GalleryNew4,width:"555px",height:"676px"}
]

const catalogueImages = [
    {src:Catalogue1},
    {src:Catalogue2},
    {src:Catalogue3},
    {src:Catalogue4},
    {src:Catalogue5},
    {src:Catalogue6},
    {src:Catalogue7},
    {src:Catalogue8},
    {src:Catalogue9},
    {src:Catalogue10},
    {src:Catalogue11},
    {src:Catalogue12},
    {src:Catalogue13},
    {src:Catalogue14},
    {src:Catalogue15},
    {src:Catalogue16},
    {src:Catalogue17},
    {src:Catalogue18}
]

const ideasImages = [
    {src:IdeaImage1,width:"480px",height:"595px"},
    {src:IdeaImage2,width:"480px",height:"439px"},
    {src:IdeaImage3,width:"480px",height:"439px"},
    {src:IdeaImage4,width:"480px",height:"595px"},
    {src:IdeaImage5,width:"480px",height:"595px"},
    {src:IdeaImage6,width:"480px",height:"439px"}

]

const addIdeaImages = [
    {src:AddIdea1,width:"480px",height:"595px"},
    {src:AddIdea2,width:"480px",height:"439px"},
    {src:AddIdea3,width:"480px",height:"439px"},
    {src:AddIdea4,width:"480px",height:"595px"},
    {src:AddIdea5,width:"480px",height:"595px"},
    {src:AddIdea6,width:"480px",height:"439px"},

]

export default function MainPage({ setCurrentPage })
{

    useEffect(() => {
        setCurrentPage("/");
      }, [setCurrentPage]);

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
                        <TransparentButton type = "button" title = "КАТАЛОГ" width = "211px" height = "60px" img = {CatalogueButton} fontSize = "16px" marginTop = "20px"> </TransparentButton>
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
                <Title title = "ЗНАЙДИ ТЕ, ЩО ШУКАЄШ!"></Title>
                <div style = {{display:"flex",flexDirection:"row",gap:"21px"}}>
                    <RectCard backgroundImage = {RectCard1} title = "НАША НОВА КОЛЕКЦІЯ"></RectCard>
                    <RectCard backgroundImage = {RectCard2} title = "НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ"></RectCard>
                    
                </div>
                <div id = "big-rect-card">
                    <div id = "big-rect-card-image"></div>
                    <div id = "big-rect-card-bar"><img src = {GoBack}></img></div>
                </div>
                
                <Title title = "РЕКОМЕНДАЦІЇ"></Title>
                <Carousel images = {recomCarouselImages} width = "1580px"></Carousel>

                <Title title = "НАЙКРАЩІ НАБОРИ" mtop = "50.5px"></Title>
                <Carousel images = {bestSetsImages} width = "1580px"></Carousel>

                <Title title = "НОВИНКИ"></Title>
                <Gallery images = {galleryNewImages} dir = "row" width="1480px"></Gallery>


                <Title title = "КАТАЛОГ" mbottom = "23.5px"></Title>
                <Catalogue images = {catalogueImages} width = "161px" height = "191px" ></Catalogue>


                <Title title = "ІДЕЇ ДЛЯ ОФОРМЛЕННЯ" mtop = "83.5px"></Title>
                <Ideas images = {ideasImages}></Ideas>


                <Title title = "ДОДАТКОВІ РЕКОМЕНДАЦІЇ"></Title>
                <AdditionalSets title = "НАЗВА НАБОРУ" count = "8"></AdditionalSets>
                <Ideas images = {addIdeaImages}></Ideas>
                <AdditionalSets title = "НАЗВА НАБОРУ" count = "8"></AdditionalSets>


                <Title title = "ВАЖЛИВА ІНФОРМАЦІЯ"></Title>
                <Important height="595px" src = {ImportantInfo1} title = "ВАЖЛИВА ІНФОРМАЦІЯ" description = "Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra"></Important>

            </div>
           
        </div>
    )
}