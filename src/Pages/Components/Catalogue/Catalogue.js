import './Catalogue.css'

export default function Catalogue(props){
    return(
        <div className='Catalogue'>
            {props.images.map((img, index) => (
                <div className = "one-image" key={index} >
                   <img src={img.src} style={{ width: props.width, height: props.height}} alt={`Gallery Image ${index + 1}`} />
                   <div className="image-label">НАЗВА НАБОРУ</div> 
                </div>
            ))}
        </div>
    )
}