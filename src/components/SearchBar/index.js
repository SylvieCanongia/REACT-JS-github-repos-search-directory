import React from 'react';

import searchIcon from 'src/assets/images/search-icon.png';
import './searchBar.scss';

const SearchBar = () => (
  <div className="searchBar">
    <div className="searchBar__search">
      <input type="search" className="searchBar__input" />
      <div type="button">
        <img src={searchIcon} className="searchBar__icon" alt="Search icon" />
      </div>
    </div>
  </div>
);

export default SearchBar;
