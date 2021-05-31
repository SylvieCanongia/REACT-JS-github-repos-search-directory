import React from 'react';
import PropTypes from 'prop-types';

import Repo from './Repo';

import './reposResults.scss';

const ReposResults = ({ reposItems }) => (
  <div className="reposResults wrapper">
    {reposItems.map((reposItem) => (
      <div className="reposResult" key={reposItem.id}>
        <a href={reposItem.html_url}>
          <Repo {...reposItem} />
        </a>
      </div>
    ))}
  </div>
);

ReposResults.propTypes = {
  reposItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      html_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
