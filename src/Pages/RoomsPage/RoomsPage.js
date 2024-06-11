import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RoomsPageStyle.css';

import Header from "../Components/Header/header";
import Title from '../Components/Title/Title';
import Gallery from '../Components/Gallery/Gallery';
import Section from '../Components/Section/Section';
import Carousel from '../Components/Carousel/TestCarousel';
import Important from "../Components/ImportantInfo/ImportantInfo";
import Catalogue from "../Components/Catalogue/Catalogue";
import SmallGallery from "../Components/SmallGallery/SmallGallery";
import ProductGallery from "../Components/ProductGallery/ProductGallery";

import carousel1 from './carouselImgs/c1.jpg'
import carousel2 from './carouselImgs/c2.jpg'
import carousel3 from './carouselImgs/c3.jpg'
import carousel4 from './carouselImgs/c4.jpg'
import carousel5 from './carouselImgs/c5.jpg'
import carousel6 from './carouselImgs/c6.jpg'
import carousel7 from './carouselImgs/c7.jpg'
import carousel8 from './carouselImgs/c8.jpg'
import carousel9 from './carouselImgs/c9.jpg'
import carousel10 from './carouselImgs/c10.jpg'

import Catalogue1 from  "../../assets/catalogueImgs/Catalogue1.png"
import Catalogue2 from  "../../assets/catalogueImgs/Catalogue2.png"
import Catalogue3 from  "../../assets/catalogueImgs/Catalogue3.png"
import Catalogue4 from  "../../assets/catalogueImgs/Catalogue4.png"
import Catalogue5 from  "../../assets/catalogueImgs/Catalogue5.png"
import Catalogue6 from  "../../assets/catalogueImgs/Catalogue6.png"
import Catalogue7 from  "../../assets/catalogueImgs/Catalogue7.png"
import Catalogue8 from  "../../assets/catalogueImgs/Catalogue8.png"
import Catalogue9 from  "../../assets/catalogueImgs/Catalogue9.png"
import Catalogue10 from  "../../assets/catalogueImgs/Catalogue10.png"
import Catalogue11 from  "../../assets/catalogueImgs/Catalogue11.png"
import Catalogue12 from  "../../assets/catalogueImgs/Catalogue12.png"
import Catalogue13 from  "../../assets/catalogueImgs/Catalogue13.png"
import Catalogue14 from  "../../assets/catalogueImgs/Catalogue14.png"
import Catalogue15 from  "../../assets/catalogueImgs/Catalogue15.png"
import Catalogue16 from  "../../assets/catalogueImgs/Catalogue16.png"
import Catalogue17 from  "../../assets/catalogueImgs/Catalogue17.png"
import Catalogue18 from  "../../assets/catalogueImgs/Catalogue18.png"

import g1 from './galleryImgs/g1.jpg';
import g2 from './galleryImgs/g2.jpg';
import g3 from './galleryImgs/g3.jpg';
import g4 from './galleryImgs/g4.jpg';
import g5 from './galleryImgs/g5.jpg';
import g6 from './galleryImgs/g6.jpg';
import g7 from './galleryImgs/g7.jpg';
import g8 from './galleryImgs/g8.jpg';
import g9 from './galleryImgs/g9.jpg';
import g10 from './galleryImgs/g10.jpg';
import g11 from './galleryImgs/g11.jpg';

import sg1 from './smallGalleryImgs/sg1.jpg'
import sg2 from './smallGalleryImgs/sg2.jpg'
import sg3 from './smallGalleryImgs/sg3.jpg'
import sg4 from './smallGalleryImgs/sg4.jpg'
import sg5 from './smallGalleryImgs/sg5.jpg'
import sg6 from './smallGalleryImgs/sg6.jpg'
import sg7 from './smallGalleryImgs/sg7.jpg'
import sg8 from './smallGalleryImgs/sg8.jpg'
import sg9 from './smallGalleryImgs/sg9.jpg'
import sg10 from './smallGalleryImgs/sg10.jpg'
import sg11 from './smallGalleryImgs/sg11.jpg'
import sg12 from './smallGalleryImgs/sg12.jpg'
import sg13 from './smallGalleryImgs/sg13.jpg'
import sg14 from './smallGalleryImgs/sg14.jpg'

import i1 from './importanImgs/i1.jpg'

import p1 from './productImgs/p1.jpg'

import CaptionGallery from "../Components/CaptionGallery/CaptionGallery";

export function RoomsPage() {

  const carousel = [
    {src:carousel1},
    {src:carousel2},
    {src:carousel3},
    {src:carousel4},
    {src:carousel5},
    {src:carousel6},
    {src:carousel7},
    {src:carousel8},
    {src:carousel9},
    {src:carousel10}

  ]

  const smallGallery1 = [
    {src:sg1},
    {src:sg2},
    {src:sg3},
    {src:sg4},
    {src:sg5},
    {src:sg6},
    {src:sg7}

  ]

  const smallGallery2 = [
    {src:sg8},
    {src:sg9},
    {src:sg10},
    {src:sg11},
    {src:sg12},
    {src:sg13},
    {src:sg14}

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
  const gallery1 = [
    { src: g1, width: '559px', height: '275px' },
    { src: g2, width: '901px', height: '275px' },
    { src: g3, width: '905px', height: '676px' },
    { src: g4, width: '555px', height: '676px' }
  ];

  const gallery2 = [
    { src: g5, width: '559px', height: '275px' },
    { src: g6, width: '901px', height: '275px' },
    { src: g7, width: '905px', height: '676px' },
    { src: g8, width: '555px', height: '676px' }
  ];


  const gallery3 = [
    { src: g9, width: '100%', height: '250px',showCaption: 0 },
    { src: g10, width: '100%', height: '250px',showCaption: 0},
    { src: g11, width: '100%', height: '250px',showCaption: 0  },
  ];

  const products = [
    { image: p1, name: 'НАЗВА ТОВАРУ', description: 'Опис товару опис товару опис товару', price: "001" },
    { image: p1, name: 'НАЗВА ТОВАРУ', description: 'Опис товару опис товару опис товару', price: "001" },
    { image: p1, name: 'НАЗВА ТОВАРУ', description: 'Опис товару опис товару опис товару', price: "001" },
    { image: p1, name: 'НАЗВА ТОВАРУ', description: 'Опис товару опис товару опис товару', price: "001" },
  ];

  return (
    <div className="AllPage">
      <div className="Products">

        <Title title = "КIМНАТИ"></Title>
        <Carousel images = {carousel}></Carousel>
        <SmallGallery width="100%" images={smallGallery1} />
        <Title title = "ТОВАРИ"></Title>
        <ProductGallery products={products} />
        <Title title = "ІНФОРМАЦІЯ"></Title>
        <Important src = {i1} title = "ІНФОРМАЦІЯ" description = "Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra"></Important>
        <SmallGallery width="100%" images={smallGallery2} />
        <Title title = "КАТАЛОГ" mbottom = "23.5px"></Title>
                <Catalogue images = {catalogueImages} width = "159px" height = "155px"></Catalogue>


        <Title title ="IДЕЇ ДЛЯ ОФОРМЛЕННЯ" mtop = "80.5px"></Title>
        <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</div>
        <Gallery images={gallery1} width = "1480px" />

        <Title title ="IДЕЇ ДЛЯ ОФОРМЛЕННЯ" mtop = "80.5px"></Title>
        <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</div>
        <Gallery images={gallery2} width = "1480px" />




        <Title title = "ЗАТИШНI НАБОРИ"></Title>
        <CaptionGallery images = {gallery3} ></CaptionGallery>





        <Section title="ДОДАТКОВО" style={{ marginTop: '80px' }}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet 
            sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
            ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.        </Section>
    </div>

    </div>
    
  );
}

export default RoomsPage;
