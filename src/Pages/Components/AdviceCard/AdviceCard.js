import './AdviceCard.css'
export default function AdviceCard(props)
{
    return(
        <div className='AdviceCard'>
            <img src = {props.image}></img>
            <div className='text-part'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            
        </div>
    )
}