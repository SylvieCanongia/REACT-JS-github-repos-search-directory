import React from 'react';
import PropTypes from 'prop-types';

import './reposResults.scss';

const ReposResults = ({ reposItems }) => (
  <div className="reposResults wrapper">
    {reposItems.map((reposItem) => (
      <div className="reposResult" key={reposItem.id}>
        <a href={reposItem.html_url}>
          <div className="reposResult__img"><img src={reposItem.owner.avatar_url} alt="avatar" /></div>
          <h1 className="reposResult__title">{reposItem.name}</h1>
          <h2 className="reposResult__subtitle">{reposItem.owner.login}</h2>
          <p className="reposResult__description">{reposItem.description}</p>
        </a>
      </div>
    ))};
  </div>
);

ReposResults.propTypes = {
  reposItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
