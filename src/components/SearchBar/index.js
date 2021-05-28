import React from 'react';
import { Input, Form, Segment } from 'semantic-ui-react';
import './searchBar.scss';

const SearchBar = () => (
  <div className="searchBar">
    <Segment>
      <Form>
        <Form.Field>
          <Input icon="search" iconPosition="left" className="searchBar__input" placeholder="Rechercher..." />
        </Form.Field>
      </Form>
    </Segment>
  </div>
);

export default SearchBar;
