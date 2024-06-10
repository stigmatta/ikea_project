import './CardShadow.css'
import br from '../../DesignPage/assets/shadowCardsImgs/commonBr.svg'

export default function CardShadow(props){
    return(
        <div className='CardShadow'>
            <img className='specific-image' src = {props.image}></img>
            <img className='br-line' src = {br}></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}