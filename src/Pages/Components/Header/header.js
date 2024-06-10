import {React,useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
            <div id="hashtag" class="hashtag">
                <span>#buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно</span>
            </div>
            <div className="header">
                <div className="header-firstpart">
                    <div className="menu">
                        <a>☰</a>
                        <br></br>
                        <a>Меню</a>
                    </div>
                    <div><img src={logo} className="logo"></img></div>
                    <Link className="header-text" to = "/products">Товари</Link>
                    <a className="header-text">Кімнати</a>
                    <Link to ='/design' className="header-text">Дизайн</Link>
                </div>
                <div className="header-secondpart">
                    <a className="text-and-img"><img src={map} className="symbol"></img>Київ</a>
                    <Link to="/login"><a className="text-and-img"><img src={account} className="symbol"></img> Привіт! Увійдіть в систему</a></Link>
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
