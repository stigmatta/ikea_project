import React from 'react';
import { Dropdown, DropdownItem } from 'react-bootstrap';
import { useState,useEffect} from 'react';

import map from '../../Components/Header/assets/map.svg'
import close from '../../../assets/cross_close.svg'

import SearchBar from '../Searchbar/Searchbar';

import './Dropdown.css'
import ItemLocation from '../ItemLocation/ItemLocation';


function MyDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCloseDropdown = () => {
        setShowDropdown(false);
    };

    const handleToggleDropdown = (isOpen, event, metadata) => {
        setShowDropdown(isOpen);
    };

    const [selectedLocation, setSelectedLocation] = useState('Київ');

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


    const renderLoc = () => {

        if (viewportWidth <= 428) {
            return (
                <>
                    <img src={map}  style = {{width:"16px",height:"20px"}} alt="Map symbol" />
                </>
            );
        } else {
            return (
                <>
                     <a className="text-and-img">
                    <img src={map} className="symbol" alt="Map symbol" />
                    {selectedLocation}
                    </a>
                </>
            );
        }
    };

    

    return (
        <Dropdown id = "dropdown-button" drop="down-centered" show={showDropdown} onToggle={handleToggleDropdown}>
            <Dropdown.Toggle id="location-toggle">
               {renderLoc()}
            </Dropdown.Toggle>

            <Dropdown.Menu id = "dropdown-menu-loc">
                <img
                    src={close}
                    id="close-location-img"
                    onClick={handleCloseDropdown}
                    alt="Close symbol"
                />
                <h1 id = "dropdown-menu-title">ЗНАЙДІТЬ СВІЙ МАГАЗИН</h1>
                <SearchBar width = "381px" height = "50px" right = "15px" bg = "#F5F5F5"></SearchBar>

                <div id = "items">
                     <DropdownItem>
                        <ItemLocation title = "Одеса" onLocationSelect={setSelectedLocation}></ItemLocation>
                    </DropdownItem>

                    <DropdownItem>
                        <ItemLocation title = "Київ" onLocationSelect={setSelectedLocation}></ItemLocation>
                    </DropdownItem>

                    <DropdownItem>
                        <ItemLocation title = "Львів" onLocationSelect={setSelectedLocation}></ItemLocation>
                    </DropdownItem>

                    <DropdownItem>
                        <ItemLocation title = "Кропивницький" onLocationSelect={setSelectedLocation} ></ItemLocation>
                    </DropdownItem>
                </div>

            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MyDropdown;
