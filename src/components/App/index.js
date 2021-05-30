// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

// import reposData from 'src/assets/data/repos';

// == Import
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// console.log(reposData);

// == Component
const App = () => {
  // state for the input value for the search
  const [search, setSearch] = useState('');

  // state for the list of repos
  const [repos, setRepos] = useState([]);

  const makeSearch = () => {
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setRepos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const setSearchValue = (newValue) => {
  //   setSearch(newValue);
  // };

  return (
    <div className="app">
      <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      <Message />
      <ReposResults reposItems={repos} />
    </div>
  );
};

// == Export
export default App;
