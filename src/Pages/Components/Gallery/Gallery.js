import'./GalleryStyle.css'
function Gallery (props){
  return (
    <div className="gallery" id = {props.id} style = {{width:props.width,flexDirection:props.dir,height:props.height}}>
      {props.images.map((img, index) => (
        <div className='gallery-one-image' key={index} style={{ width: img.width, height: img.height, borderRadius: '15px', backgroundColor: '#D9D9D9', overflow: 'hidden' }}>
          <img src={img.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
