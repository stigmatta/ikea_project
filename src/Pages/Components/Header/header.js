import React from "react";
import "./Header.css"
import logo from './assets/Ikea_logo.svg.png'
import map from './assets/map.png'
import account from './assets/account.png'
import basket from './assets/basket.png'

export function Render_Header()
{
    return(
        <div>
                <div className="menu">
                    <a>☰</a>
                    <br></br>
                    <a>Меню</a>
                </div>
                <div><img src={logo} className="logo"></img></div>
                <a className="positions">Товари</a>
                <a className="rooms">Кімнати</a>
                <a className="design">Дизайн</a>
                <a className="city"><img src={map} className="symbol"></img>Київ</a>
                <a className="login"><img src={account} className="symbol"></img> Привіт! Увійдіть в систему</a>
                <a className="favorite">♡</a>
                <a className="basket"><img src={basket} className="symbol"></img></a>
                <input type="text" className="search_bar"></input>

        </div>
    );
}
