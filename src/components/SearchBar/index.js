import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

const SearchBar = ({ manageSubmit, search, setSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  // reference to the input element of the dom
  const refInput = useRef(null);

  // set focus after first display of the page
  useEffect(() => {
    // console.log(refInput.current);
    refInput.current.focus();
  });

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
              onChange={(event) => {
                setSearch(event.currentTarget.value);
              }}
              ref={refInput}
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
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
