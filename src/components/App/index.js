// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';

// == Import
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

// == Component
const App = () => (
  <div className="app">
    <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
    <SearchBar />
    <Message />
    <div>ReposResults</div>
  </div>
);

// == Export
export default App;
