// == Import npm
import React, { useState } from 'react';
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

  // State for the error message
  const [errorMessage, setErrorMessage] = useState('');

  // loader indicating if we are waiting for a response
  const [loading, setLoading] = useState(false);

  // show if message is displayed or not
  const [displayMessage, setDisplayMessage] = useState(true);

  const makeSearch = () => {
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setRepos(response.data.items);
        setMessage(`${response.data.total_count} résultat(s) trouvés. Seuls les 30 premiers sont affichés.`);
        setErrorMessage('');
        setDisplayMessage(true);
      })
      .catch((error) => {
        setRepos([]);
        setMessage('');
        setErrorMessage(`Une erreur s'est produite, veuillez relancer votre recherche : ${error}`);
        setDisplayMessage(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hideMessage = () => {
    setDisplayMessage(false);
  };

  // const setSearchValue = (newValue) => {
  //   setSearch(newValue);
  // };

  return (
    <div className="app">
      <h1 className="app__title"><img src={logo} alt="Github logo" /></h1>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      {displayMessage && (
        <Message
          message={message}
          errorMessage={errorMessage}
          hideMessage={hideMessage}
        />
      )}
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
