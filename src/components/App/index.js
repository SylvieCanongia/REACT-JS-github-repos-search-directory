// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

import 'semantic-ui-css/semantic.min.css';

import repos from 'src/assets/data/repos';

// == Import
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

const reposItems = repos.items;
// console.log(reposItems);

// == Component
const App = () => (
  <div className="app">
    <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
    <SearchBar />
    <Message />
    <ReposResults reposItems={reposItems} />
  </div>
);

// == Export
export default App;
