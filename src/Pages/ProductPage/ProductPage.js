import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductPageStyle.css';
import { useEffect } from "react";

import Title from '../Components/Title/Title';
import Gallery from '../Components/Gallery/Gallery';
import Feature from '../Components/Feature/Feature';
import Section from '../Components/Section/Section';
import Carousel from '../Components/Carousel/TestCarousel';

import deliveryImg from './assets/deliveryImg.svg';
import paymentImg from './assets/paymentImg.svg';
import orgImg from './assets/orgImg.svg';
import planImg from './assets/planImg.svg';

import carousel1 from './carouselImgs/c1.jpg'
import carousel2 from './carouselImgs/c2.jpg'
import carousel3 from './carouselImgs/c3.jpg'
import carousel4 from './carouselImgs/c4.jpg'
import carousel5 from './carouselImgs/c5.jpg'
import carousel6 from './carouselImgs/c6.jpg'
import carousel7 from './carouselImgs/c7.jpg'
import carousel8 from './carouselImgs/c8.jpeg'
import carousel9 from './carouselImgs/c9.jpeg'
import carousel10 from './carouselImgs/c10.jpeg'



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
import g12 from './galleryImgs/g12.jpg';
import g13 from './galleryImgs/g13.jpg';
import g14 from './galleryImgs/g14.jpg';
import CaptionGallery from "../Components/CaptionGallery/CaptionGallery";

export function ProductPage({setCurrentPage}) {
  useEffect(() => {
    setCurrentPage("/products");
  }, [setCurrentPage]);

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
  const gallery1 = [
    { src: g1, width: '34%', height: '275px' },
    { src: g2, width: '64%', height: '275px' },
    { src: g3, width: '56%', height: '676px' },
    { src: g4, width: '42%', height: '676px' }
  ];

  const gallery2 = [
    { src: g5, width: '100%', height: '250px' },
    { src: g6, width: '100%', height: '250px' },
    { src: g7, width: '100%', height: '250px' }
  ];

  const gallery3 = [
    { src: g8, width: '100%', height: '250px' },
    { src: g9, width: '100%', height: '250px' },
    { src: g10, width: '100%', height: '250px' }
  ];

  const gallery4 = [
    { src: g11, width: '34%', height: '275px' },
    { src: g12, width: '64%', height: '275px' },
    { src: g13, width: '56%', height: '676px' },
    { src: g14, width: '42%', height: '676px' }
  ];

  return (
    <div className="AllPage">
      <div className="Products">

        <Title title = "ТОВАРИ"></Title>
        <Carousel images = {carousel}></Carousel>
        <div id="moreCategories">дивитися більше категорій +</div>


        <Title title ="ТОВАРИ С ОДНОГО НАБОРУ" mtop = "80.5px"></Title>
        <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</div>
        <Gallery images={gallery1}/>



        <Title title = "НОВИНКИ"></Title>
        <CaptionGallery images = {gallery2}></CaptionGallery>


        <Title title = "ЗАТИШНI НАБОРИ"></Title>
        <CaptionGallery images = {gallery3}></CaptionGallery>


        <Title title = "ТОВАРИ С ОДНОГО НАБОРУ"></Title>
        <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non. Ut pellentesque ultricies quis quis nec ultricies dolor eu sem. Duis tempus aliquam nisi volutpat vitae etiam turpis. At gravida risus eu pellentesque quis. Sed lobortis tincidunt in purus mauris eu consectetur non molestie. Scelerisque id amet quis eget ullamcorper donec non tempus. Malesuada amet nibh tellus nunc convallis elit ultrices. Felis viverra ac nunc felis. Nec ipsum feugiat faucibus eget mauris. Sed molestie facilisi ipsum ullamcorper aliquet. Nibh sed diam eu tincidunt dignissim porttitor vel blandit.</div>
        <Gallery images={gallery4}/>


        <div id="features">
          <Feature imgSrc={deliveryImg} title="Доставка" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." style={{ borderRadius: '15px 0px 0px 15px' }} />
          <Feature imgSrc={paymentImg} title="Оплата" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." />
          <Feature imgSrc={orgImg} title="Органiзацiя" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." />
          <Feature imgSrc={planImg} title="Планування" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." style={{ borderRadius: '0px 15px 15px 0px' }} />
        </div>


        <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '80px' }}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet 
            sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
            ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.        </Section>
        <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '50.5px' }}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet 
            sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
            ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.        
        </Section>
        <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '50.5px' }}>
        Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis. sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.        </Section>
    </div>

    </div>
    
  );
}

export default ProductPage;
