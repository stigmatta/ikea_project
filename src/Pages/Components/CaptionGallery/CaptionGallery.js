import React from 'react';
import "./CaptionGallery.css";


function CaptionGallery(props) {
  return (
    <div className='CaptionGallery' style = {{width:props.width}}>
      {props.images.map((img, index) => (
        <div key={index}>
          <div style={{ width: img.width, height: img.height, borderRadius: '15px', backgroundColor: '#D9D9D9', overflow: 'hidden' }}>
            <img src={img.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
          </div>
          <div className="underTitle" style={{ width: '100%', marginTop: '20px' }}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</div>
        </div>
      ))}
    </div>
  );
}

export default CaptionGallery;
