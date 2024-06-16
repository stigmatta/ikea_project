import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import account from './assets/account.png';
import basket from './assets/basket.svg';
import favorite from './assets/favorite.svg';
import logo from './assets/Union.svg';
import menu from '../../../assets/menu.svg';

import "../../../common_styles/FontAndColors.css";
import SearchBar from "../Searchbar/Searchbar";
import MyDropdown from "../DropdownLocation/Dropdown";

export default function Header() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth); 

    const handleResize = () => {
        setViewportWidth(document.documentElement.clientWidth); 
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    const renderHeader = () => {

        if (viewportWidth <= 428) {
            return (
                <>
                    <div className="header">
                            <div className="logo-container">
                                <img src={logo} className="logo" alt="Logo" />
                            </div>

                            <div className="small-icons-header">
                                <MyDropdown />
                                <Link className="small-link" to="/login">
                                    <img src={account} style={{width:"20px", height:"20px"}} alt="Account" /> 
                                </Link>
                                <Link className="small-link" to="/stash">
                                    <img src={basket} style = {{width:"20px", height:"18px"}} alt="Basket" />
                                </Link>
                                <Link className="small-link" to="/wishlist">
                                    <img src={favorite} style = {{width:"20px", height:"20px"}} alt="Favorite" />
                                </Link>
                                <DropdownButton
                                    id={`dropdown-button-drop`}
                                    drop="down"
                                    title={
                                        <div className="menu">
                                            <img src={menu} alt="Menu" />
                                        </div>
                                    }
                                >
                                    <Dropdown.Item><Link to='/' className="one-dropdown-item">ГОЛОВНА</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/products' className="one-dropdown-item">ТОВАРИ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/rooms' className="one-dropdown-item">КІМНАТИ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/ideas' className="one-dropdown-item">ІДЕЇ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/design' className="one-dropdown-item">ДИЗАЙН</Link></Dropdown.Item>
                                </DropdownButton>


                            </div>
                       
                    </div>
                    <SearchBar id = "header-searchbar" width="357px" height="50px" />

                </>
            );
        } else {
            return (
                <>
                    <div className="header">
                        <div className="header-firstpart">
                            <div className="menu">
                                <DropdownButton
                                    id={`dropdown-button-drop`}
                                    drop="down"
                                    title={
                                        <div className="menu">
                                            <img src={menu} alt="Menu" />
                                            <a>Меню</a>
                                        </div>
                                    }
                                >
                                    <Dropdown.Item><Link to='/' className="one-dropdown-item">ГОЛОВНА</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/products' className="one-dropdown-item">ТОВАРИ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/rooms' className="one-dropdown-item">КІМНАТИ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/ideas' className="one-dropdown-item">ІДЕЇ</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/design' className="one-dropdown-item">ДИЗАЙН</Link></Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="logo-container">
                                <img src={logo} className="logo" alt="Logo" />
                            </div>
                            <div className="header-text-links-div">
                                <Link className="header-text" to="/products">Товари</Link>
                                <Link className="header-text" to="/ideas">Ідеї</Link>
                                <Link className="header-text" to="/rooms">Кімнати</Link>
                                <Link to='/design' className="header-text">Дизайн</Link>
                            </div>
                        </div>
                        <div className="header-secondpart">
                            <MyDropdown />
                            <Link to="/login" className="text-and-img">
                                <img src={account} className="symbol" alt="Account" /> Привіт! Увійдіть в систему
                            </Link>
                            <Link className="basket" to="/stash"><img src={basket} className="symbol" alt="Basket" /></Link>
                            <Link to="/wishlist"><img src={favorite} className="symbol" alt="Favorite" /></Link>
                        </div>
                    </div>

                    <SearchBar width="1271px" height="50px" />

                </>
            );
        }
    };
    

    return (
        <div className="header-comp">
            <div id="hashtag" className="hashtag">
                <span>#buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно</span>
            </div>
            {renderHeader()}
        </div>
    );
}
