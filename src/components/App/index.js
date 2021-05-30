// == Import npm
import React, { useState } from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

import 'semantic-ui-css/semantic.min.css';

import reposData from 'src/assets/data/repos';

// == Import
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

// console.log(reposData);

// == Component
const App = () => {
  const [search, setSearch] = useState('');

  const makeSearch = () => {
  console.log('app: makeSearch', search);
  };

  // const setSearchValue = (newValue) => {
  //   setSearch(newValue);
  // };

  return (
    <div className="app">
      <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      <Message />
      <ReposResults reposItems={reposData.items} />
    </div>
  );
};

// == Export
export default App;
