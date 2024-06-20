import './Catalogue.css'

export default function Catalogue(props){
    return(
        <div className='Catalogue'>
            {props.images.map((img, index) => (
                <div className = "one-image" style = {{flexBasis:props.width}} key={index} >
                   <img src={img.src} style={{ width: "100%", height: props.height}} alt={`Gallery Image ${index + 1}`} />
                   <div className="image-label">НАЗВА НАБОРУ</div> 
                </div>
            ))}
        </div>
    )
}