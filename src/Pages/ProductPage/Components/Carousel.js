
const Carousel = () => {
  return (
    <div id="carousel">
      <div id="carousel-inner">
        {Array(5).fill().map((_, index) => (
          <div className="frame" key={index}>
            <div className="frameName">НАЗВА НАБОРУ</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
