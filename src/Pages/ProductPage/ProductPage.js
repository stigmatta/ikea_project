
import './ProductPageStyle.css';
import Title from './Components/Title/Title';
import Gallery from './Components/Gallery/Gallery';
import Feature from './Components/Feature/Feature';
import Section from './Components/Section/Section';
import TestCarousel from './Components/Carousel/TestCarousel';

import deliveryImg from './assets/deliveryImg.svg';
import paymentImg from './assets/paymentImg.svg';
import orgImg from './assets/orgImg.svg';
import planImg from './assets/planImg.svg';

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

export function ProductPage() {
  const gallery1 = [
    { src: g1, width: '28vw', height: '200px' },
    { src: g2, width: '49vw', height: '200px' },
    { src: g3, width: '49vw', height: '450px' },
    { src: g4, width: '28vw', height: '450px' }
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
    { src: g11, width: '28vw', height: '200px' },
    { src: g12, width: '49vw', height: '200px' },
    { src: g13, width: '49vw', height: '450px' },
    { src: g14, width: '28vw', height: '450px' }
  ];

  return (
    <div>
      <Title>ТОВАРИ</Title>
      <TestCarousel />
      <div id="moreCategories">дивитися більше категорій +</div>
      <Title style={{ marginTop: '70px' }}>ТОВАРИ С ОДНОГО НАБОРУ</Title>
      <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</div>
      <Gallery images={gallery1} />
      <Title style={{ marginTop: '80px' }}>НОВИНКИ</Title>
      <div className="gallery" style={{ marginTop: '0' }}>
        {gallery2.map((img, index) => (
          <div style={{ width: '32%' }} key={index}>
            <div style={{ width: img.width, height: img.height, borderRadius: '15px', backgroundColor: '#D9D9D9', overflow: 'hidden' }}>
              <img src={img.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
            </div>
            <div className="underTitle" style={{ width: '23vw', marginTop: '20px' }}>lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</div>
          </div>
        ))}
      </div>
      <Title style={{ marginTop: '80px' }}>ЗАТИШНI НАБОРИ</Title>
      <div className="gallery" style={{ marginTop: '0' }}>
        {gallery3.map((img, index) => (
          <div style={{ width: '32%' }} key={index}>
            <div style={{ width: img.width, height: img.height, borderRadius: '15px', backgroundColor: '#D9D9D9', overflow: 'hidden' }}>
              <img src={img.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
            </div>
            <div className="underTitle" style={{ width: '23vw', marginTop: '20px' }}>lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</div>
          </div>
        ))}
      </div>
      <Title style={{ marginTop: '70px' }}>ТОВАРИ С ОДНОГО НАБОРУ</Title>
      <div className="underTitle">Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.</div>
      <Gallery images={gallery4} />
      <div id="features">
        <Feature imgSrc={deliveryImg} title="Доставка" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." style={{ borderRadius: '15px 0px 0px 15px' }} />
        <Feature imgSrc={paymentImg} title="Оплата" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." />
        <Feature imgSrc={orgImg} title="Органiзацiя" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." />
        <Feature imgSrc={planImg} title="Планування" description="Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non." style={{ borderRadius: '0px 15px 15px 0px' }} />
      </div>
      <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '80px' }}>
        Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
      </Section>
      <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '80px' }}>
        Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverра et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morби turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
      </Section>
      <Section title="НАЗВА РОЗДIЛУ" style={{ marginTop: '80px' }}>
        Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
      </Section>
    </div>
  );
}

export default ProductPage;
