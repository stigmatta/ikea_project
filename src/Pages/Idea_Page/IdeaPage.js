import React, { useState,useEffect } from 'react';
import './IdeaPage.css'

import Title from "../Components/Title/Title";
import ImportantInfo from "../Components/ImportantInfo/ImportantInfo";
import Carousel from '../Components/Carousel/TestCarousel';
import IdeaCard from '../Components/IdeaCard/IdeaCard';
import Ideas from '../Components/Ideas/Ideas';

import image1 from './assets/image1.png'
import CarouselImage1 from './assets/Carousel_Image1.png'
import CarouselImage2 from './assets/Carousel_Image2.png'
import CarouselImage3 from './assets/Carousel_Image3.png'
import CarouselImage4 from './assets/Carousel_Image4.png'
import CarouselImage5 from './assets/Carousel_Image5.png'
import CarouselImage6 from './assets/Carousel_Image6.png'
import CarouselImage7 from './assets/Carousel_Image7.png'
import IdeaCardImage1 from './assets/IdeaCard_Image1.png'
import IdeaCardImage2 from './assets/IdeaCard_Image2.png'
import IdeaCardImage3 from './assets/IdeaCard_Image3.png'
import IdeaImage1 from './assets/Idea_Image1.png'
import IdeaImage2 from './assets/Idea_Image2.png'
import IdeaImage3 from './assets/Idea_Image3.png'
import IdeaImage4 from './assets/Idea_Image4.png'
import IdeaImage5 from './assets/Idea_Image5.png'
import IdeaImage6 from './assets/Idea_Image6.png'
import IdeaImage7 from './assets/Idea_Image7.png'
import IdeaImage8 from './assets/Idea_Image8.png'
import IdeaImage9 from './assets/Idea_Image9.png'
import IdeaImage10 from './assets/Idea_Image10.png'
import IdeaImage11 from './assets/Idea_Image11.png'
import IdeaImage12 from './assets/Idea_Image12.png'
import IdeaImage13 from './assets/Idea_Image13.png'


const CarouselImages = [
    {src :CarouselImage1, alt: 'CarouselImage1'},
    {src :CarouselImage2, alt: 'CarouselImage2'},
    {src :CarouselImage3, alt: 'CarouselImage3'},
    {src :CarouselImage4, alt: 'CarouselImage4'},
    {src :CarouselImage5, alt: 'CarouselImage5'},
    {src :CarouselImage6, alt: 'CarouselImage6'},
    {src :CarouselImage7, alt: 'CarouselImage7'},
]

const IdeaImages = [
    {src:IdeaImage1,width:"481px",height:"462px"},
    {src:IdeaImage4,width:"481px",height:"596px"},
    {src:IdeaImage7,width:"481px",height:"462px"},
    {src:IdeaImage10,width:"481px",height:"678px"},

    {src:IdeaImage2,width:"481px",height:"298px"},
    {src:IdeaImage5,width:"481px",height:"463px"},
    {src:IdeaImage8,width:"481px",height:"596px"},
    {src:IdeaImage11,width:"481px",height:"477px"},
    {src:IdeaImage13,width:"481px",height:"345px"},

    {src:IdeaImage3,width:"481px",height:"652px"},
    {src:IdeaImage6,width:"481px",height:"550px"},
    {src:IdeaImage9,width:"481px",height:"246px"},
    {src:IdeaImage12,width:"481px",height:"750px"},
]

function IdeaPage({ setCurrentPage })
{
    useEffect(() => {
        setCurrentPage("/ideas");
      }, [setCurrentPage]);
    return(
        <div className='Idea_Page'>

            <Title title = "ІДЕЇ ДЛЯ ОФОРМЛЕННЯ"></Title>
            <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet.</div>

            <Title title = 'ІДЕЇ'></Title>
            <ImportantInfo height = '30.5vw' title = 'ІНФОРМАЦІЯ' src = {image1} description = 'Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra' className = 'Important_Info1'></ImportantInfo>
            <ImportantInfo height = "30.5vw" title = 'ІНФОРМАЦІЯ' src = {image1} description = 'Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra' className = 'Important_Info2'></ImportantInfo>
            <Title title = 'ІДЕЇ ДЛЯ ОФОРМЛЕННЯ'></Title>
            <Carousel images = {CarouselImages} width = "100%"></Carousel>

            <Title title = 'ІДЕЇ'></Title>
            <div className='IdeaCards'>
                <IdeaCard backgroundImage = {IdeaCardImage1} title = 'НАША НОВА КОЛЛЕКЦІЯ'></IdeaCard>
                <a className='Card_Margin'></a>
                <IdeaCard backgroundImage = {IdeaCardImage2} title = 'НАША НОВА КОЛЛЕКЦІЯ'></IdeaCard>
                <a className='Card_Margin'></a>
                <IdeaCard backgroundImage = {IdeaCardImage3} title = 'НАША НОВА КОЛЛЕКЦІЯ'></IdeaCard>
            </div>

            <Title title = 'ІДЕЇ'></Title>
            <Ideas images = {IdeaImages} height = "2260px"></Ideas>
            

            <Title title = 'ІДЕЇ ДЛЯ ОФОРМЛЕННЯ'></Title>
            <Carousel images = {CarouselImages} width = "1480px"></Carousel>
            
        </div>
    );
}

export default IdeaPage;