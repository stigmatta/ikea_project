import React from "react";
import search from '../Header/assets/search.svg'
import { useState } from "react";

import "./Searchbar.css";

function SearchBar(props) {
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const handleInputFocus = () => {
        setShowPlaceholder(false);
    };

    const handleInputBlur = () => {
        setShowPlaceholder(true);
    };

    return (
        <div id = {props.id} className="search-div" style={{right:props.right}}>
        <img className="search-img" src={search} alt="Search icon"></img>
        <input
            style = {{backgroundColor: props.bg}}
            type="text"
            className="search-bar"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={showPlaceholder ? 'Пошук' : ''}
        ></input>
        </div>
    );
}

export default SearchBar;
