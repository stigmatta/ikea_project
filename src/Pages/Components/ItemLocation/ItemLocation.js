import { useState } from "react"

import './ItemLocation.css'
import BlackButton from '../BlackButton/BlackButton'

export default function ItemLocation(props){

    const handleClick = () => {
        props.onLocationSelect(props.title);
    };

    return(
        <div className="one-item" onClick={handleClick}>
            <b>{props.title}</b>
            <span className='address'>
                Адреса (вулиця)
                <br></br>
                Поштовий індекс
            </span>
            <div className="link-and-button">
                <div className='go-to-shop-link'>
                    <a>Перейти на сторінку магазину</a>
                    <a>Час відкриття: 9:00</a>
                </div>
                <BlackButton  type = "button" title = "ОБРАТИ" id = "city-button" ></BlackButton>
            </div>

            <br></br>
            
            
        </div>
    )
  
}
