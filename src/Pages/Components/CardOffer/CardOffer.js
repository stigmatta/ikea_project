import './CardOffer.css'

export default function CardOffer(props)
{
    return(
        <div className="CardOffer">
            <div className='top-for-offer'>TOP</div>
           <div className="card-offer-img" style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            <div className="card-offer-description">
                <div className="card-offer-title">{props.title}</div>
                <div className="card-offer-small">{props.small}</div>
                <div className="card-offer-price">{props.price}</div>
            </div>
        </div>
    )
}