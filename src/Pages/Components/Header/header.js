import {React,useState} from "react";
import "./Header.css"
import map from './assets/map.svg'
import account from './assets/account.png'
import basket from './assets/basket.svg'
import favorite from './assets/favorite.svg'
import logo from './assets/Union.svg'
import seacrh from './assets/search.svg'

import "../../../common_styles/FontAndColors.css"

export default function Header()
{

    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const handleInputFocus = () => {
        setShowPlaceholder(false);
    };

    const handleInputBlur = () => {
        setShowPlaceholder(true);
    };

    return(
        <div className="header-comp">
            <div className="hashtag">
                #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно
            </div>
            <div className="header">
                <div className="header-firstpart">
                    <div className="menu">
                        <a>☰</a>
                        <br></br>
                        <a>Меню</a>
                    </div>
                    <div><img src={logo} className="logo"></img></div>
                    <a className="header-text">Товари</a>
                    <a className="header-text">Кімнати</a>
                    <a className="header-text">Дизайн</a>
                </div>
                <div className="header-secondpart">
                    <a className="text-and-img"><img src={map} className="symbol"></img>Київ</a>
                    <a className="text-and-img"><img src={account} className="symbol"></img> Привіт! Увійдіть в систему</a>
                    <a className="basket"><img src={basket} className="symbol"></img></a>
                    <a> <img src = {favorite} className="symbol"></img></a>
                </div>
               
            </div>

            <div className="search-div">
                <img className="search-img" src = {seacrh}></img>
                <input type="text"  className="search-bar"
                 onFocus={handleInputFocus}
                 onBlur={handleInputBlur}
                 placeholder={showPlaceholder ? 'Пошук' : ''}
                 ></input>
            </div>
        </div>
    );
}
