import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestCarouselStyle.css";
import arrowNext from '../../../assets/arrowNext.svg'

// const images = [
//   { src: c1, alt: 'Image 1'},
//   { src: c2, alt: 'Image 2'},
//   { src: c3, alt: 'Image 3'},
//   { src: c4, alt: 'Image 4'},
//   { src: c5, alt: 'Image 5'},
//   { src: c6, alt: 'Image 6'},
//   { src: c7, alt: 'Image 7'},
// ];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: `url(${arrowNext}) no-repeat center center`,
        width: '40px',
        height: '40px',
        backgroundSize: 'contain',
        position: 'absolute',
        right: '2%', 
        transform: 'translateY(-50%)',
        top: '50%',
      }}
      onClick={onClick}
    />
  );
};


const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: null,
    
  };

  return (
    <div className="carousel-container" style = {{width:props.width}}>
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <div class="text-overlay">НАЗВА НАБОРУ</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
