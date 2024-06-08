
import'./GalleryStyle.css'
const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} style={{ width: img.width, height: img.height, borderRadius: '15px', backgroundColor: '#D9D9D9', overflow: 'hidden' }}>
          <img src={img.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
