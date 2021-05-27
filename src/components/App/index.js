// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

// == Component
const App = () => (
  <div className="app">
    <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
    <div>SearchBar</div>
    <div>Message</div>
    <div>ReposResults</div>
  </div>
);

// == Export
export default App;
