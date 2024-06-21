import React, { useState } from 'react';

import './DesignPage.css'

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../Components/Header/header';
import CardShadow from '../Components/CardShadow/CardShadow';
import AdviceCard from '../Components/AdviceCard/AdviceCard';
import ImportantInfo from '../Components/ImportantInfo/ImportantInfo';
import Title from '../Components/Title/Title';

import CardShadow1 from './assets/shadowCardsImgs/cardShadow1.svg'
import CardShadow2 from './assets/shadowCardsImgs/cardShadow2.svg'
import CardShadow3 from './assets/shadowCardsImgs/cardShadow3.svg'

import AdviceCard1 from './assets/adviceCardsImgs/adviceCard1.jpeg';
import AdviceCard2 from './assets/adviceCardsImgs/adviceCard2.jpeg';
import AdviceCard3 from './assets/adviceCardsImgs/adviceCard3.jpeg';

import Important1 from './assets/importantImgs/ImportantInfo1.jpeg'
import Important2 from './assets/importantImgs/ImportantInfo2.jpeg'
import Important3 from './assets/importantImgs/ImportantInfo3.jpeg'


import carousel1 from './assets/carouselImgs/carousel1.jpeg'
import carousel2 from './assets/carouselImgs/carousel2.jpeg'
import carousel3 from './assets/carouselImgs/carousel3.jpeg'
import carousel4 from './assets/carouselImgs/carousel4.jpeg'
import carousel5 from './assets/carouselImgs/carousel5.jpeg'
import carousel6 from './assets/carouselImgs/carousel6.jpeg'
import carousel7 from './assets/carouselImgs/carousel7.jpeg'
import carousel8 from './assets/carouselImgs/carousel8.jpeg'
import carousel9 from './assets/carouselImgs/carousel9.jpeg'
import carousel10 from './assets/carouselImgs/carousel10.jpeg'
import Carousel from '../Components/Carousel/TestCarousel';





export default function DesignPage({ setCurrentPage })
{

  const carouselArray = [
    {src : carousel1,alt: 'Carousel1'},
    {src : carousel2,alt: 'Carousel2'},
    {src : carousel3,alt: 'Carousel3'},
    {src : carousel4,alt: 'Carousel4'},
    {src : carousel5,alt: 'Carousel5'},
    {src : carousel6,alt: 'Carousel6'},
    {src : carousel7,alt: 'Carousel7'},
    {src : carousel8,alt: 'Carousel8'},
    {src : carousel9,alt: 'Carousel9'},
    {src : carousel10,alt: 'Carousel10'},


  ]

    useEffect(() => {
        setCurrentPage("/design");
      }, [setCurrentPage]);

    return(
        <div className="DesignPage">
            <div id = "DesignBackPart">
                <Header></Header>
                <h1 id = 'CreateDesignTitle'>СТВОРИ ДИЗАЙН СВОЄЇ МРІЇ</h1>

                <div className='shadow-card-div'>
                  <CardShadow image = {CardShadow1} title = "СТВОРИ ДИЗАЙН" text = "habitasse consequat egestas lectus blandit"></CardShadow>
                  <CardShadow image = {CardShadow2} title = "КОМБІНУЙ ІДЕЇ" text = "habitasse consequat egestas"></CardShadow>
                  <CardShadow image = {CardShadow3} title = "РЕЗУЛЬТАТ" text = "Habitasse tus consequat egestas lectus blandit tus"></CardShadow>
                </div>
                <div id = "under-cards-div">
                  <h2>Втілюй свої ідеї</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam </p>
                </div>
             </div>

             <div id = "DesignMainPart">
                <div className='advice-cards-div'>
                  <AdviceCard image = {AdviceCard1} title = "ЯК ОБРАТИ СТИЛЬ" text = "Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. A sed  blandit consequat. A sed placerat sapien amet..."></AdviceCard>
                  <AdviceCard image = {AdviceCard2} title = "НАШІ ПОРАДИ" text = "Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus  placerat sapien amet..."></AdviceCard>
                  <AdviceCard image = {AdviceCard3} title = "ЯК СПЛАНУВАТИ" text = "Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. Habitasse  placerat sapien amet..."></AdviceCard>
                </div>

                <ImportantInfo src = {Important1} height = "289px" title ="ІНФОРМАЦІЯ" description = "Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus Lorem ipsum dolor sit amet consectetur= Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra." ></ImportantInfo>

                <Title title = "ВАРІАНТИ ОФОРМЛЕННЯ"></Title>
                <Carousel images = {carouselArray}></Carousel>

                <Title title = "ПОРАДИ"></Title>
                <ImportantInfo
                    src={Important2}
                    title="ІНФОРМАЦІЯ"
                    description="Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et.

                    Оrnare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra."
                />

                <ImportantInfo src = {Important3} title = "ІНФОРМАЦІЯ" description = 'Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.'></ImportantInfo>

             </div>
        </div>
    )
}

