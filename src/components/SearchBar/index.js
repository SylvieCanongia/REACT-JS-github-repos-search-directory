import React from 'react';
import { Input } from 'semantic-ui-react';
import searchIcon from 'src/assets/images/search-icon.png';
import './searchBar.scss';

const SearchBar = () => (
  <div className="searchBar">
    <form className="searchBar__search">
      {/* Semantic ui searchBar */}
      <Input icon="search" iconPosition="left" className="searchBar__input" placeholder="Rechercher..." />
    </form>
  </div>
);

export default SearchBar;

// Code for the search bar without semantic UI
/* <input type="search" className="searchBar__input" />
      <div type="button">
        <img src={searchIcon} className="searchBar__icon" alt="Search icon" />
      </div> */
