import React, { PropTypes } from 'react';

import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const Searchbar = (props) => {
  return (
    <form onSubmit={props.onSearch}>
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            value={props.value}
            placeholder="Enter search query"
            onChange={props.onChange}
          />
          <InputGroup.Button>
            <Button type='submit'>Search!</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </form>
  )
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Searchbar;