

import './SmallGalleryStyle.css'

function SmallGallery(props) {
    return (
      <div className='SmallGallery' style={{ width: props.width }}>
        {props.images.map((img, index) => (
          <div key={index}>
            <div style={{ width: img.width, height: img.height, borderRadius: '15px', overflow: 'hidden' }}>
              <img src={img.src} style={{ width: '194px', height: '93px', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
            </div>
            {img.showCaption !== 0 && (
              <div className="underTitle" style={{ width: '194px',marginTop:"5px" }}>
                Назва роздiлу
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default SmallGallery;




