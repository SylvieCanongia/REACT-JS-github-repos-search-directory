// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
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

  // state for the message field
  const [message, setMessage] = useState('Bienvenue ! Vous pouvez saisir votre recherche dans le champ ci-dessus');

  // loader indicating if we are waiting for a response
  const [loading, setLoading] = useState (false);

  useEffect(() => {
    
  }, []);

  const makeSearch = () => {
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setRepos(response.data.items);
        setMessage(`Voici les 30 premiers résultats sur ${response.data.total_count} résultat(s).`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const setSearchValue = (newValue) => {
  //   setSearch(newValue);
  // };

  return (
    <div className="app">
      <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      <Message message={message} />
      <ReposResults reposItems={repos} />
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
