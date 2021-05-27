import React from 'react';

import searchIcon from 'src/assets/images/search-icon.png';
import './searchBar.scss';

const SearchBar = () => (
  <div className="searchBar">
    <div className="searchBar__search"><img src={searchIcon} className="searchBar__search__icon" alt="Search icon" /> Composant SearchBar</div>
  </div>
);

export default SearchBar;
