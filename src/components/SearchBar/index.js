import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

const SearchBar = ({ manageSubmit, search }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <div className="searchBar">
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input
              icon="search"
              iconPosition="left"
              className="searchBar__input"
              placeholder="Rechercher..."
              value={search}
            />
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
};

SearchBar.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
