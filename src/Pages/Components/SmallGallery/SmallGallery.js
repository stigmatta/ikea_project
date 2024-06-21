

import './SmallGalleryStyle.css'

function SmallGallery(props) {
    return (
      <div className='SmallGallery' style={{ width: props.width }}>
        {props.images.map((img, index) => (
          <div key={index}>
            <div style={{ width: img.width, height: img.height, borderRadius: '15px', overflow: 'hidden' }}>
              <img className='small-gallery-image' src={img.src}  alt={`Gallery Image ${index + 1}`} />
            </div>
            {img.showCaption !== 0 && (
              <div className="small-gallery-title">
                Назва роздiлу
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default SmallGallery;




